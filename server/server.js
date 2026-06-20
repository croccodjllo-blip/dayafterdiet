require("dotenv").config();

const express = require("express");
const cors = require("cors");
const Stripe = require("stripe");
const store = require("./subscriptions-store");

const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
const stripePriceId = process.env.STRIPE_PRICE_ID;
const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
const frontendUrl = (process.env.FRONTEND_URL || "http://localhost:5500").replace(/\/$/, "");
const port = Number(process.env.PORT || 4242);

if (!stripeSecretKey) {
  console.error("Missing STRIPE_SECRET_KEY in server/.env");
  process.exit(1);
}

const stripe = new Stripe(stripeSecretKey);
const app = express();

const ACTIVE_STATUSES = new Set(["active", "trialing", "past_due"]);

function subscriptionToPayload(subscription, userId) {
  const customerId =
    typeof subscription.customer === "string" ? subscription.customer : subscription.customer?.id;
  const isActive = ACTIVE_STATUSES.has(subscription.status);
  const expiresAt = subscription.current_period_end
    ? new Date(subscription.current_period_end * 1000).toISOString()
    : null;

  return {
    userId,
    active: isActive,
    subscriptionPlan: isActive ? "monthly" : null,
    subscriptionExpiresAt: isActive ? expiresAt : null,
    stripeCustomerId: customerId || null,
    stripeSubscriptionId: subscription.id,
    stripeStatus: subscription.status,
  };
}

async function syncSubscriptionRecord(subscription, userIdHint) {
  const metadataUserId = subscription.metadata?.userId || userIdHint;
  let record = metadataUserId ? store.getByUserId(metadataUserId) : null;
  if (!record) record = store.findByStripeSubscriptionId(subscription.id);
  if (!record) record = store.findByStripeCustomerId(subscription.customer);
  if (!record?.userId && !metadataUserId) return null;

  const userId = record?.userId || metadataUserId;
  const payload = subscriptionToPayload(subscription, userId);
  store.upsert(userId, {
    email: record?.email || null,
    stripeCustomerId: payload.stripeCustomerId,
    stripeSubscriptionId: payload.stripeSubscriptionId,
    stripeStatus: payload.stripeStatus,
    subscriptionPlan: payload.subscriptionPlan,
    subscriptionExpiresAt: payload.subscriptionExpiresAt,
  });
  return payload;
}

async function refreshSubscriptionFromStripe(userId) {
  const record = store.getByUserId(userId);
  if (!record?.stripeSubscriptionId) {
    return {
      userId,
      active: Boolean(record?.subscriptionPlan && record?.subscriptionExpiresAt),
      subscriptionPlan: record?.subscriptionPlan || null,
      subscriptionExpiresAt: record?.subscriptionExpiresAt || null,
      stripeCustomerId: record?.stripeCustomerId || null,
      stripeSubscriptionId: record?.stripeSubscriptionId || null,
      stripeStatus: record?.stripeStatus || null,
    };
  }

  const subscription = await stripe.subscriptions.retrieve(record.stripeSubscriptionId);
  return syncSubscriptionRecord(subscription, userId);
}

app.post(
  "/api/webhook",
  express.raw({ type: "application/json" }),
  async (req, res) => {
    if (!webhookSecret) {
      return res.status(503).send("Webhook secret not configured");
    }

    let event;
    try {
      const signature = req.headers["stripe-signature"];
      event = stripe.webhooks.constructEvent(req.body, signature, webhookSecret);
    } catch (error) {
      console.error("Webhook signature verification failed:", error.message);
      return res.status(400).send(`Webhook Error: ${error.message}`);
    }

    try {
      switch (event.type) {
        case "checkout.session.completed": {
          const session = event.data.object;
          if (session.mode !== "subscription" || !session.subscription) break;
          const subscription = await stripe.subscriptions.retrieve(String(session.subscription));
          await syncSubscriptionRecord(subscription, session.metadata?.userId);
          break;
        }
        case "customer.subscription.updated":
        case "customer.subscription.deleted": {
          await syncSubscriptionRecord(event.data.object);
          break;
        }
        default:
          break;
      }
      res.json({ received: true });
    } catch (error) {
      console.error("Webhook handler error:", error);
      res.status(500).json({ error: "webhook_handler_failed" });
    }
  }
);

app.use(
  cors({
    origin(origin, callback) {
      if (!origin || origin === frontendUrl || origin.startsWith(frontendUrl)) {
        callback(null, true);
        return;
      }
      callback(null, true);
    },
  })
);
app.use(express.json());

app.get("/api/health", (_req, res) => {
  res.json({
    ok: true,
    stripe: Boolean(stripeSecretKey),
    priceConfigured: Boolean(stripePriceId),
  });
});

app.post("/api/create-checkout-session", async (req, res) => {
  try {
    const { userId, email, plan, locale } = req.body || {};
    if (!userId || !email) {
      return res.status(400).json({ error: "missing_user" });
    }
    if (plan !== "monthly") {
      return res.status(400).json({ error: "invalid_plan" });
    }
    if (!stripePriceId) {
      return res.status(503).json({ error: "price_not_configured" });
    }

    const existing = store.getByUserId(userId);
    let customerId = existing?.stripeCustomerId;

    if (!customerId) {
      const customer = await stripe.customers.create({
        email: String(email).trim().toLowerCase(),
        metadata: { userId },
      });
      customerId = customer.id;
      store.upsert(userId, {
        email: String(email).trim().toLowerCase(),
        stripeCustomerId: customerId,
      });
    }

    const localeMap = { it: "it", en: "en", es: "es" };
    const session = await stripe.checkout.sessions.create({
      customer: customerId,
      mode: "subscription",
      line_items: [{ price: stripePriceId, quantity: 1 }],
      success_url: `${frontendUrl}/login.html?checkout=success&session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${frontendUrl}/login.html?checkout=cancelled`,
      locale: localeMap[locale] || "auto",
      metadata: { userId, plan: "monthly" },
      subscription_data: {
        metadata: { userId, plan: "monthly" },
      },
      allow_promotion_codes: true,
    });

    res.json({ url: session.url });
  } catch (error) {
    console.error("Create checkout session error:", error);
    res.status(500).json({ error: "checkout_session_failed" });
  }
});

app.get("/api/checkout-session", async (req, res) => {
  try {
    const { session_id: sessionId, userId } = req.query;
    if (!sessionId || !userId) {
      return res.status(400).json({ error: "missing_params" });
    }

    const session = await stripe.checkout.sessions.retrieve(String(sessionId), {
      expand: ["subscription"],
    });

    if (session.metadata?.userId !== userId) {
      return res.status(403).json({ error: "forbidden" });
    }

    const subscription = session.subscription;
    if (!subscription || typeof subscription === "string") {
      return res.status(409).json({ error: "subscription_pending" });
    }

    const payload = await syncSubscriptionRecord(subscription, userId);
    res.json(payload);
  } catch (error) {
    console.error("Verify checkout session error:", error);
    res.status(500).json({ error: "verify_session_failed" });
  }
});

app.get("/api/subscription/status", async (req, res) => {
  try {
    const { userId } = req.query;
    if (!userId) {
      return res.status(400).json({ error: "missing_user" });
    }
    const payload = await refreshSubscriptionFromStripe(String(userId));
    res.json(payload);
  } catch (error) {
    console.error("Subscription status error:", error);
    res.status(500).json({ error: "status_failed" });
  }
});

app.post("/api/create-portal-session", async (req, res) => {
  try {
    const { userId } = req.body || {};
    if (!userId) {
      return res.status(400).json({ error: "missing_user" });
    }

    const record = store.getByUserId(userId);
    if (!record?.stripeCustomerId) {
      return res.status(404).json({ error: "customer_not_found" });
    }

    const portalSession = await stripe.billingPortal.sessions.create({
      customer: record.stripeCustomerId,
      return_url: `${frontendUrl}/login.html#abbonamento`,
    });

    res.json({ url: portalSession.url });
  } catch (error) {
    console.error("Create portal session error:", error);
    res.status(500).json({ error: "portal_session_failed" });
  }
});

app.listen(port, () => {
  console.log(`DaD Stripe server listening on http://localhost:${port}`);
  console.log(`Frontend URL: ${frontendUrl}`);
  if (!stripePriceId) {
    console.warn("STRIPE_PRICE_ID is not set — monthly checkout will fail until configured.");
  }
});

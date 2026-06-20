require("dotenv").config();

const express = require("express");
const cors = require("cors");
const Stripe = require("stripe");
const store = require("./subscriptions-store");

const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
const stripePublishableKey = process.env.STRIPE_PUBLISHABLE_KEY;
const stripePriceId = process.env.STRIPE_PRICE_ID;
const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
const frontendUrl = (process.env.FRONTEND_URL || "http://localhost:5500").replace(/\/$/, "");
const port = Number(process.env.PORT || 4242);

if (!stripeSecretKey) {
  console.error("Missing STRIPE_SECRET_KEY in server/.env");
  process.exit(1);
}

if (stripeSecretKey.startsWith("pk_")) {
  console.error("STRIPE_SECRET_KEY must start with sk_, not pk_. Swap STRIPE_SECRET_KEY and STRIPE_PUBLISHABLE_KEY on Railway.");
  process.exit(1);
}

if (stripePublishableKey && !stripePublishableKey.startsWith("pk_")) {
  console.error("STRIPE_PUBLISHABLE_KEY must start with pk_. You may have pasted the secret key by mistake.");
  process.exit(1);
}

const stripe = new Stripe(stripeSecretKey);
const app = express();

const ACTIVE_STATUSES = new Set(["active", "trialing", "past_due"]);

function stripeErrorCode(error) {
  const message = String(error?.message || "").toLowerCase();
  if (error?.type === "StripeAuthenticationError" || message.includes("invalid api key")) {
    return "invalid_stripe_keys";
  }
  return "checkout_session_failed";
}

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

async function ensureStripeCustomer(userId, email) {
  const existing = store.getByUserId(userId);
  if (existing?.stripeCustomerId) return existing.stripeCustomerId;

  const customer = await stripe.customers.create({
    email: String(email || existing?.email || "").trim().toLowerCase(),
    metadata: { userId },
  });

  store.upsert(userId, {
    email: String(email || existing?.email || "").trim().toLowerCase() || null,
    stripeCustomerId: customer.id,
  });

  return customer.id;
}

function buildFrontendUrl(path = "") {
  const safePath = String(path || "").replace(/^\//, "");
  return safePath ? `${frontendUrl}/${safePath}` : frontendUrl;
}

async function registerPaymentMethodDomain() {
  try {
    const hostname = new URL(frontendUrl).hostname;
    if (!hostname || hostname === "localhost" || hostname === "127.0.0.1") return;
    await stripe.paymentMethodDomains.create({ domain_name: hostname });
  } catch (error) {
    if (error?.code !== "resource_already_exists") {
      console.warn("Payment method domain registration skipped:", error.message);
    }
  }
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
  const safePublishableKey =
    stripePublishableKey && stripePublishableKey.startsWith("pk_") ? stripePublishableKey : null;

  res.json({
    ok: true,
    stripe: Boolean(stripeSecretKey),
    priceConfigured: Boolean(stripePriceId),
    publishableKey: safePublishableKey,
    publishableKeyConfigured: Boolean(safePublishableKey),
    googlePayEnabled: true,
  });
});

app.post("/api/create-checkout-session", async (req, res) => {
  try {
    const { userId, email, plan, locale, successPath, cancelPath } = req.body || {};
    if (!userId || !email) {
      return res.status(400).json({ error: "missing_user" });
    }
    if (plan !== "monthly") {
      return res.status(400).json({ error: "invalid_plan" });
    }
    if (!stripePriceId) {
      return res.status(503).json({ error: "price_not_configured" });
    }

    const customerId = await ensureStripeCustomer(userId, email);

    const localeMap = { it: "it", en: "en", es: "es" };
    const successUrl = buildFrontendUrl(
      successPath || "pagamento.html?checkout=success&session_id={CHECKOUT_SESSION_ID}"
    );
    const cancelUrl = buildFrontendUrl(cancelPath || "pagamento.html?checkout=cancelled");

    const session = await stripe.checkout.sessions.create({
      customer: customerId,
      mode: "subscription",
      line_items: [{ price: stripePriceId, quantity: 1 }],
      success_url: successUrl,
      cancel_url: cancelUrl,
      locale: localeMap[locale] || "auto",
      metadata: { userId, plan: "monthly" },
      subscription_data: {
        metadata: { userId, plan: "monthly" },
      },
      allow_promotion_codes: true,
    });

    res.json({ url: session.url, stripeCustomerId: customerId });
  } catch (error) {
    console.error("Create checkout session error:", error);
    res.status(500).json({ error: stripeErrorCode(error) });
  }
});

app.post("/api/create-express-checkout-session", async (req, res) => {
  try {
    const { userId, email, locale } = req.body || {};
    if (!userId || !email) {
      return res.status(400).json({ error: "missing_user" });
    }
    if (!stripePriceId) {
      return res.status(503).json({ error: "price_not_configured" });
    }

    const customerId = await ensureStripeCustomer(userId, email);
    const localeMap = { it: "it", en: "en", es: "es" };

    const session = await stripe.checkout.sessions.create({
      ui_mode: "elements",
      customer: customerId,
      mode: "subscription",
      line_items: [{ price: stripePriceId, quantity: 1 }],
      return_url: buildFrontendUrl(
        "pagamento.html?checkout=success&session_id={CHECKOUT_SESSION_ID}"
      ),
      locale: localeMap[locale] || "auto",
      metadata: { userId, plan: "monthly" },
      subscription_data: {
        metadata: { userId, plan: "monthly" },
      },
      allow_promotion_codes: true,
    });

    res.json({
      clientSecret: session.client_secret,
      stripeCustomerId: customerId,
    });
  } catch (error) {
    console.error("Create express checkout session error:", error);
    res.status(500).json({ error: "express_checkout_session_failed" });
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
    const { userId, email, returnPath, flow } = req.body || {};
    if (!userId) {
      return res.status(400).json({ error: "missing_user" });
    }

    let record = store.getByUserId(userId);
    let customerId = record?.stripeCustomerId;
    if (!customerId && email) {
      customerId = await ensureStripeCustomer(userId, email);
      record = store.getByUserId(userId);
    }
    if (!customerId) {
      return res.status(404).json({ error: "customer_not_found" });
    }

    const safeReturnPath = String(returnPath || "pagamento.html").replace(/^\//, "");
    const params = {
      customer: customerId,
      return_url: buildFrontendUrl(safeReturnPath),
    };

    if (flow === "payment_method_update") {
      params.flow_data = { type: "payment_method_update" };
    }

    const portalSession = await stripe.billingPortal.sessions.create(params);

    res.json({ url: portalSession.url, stripeCustomerId: customerId });
  } catch (error) {
    console.error("Create portal session error:", error);
    res.status(500).json({ error: "portal_session_failed" });
  }
});

async function getPaymentMethodPayload(userId) {
  const record = store.getByUserId(userId);
  if (!record?.stripeCustomerId) {
    return { hasPaymentMethod: false, brand: null, last4: null, expMonth: null, expYear: null };
  }

  const customer = await stripe.customers.retrieve(record.stripeCustomerId, {
    expand: ["invoice_settings.default_payment_method"],
  });

  let paymentMethod = customer.invoice_settings?.default_payment_method;

  if (!paymentMethod && record.stripeSubscriptionId) {
    const subscription = await stripe.subscriptions.retrieve(record.stripeSubscriptionId, {
      expand: ["default_payment_method"],
    });
    paymentMethod = subscription.default_payment_method;
  }

  if (typeof paymentMethod === "string") {
    paymentMethod = await stripe.paymentMethods.retrieve(paymentMethod);
  }

  if (!paymentMethod?.card) {
    const methods = await stripe.paymentMethods.list({
      customer: record.stripeCustomerId,
      type: "card",
      limit: 1,
    });
    paymentMethod = methods.data[0] || null;
  }

  if (!paymentMethod?.card) {
    return { hasPaymentMethod: false, brand: null, last4: null, expMonth: null, expYear: null };
  }

  return {
    hasPaymentMethod: true,
    brand: paymentMethod.card.brand,
    last4: paymentMethod.card.last4,
    expMonth: paymentMethod.card.exp_month,
    expYear: paymentMethod.card.exp_year,
    wallet: paymentMethod.card.wallet?.type || null,
  };
}

app.get("/api/payment-method", async (req, res) => {
  try {
    const { userId } = req.query;
    if (!userId) {
      return res.status(400).json({ error: "missing_user" });
    }
    const payload = await getPaymentMethodPayload(String(userId));
    res.json(payload);
  } catch (error) {
    console.error("Payment method error:", error);
    res.status(500).json({ error: "payment_method_failed" });
  }
});

app.listen(port, async () => {
  await registerPaymentMethodDomain();
  console.log(`DaD Stripe server listening on http://localhost:${port}`);
  console.log(`Frontend URL: ${frontendUrl}`);
  if (!stripePriceId) {
    console.warn("STRIPE_PRICE_ID is not set — monthly checkout will fail until configured.");
  }
  if (!stripePublishableKey) {
    console.warn("STRIPE_PUBLISHABLE_KEY is not set — Google Pay button will not load.");
  }
});

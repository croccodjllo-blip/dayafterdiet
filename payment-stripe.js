/**
 * Google Pay / Apple Pay via Stripe Express Checkout Element.
 */
let expressCheckoutMounted = false;

async function loadStripePublishableKey() {
  if (window.STRIPE_CONFIG?.publishableKey) return window.STRIPE_CONFIG.publishableKey;

  try {
    const response = await fetch(`${getStripeApiBase()}/api/health`);
    if (!response.ok) return null;
    const data = await response.json();
    if (data.publishableKey) {
      window.STRIPE_CONFIG = window.STRIPE_CONFIG || {};
      window.STRIPE_CONFIG.publishableKey = data.publishableKey;
    }
    return data.publishableKey || null;
  } catch {
    return null;
  }
}

async function mountExpressCheckout() {
  if (PAGE !== "payment" || expressCheckoutMounted) return;

  const user = getCurrentUser();
  const walletSection = document.getElementById("profile-payment-wallet");
  const container = document.getElementById("express-checkout-element");
  if (!user || !walletSection || !container || !window.Stripe) return;

  const active = isSubscriptionActive(user);
  const isMonthlyActive = active && user.subscriptionPlan === "monthly";
  if (isMonthlyActive || stripeApiAvailable === false) {
    walletSection.classList.add("hidden");
    return;
  }

  const publishableKey = await loadStripePublishableKey();
  if (!publishableKey) {
    walletSection.classList.add("hidden");
    return;
  }

  const stripe = window.Stripe(publishableKey);

  const fetchClientSecret = async () => {
    const response = await fetch(`${getStripeApiBase()}/api/create-express-checkout-session`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userId: user.id,
        email: user.email,
        locale: getLanguage(),
      }),
    });
    if (!response.ok) throw new Error("express_checkout_failed");
    const data = await response.json();
    if (data.stripeCustomerId) await persistStripeCustomerId(data.stripeCustomerId);
    if (!data.clientSecret) throw new Error("missing_client_secret");
    return data.clientSecret;
  };

  try {
    const checkout = await stripe.initCheckoutElementsSdk({
      clientSecret: fetchClientSecret,
      elementsOptions: {
        appearance: {
          theme: "night",
          variables: {
            colorPrimary: "#00e676",
            colorBackground: "#0a2342",
            colorText: "#eef3fb",
            borderRadius: "8px",
          },
        },
      },
    });

    const expressCheckoutElement = checkout.createExpressCheckoutElement({
      paymentMethods: {
        googlePay: "always",
        applePay: "auto",
        link: "auto",
      },
      buttonType: {
        googlePay: "subscribe",
        applePay: "subscribe",
      },
    });

    expressCheckoutElement.on("confirm", async (event) => {
      const loadActionsResult = await checkout.loadActions();
      if (loadActionsResult.type === "error") {
        alert(loadActionsResult.error.message);
        return;
      }
      const { error } = await loadActionsResult.actions.confirm({
        expressCheckoutConfirmEvent: event,
      });
      if (error) alert(error.message);
    });

    expressCheckoutElement.on("ready", ({ availablePaymentMethods }) => {
      const hasWallet = Boolean(
        availablePaymentMethods?.googlePay || availablePaymentMethods?.applePay
      );
      walletSection.classList.toggle("hidden", !hasWallet);
    });

    expressCheckoutElement.mount("#express-checkout-element");
    walletSection.classList.remove("hidden");
    expressCheckoutMounted = true;
  } catch (error) {
    console.error("Express Checkout init failed:", error);
    walletSection.classList.add("hidden");
  }
}

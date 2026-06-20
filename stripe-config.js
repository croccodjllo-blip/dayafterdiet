(function () {
  const meta = document.querySelector('meta[name="stripe-api-base"]');
  const publishableMeta = document.querySelector('meta[name="stripe-publishable-key"]');
  const metaBase = meta?.content?.trim();
  const metaPublishableKey = publishableMeta?.content?.trim();
  const isLocal =
    location.hostname === "localhost" ||
    location.hostname === "127.0.0.1" ||
    location.protocol === "file:";

  const productionApiBase = "https://dayafterdiet-api.onrender.com";

  window.STRIPE_CONFIG = {
    apiBase: metaBase || (isLocal ? "http://localhost:4242" : productionApiBase),
    publishableKey: metaPublishableKey || "",
  };
})();

const fs = require("fs");
const path = require("path");

const DATA_DIR = path.join(__dirname, "data");
const SUBS_FILE = path.join(DATA_DIR, "subscriptions.json");

function ensureDataDir() {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }
}

function loadAll() {
  ensureDataDir();
  if (!fs.existsSync(SUBS_FILE)) return {};
  try {
    return JSON.parse(fs.readFileSync(SUBS_FILE, "utf8"));
  } catch {
    return {};
  }
}

function saveAll(data) {
  ensureDataDir();
  fs.writeFileSync(SUBS_FILE, JSON.stringify(data, null, 2));
}

function getByUserId(userId) {
  if (!userId) return null;
  const all = loadAll();
  return all[userId] || null;
}

function upsert(userId, patch) {
  const all = loadAll();
  all[userId] = {
    ...(all[userId] || {}),
    ...patch,
    userId,
    updatedAt: new Date().toISOString(),
  };
  saveAll(all);
  return all[userId];
}

function findByStripeSubscriptionId(subscriptionId) {
  if (!subscriptionId) return null;
  const all = loadAll();
  return Object.values(all).find((entry) => entry.stripeSubscriptionId === subscriptionId) || null;
}

function findByStripeCustomerId(customerId) {
  if (!customerId) return null;
  const all = loadAll();
  return Object.values(all).find((entry) => entry.stripeCustomerId === customerId) || null;
}

module.exports = {
  getByUserId,
  upsert,
  findByStripeSubscriptionId,
  findByStripeCustomerId,
};

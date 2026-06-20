/**
 * Database utenti IndexedDB per DayafterDiet.
 * Sostituisce il JSON monolitico in localStorage con storage strutturato e indicizzato.
 */
const UsersDB = (() => {
  const DB_NAME = "dayafterdiet";
  const DB_VERSION = 1;
  const USERS_STORE = "users";
  const LEGACY_USERS_KEY = "dayafterdiet-users";
  const MIGRATION_FLAG_KEY = "dayafterdiet-users-db-ready";

  let dbPromise = null;

  function openDatabase() {
    if (dbPromise) return dbPromise;

    dbPromise = new Promise((resolve, reject) => {
      const request = indexedDB.open(DB_NAME, DB_VERSION);

      request.onupgradeneeded = (event) => {
        const db = event.target.result;
        if (!db.objectStoreNames.contains(USERS_STORE)) {
          const store = db.createObjectStore(USERS_STORE, { keyPath: "id" });
          store.createIndex("email", "email", { unique: true });
          store.createIndex("createdAt", "createdAt", { unique: false });
        }
      };

      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error);
    });

    return dbPromise;
  }

  function runTransaction(storeName, mode, operation) {
    return openDatabase().then(
      (db) =>
        new Promise((resolve, reject) => {
          const tx = db.transaction(storeName, mode);
          const store = tx.objectStore(storeName);
          const request = operation(store);

          tx.oncomplete = () => resolve(request?.result);
          tx.onerror = () => reject(tx.error);
          if (request) {
            request.onerror = () => reject(request.error);
          }
        })
    );
  }

  async function migrateFromLocalStorage() {
    if (localStorage.getItem(MIGRATION_FLAG_KEY) === "1") return;

    let legacyUsers = {};
    try {
      const raw = localStorage.getItem(LEGACY_USERS_KEY);
      legacyUsers = raw ? JSON.parse(raw) : {};
    } catch {
      legacyUsers = {};
    }

    const existing = await getAll();
    const existingEmails = new Set(existing.map((user) => user.email));

    for (const user of Object.values(legacyUsers)) {
      if (!user?.id || !user?.email) continue;
      if (existingEmails.has(user.email)) continue;
      await put(user);
    }

    localStorage.setItem(MIGRATION_FLAG_KEY, "1");
  }

  async function put(user) {
    return runTransaction(USERS_STORE, "readwrite", (store) => store.put(user));
  }

  async function create(user) {
    const existing = await getByEmail(user.email);
    if (existing) {
      throw new Error("Esiste già un account con questa email.");
    }
    await put(user);
    return user;
  }

  async function update(user) {
    if (!user?.id) throw new Error("Utente non valido.");
    await put(user);
    return user;
  }

  async function getById(id) {
    return runTransaction(USERS_STORE, "readonly", (store) => store.get(id));
  }

  async function getByEmail(email) {
    const normalized = String(email || "").trim().toLowerCase();
    if (!normalized) return null;

    return runTransaction(USERS_STORE, "readonly", (store) => {
      const index = store.index("email");
      return index.get(normalized);
    });
  }

  async function getAll() {
    const db = await openDatabase();
    return new Promise((resolve, reject) => {
      const tx = db.transaction(USERS_STORE, "readonly");
      const request = tx.objectStore(USERS_STORE).getAll();
      request.onsuccess = () => resolve(request.result || []);
      request.onerror = () => reject(request.error);
      tx.onerror = () => reject(tx.error);
    });
  }

  async function getAllMap() {
    const users = await getAll();
    return Object.fromEntries(users.map((user) => [user.id, user]));
  }

  async function count() {
    const db = await openDatabase();
    return new Promise((resolve, reject) => {
      const tx = db.transaction(USERS_STORE, "readonly");
      const request = tx.objectStore(USERS_STORE).count();
      request.onsuccess = () => resolve(request.result || 0);
      request.onerror = () => reject(request.error);
      tx.onerror = () => reject(tx.error);
    });
  }

  async function remove(id) {
    return runTransaction(USERS_STORE, "readwrite", (store) => store.delete(id));
  }

  async function init() {
    await openDatabase();
    await migrateFromLocalStorage();
  }

  return {
    init,
    create,
    update,
    put,
    getById,
    getByEmail,
    getAll,
    getAllMap,
    count,
    remove,
    migrateFromLocalStorage,
  };
})();

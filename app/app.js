const STORAGE_KEY = "dayafterdiet-data";
const HISTORY_KEY = "dayafterdiet-history";
const HABITS_KEY = "dayafterdiet-habits";
const USERS_KEY = "dayafterdiet-users"; // legacy — migrato in IndexedDB (users-db.js)
const SESSION_KEY = "dayafterdiet-session";
const REMEMBER_EMAIL_KEY = "dayafterdiet-remember-email";
const REMEMBER_ME_KEY = "dayafterdiet-remember-me";
const DEFAULT_GOAL = 2000;
const DEFAULT_WEIGHT = 70;
const DEFAULT_WEEK_START_DAY = 1;

const LOCALE_STORAGE_KEY = "dayafterdiet-locale";
const BODY_MEASUREMENT_KEYS = ["waist", "hips", "chest", "arm", "thigh"];

const BODY_MEASUREMENT_META = {
  waist: { label: "Vita", min: 40, max: 200 },
  hips: { label: "Fianchi", min: 50, max: 200 },
  chest: { label: "Petto", min: 50, max: 200 },
  arm: { label: "Braccio", min: 15, max: 80 },
  thigh: { label: "Coscia", min: 30, max: 120 },
};

const BODY_MEASUREMENT_COLORS = {
  waist: "#7e57c2",
  hips: "#5c6bc0",
  chest: "#42a5f5",
  arm: "#26a69a",
  thigh: "#66bb6a",
};

const DEFAULT_SPLIT = { protein: 30, carbs: 40, fat: 30 };
const DEFAULT_MET = 5;
const KCAL_PER_G = { protein: 4, carbs: 4, fat: 9 };
const INTENSITY_FACTOR = { leggera: 0.85, moderata: 1, intensa: 1.2 };

const ACTIVITY_FACTORS = {
  sedentary: 1.2,
  light: 1.375,
  moderate: 1.55,
  active: 1.725,
  very: 1.9,
};

const ACTIVITY_LABELS = {
  sedentary: "Sedentario",
  light: "Leggero",
  moderate: "Moderato",
  active: "Attivo",
  very: "Molto attivo",
};

const DEFAULT_WORK_TYPE = "ufficio";

const ACTIVITY_LEVEL_TO_WORK = {
  sedentary: "ufficio",
  light: "commesso",
  moderate: "manuale_leggero",
  active: "manuale_pesante",
  very: "edile",
};

const DIET_OBJECTIVE_LABELS = {
  maintain: "Mantenimento",
  lose_light: "Perdita leggera",
  lose: "Perdita peso",
  gain: "Aumento massa",
};

const DIET_OBJECTIVE_OFFSET = {
  maintain: 0,
  lose_light: -300,
  lose: -500,
  gain: 300,
};

const MEAL_SLOTS = [
  { key: "colazione", label: "Colazione", share: 0.22 },
  { key: "spuntino", label: "Spuntino", share: 0.08 },
  { key: "pranzo", label: "Pranzo", share: 0.32 },
  { key: "merenda", label: "Merenda", share: 0.08 },
  { key: "cena", label: "Cena", share: 0.3 },
];

const MEAL_SLOT_CATEGORIES = {
  colazione: ["colazione", "bevande", "latticini"],
  spuntino: ["frutta_verdura", "snack", "latticini", "bevande"],
  pranzo: ["primi", "secondi", "frutta_verdura", "latticini"],
  merenda: ["frutta_verdura", "snack", "latticini", "dolci"],
  cena: ["secondi", "primi", "frutta_verdura", "latticini"],
};

const MEAL_SLOT_PRIMARY_CATEGORIES = {
  pranzo: ["primi", "secondi"],
  cena: ["secondi", "primi"],
};

const MEAL_SLOT_SECONDARY_CATEGORIES = {
  pranzo: ["secondi", "frutta_verdura", "latticini"],
  cena: ["frutta_verdura", "latticini", "primi"],
};

const PLAN_HISTORY_DAYS = 30;

const FOOD_CATEGORY_LABELS = {
  bevande: "Bevande",
  colazione: "Colazione",
  frutta_verdura: "Frutta e verdura",
  primi: "Primi e cereali",
  secondi: "Secondi e proteine",
  latticini: "Latticini",
  snack: "Snack",
  dolci: "Dolci",
};

const FOOD_CATALOG = [
  { id: "caffe", name: "Caffè espresso", category: "bevande", grams: 30, unit: "ml", calories: 5, protein: 0.3, carbs: 0, fat: 0, quick: true },
  { id: "cappuccino", name: "Cappuccino", category: "bevande", grams: 150, unit: "ml", calories: 80, protein: 4, carbs: 8, fat: 4 },
  { id: "te", name: "Tè", category: "bevande", grams: 200, unit: "ml", calories: 2, protein: 0, carbs: 0.5, fat: 0 },
  { id: "succo_arancia", name: "Succo d'arancia", category: "bevande", grams: 200, unit: "ml", calories: 90, protein: 1, carbs: 20, fat: 0.2 },
  { id: "acqua", name: "Acqua", category: "bevande", grams: 250, unit: "ml", calories: 0, protein: 0, carbs: 0, fat: 0 },
  { id: "birra", name: "Birra", category: "bevande", grams: 330, unit: "ml", calories: 150, protein: 1.5, carbs: 13, fat: 0 },
  { id: "vino_rosso", name: "Vino rosso", category: "bevande", grams: 125, unit: "ml", calories: 105, protein: 0.1, carbs: 3, fat: 0 },
  { id: "latte_macchiato", name: "Latte macchiato", category: "bevande", grams: 150, unit: "ml", calories: 65, protein: 4, carbs: 7, fat: 2.5 },
  { id: "coca_cola", name: "Coca-Cola", category: "bevande", grams: 330, unit: "ml", calories: 140, protein: 0, carbs: 35, fat: 0 },
  { id: "prosecco", name: "Prosecco", category: "bevande", grams: 125, unit: "ml", calories: 90, protein: 0.1, carbs: 2, fat: 0 },
  { id: "spritz", name: "Spritz", category: "bevande", grams: 200, unit: "ml", calories: 120, protein: 0, carbs: 8, fat: 0 },
  { id: "centrifuga", name: "Centrifuga di frutta", category: "bevande", grams: 250, unit: "ml", calories: 110, protein: 2, carbs: 24, fat: 0.5 },

  { id: "yogurt", name: "Yogurt bianco", category: "colazione", grams: 125, unit: "g", calories: 120, protein: 10, carbs: 12, fat: 3, quick: true },
  { id: "yogurt_greco", name: "Yogurt greco", category: "colazione", grams: 150, unit: "g", calories: 150, protein: 15, carbs: 8, fat: 4 },
  { id: "fiocchi_latte", name: "Fiocchi di latte", category: "colazione", grams: 150, unit: "g", calories: 180, protein: 20, carbs: 6, fat: 5 },
  { id: "uova_strapazzate", name: "Uova strapazzate (2)", category: "colazione", grams: 120, unit: "g", calories: 180, protein: 12, carbs: 2, fat: 14 },
  { id: "fette_biscottate", name: "Fette biscottate con marmellata", category: "colazione", grams: 60, unit: "g", calories: 280, protein: 6, carbs: 52, fat: 6 },
  { id: "cornetto", name: "Cornetto", category: "colazione", grams: 80, unit: "g", calories: 320, protein: 7, carbs: 38, fat: 16 },
  { id: "porridge", name: "Porridge di avena", category: "colazione", grams: 250, unit: "g", calories: 350, protein: 12, carbs: 55, fat: 8 },
  { id: "cereali", name: "Cereali con latte", category: "colazione", grams: 200, unit: "g", calories: 280, protein: 10, carbs: 48, fat: 6 },
  { id: "uovo_sodo", name: "Uovo sodo", category: "colazione", grams: 60, unit: "g", calories: 90, protein: 7, carbs: 0.5, fat: 6 },
  { id: "brioche", name: "Brioche", category: "colazione", grams: 70, unit: "g", calories: 280, protein: 6, carbs: 36, fat: 12 },
  { id: "toast_prosciutto", name: "Toast prosciutto e formaggio", category: "colazione", grams: 120, unit: "g", calories: 320, protein: 18, carbs: 28, fat: 14, quick: true },
  { id: "muesli", name: "Muesli con yogurt", category: "colazione", grams: 200, unit: "g", calories: 300, protein: 12, carbs: 45, fat: 8 },

  { id: "mela", name: "Mela", category: "frutta_verdura", grams: 180, unit: "g", calories: 80, protein: 0.3, carbs: 21, fat: 0.2, quick: true },
  { id: "banana", name: "Banana", category: "frutta_verdura", grams: 120, unit: "g", calories: 105, protein: 1.3, carbs: 27, fat: 0.4 },
  { id: "arancia", name: "Arancia", category: "frutta_verdura", grams: 200, unit: "g", calories: 65, protein: 1.2, carbs: 16, fat: 0.2 },
  { id: "pera", name: "Pera", category: "frutta_verdura", grams: 180, unit: "g", calories: 85, protein: 0.5, carbs: 22, fat: 0.2 },
  { id: "fragole", name: "Fragole", category: "frutta_verdura", grams: 150, unit: "g", calories: 50, protein: 1, carbs: 12, fat: 0.5 },
  { id: "insalata", name: "Insalata mista", category: "frutta_verdura", grams: 200, unit: "g", calories: 180, protein: 8, carbs: 12, fat: 10, quick: true },
  { id: "verdure_grigliate", name: "Verdure grigliate", category: "frutta_verdura", grams: 200, unit: "g", calories: 120, protein: 4, carbs: 14, fat: 5 },
  { id: "kiwi", name: "Kiwi", category: "frutta_verdura", grams: 150, unit: "g", calories: 70, protein: 1, carbs: 16, fat: 0.5 },
  { id: "uva", name: "Uva", category: "frutta_verdura", grams: 150, unit: "g", calories: 105, protein: 1, carbs: 27, fat: 0.2 },
  { id: "avocado", name: "Avocado", category: "frutta_verdura", grams: 100, unit: "g", calories: 160, protein: 2, carbs: 9, fat: 15 },
  { id: "pomodoro", name: "Pomodoro", category: "frutta_verdura", grams: 150, unit: "g", calories: 30, protein: 1.5, carbs: 6, fat: 0.3 },
  { id: "carote", name: "Carote", category: "frutta_verdura", grams: 150, unit: "g", calories: 55, protein: 1, carbs: 12, fat: 0.2 },
  { id: "zucchine", name: "Zucchine trifolate", category: "frutta_verdura", grams: 200, unit: "g", calories: 90, protein: 3, carbs: 8, fat: 5 },
  { id: "broccoli", name: "Broccoli al vapore", category: "frutta_verdura", grams: 200, unit: "g", calories: 70, protein: 6, carbs: 12, fat: 1 },

  { id: "pasta", name: "Pasta", category: "primi", grams: 80, unit: "g", calories: 450, protein: 16, carbs: 72, fat: 8, quick: true },
  { id: "pasta_integrale", name: "Pasta integrale", category: "primi", grams: 80, unit: "g", calories: 420, protein: 17, carbs: 68, fat: 6 },
  { id: "riso", name: "Riso bollito", category: "primi", grams: 150, unit: "g", calories: 320, protein: 7, carbs: 68, fat: 2, quick: true },
  { id: "riso_integrale", name: "Riso integrale bollito", category: "primi", grams: 150, unit: "g", calories: 340, protein: 8, carbs: 70, fat: 3 },
  { id: "pizza_fetta", name: "Pizza margherita (1 fetta)", category: "primi", grams: 120, unit: "g", calories: 280, protein: 12, carbs: 32, fat: 11, quick: true },
  { id: "panino", name: "Panino", category: "primi", grams: 150, unit: "g", calories: 350, protein: 14, carbs: 42, fat: 12, quick: true },
  { id: "pane_integrale", name: "Pane integrale", category: "primi", grams: 100, unit: "g", calories: 250, protein: 10, carbs: 42, fat: 3 },
  { id: "patate", name: "Patate bollite", category: "primi", grams: 200, unit: "g", calories: 180, protein: 4, carbs: 40, fat: 0.2 },
  { id: "quinoa", name: "Quinoa bollita", category: "primi", grams: 150, unit: "g", calories: 220, protein: 8, carbs: 38, fat: 4 },
  { id: "lasagne", name: "Lasagne al forno", category: "primi", grams: 250, unit: "g", calories: 480, protein: 24, carbs: 42, fat: 22 },
  { id: "gnocchi", name: "Gnocchi al pomodoro", category: "primi", grams: 250, unit: "g", calories: 420, protein: 12, carbs: 68, fat: 10 },
  { id: "risotto", name: "Risotto", category: "primi", grams: 250, unit: "g", calories: 460, protein: 12, carbs: 72, fat: 12 },
  { id: "piadina", name: "Piadina", category: "primi", grams: 100, unit: "g", calories: 320, protein: 8, carbs: 38, fat: 14 },
  { id: "focaccia", name: "Focaccia", category: "primi", grams: 80, unit: "g", calories: 230, protein: 6, carbs: 32, fat: 8 },
  { id: "couscous", name: "Cous cous", category: "primi", grams: 150, unit: "g", calories: 280, protein: 9, carbs: 52, fat: 2 },
  { id: "minestrone", name: "Minestrone", category: "primi", grams: 300, unit: "g", calories: 220, protein: 10, carbs: 32, fat: 5 },
  { id: "passata_pasta", name: "Pasta al pomodoro", category: "primi", grams: 250, unit: "g", calories: 400, protein: 14, carbs: 68, fat: 8, quick: true },

  { id: "pollo", name: "Petto di pollo", category: "secondi", grams: 150, unit: "g", calories: 250, protein: 46, carbs: 0, fat: 6 },
  { id: "salmone", name: "Salmone", category: "secondi", grams: 150, unit: "g", calories: 310, protein: 34, carbs: 0, fat: 18 },
  { id: "tonno", name: "Tonno al naturale", category: "secondi", grams: 100, unit: "g", calories: 130, protein: 28, carbs: 0, fat: 1 },
  { id: "bresaola", name: "Bresaola", category: "secondi", grams: 80, unit: "g", calories: 120, protein: 24, carbs: 0, fat: 2 },
  { id: "hamburger", name: "Hamburger di manzo", category: "secondi", grams: 150, unit: "g", calories: 350, protein: 28, carbs: 2, fat: 26 },
  { id: "frittata", name: "Frittata con verdure", category: "secondi", grams: 200, unit: "g", calories: 380, protein: 28, carbs: 10, fat: 24 },
  { id: "tacchino", name: "Petto di tacchino", category: "secondi", grams: 150, unit: "g", calories: 200, protein: 42, carbs: 0, fat: 2 },
  { id: "prosciutto_crudo", name: "Prosciutto crudo", category: "secondi", grams: 80, unit: "g", calories: 180, protein: 22, carbs: 0, fat: 10, quick: true },
  { id: "cotoletta", name: "Cotoletta di pollo", category: "secondi", grams: 150, unit: "g", calories: 380, protein: 32, carbs: 18, fat: 18 },
  { id: "salsiccia", name: "Salsiccia", category: "secondi", grams: 100, unit: "g", calories: 320, protein: 14, carbs: 2, fat: 28 },
  { id: "gamberi", name: "Gamberi", category: "secondi", grams: 150, unit: "g", calories: 140, protein: 28, carbs: 1, fat: 2 },
  { id: "merluzzo", name: "Merluzzo al forno", category: "secondi", grams: 150, unit: "g", calories: 180, protein: 32, carbs: 0, fat: 5 },
  { id: "legumi", name: "Lenticchie in umido", category: "secondi", grams: 200, unit: "g", calories: 260, protein: 18, carbs: 38, fat: 4 },
  { id: "speck", name: "Speck", category: "secondi", grams: 80, unit: "g", calories: 190, protein: 20, carbs: 0, fat: 12 },

  { id: "mozzarella", name: "Mozzarella", category: "latticini", grams: 125, unit: "g", calories: 250, protein: 18, carbs: 2, fat: 20 },
  { id: "parmigiano", name: "Parmigiano", category: "latticini", grams: 30, unit: "g", calories: 120, protein: 11, carbs: 0, fat: 8 },
  { id: "ricotta", name: "Ricotta", category: "latticini", grams: 100, unit: "g", calories: 170, protein: 11, carbs: 4, fat: 12 },
  { id: "latte", name: "Latte scremato", category: "latticini", grams: 200, unit: "ml", calories: 70, protein: 7, carbs: 10, fat: 0.2 },
  { id: "gorgonzola", name: "Gorgonzola", category: "latticini", grams: 40, unit: "g", calories: 140, protein: 8, carbs: 1, fat: 12 },
  { id: "stracchino", name: "Stracchino", category: "latticini", grams: 80, unit: "g", calories: 200, protein: 10, carbs: 1, fat: 17 },
  { id: "feta", name: "Feta", category: "latticini", grams: 80, unit: "g", calories: 190, protein: 10, carbs: 2, fat: 16 },
  { id: "burro", name: "Burro", category: "latticini", grams: 10, unit: "g", calories: 75, protein: 0.1, carbs: 0, fat: 8 },

  { id: "mandorle", name: "Mandorle", category: "snack", grams: 30, unit: "g", calories: 180, protein: 6, carbs: 6, fat: 15 },
  { id: "barretta_proteica", name: "Barretta proteica", category: "snack", grams: 60, unit: "g", calories: 200, protein: 15, carbs: 18, fat: 7 },
  { id: "cracker", name: "Cracker integrali", category: "snack", grams: 30, unit: "g", calories: 130, protein: 3, carbs: 20, fat: 4 },
  { id: "cioccolato", name: "Cioccolato fondente 85%", category: "snack", grams: 30, unit: "g", calories: 170, protein: 3, carbs: 12, fat: 12 },
  { id: "hummus", name: "Hummus con carote", category: "snack", grams: 120, unit: "g", calories: 150, protein: 5, carbs: 16, fat: 7 },
  { id: "noci", name: "Noci", category: "snack", grams: 30, unit: "g", calories: 195, protein: 4.5, carbs: 4, fat: 19 },
  { id: "pistacchi", name: "Pistacchi", category: "snack", grams: 30, unit: "g", calories: 170, protein: 6, carbs: 8, fat: 13 },
  { id: "olive", name: "Olive", category: "snack", grams: 50, unit: "g", calories: 75, protein: 0.5, carbs: 2, fat: 7 },
  { id: "popcorn", name: "Popcorn", category: "snack", grams: 40, unit: "g", calories: 160, protein: 4, carbs: 18, fat: 8 },
  { id: "taralli", name: "Taralli", category: "snack", grams: 40, unit: "g", calories: 180, protein: 4, carbs: 22, fat: 8 },
  { id: "grissini", name: "Grissini", category: "snack", grams: 30, unit: "g", calories: 120, protein: 3, carbs: 22, fat: 2 },
  { id: "miele", name: "Miele", category: "snack", grams: 20, unit: "g", calories: 60, protein: 0.1, carbs: 16, fat: 0 },

  { id: "gelato", name: "Gelato", category: "dolci", grams: 100, unit: "g", calories: 220, protein: 4, carbs: 28, fat: 10 },
  { id: "tiramisu", name: "Tiramisù", category: "dolci", grams: 120, unit: "g", calories: 450, protein: 6, carbs: 45, fat: 26 },
  { id: "crostata", name: "Crostata (fetta)", category: "dolci", grams: 100, unit: "g", calories: 320, protein: 4, carbs: 42, fat: 15 },
  { id: "cannolo", name: "Cannolo siciliano", category: "dolci", grams: 100, unit: "g", calories: 380, protein: 6, carbs: 40, fat: 22 },
  { id: "biscotti", name: "Biscotti", category: "dolci", grams: 40, unit: "g", calories: 180, protein: 3, carbs: 26, fat: 7 },
  { id: "croissant", name: "Croissant", category: "dolci", grams: 60, unit: "g", calories: 240, protein: 5, carbs: 26, fat: 13 },
  { id: "panna_cotta", name: "Panna cotta", category: "dolci", grams: 120, unit: "g", calories: 280, protein: 4, carbs: 28, fat: 16 },
  { id: "ciambella", name: "Ciambella", category: "dolci", grams: 80, unit: "g", calories: 300, protein: 4, carbs: 38, fat: 14 },
];

const MICRONUTRIENT_KEYS = [
  "fiber",
  "sodium",
  "simpleSugar",
  "refinedSugar",
  "potassium",
  "magnesium",
  "iron",
  "zinc",
  "calcium",
  "vitaminC",
  "vitaminB",
];

const MICRONUTRIENT_META = {
  fiber: { label: "Fibre", unit: "g", dailyTarget: 25, capAtTarget: false },
  sodium: { label: "Sodio", unit: "mg", dailyTarget: 2000, capAtTarget: true },
  simpleSugar: { label: "Zuccheri semplici", unit: "g", dailyTarget: 40, capAtTarget: true },
  refinedSugar: { label: "Zuccheri raffinati", unit: "g", dailyTarget: 25, capAtTarget: true },
  potassium: { label: "Potassio", unit: "mg", dailyTarget: 3500, capAtTarget: false },
  magnesium: { label: "Magnesio", unit: "mg", dailyTarget: 375, capAtTarget: false },
  iron: { label: "Ferro", unit: "mg", dailyTarget: 14, capAtTarget: false },
  zinc: { label: "Zinco", unit: "mg", dailyTarget: 10, capAtTarget: false },
  calcium: { label: "Calcio", unit: "mg", dailyTarget: 800, capAtTarget: false },
  vitaminC: { label: "Vitamina C", unit: "mg", dailyTarget: 80, capAtTarget: false },
  vitaminB: { label: "Vitamina B", unit: "mg", dailyTarget: 12, capAtTarget: false },
};

const CATEGORY_MICRO_PER_100G = {
  bevande: {
    fiber: 0,
    sodium: 30,
    simpleSugar: 4,
    refinedSugar: 6,
    potassium: 80,
    magnesium: 10,
    iron: 0,
    zinc: 0.05,
    calcium: 10,
    vitaminC: 5,
    vitaminB: 0.05,
  },
  colazione: {
    fiber: 1.5,
    sodium: 150,
    simpleSugar: 4,
    refinedSugar: 4,
    potassium: 120,
    magnesium: 35,
    iron: 0.8,
    zinc: 0.6,
    calcium: 80,
    vitaminC: 2,
    vitaminB: 0.8,
  },
  frutta_verdura: {
    fiber: 2.5,
    sodium: 50,
    simpleSugar: 5,
    refinedSugar: 0,
    potassium: 250,
    magnesium: 22,
    iron: 0.5,
    zinc: 0.3,
    calcium: 40,
    vitaminC: 25,
    vitaminB: 0.15,
  },
  primi: {
    fiber: 2,
    sodium: 250,
    simpleSugar: 0.5,
    refinedSugar: 1.5,
    potassium: 80,
    magnesium: 28,
    iron: 1,
    zinc: 0.8,
    calcium: 20,
    vitaminC: 0,
    vitaminB: 0.4,
  },
  secondi: {
    fiber: 0.5,
    sodium: 400,
    simpleSugar: 0.2,
    refinedSugar: 0.3,
    potassium: 180,
    magnesium: 30,
    iron: 1.5,
    zinc: 2.5,
    calcium: 15,
    vitaminC: 0,
    vitaminB: 1.8,
  },
  latticini: {
    fiber: 0,
    sodium: 300,
    simpleSugar: 3,
    refinedSugar: 0,
    potassium: 150,
    magnesium: 14,
    iron: 0.2,
    zinc: 0.8,
    calcium: 200,
    vitaminC: 0,
    vitaminB: 0.5,
  },
  snack: {
    fiber: 3,
    sodium: 200,
    simpleSugar: 2,
    refinedSugar: 4,
    potassium: 200,
    magnesium: 45,
    iron: 1,
    zinc: 1.2,
    calcium: 30,
    vitaminC: 0,
    vitaminB: 0.35,
  },
  dolci: {
    fiber: 1,
    sodium: 80,
    simpleSugar: 1,
    refinedSugar: 24,
    potassium: 60,
    magnesium: 12,
    iron: 0.5,
    zinc: 0.3,
    calcium: 20,
    vitaminC: 0,
    vitaminB: 0.08,
  },
};

const QUICK_FOODS = FOOD_CATALOG.filter((food) => food.quick);
const DEFAULT_HABIT_ACTIVITIES = ["palestra", "corsa"];
const HABITS_CHIP_LIMIT = 8;
const HABITS_ACTIVITY_CHIP_LIMIT = 2;
const HABIT_BADGE_MIN_USES = 2;

const INTENSITY_LABELS = {
  leggera: "Leggera",
  moderata: "Moderata",
  intensa: "Intensa",
};

const ACTIVITY_CATEGORY_LABELS = {
  lavoro: "Lavoro",
  sport: "Sport",
};

const WORK_ACTIVITIES = [
  { id: "ufficio", name: "Ufficio sedentario", met: 1.5, category: "lavoro", defaultIntensity: "leggera", defaultDuration: 480 },
  { id: "in_piedi", name: "Lavoro in piedi", met: 2.0, category: "lavoro", defaultIntensity: "leggera", defaultDuration: 480 },
  { id: "commesso", name: "Commesso / vendita", met: 2.3, category: "lavoro", defaultIntensity: "leggera", defaultDuration: 480 },
  { id: "insegnamento", name: "Insegnamento", met: 2.2, category: "lavoro", defaultIntensity: "leggera", defaultDuration: 360 },
  { id: "manuale_leggero", name: "Lavoro manuale leggero", met: 3.0, category: "lavoro", defaultIntensity: "moderata", defaultDuration: 480 },
  { id: "manuale_pesante", name: "Lavoro manuale pesante", met: 5.0, category: "lavoro", defaultIntensity: "intensa", defaultDuration: 480 },
  { id: "edile", name: "Cantiere / edile", met: 6.0, category: "lavoro", defaultIntensity: "intensa", defaultDuration: 480 },
];

const SPORT_ACTIVITIES = [
  { id: "camminata", name: "Camminata", met: 3.5, category: "sport", defaultIntensity: "leggera", defaultDuration: 30 },
  { id: "corsa", name: "Corsa", met: 9.8, category: "sport", defaultIntensity: "moderata", defaultDuration: 30 },
  { id: "ciclismo", name: "Ciclismo", met: 7.5, category: "sport", defaultIntensity: "moderata", defaultDuration: 30 },
  { id: "palestra", name: "Palestra", met: 5.0, category: "sport", defaultIntensity: "moderata", defaultDuration: 30 },
  { id: "nuoto", name: "Nuoto", met: 8.0, category: "sport", defaultIntensity: "moderata", defaultDuration: 30 },
  { id: "yoga", name: "Yoga", met: 2.5, category: "sport", defaultIntensity: "leggera", defaultDuration: 30 },
  { id: "hiit", name: "HIIT", met: 10.0, category: "sport", defaultIntensity: "intensa", defaultDuration: 30 },
  { id: "calcio", name: "Calcio", met: 7.0, category: "sport", defaultIntensity: "intensa", defaultDuration: 30 },
  { id: "padel", name: "Padel", met: 6.5, category: "sport", defaultIntensity: "moderata", defaultDuration: 60 },
];

const ALL_ACTIVITIES = [...WORK_ACTIVITIES, ...SPORT_ACTIVITIES];

const PAGE = document.body.dataset.page || "today";

const NAV_PAGE_ICONS = {
  profile: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="4"/><path d="M5 20c0-3.9 3.1-7 7-7s7 3.1 7 7"/></svg>`,
  overview: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 20V10"/><path d="M12 20V4"/><path d="M18 20v-7"/></svg>`,
  today: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 8v8"/><path d="M8 12h8"/></svg>`,
  tomorrow: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/><path d="M12 14v4"/><path d="M10 16h4"/></svg>`,
  week: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/><path d="M7 14h2M11 14h2M15 14h2M7 17h2M11 17h2M15 17h2"/></svg>`,
  totals: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 17l6-6 4 4 8-9"/><path d="M17 5h4v4"/></svg>`,
};

const NAV_HREF_TO_PAGE = {
  "utente.html": "profile",
  "riepilogo.html": "overview",
  "index.html": "today",
  "domani.html": "tomorrow",
  "settimana.html": "week",
  "dati-totali.html": "totals",
};

const TUTORIAL_NAV_ORDER = ["profile", "overview", "today", "tomorrow", "week", "totals"];

function renderNavPageIcon(container, key) {
  const svg = NAV_PAGE_ICONS[key];
  if (!container || !svg) return;
  container.classList.add("nav-page-icon");
  container.innerHTML = svg;
}

function initBottomNavIcons() {
  for (const link of document.querySelectorAll(".bottom-nav-link")) {
    const href = link.getAttribute("href")?.split("/").pop()?.split("?")[0];
    const key = NAV_HREF_TO_PAGE[href];
    const iconEl = link.querySelector(".bottom-nav-icon");
    if (key && iconEl) renderNavPageIcon(iconEl, key);
  }

  document.querySelectorAll(".tutorial-nav-item").forEach((item, index) => {
    const iconEl = item.querySelector(":scope > span[aria-hidden]");
    const key = TUTORIAL_NAV_ORDER[index];
    if (iconEl && key) renderNavPageIcon(iconEl, key);
  });
}

const todayLabel = document.getElementById("today-label");
const todayWeightInput = document.getElementById("today-weight-input");
const todayWeightBmiEl = document.getElementById("today-weight-bmi");
const todayWeightNoteEl = document.getElementById("today-weight-note");
const totalCaloriesEl = document.getElementById("total-calories");
const goalDisplayEl = document.getElementById("goal-display");
const consumedDisplayEl = document.getElementById("consumed-display");
const burnedDisplayEl = document.getElementById("burned-display");
const remainingDisplayEl = document.getElementById("remaining-display");
const mealsCountEl = document.getElementById("meals-count");
const activitiesCountEl = document.getElementById("activities-count");
const workToggleMeta = document.getElementById("work-toggle-meta");
const weeklyRangeEl = document.getElementById("weekly-range");
const weeklyTargetEl = document.getElementById("weekly-target");
const weeklyBudgetEl = document.getElementById("weekly-budget");
const weeklyConsumedEl = document.getElementById("weekly-consumed");
const weeklyBurnedEl = document.getElementById("weekly-burned");
const weeklyRemainingEl = document.getElementById("weekly-remaining");
const weeklyRing = document.getElementById("weekly-ring");
const weeklyRingValue = document.getElementById("weekly-ring-value");
const weeklyProgressFill = document.getElementById("weekly-progress-fill");
const weeklyProgressBar = document.getElementById("weekly-progress-bar");
const weeklyMessageEl = document.getElementById("weekly-message");
const weeklyChartEl = document.getElementById("weekly-chart");
const weeklyProgressPercentEl = document.getElementById("weekly-progress-percent");
const weeklyMacroBarsEl = document.getElementById("weekly-macro-bars");
const weeklyMicroBarsEl = document.getElementById("weekly-micro-bars");
const weeklyMicroNoteEl = document.getElementById("weekly-micro-note");
const weeklySportBurnedEl = document.getElementById("weekly-sport-burned");
const weeklySportSessionsEl = document.getElementById("weekly-sport-sessions");
const weeklySportDurationEl = document.getElementById("weekly-sport-duration");
const weeklyActivityListEl = document.getElementById("weekly-activity-list");
const weeklyActivityDaysEl = document.getElementById("weekly-activity-days");
const weeklyActivityNoteEl = document.getElementById("weekly-activity-note");
const weeklyWeightChartEl = document.getElementById("weekly-weight-chart");
const weeklyWeightCurrentEl = document.getElementById("weekly-weight-current");
const weeklyWeightDeltaEl = document.getElementById("weekly-weight-delta");
const weeklyWeightDaysEl = document.getElementById("weekly-weight-days");
const weeklyWeightNoteEl = document.getElementById("weekly-weight-note");
const weeklyBodyMeasuresSummaryEl = document.getElementById("weekly-body-measures-summary");
const weeklyBodyMeasuresChartsEl = document.getElementById("weekly-body-measures-charts");
const weeklyBodyMeasuresLinesEl = document.getElementById("weekly-body-measures-lines");
const weeklyMeasuresCountEl = document.getElementById("weekly-measures-count");
const calorieRing = document.getElementById("calorie-ring");
const progressBar = document.getElementById("progress-bar");
const progressFill = document.getElementById("progress-fill");
const progressMessage = document.getElementById("progress-message");
const totalProteinEl = document.getElementById("total-protein");
const totalCarbsEl = document.getElementById("total-carbs");
const totalFatEl = document.getElementById("total-fat");
const goalProteinEl = document.getElementById("goal-protein");
const goalCarbsEl = document.getElementById("goal-carbs");
const goalFatEl = document.getElementById("goal-fat");
const proteinFillEl = document.getElementById("protein-fill");
const carbsFillEl = document.getElementById("carbs-fill");
const fatFillEl = document.getElementById("fat-fill");
const macroKcalNoteEl = document.getElementById("macro-kcal-note");
const mealsList = document.getElementById("meals-list");
const emptyState = document.getElementById("empty-state");
const activitiesList = document.getElementById("activities-list");
const activitiesEmpty = document.getElementById("activities-empty");
const addForm = document.getElementById("add-form");
const foodTypeSelect = document.getElementById("food-type");
const foodNameInput = document.getElementById("food-name");
const foodSearchInput = document.getElementById("food-search");
const activityForm = document.getElementById("activity-form");
const activityTypeSelect = document.getElementById("activity-type");
const activityNameCustom = document.getElementById("activity-name-custom");
const activityDurationInput = document.getElementById("activity-duration");
const activityCaloriesValue = document.getElementById("activity-calories-value");
const activityCaloriesHidden = document.getElementById("activity-calories");
const activityPreviewEl = document.getElementById("activity-preview");
const resetBtn = document.getElementById("reset-btn");
const quickChips = document.getElementById("quick-chips");
const activityChips = document.getElementById("activity-chips");
const settingsBtn = document.getElementById("settings-btn");
const profileBtn = document.getElementById("profile-btn");
const profileBtnAvatar = document.getElementById("profile-btn-avatar");
const profileBtnIcon = document.getElementById("profile-btn-icon");
const profileBanner = document.getElementById("profile-banner");
const profileDialog = document.getElementById("profile-dialog");
const authView = document.getElementById("auth-view");
const profileView = document.getElementById("profile-view");
const authErrorEl = document.getElementById("auth-error");
const loginForm = document.getElementById("login-form");
const resetPasswordForm = document.getElementById("reset-password-form");
const registerForm = document.getElementById("register-form");
const profileEditForm = document.getElementById("profile-edit-form");
const logoutBtn = document.getElementById("logout-btn");
const profileCancelBtn = document.getElementById("profile-cancel");
const profileCloseGuestBtn = document.getElementById("profile-close-guest");
const settingsDialog = document.getElementById("settings-dialog");
const settingsForm = document.getElementById("settings-form");
const settingsCancel = document.getElementById("settings-cancel");
const goalInput = document.getElementById("goal-input");
const splitProteinInput = document.getElementById("split-protein");
const splitCarbsInput = document.getElementById("split-carbs");
const splitFatInput = document.getElementById("split-fat");
const splitSumEl = document.getElementById("split-sum");
const calcMacroGoalsBtn = document.getElementById("calc-macro-goals");
const goalProteinInput = document.getElementById("goal-protein-input");
const goalCarbsInput = document.getElementById("goal-carbs-input");
const goalFatInput = document.getElementById("goal-fat-input");
const weightInput = document.getElementById("weight-input");
const dietObjectiveSelect = document.getElementById("diet-objective");
const weekStartDaySelect = document.getElementById("week-start-day");
const weekStartDayPicker = document.getElementById("week-start-day-picker");
const languageFlags = document.getElementById("language-flags");
const weeklySummarySubtitleEl = document.getElementById("weekly-summary-subtitle");
const tomorrowDateEl = document.getElementById("tomorrow-date");
const tomorrowKcalEl = document.getElementById("tomorrow-kcal");
const tomorrowNoteEl = document.getElementById("tomorrow-note");
const tomorrowMacrosEl = document.getElementById("tomorrow-macros");
const tomorrowMealsEl = document.getElementById("tomorrow-meals");
const tomorrowTipEl = document.getElementById("tomorrow-tip");
const tomorrowPageLabel = document.getElementById("tomorrow-page-label");
const weekPageLabel = document.getElementById("week-page-label");
const userPageLabel = document.getElementById("user-page-label");
const settingsSavedNote = document.getElementById("settings-saved-note");
const goalCalcNoteEl = document.getElementById("goal-calc-note");
const overviewPageLabel = document.getElementById("overview-page-label");
const overviewMealsCountEl = document.getElementById("overview-meals-count");
const overviewActivitiesCountEl = document.getElementById("overview-activities-count");
const overviewTomorrowTargetEl = document.getElementById("overview-tomorrow-target");
const overviewWeekRemainingEl = document.getElementById("overview-week-remaining");
const overviewWeekRangeEl = document.getElementById("overview-week-range");
const overviewTotalDaysEl = document.getElementById("overview-total-days");
const totalsPageLabelEl = document.getElementById("totals-page-label");
const totalsPeriodEl = document.getElementById("totals-period");
const totalsDaysBadgeEl = document.getElementById("totals-days-badge");
const totalsConsumedEl = document.getElementById("totals-consumed");
const totalsBurnedEl = document.getElementById("totals-burned");
const totalsNetEl = document.getElementById("totals-net");
const totalsAvgDayEl = document.getElementById("totals-avg-day");
const totalsNoteEl = document.getElementById("totals-note");
const totalsMacroBarsEl = document.getElementById("totals-macro-bars");
const totalsMicroBarsEl = document.getElementById("totals-micro-bars");
const totalsMicroNoteEl = document.getElementById("totals-micro-note");
const totalsSportBurnedEl = document.getElementById("totals-sport-burned");
const totalsSportSessionsEl = document.getElementById("totals-sport-sessions");
const totalsSportDurationEl = document.getElementById("totals-sport-duration");
const totalsWorkBurnedEl = document.getElementById("totals-work-burned");
const totalsActivityListEl = document.getElementById("totals-activity-list");
const totalsWeightCurrentEl = document.getElementById("totals-weight-current");
const totalsWeightDeltaEl = document.getElementById("totals-weight-delta");
const totalsWeightDaysEl = document.getElementById("totals-weight-days");
const totalsBodyMeasuresEl = document.getElementById("totals-body-measures");
const totalsBodyNoteEl = document.getElementById("totals-body-note");
const ctxConsumedEl = document.getElementById("ctx-consumed");
const ctxBudgetEl = document.getElementById("ctx-budget");
const ctxRemainingEl = document.getElementById("ctx-remaining");
const autoMacrosCheckbox = document.getElementById("auto-macros");
const macroFields = document.getElementById("macro-fields");
const foodCaloriesInput = document.getElementById("food-calories");
const foodGramsInput = document.getElementById("food-grams");
const foodGramsSuffix = document.getElementById("food-grams-suffix");
const macroPreviewEl = document.getElementById("macro-preview");

let selectedFoodPreset = null;

function getHabitsStorageKey(userId = getCurrentUser()?.id) {
  return userId ? `${HABITS_KEY}-${userId}` : HABITS_KEY;
}

function loadHabits() {
  try {
    const raw = localStorage.getItem(getHabitsStorageKey());
    const parsed = raw ? JSON.parse(raw) : null;
    return {
      foods: parsed?.foods || {},
      activities: parsed?.activities || {},
      customFoods: parsed?.customFoods || {},
    };
  } catch {
    return { foods: {}, activities: {}, customFoods: {} };
  }
}

function saveHabits(habits) {
  localStorage.setItem(getHabitsStorageKey(), JSON.stringify(habits));
}

function normalizeHabitName(name) {
  return String(name || "").trim().toLowerCase();
}

function findFoodInCatalog({ foodId, name }) {
  if (foodId) return getFoodById(foodId);
  const normalized = normalizeHabitName(name);
  return FOOD_CATALOG.find((food) => normalizeHabitName(food.name) === normalized);
}

function findSportActivityInCatalog({ activityId, name }) {
  if (activityId) return getActivityById(activityId);
  const normalized = normalizeHabitName(name);
  return SPORT_ACTIVITIES.find((activity) => normalizeHabitName(activity.name) === normalized);
}

function resolveSportActivityFromHabitKey(key) {
  if (!key) return null;
  const byId = getActivityById(key);
  if (byId?.category === "sport") return byId;
  return findSportActivityInCatalog({ name: key });
}

function recordFoodHabit({ foodId, name, calories, protein, carbs, fat, grams, unit }) {
  const catalog = findFoodInCatalog({ foodId, name });
  const habits = loadHabits();
  const key = catalog?.id || `custom:${normalizeHabitName(name)}`;

  habits.foods[key] = (habits.foods[key] || 0) + 1;

  if (!catalog) {
    habits.customFoods[key] = {
      name: String(name).trim(),
      calories: Number(calories) || 0,
      protein: Number(protein) || 0,
      carbs: Number(carbs) || 0,
      fat: Number(fat) || 0,
      grams: Number(grams) || null,
      unit: unit || "g",
    };
  }

  saveHabits(habits);
}

function recordActivityHabit({ activityId, name, category }) {
  if (category === "lavoro") return;

  const activity = findSportActivityInCatalog({ activityId, name });
  if (!activity) return;

  const habits = loadHabits();
  const id = activity.id;
  const previousUses = habits.activities[id] || habits.activities[activity.name] || 0;
  habits.activities[id] = previousUses + 1;
  if (activity.name !== id) delete habits.activities[activity.name];
  saveHabits(habits);
}

function getTopHabitEntries(counts, limit) {
  return Object.entries(counts)
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0], "it"))
    .slice(0, limit);
}

function getHabitualFoodItems() {
  const habits = loadHabits();
  const items = [];
  const seen = new Set();

  for (const [key, uses] of getTopHabitEntries(habits.foods, HABITS_CHIP_LIMIT)) {
    const catalog = getFoodById(key);
    const food = catalog || habits.customFoods[key];
    if (!food) continue;
    const itemKey = catalog?.id || key;
    if (seen.has(itemKey)) continue;
    seen.add(itemKey);
    items.push({
      food,
      uses,
      isHabitual: uses >= HABIT_BADGE_MIN_USES,
      isCustom: !catalog,
    });
  }

  for (const food of QUICK_FOODS) {
    if (items.length >= HABITS_CHIP_LIMIT) break;
    if (seen.has(food.id)) continue;
    seen.add(food.id);
    items.push({
      food,
      uses: habits.foods[food.id] || 0,
      isHabitual: (habits.foods[food.id] || 0) >= HABIT_BADGE_MIN_USES,
      isCustom: false,
    });
  }

  return items.slice(0, HABITS_CHIP_LIMIT);
}

function getHabitualActivityItems() {
  const habits = loadHabits();
  const items = [];
  const seen = new Set();

  for (const [key, uses] of getTopHabitEntries(habits.activities, HABITS_ACTIVITY_CHIP_LIMIT * 4)) {
    const activity = resolveSportActivityFromHabitKey(key);
    if (!activity || seen.has(activity.id)) continue;
    seen.add(activity.id);
    items.push({
      activity,
      uses,
      isHabitual: uses >= HABIT_BADGE_MIN_USES,
    });
    if (items.length >= HABITS_ACTIVITY_CHIP_LIMIT) break;
  }

  for (const id of DEFAULT_HABIT_ACTIVITIES) {
    if (items.length >= HABITS_ACTIVITY_CHIP_LIMIT) break;
    const activity = getActivityById(id);
    if (!activity || seen.has(activity.id)) continue;
    seen.add(activity.id);
    items.push({
      activity,
      uses: habits.activities[activity.id] || habits.activities[activity.name] || 0,
      isHabitual: (habits.activities[activity.id] || habits.activities[activity.name] || 0) >= HABIT_BADGE_MIN_USES,
    });
  }

  return items.slice(0, HABITS_ACTIVITY_CHIP_LIMIT);
}

function formatLocalDateKey(date = new Date()) {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

function localDateFromIso(isoString) {
  if (!isoString) return getTodayKey();
  return formatLocalDateKey(new Date(isoString));
}

function getTodayKey() {
  return formatLocalDateKey();
}

function loadHistory() {
  try {
    const raw = localStorage.getItem(getHistoryStorageKey());
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function saveHistory(history) {
  localStorage.setItem(getHistoryStorageKey(), JSON.stringify(history.slice(0, 120)));
}

function emptyMicros() {
  return Object.fromEntries(MICRONUTRIENT_KEYS.map((key) => [key, 0]));
}

function migrateLegacySugar(micros, sugarAmount) {
  if (!sugarAmount) return;
  micros.simpleSugar += sugarAmount * 0.4;
  micros.refinedSugar += sugarAmount * 0.6;
}

function normalizeMicros(micros) {
  if (!micros) return emptyMicros();
  const result = emptyMicros();
  for (const key of MICRONUTRIENT_KEYS) {
    result[key] = micros[key] || 0;
  }
  if (micros.sugar && !micros.simpleSugar && !micros.refinedSugar) {
    migrateLegacySugar(result, micros.sugar);
  }
  return result;
}

function addMicros(a, b) {
  const result = emptyMicros();
  const normalizedA = normalizeMicros(a);
  const normalizedB = normalizeMicros(b);
  for (const key of MICRONUTRIENT_KEYS) {
    result[key] = normalizedA[key] + normalizedB[key];
  }
  return result;
}

function scaleMicroProfile(profile, grams) {
  const ratio = grams / 100;
  const result = emptyMicros();
  for (const key of MICRONUTRIENT_KEYS) {
    result[key] = (profile[key] || 0) * ratio;
  }
  if (profile.sugar && !profile.simpleSugar && !profile.refinedSugar) {
    migrateLegacySugar(result, profile.sugar * ratio);
  }
  return result;
}

function getMealWeightGrams(meal) {
  if (meal.grams > 0) return meal.grams;
  const food = meal.foodId ? getFoodById(meal.foodId) : null;
  return food?.grams || 100;
}

function inferMealCategory(meal) {
  const protein = meal.protein || 0;
  const carbs = meal.carbs || 0;
  const fat = meal.fat || 0;
  const calories = meal.calories || 0;
  if (carbs > protein * 1.5 && carbs > 15) return calories > 200 ? "primi" : "colazione";
  if (protein > 15 && carbs < 10) return "secondi";
  if (carbs > 20 && fat < 12) return "dolci";
  if (fat > 8 && protein < 8) return "snack";
  return "snack";
}

function estimateMicrosForMeal(meal) {
  const food = meal.foodId ? getFoodById(meal.foodId) : null;
  const category = food?.category || inferMealCategory(meal);
  const grams = getMealWeightGrams(meal);
  if (food?.micro) {
    const ratio = grams / (food.grams || 100);
    const scaled = emptyMicros();
    for (const key of MICRONUTRIENT_KEYS) {
      scaled[key] = (food.micro[key] || 0) * ratio;
    }
    if (food.micro.sugar && !food.micro.simpleSugar && !food.micro.refinedSugar) {
      migrateLegacySugar(scaled, food.micro.sugar * ratio);
    }
    return scaled;
  }
  const profile = CATEGORY_MICRO_PER_100G[category] || CATEGORY_MICRO_PER_100G.snack;
  return scaleMicroProfile(profile, grams);
}

function computeMealsMicros(meals = []) {
  return meals.reduce((acc, meal) => addMicros(acc, estimateMicrosForMeal(meal)), emptyMicros());
}

function computeMealsMacros(meals = []) {
  return (meals || []).reduce(
    (acc, meal) => ({
      protein: acc.protein + (meal.protein || 0),
      carbs: acc.carbs + (meal.carbs || 0),
      fat: acc.fat + (meal.fat || 0),
    }),
    { protein: 0, carbs: 0, fat: 0 }
  );
}

function formatMicroValue(key, value) {
  const meta = MICRONUTRIENT_META[key];
  if (meta.unit === "g") {
    return value < 10 ? value.toFixed(1) : Math.round(value).toLocaleString(getLocaleTag());
  }
  return Math.round(value).toLocaleString(getLocaleTag());
}

function emptyActivitySummary() {
  return {
    sportBurned: 0,
    workBurned: 0,
    sportCount: 0,
    workCount: 0,
    sportDuration: 0,
    workDuration: 0,
    byName: {},
  };
}

function summarizeActivities(activities = []) {
  const summary = emptyActivitySummary();
  for (const activity of activities) {
    const category = activity.category || "sport";
    const isWork = category === "lavoro";
    const calories = activity.calories || 0;
    const duration = activity.duration || 0;
    if (isWork) {
      summary.workBurned += calories;
      summary.workCount += 1;
      summary.workDuration += duration;
    } else {
      summary.sportBurned += calories;
      summary.sportCount += 1;
      summary.sportDuration += duration;
    }
    const key = activity.name?.trim() || "Attività";
    if (!summary.byName[key]) {
      summary.byName[key] = { count: 0, calories: 0, duration: 0, category };
    }
    summary.byName[key].count += 1;
    summary.byName[key].calories += calories;
    summary.byName[key].duration += duration;
  }
  return summary;
}

function mergeActivitySummaries(a, b) {
  const result = emptyActivitySummary();
  result.sportBurned = (a?.sportBurned || 0) + (b?.sportBurned || 0);
  result.workBurned = (a?.workBurned || 0) + (b?.workBurned || 0);
  result.sportCount = (a?.sportCount || 0) + (b?.sportCount || 0);
  result.workCount = (a?.workCount || 0) + (b?.workCount || 0);
  result.sportDuration = (a?.sportDuration || 0) + (b?.sportDuration || 0);
  result.workDuration = (a?.workDuration || 0) + (b?.workDuration || 0);
  result.byName = { ...(a?.byName || {}) };
  for (const [name, data] of Object.entries(b?.byName || {})) {
    if (!result.byName[name]) {
      result.byName[name] = { count: 0, calories: 0, duration: 0, category: data.category };
    }
    result.byName[name].count += data.count;
    result.byName[name].calories += data.calories;
    result.byName[name].duration += data.duration;
  }
  return result;
}

function getEntryActivitySummary(entry) {
  if (entry?.activitySummary) return entry.activitySummary;
  if (entry?.burned > 0) {
    return { ...emptyActivitySummary(), sportBurned: entry.burned, legacy: true };
  }
  return emptyActivitySummary();
}

function formatTotalDuration(minutes) {
  const mins = Math.round(Number(minutes) || 0);
  if (mins <= 0) return "0 min";
  if (mins >= 60) {
    const hours = Math.floor(mins / 60);
    const rest = mins % 60;
    return rest > 0 ? `${hours} h ${rest} min` : `${hours} h`;
  }
  return `${mins} min`;
}

function buildHistoryEntryFromDayState(dayState) {
  const meals = dayState.meals || [];
  const activities = dayState.activities || [];
  const consumed = meals.reduce((sum, meal) => sum + meal.calories, 0);
  const burned = activities.reduce((sum, activity) => sum + activity.calories, 0);
  const goal = dayState.goal ?? DEFAULT_GOAL;
  const macros = computeMealsMacros(meals);
  const micros = computeMealsMicros(meals);
  return {
    date: dayState.date || getTodayKey(),
    consumed,
    burned,
    net: consumed - burned,
    goal,
    budget: goal + burned,
    protein: macros.protein,
    carbs: macros.carbs,
    fat: macros.fat,
    micros,
    activitySummary: summarizeActivities(activities),
    weight: dayState.weight ?? DEFAULT_WEIGHT,
    bodyMeasurements: normalizeBodyMeasurements(dayState.bodyMeasurements),
  };
}

function upsertHistoryEntry(entry) {
  if (!entry?.date) return;
  const history = loadHistory();
  const index = history.findIndex((item) => item.date === entry.date);
  if (index >= 0) history[index] = entry;
  else history.push(entry);
  history.sort((a, b) => b.date.localeCompare(a.date));
  saveHistory(history);
}

function upsertTodayInHistory(dayState = state) {
  upsertHistoryEntry(buildHistoryEntryFromDayState(dayState));
}

function archiveDayToHistory(dayData) {
  if (!dayData?.date) return;
  upsertHistoryEntry(buildHistoryEntryFromDayState(dayData));
}

function normalizeWeekStartDay(value) {
  const day = Number(value);
  return Number.isInteger(day) && day >= 0 && day <= 6 ? day : DEFAULT_WEEK_START_DAY;
}

function getWeekStartDay() {
  const user = getCurrentUser();
  return normalizeWeekStartDay(state.weekStartDay ?? user?.weekStartDay ?? DEFAULT_WEEK_START_DAY);
}

function getWeekStartDayLabel(day = getWeekStartDay()) {
  return getWeekdayName(normalizeWeekStartDay(day));
}

function populateWeekStartDaySelect(select, selectedDay = getWeekStartDay()) {
  if (!select) return;
  select.innerHTML = "";
  for (let day = 0; day <= 6; day += 1) {
    const option = document.createElement("option");
    option.value = String(day);
    option.textContent = getWeekdayName(day);
    if (day === normalizeWeekStartDay(selectedDay)) option.selected = true;
    select.appendChild(option);
  }
}

function saveLanguage(lang) {
  const normalized = normalizeLanguage(lang);
  if (normalized === getLanguage()) return;

  initLanguage(normalized);

  const user = getCurrentUser();
  if (user) {
    persistUser({ ...user, language: normalized });
  }

  applyPageTranslations();
  syncLanguageFlagButtons();
  populateWeekStartDaySelect(weekStartDaySelect, getWeekStartDay());
  populateWeekStartDaySelect(weekStartDayPicker, getWeekStartDay());
  if (foodTypeSelect) populateFoodSelect(foodTypeSelect);
  if (activityTypeSelect) populateTypeSelect(activityTypeSelect, SPORT_ACTIVITIES, t("today.activity"));
  populateProfileWorkSelect(
    document.getElementById("edit-work-type"),
    document.getElementById("edit-work-type")?.value || getDefaultWorkType(user)
  );
  populateProfileWorkSelect(
    document.getElementById("reg-work-type"),
    document.getElementById("reg-work-type")?.value || inferWorkTypeFromActivityLevel(regActivitySelect?.value || "moderate")
  );
  if (PAGE === "login" || PAGE === "register" || PAGE === "reset-password" || PAGE === "tutorial") {
    applyPageTranslations();
    return;
  }
  render();
}

function saveWeekStartDay(day) {
  const normalized = normalizeWeekStartDay(day);
  if (normalized === getWeekStartDay()) return;

  state.weekStartDay = normalized;
  saveState(state);

  const user = getCurrentUser();
  if (user) {
    persistUser({ ...user, weekStartDay: normalized });
  }

  if (weekStartDaySelect) weekStartDaySelect.value = String(normalized);
  if (weekStartDayPicker) weekStartDayPicker.value = String(normalized);
  render();
}

function getWeekBounds(referenceDate = new Date()) {
  const weekStartDay = getWeekStartDay();
  const date = new Date(referenceDate);
  date.setHours(12, 0, 0, 0);
  const day = date.getDay();
  const diffToStart = (day - weekStartDay + 7) % 7;
  const startDate = new Date(date);
  startDate.setDate(date.getDate() - diffToStart);
  const endDate = new Date(startDate);
  endDate.setDate(startDate.getDate() + 6);
  return {
    start: startDate.toISOString().slice(0, 10),
    end: endDate.toISOString().slice(0, 10),
  };
}

function getWeekDaySlots() {
  const { start } = getWeekBounds();
  const days = [];
  for (let index = 0; index < 7; index += 1) {
    const date = new Date(`${start}T12:00:00`);
    date.setDate(date.getDate() + index);
    days.push({
      date: date.toISOString().slice(0, 10),
      label: date.toLocaleDateString(getLocaleTag(), { weekday: "short" }).replace(".", ""),
    });
  }
  return days;
}

function formatWeekRange(start, end) {
  const startDate = new Date(`${start}T12:00:00`);
  const endDate = new Date(`${end}T12:00:00`);
  const options = { day: "numeric", month: "short" };
  return `${startDate.toLocaleDateString(getLocaleTag(), options)} – ${endDate.toLocaleDateString(getLocaleTag(), options)}`;
}

function computeWeeklyStats() {
  const { start, end } = getWeekBounds();
  const today = getTodayKey();
  const todayEntry = buildHistoryEntryFromDayState(state);
  const historyMap = new Map(loadHistory().map((entry) => [entry.date, entry]));

  if (today >= start && today <= end) {
    historyMap.set(today, todayEntry);
  }

  const entries = [...historyMap.values()].filter((entry) => entry.date >= start && entry.date <= end);
  const weeklyTarget = state.goal * 7;
  const totalConsumed = entries.reduce((sum, entry) => sum + entry.consumed, 0);
  const totalBurned = entries.reduce((sum, entry) => sum + entry.burned, 0);
  const weeklyBudget = weeklyTarget + totalBurned;
  const remaining = weeklyBudget - totalConsumed;
  const rawPercent = weeklyBudget > 0 ? (totalConsumed / weeklyBudget) * 100 : 0;

  const daySlots = getWeekDaySlots().map((slot) => {
    const entry = historyMap.get(slot.date);
    const isToday = slot.date === today;
    const isFuture = slot.date > today;
    const goal = entry?.goal || state.goal;
    const burned = entry?.burned || 0;
    const consumed = entry?.consumed || 0;
    const budget = entry?.budget ?? goal + burned;
    return {
      ...slot,
      isToday,
      isFuture,
      consumed,
      goal,
      burned,
      budget,
    };
  });

  return {
    start,
    end,
    weeklyTarget,
    weeklyBudget,
    totalConsumed,
    totalBurned,
    remaining,
    net: getNetCalories(totalConsumed, totalBurned),
    rawPercent,
    percent: weeklyBudget > 0 ? Math.min(rawPercent, 100) : 0,
    daySlots,
    daysTracked: entries.filter((entry) => entry.consumed > 0 || entry.burned > 0).length,
  };
}

function getWeeklyProgressMessage(stats) {
  const { remaining, totalBurned, weeklyTarget, daysTracked } = stats;
  if (daysTracked === 0) {
    return `Target settimanale: ${weeklyTarget.toLocaleString(getLocaleTag())} kcal (${state.goal.toLocaleString(getLocaleTag())} kcal × 7 giorni).`;
  }
  if (remaining >= 0) {
    if (totalBurned > 0) {
      return `Ancora ${remaining.toLocaleString(getLocaleTag())} kcal disponibili questa settimana · +${totalBurned.toLocaleString(getLocaleTag())} kcal da attività.`;
    }
    return `Ancora ${remaining.toLocaleString(getLocaleTag())} kcal disponibili questa settimana.`;
  }
  return `Hai superato il budget settimanale di ${Math.abs(remaining).toLocaleString(getLocaleTag())} kcal.`;
}

function computeWeeklyNutritionStats() {
  const { start, end } = getWeekBounds();
  const today = getTodayKey();
  const todayEntry = buildHistoryEntryFromDayState(state);
  const historyMap = new Map(loadHistory().map((entry) => [entry.date, entry]));

  if (today >= start && today <= end) {
    historyMap.set(today, todayEntry);
  }

  const entries = [...historyMap.values()].filter((entry) => entry.date >= start && entry.date <= end);
  let protein = 0;
  let carbs = 0;
  let fat = 0;
  let micros = emptyMicros();
  let daysWithMeals = 0;

  for (const entry of entries) {
    if (entry.consumed > 0) daysWithMeals += 1;
    protein += entry.protein || 0;
    carbs += entry.carbs || 0;
    fat += entry.fat || 0;
    if (entry.micros) {
      micros = addMicros(micros, entry.micros);
    }
  }

  const { macroGoals } = state;
  const macroGoalsWeekly = {
    protein: macroGoals.protein * 7,
    carbs: macroGoals.carbs * 7,
    fat: macroGoals.fat * 7,
  };
  const microTargets = Object.fromEntries(
    MICRONUTRIENT_KEYS.map((key) => [key, MICRONUTRIENT_META[key].dailyTarget * 7])
  );

  return { protein, carbs, fat, micros, macroGoalsWeekly, microTargets, daysWithMeals };
}

function computeWeeklyActivityStats() {
  const { start, end } = getWeekBounds();
  const today = getTodayKey();
  const todaySummary = summarizeActivities(state.activities);
  const historyMap = new Map(loadHistory().map((entry) => [entry.date, entry]));

  if (today >= start && today <= end) {
    historyMap.set(today, buildHistoryEntryFromDayState(state));
  }

  let total = emptyActivitySummary();
  const daySlots = getWeekDaySlots().map((slot) => {
    const entry = historyMap.get(slot.date);
    const isToday = slot.date === today;
    const isFuture = slot.date > today;
    const summary = isToday ? todaySummary : getEntryActivitySummary(entry);
    total = mergeActivitySummaries(total, summary);
    return {
      ...slot,
      isToday,
      isFuture,
      summary,
      sportBurned: summary.sportBurned,
    };
  });

  const topActivities = Object.entries(total.byName)
    .filter(([, data]) => data.category !== "lavoro")
    .sort((a, b) => b[1].calories - a[1].calories)
    .slice(0, 6);

  const daysActive = daySlots.filter((day) => !day.isFuture && day.sportBurned > 0).length;

  return { total, daySlots, topActivities, daysActive };
}

function formatWeight(kg) {
  return Number(kg).toLocaleString(getLocaleTag(), { minimumFractionDigits: 1, maximumFractionDigits: 1 });
}

function emptyBodyMeasurements() {
  return Object.fromEntries(BODY_MEASUREMENT_KEYS.map((key) => [key, null]));
}

function normalizeBodyMeasurements(source = {}) {
  const result = emptyBodyMeasurements();
  for (const key of BODY_MEASUREMENT_KEYS) {
    const value = source[key];
    if (value != null && Number(value) > 0) {
      result[key] = Math.round(Number(value) * 10) / 10;
    }
  }
  return result;
}

function parseBodyMeasurementInput(raw) {
  const trimmed = String(raw ?? "").trim();
  if (!trimmed) return null;
  const num = Number(trimmed);
  return Number.isFinite(num) && num > 0 ? Math.round(num * 10) / 10 : null;
}

function isValidBodyMeasurement(key, value) {
  if (value == null) return true;
  const meta = BODY_MEASUREMENT_META[key];
  return value >= meta.min && value <= meta.max;
}

function hasAnyBodyMeasurement(measurements) {
  return BODY_MEASUREMENT_KEYS.some((key) => measurements?.[key] != null && measurements[key] > 0);
}

function bodyMeasurementsEqual(a, b) {
  return BODY_MEASUREMENT_KEYS.every((key) => (a?.[key] ?? null) === (b?.[key] ?? null));
}

function formatMeasurement(value) {
  return Number(value).toLocaleString(getLocaleTag(), { minimumFractionDigits: 1, maximumFractionDigits: 1 });
}

function readBodyMeasurementsFromDom(prefix) {
  const result = {};
  for (const key of BODY_MEASUREMENT_KEYS) {
    const el = document.getElementById(`${prefix}-${key}`);
    if (el) result[key] = parseBodyMeasurementInput(el.value);
  }
  return normalizeBodyMeasurements(result);
}

function populateBodyMeasurementInputs(prefix, measurements, activeInputs = []) {
  const activeSet = new Set(activeInputs);
  for (const key of BODY_MEASUREMENT_KEYS) {
    const el = document.getElementById(`${prefix}-${key}`);
    if (!el || activeSet.has(el)) continue;
    const value = measurements?.[key];
    el.value = value != null && value > 0 ? value : "";
  }
}

function saveBodyMeasurements(measurements) {
  const normalized = normalizeBodyMeasurements(measurements);
  if (bodyMeasurementsEqual(state.bodyMeasurements, normalized)) return true;

  state.bodyMeasurements = normalized;
  saveState(state);

  const user = getCurrentUser();
  if (user) {
    persistUser({ ...user, bodyMeasurements: normalized });
  }
  return true;
}

function computeMeasurementDelta(recorded, key) {
  if (recorded.length < 2) return null;
  const first = recorded[0].bodyMeasurements[key];
  const last = recorded[recorded.length - 1].bodyMeasurements[key];
  if (first == null || last == null) return null;
  return Math.round((last - first) * 10) / 10;
}

function formatMeasurementDelta(delta) {
  if (delta == null) return "—";
  if (delta === 0) return "0 cm";
  const sign = delta > 0 ? "+" : "";
  return `${sign}${formatMeasurement(delta)} cm`;
}

function computeWeeklyWeightStats() {
  const { start, end } = getWeekBounds();
  const today = getTodayKey();
  const historyMap = new Map(loadHistory().map((entry) => [entry.date, entry]));
  const todayEntry = buildHistoryEntryFromDayState(state);

  if (today >= start && today <= end) {
    historyMap.set(today, todayEntry);
  }

  const daySlots = getWeekDaySlots().map((slot) => {
    const entry = historyMap.get(slot.date);
    const isToday = slot.date === today;
    const isFuture = slot.date > today;
    let weight = null;
    let bodyMeasurements = emptyBodyMeasurements();
    if (!isFuture) {
      if (isToday) {
        weight = state.weight;
        bodyMeasurements = normalizeBodyMeasurements(state.bodyMeasurements);
      } else if (entry) {
        if (entry.weight != null) weight = entry.weight;
        if (entry.bodyMeasurements) {
          bodyMeasurements = normalizeBodyMeasurements(entry.bodyMeasurements);
        }
      }
    }
    return {
      ...slot,
      isToday,
      isFuture,
      weight,
      hasWeight: weight != null,
      bodyMeasurements,
      hasMeasurements: hasAnyBodyMeasurement(bodyMeasurements),
    };
  });

  const recorded = daySlots.filter((day) => day.hasWeight);
  const weights = recorded.map((day) => day.weight);
  const minWeight = weights.length ? Math.min(...weights) : state.weight;
  const maxWeight = weights.length ? Math.max(...weights) : state.weight;
  const firstRecorded = recorded[0];
  const lastRecorded = recorded[recorded.length - 1];
  let delta = null;
  if (firstRecorded && lastRecorded) {
    delta = Math.round((lastRecorded.weight - firstRecorded.weight) * 10) / 10;
  }

  const measurementSeries = BODY_MEASUREMENT_KEYS.map((key) => {
    const recordedMeasures = daySlots.filter(
      (day) => !day.isFuture && day.bodyMeasurements[key] != null && day.bodyMeasurements[key] > 0
    );
    const current =
      state.bodyMeasurements?.[key] ?? recordedMeasures[recordedMeasures.length - 1]?.bodyMeasurements[key] ?? null;
    return {
      key,
      label: getBodyMeasureLabel(key),
      color: BODY_MEASUREMENT_COLORS[key],
      current,
      delta: computeMeasurementDelta(recordedMeasures, key),
      recorded: recordedMeasures,
      dayValues: daySlots.map((day) => ({
        label: day.label,
        isToday: day.isToday,
        isFuture: day.isFuture,
        value: day.isFuture ? null : day.bodyMeasurements[key],
      })),
    };
  }).filter((series) => series.recorded.length > 0 || (series.current != null && series.current > 0));

  const daysWithMeasurements = daySlots.filter((day) => !day.isFuture && day.hasMeasurements).length;

  return {
    daySlots,
    minWeight,
    maxWeight,
    delta,
    daysRecorded: weights.length,
    currentWeight: state.weight,
    measurementSeries,
    daysWithMeasurements,
    currentMeasurements: normalizeBodyMeasurements(state.bodyMeasurements),
  };
}

function getAllHistoryEntries() {
  const today = getTodayKey();
  const historyMap = new Map(loadHistory().map((entry) => [entry.date, entry]));
  historyMap.set(today, buildHistoryEntryFromDayState(state));
  return [...historyMap.values()].sort((a, b) => a.date.localeCompare(b.date));
}

function formatHistoryDateLabel(dateKey) {
  if (!dateKey) return "—";
  const date = new Date(`${dateKey}T12:00:00`);
  return date.toLocaleDateString(getLocaleTag(), { day: "numeric", month: "short", year: "numeric" });
}

function avgPerDay(total, days, decimals = 0) {
  if (!days || days <= 0) return 0;
  const value = Number(total) / days;
  if (decimals === 0) return Math.round(value);
  const factor = 10 ** decimals;
  return Math.round(value * factor) / factor;
}

function computeTotalStats() {
  const entries = getAllHistoryEntries();
  const user = getCurrentUser();
  const todayWork = getTodayWorkCalories();
  const archivedWork = user?.totalWorkCalories || 0;

  const totals = {
    consumed: 0,
    burned: 0,
    protein: 0,
    carbs: 0,
    fat: 0,
    micros: emptyMicros(),
    activity: emptyActivitySummary(),
    daysTracked: entries.length,
    daysWithFood: 0,
    daysWithActivity: 0,
    firstDate: entries[0]?.date || null,
    lastDate: entries[entries.length - 1]?.date || null,
  };

  const weights = [];

  for (const entry of entries) {
    totals.consumed += entry.consumed || 0;
    totals.burned += entry.burned || 0;
    totals.protein += entry.protein || 0;
    totals.carbs += entry.carbs || 0;
    totals.fat += entry.fat || 0;
    if ((entry.consumed || 0) > 0) totals.daysWithFood += 1;
    if ((entry.burned || 0) > 0) totals.daysWithActivity += 1;
    totals.micros = addMicros(totals.micros, normalizeMicros(entry.micros));
    totals.activity = mergeActivitySummaries(totals.activity, getEntryActivitySummary(entry));
    if (entry.weight != null) {
      weights.push({ date: entry.date, weight: entry.weight });
    }
  }

  totals.net = totals.consumed - totals.burned;

  const sampleDays = Math.max(totals.daysTracked, 1);
  const foodDays = Math.max(totals.daysWithFood, 1);
  const activityDays = Math.max(totals.daysWithActivity, 1);

  totals.avgConsumed = avgPerDay(totals.consumed, sampleDays);
  totals.avgBurned = avgPerDay(totals.burned, sampleDays);
  totals.avgNet = avgPerDay(totals.net, sampleDays);
  totals.avgProtein = avgPerDay(totals.protein, foodDays, 1);
  totals.avgCarbs = avgPerDay(totals.carbs, foodDays, 1);
  totals.avgFat = avgPerDay(totals.fat, foodDays, 1);
  totals.avgMicros = Object.fromEntries(
    MICRONUTRIENT_KEYS.map((key) => [key, avgPerDay(totals.micros[key] || 0, foodDays, 1)])
  );
  totals.avgSportBurned =
    totals.daysWithActivity > 0 ? avgPerDay(totals.activity.sportBurned, activityDays) : 0;
  totals.avgSportSessions =
    totals.daysWithActivity > 0 ? avgPerDay(totals.activity.sportCount, activityDays, 1) : 0;
  totals.avgSportDuration =
    totals.daysWithActivity > 0 ? avgPerDay(totals.activity.sportDuration, activityDays) : 0;
  totals.workBurnedTotal = archivedWork + todayWork;
  totals.avgWorkBurned = avgPerDay(totals.workBurnedTotal, sampleDays);

  const firstWeight = weights[0];
  const lastWeight = weights[weights.length - 1];
  totals.weightDays = weights.length;
  totals.currentWeight = state.weight;
  totals.weightDelta =
    firstWeight && lastWeight && weights.length >= 2
      ? Math.round((lastWeight.weight - firstWeight.weight) * 10) / 10
      : null;
  totals.firstWeight = firstWeight || null;
  totals.lastWeight = lastWeight || null;

  const measurementSeries = BODY_MEASUREMENT_KEYS.map((key) => {
    const recorded = entries.filter(
      (entry) => entry.bodyMeasurements?.[key] != null && entry.bodyMeasurements[key] > 0
    );
    const first = recorded[0];
    const last = recorded[recorded.length - 1];
    let delta = null;
    if (first && last && recorded.length >= 2) {
      delta = Math.round((last.bodyMeasurements[key] - first.bodyMeasurements[key]) * 10) / 10;
    }
    const current =
      state.bodyMeasurements?.[key] ?? last?.bodyMeasurements[key] ?? first?.bodyMeasurements[key] ?? null;
    return {
      key,
      label: getBodyMeasureLabel(key),
      color: BODY_MEASUREMENT_COLORS[key],
      current,
      delta,
      recordedDays: recorded.length,
    };
  });

  totals.measurementSeries = measurementSeries.filter(
    (series) => series.recordedDays > 0 || (series.current != null && series.current > 0)
  );

  const topActivities = Object.entries(totals.activity.byName || {})
    .sort((a, b) => b[1].count - a[1].count || b[1].calories - a[1].calories)
    .slice(0, 8);

  const topActivitiesAvg = topActivities.map(([name, data]) => [
    name,
    {
      ...data,
      avgCount: totals.daysWithActivity > 0 ? avgPerDay(data.count, activityDays, 1) : 0,
      avgCalories: totals.daysWithActivity > 0 ? avgPerDay(data.calories, activityDays) : 0,
    },
  ]);

  return { ...totals, topActivities: topActivitiesAvg, foodDays, activityDays, sampleDays };
}

function getDataStorageKey(userId = getCurrentUserId()) {
  return userId ? `${STORAGE_KEY}-${userId}` : STORAGE_KEY;
}

function getHistoryStorageKey(userId = getCurrentUserId()) {
  return userId ? `${HISTORY_KEY}-${userId}` : HISTORY_KEY;
}

function getSession() {
  try {
    const raw = sessionStorage.getItem(SESSION_KEY) || localStorage.getItem(SESSION_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

function setSession(userId, remember = true) {
  const data = JSON.stringify({ userId });
  if (remember) {
    localStorage.setItem(SESSION_KEY, data);
    sessionStorage.removeItem(SESSION_KEY);
    return;
  }
  sessionStorage.setItem(SESSION_KEY, data);
  localStorage.removeItem(SESSION_KEY);
}

function clearSession() {
  localStorage.removeItem(SESSION_KEY);
  sessionStorage.removeItem(SESSION_KEY);
}

function saveRememberLogin(email, remember) {
  if (remember) {
    localStorage.setItem(REMEMBER_EMAIL_KEY, email.trim().toLowerCase());
    localStorage.setItem(REMEMBER_ME_KEY, "1");
    return;
  }
  localStorage.removeItem(REMEMBER_EMAIL_KEY);
  localStorage.removeItem(REMEMBER_ME_KEY);
}

function loadRememberLoginForm() {
  const rememberCheckbox = document.getElementById("login-remember");
  const emailInput = document.getElementById("login-email");
  if (!rememberCheckbox || !emailInput) return;

  const remember = localStorage.getItem(REMEMBER_ME_KEY) !== "0";
  rememberCheckbox.checked = remember;

  const savedEmail = localStorage.getItem(REMEMBER_EMAIL_KEY);
  if (remember && savedEmail) {
    emailInput.value = savedEmail;
  }
}

function getCurrentUserId() {
  return getSession()?.userId || null;
}

let usersById = {};

async function initUserDatabase() {
  await UsersDB.init();
  usersById = await UsersDB.getAllMap();
}

function loadUsers() {
  return usersById;
}

async function persistUser(user) {
  await UsersDB.update(user);
  usersById[user.id] = user;
}

function getCurrentUser() {
  const userId = getCurrentUserId();
  if (!userId) return null;
  return loadUsers()[userId] || null;
}

async function hashPassword(email, password) {
  const data = new TextEncoder().encode(`${email.trim().toLowerCase()}:${password}`);
  const hash = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(hash))
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");
}

function calculateBMR(weight, height, age, sex) {
  const base = 10 * Number(weight) + 6.25 * Number(height) - 5 * Number(age);
  return Math.round(sex === "f" ? base - 161 : base + 5);
}

function calculateTDEE(bmr, activityLevel) {
  const factor = ACTIVITY_FACTORS[activityLevel] || ACTIVITY_FACTORS.moderate;
  return Math.round(bmr * factor);
}

function calculateBMI(weight, height) {
  const h = Number(height) / 100;
  return Math.round((Number(weight) / (h * h)) * 10) / 10;
}

function calculateTargetCalories({
  weight,
  height,
  age,
  sex,
  activityLevel,
  dietObjective = "maintain",
}) {
  const w = Number(weight) || DEFAULT_WEIGHT;
  const objective = dietObjective || "maintain";
  const offset = DIET_OBJECTIVE_OFFSET[objective] ?? 0;
  const objectiveLabel = getDietObjectiveLabel(objective);

  if (height && age && sex && activityLevel) {
    const tdee = calculateTDEE(calculateBMR(w, height, age, sex), activityLevel);
    const goal = Math.max(1200, tdee + offset);
    const offsetText =
      offset === 0 ? "" : ` ${offset > 0 ? "+" : "−"} ${Math.abs(offset)} kcal (${objectiveLabel})`;
    return {
      goal,
      tdee,
      method: "tdee",
      note: `TDEE ${tdee.toLocaleString(getLocaleTag())} kcal${offsetText} = ${goal.toLocaleString(getLocaleTag())} kcal`,
    };
  }

  const tdee = estimateMaintenanceCalories(w);
  const goal = Math.max(1200, tdee + offset);
  const offsetText =
    offset === 0 ? "" : ` ${offset > 0 ? "+" : "−"} ${Math.abs(offset)} kcal (${objectiveLabel})`;
  return {
    goal,
    tdee,
    method: "estimate",
    note: `Stima ${tdee.toLocaleString(getLocaleTag())} kcal da peso${offsetText} = ${goal.toLocaleString(getLocaleTag())} kcal. Completa la scheda per un calcolo TDEE preciso.`,
  };
}

function getGoalCalculationInput() {
  const user = getCurrentUser();
  return {
    weight: weightInput?.value ?? state.weight ?? user?.weight ?? DEFAULT_WEIGHT,
    height: user?.height,
    age: user?.age,
    sex: user?.sex,
    activityLevel: user?.activityLevel,
    dietObjective: dietObjectiveSelect?.value ?? state.dietObjective ?? user?.dietObjective ?? "maintain",
  };
}

function getRecommendedGoal(user) {
  return calculateTargetCalories({
    weight: user.weight,
    height: user.height,
    age: user.age,
    sex: user.sex,
    activityLevel: user.activityLevel,
    dietObjective: user.dietObjective,
  }).goal;
}

function getUserMetrics(user) {
  const bmr = calculateBMR(user.weight, user.height, user.age, user.sex);
  const tdee = calculateTDEE(bmr, user.activityLevel);
  const goal = getRecommendedGoal(user);
  return {
    bmi: calculateBMI(user.weight, user.height),
    bmr,
    tdee,
    goal,
  };
}

function getWorkCaloriesFromActivities(activities = []) {
  return activities
    .filter((activity) => activity.category === "lavoro")
    .reduce((sum, activity) => sum + activity.calories, 0);
}

function getTodayWorkCalories() {
  return getWorkCaloriesFromActivities(state.activities);
}

function getUserWorkCaloriesTotal(user) {
  if (!user) return 0;
  return (user.totalWorkCalories || 0) + getTodayWorkCalories();
}

function archiveDayWorkCalories(dayData) {
  const userId = getCurrentUserId();
  if (!userId || !dayData?.date) return;

  const user = loadUsers()[userId];
  if (!user || user.lastArchivedDate === dayData.date) return;

  const workCalories = getWorkCaloriesFromActivities(dayData.activities);
  const updated = {
    ...user,
    totalWorkCalories: (user.totalWorkCalories || 0) + workCalories,
    lastArchivedDate: dayData.date,
  };
  persistUser(updated);
}

function refreshProfileWorkStats() {
  const user = getCurrentUser();
  const totalEl = document.getElementById("profile-work-total");
  const metaEl = document.getElementById("profile-work-meta");
  if (!user || !totalEl) return;

  const todayWork = getTodayWorkCalories();
  const archivedWork = user.totalWorkCalories || 0;
  const totalWork = archivedWork + todayWork;

  totalEl.textContent = `${totalWork.toLocaleString(getLocaleTag())} kcal`;
  if (metaEl) {
    metaEl.textContent = `Oggi: ${todayWork.toLocaleString(getLocaleTag())} kcal · Storico: ${archivedWork.toLocaleString(getLocaleTag())} kcal`;
  }
}

function getInitials(name) {
  return (name || "?")
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() || "")
    .join("") || "?";
}

function applyUserToAppState(user) {
  const goal = getRecommendedGoal(user);
  state.weight = Number(user.weight);
  state.bodyMeasurements = normalizeBodyMeasurements(user.bodyMeasurements || state.bodyMeasurements);
  state.goal = goal;
  state.dietObjective = user.dietObjective || "maintain";
  state.weekStartDay = normalizeWeekStartDay(user.weekStartDay ?? state.weekStartDay);
  state.macroGoals = macroGoalsFromCalories(goal, state.split);
  initLanguage(user.language);
  saveState(state);
}

function migrateGuestDataToUser(userId) {
  const guestRaw = localStorage.getItem(STORAGE_KEY);
  const userKey = getDataStorageKey(userId);
  if (guestRaw && !localStorage.getItem(userKey)) {
    localStorage.setItem(userKey, guestRaw);
  }

  const guestHistory = localStorage.getItem(HISTORY_KEY);
  const userHistoryKey = getHistoryStorageKey(userId);
  if (guestHistory && !localStorage.getItem(userHistoryKey)) {
    localStorage.setItem(userHistoryKey, guestHistory);
  }

  const guestHabits = localStorage.getItem(HABITS_KEY);
  const userHabitsKey = getHabitsStorageKey(userId);
  if (guestHabits && !localStorage.getItem(userHabitsKey)) {
    localStorage.setItem(userHabitsKey, guestHabits);
  }
}

function reloadAppState() {
  state = loadState();
}

function showAuthError(message) {
  if (!authErrorEl) return;
  authErrorEl.textContent = message;
  authErrorEl.classList.remove("hidden", "auth-success");
}

function showAuthSuccess(message) {
  if (!authErrorEl) return;
  authErrorEl.textContent = message;
  authErrorEl.classList.remove("hidden");
  authErrorEl.classList.add("auth-success");
}

function clearAuthError() {
  if (!authErrorEl) return;
  authErrorEl.textContent = "";
  authErrorEl.classList.add("hidden");
  authErrorEl.classList.remove("auth-success");
}

function getCurrentPagePath() {
  const path = window.location.pathname;
  const file = path.substring(path.lastIndexOf("/") + 1) || "index.html";
  return file + window.location.search;
}

function isSafeRedirect(url) {
  if (!url || url.includes("login.html") || url.includes("registrati.html") || url.includes("reimposta-password.html")) return false;
  try {
    const resolved = new URL(url, window.location.href);
    return resolved.origin === window.location.origin;
  } catch {
    return false;
  }
}

function getLoginRedirectUrl() {
  const redirect = new URLSearchParams(window.location.search).get("redirect");
  if (redirect && isSafeRedirect(redirect)) return redirect;
  return "utente.html";
}

function getPostAuthUrl() {
  return getLoginRedirectUrl();
}

function redirectAfterAuth() {
  window.location.href = getPostAuthUrl();
}

function requireAuth() {
  if (PAGE === "login" || PAGE === "register" || PAGE === "reset-password" || PAGE === "tutorial") return;
  if (getCurrentUserId()) return;
  const redirect = encodeURIComponent(getCurrentPagePath());
  window.location.replace(`login.html?redirect=${redirect}`);
}

function requireSubscription() {
  /* Abbonamento non richiesto */
}

function isAuthPage() {
  return PAGE === "login" || PAGE === "register" || PAGE === "reset-password";
}

function getAuthPageQuerySuffix() {
  const redirect = new URLSearchParams(window.location.search).get("redirect");
  return redirect && isSafeRedirect(redirect) ? `?redirect=${encodeURIComponent(redirect)}` : "";
}

function wireAuthPageLinks() {
  const suffix = getAuthPageQuerySuffix();

  const registerLink = document.getElementById("register-page-link");
  if (registerLink) registerLink.href = `registrati.html${suffix}`;

  const loginLink = document.getElementById("login-page-link");
  if (loginLink) loginLink.href = `login.html${suffix}`;

  const forgotLink = document.getElementById("forgot-password-link");
  if (forgotLink) {
    const params = new URLSearchParams(window.location.search);
    const email = document.getElementById("login-email")?.value.trim();
    if (email) params.set("email", email);
    const query = params.toString();
    forgotLink.href = `reimposta-password.html${query ? `?${query}` : ""}`;
  }
}

function wireForgotPasswordLink() {
  const emailInput = document.getElementById("login-email");
  const forgotLink = document.getElementById("forgot-password-link");
  if (!emailInput || !forgotLink) return;

  const updateForgotLink = () => wireAuthPageLinks();
  emailInput.addEventListener("input", updateForgotLink);
  updateForgotLink();
}

function switchAuthTab(tab) {
  document.querySelectorAll(".auth-tab").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.authTab === tab);
  });
  loginForm?.classList.toggle("hidden", tab !== "login");
  registerForm?.classList.toggle("hidden", tab !== "register");
  clearAuthError();
}

function renderProfileMeasurementsDisplay(user) {
  const container = document.getElementById("profile-measurements-display");
  if (!container) return;

  const measurements = normalizeBodyMeasurements(user?.bodyMeasurements);
  const pills = [
    `<div class="profile-measurement-pill profile-measurement-pill-weight"><span>Peso</span><strong>${formatWeight(user?.weight ?? state.weight)} kg</strong></div>`,
    ...BODY_MEASUREMENT_KEYS.map((key) => {
      const value = measurements[key];
      if (!value) return "";
      return `<div class="profile-measurement-pill"><span>${getBodyMeasureLabel(key)}</span><strong>${formatMeasurement(value)} cm</strong></div>`;
    }),
  ].filter(Boolean);

  if (!hasAnyBodyMeasurement(measurements)) {
    container.innerHTML =
      '<p class="profile-measurements-empty">Aggiungi le misure corporee nel modulo sotto.</p>';
    return;
  }

  container.innerHTML = pills.join("");
}

function populateProfileView(user) {
  const metrics = getUserMetrics(user);
  document.getElementById("profile-avatar").textContent = getInitials(user.name);
  document.getElementById("profile-name").textContent = user.name;
  document.getElementById("profile-email").textContent = user.email;
  document.getElementById("profile-since").textContent = user.createdAt
    ? `Membro dal ${new Date(user.createdAt).toLocaleDateString(getLocaleTag())}`
    : "";
  document.getElementById("profile-bmi").textContent = String(metrics.bmi);
  document.getElementById("profile-bmr").textContent = `${metrics.bmr} kcal`;
  document.getElementById("profile-tdee").textContent = `${metrics.tdee} kcal`;
  document.getElementById("profile-goal").textContent = `${metrics.goal} kcal`;
  refreshProfileWorkStats();
  renderProfileMeasurementsDisplay(user);
  document.getElementById("edit-name").value = user.name;
  document.getElementById("edit-weight").value = user.weight;
  populateBodyMeasurementInputs("edit", user.bodyMeasurements);
  document.getElementById("edit-age").value = user.age;
  document.getElementById("edit-height").value = user.height;
  document.getElementById("edit-sex").value = user.sex;
  document.getElementById("edit-activity").value = user.activityLevel;
  document.getElementById("edit-diet-objective").value = user.dietObjective;
  populateProfileWorkSelect(
    document.getElementById("edit-work-type"),
    getDefaultWorkType(user)
  );
  document.getElementById("profile-calc-note").textContent =
    `Target calcolato: TDEE ${metrics.tdee} kcal + obiettivo ${getDietObjectiveLabel(user.dietObjective)}.`;
}

function updateProfileUI() {
  if (!profileBanner) return;
  const user = getCurrentUser();
  if (!user) {
    profileBanner.classList.add("hidden");
    profileBtnAvatar.classList.add("hidden");
    profileBtnIcon.classList.remove("hidden");
    return;
  }

  const metrics = getUserMetrics(user);
  const initials = getInitials(user.name);

  profileBanner.classList.remove("hidden");
  profileBtnAvatar.textContent = initials;
  profileBtnAvatar.classList.remove("hidden");
  profileBtnIcon.classList.add("hidden");

  document.getElementById("banner-avatar").textContent = initials;
  document.getElementById("banner-name").textContent = user.name;
  document.getElementById("banner-meta").textContent =
    `${user.age} anni · ${user.height} cm · ${user.weight} kg · ${getActivityLevelLabel(user.activityLevel)}`;
  document.getElementById("banner-bmi").textContent = String(metrics.bmi);
  document.getElementById("banner-tdee").textContent = `${metrics.tdee}`;
  document.getElementById("banner-goal").textContent = `${metrics.goal}`;
  refreshProfileWorkStats();
}

async function registerUser(formData) {
  const email = formData.email.trim().toLowerCase();

  const user = {
    id: crypto.randomUUID(),
    name: formData.name.trim(),
    email,
    passwordHash: await hashPassword(email, formData.password),
    age: Number(formData.age),
    sex: formData.sex,
    height: Number(formData.height),
    weight: Number(formData.weight),
    activityLevel: formData.activityLevel,
    dietObjective: formData.dietObjective || "maintain",
    defaultWorkType: formData.defaultWorkType || inferWorkTypeFromActivityLevel(formData.activityLevel),
    totalWorkCalories: 0,
    lastArchivedDate: null,
    bodyMeasurements: normalizeBodyMeasurements(formData.bodyMeasurements),
    weekStartDay: DEFAULT_WEEK_START_DAY,
    language: getLanguage(),
    trialUsed: false,
    subscriptionPlan: null,
    subscriptionExpiresAt: null,
    createdAt: new Date().toISOString(),
  };

  await UsersDB.create(user);
  usersById[user.id] = user;
  migrateGuestDataToUser(user.id);
  setSession(user.id, true);
  reloadAppState();
  applyUserToAppState(user);
  updateProfileUI();
  if (isAuthPage()) {
    redirectAfterAuth();
    return;
  }
  profileDialog?.close();
  render();
}

async function resetUserPassword(email, name, password, confirmPassword) {
  const normalized = email.trim().toLowerCase();
  const nameTrimmed = name.trim();

  if (!normalized || !nameTrimmed) {
    throw new Error(t("auth.resetMissingFields"));
  }
  if (password.length < 6) {
    throw new Error(t("auth.passwordTooShort"));
  }
  if (password !== confirmPassword) {
    throw new Error(t("auth.passwordMismatch"));
  }

  const user = await UsersDB.getByEmail(normalized);
  if (!user) {
    throw new Error(t("auth.resetAccountNotFound"));
  }
  if (user.name.trim().toLowerCase() !== nameTrimmed.toLowerCase()) {
    throw new Error(t("auth.resetVerifyFailed"));
  }

  user.passwordHash = await hashPassword(normalized, password);
  await persistUser(user);
  return user;
}

async function loginUser(email, password, remember = true) {
  const normalized = email.trim().toLowerCase();
  const user = await UsersDB.getByEmail(normalized);
  if (!user) throw new Error(t("auth.invalidCredentials"));

  const passwordHash = await hashPassword(normalized, password);
  if (user.passwordHash !== passwordHash) {
    throw new Error(t("auth.invalidCredentials"));
  }

  usersById[user.id] = user;
  setSession(user.id, remember);
  saveRememberLogin(normalized, remember);
  reloadAppState();
  applyUserToAppState(user);
  updateProfileUI();
  if (isAuthPage()) {
    redirectAfterAuth();
    return;
  }
  profileDialog?.close();
  render();
}

function logoutUser() {
  if (!confirm("Vuoi uscire dal tuo account?")) return;
  clearSession();
  reloadAppState();
  updateProfileUI();
  profileDialog?.close();
  window.location.href = "login.html";
}

function saveProfileEdits(formData) {
  const user = getCurrentUser();
  if (!user) return;

  const updated = {
    ...user,
    name: formData.name.trim(),
    weight: Number(formData.weight),
    age: Number(formData.age),
    height: Number(formData.height),
    sex: formData.sex,
    activityLevel: formData.activityLevel,
    dietObjective: formData.dietObjective,
    defaultWorkType: formData.defaultWorkType || inferWorkTypeFromActivityLevel(formData.activityLevel),
    bodyMeasurements: normalizeBodyMeasurements(formData.bodyMeasurements),
  };

  persistUser(updated).then(() => {
    state.weight = updated.weight;
    state.bodyMeasurements = updated.bodyMeasurements;
    state.dietObjective = updated.dietObjective;
    const goal = getRecommendedGoal(updated);
    state.goal = goal;
    state.macroGoals = macroGoalsFromCalories(goal, state.split);
    saveState(state);
    updateProfileUI();
    populateProfileView(updated);
    refreshTodayWorkFromProfile();
    render();
    profileDialog?.close();
    updateAutoGoalPreview();
  });
}

function formatToday() {
  return new Date().toLocaleDateString(getLocaleTag(), {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function formatTime(isoString) {
  return new Date(isoString).toLocaleTimeString(getLocaleTag(), {
    hour: "2-digit",
    minute: "2-digit",
  });
}

function formatGrams(value) {
  return Number(value).toLocaleString(getLocaleTag(), { maximumFractionDigits: 1 });
}

function formatPortion(grams, unit = "g") {
  if (!grams && grams !== 0) return "";
  return `${formatGrams(grams)} ${unit}`;
}

function scaleFoodNutrition(food, grams) {
  const baseGrams = food.grams || 100;
  const ratio = grams / baseGrams;
  return {
    calories: Math.round(food.calories * ratio),
    protein: Math.round(food.protein * ratio * 10) / 10,
    carbs: Math.round(food.carbs * ratio * 10) / 10,
    fat: Math.round(food.fat * ratio * 10) / 10,
  };
}

function updateFoodGramsSuffix(unit = "g") {
  if (foodGramsSuffix) foodGramsSuffix.textContent = unit;
}

function macroGoalsFromCalories(calories, split) {
  return {
    protein: Math.round((calories * (split.protein / 100)) / KCAL_PER_G.protein),
    carbs: Math.round((calories * (split.carbs / 100)) / KCAL_PER_G.carbs),
    fat: Math.round((calories * (split.fat / 100)) / KCAL_PER_G.fat),
  };
}

function estimateMacrosFromCalories(calories, split) {
  return {
    protein: round1((calories * (split.protein / 100)) / KCAL_PER_G.protein),
    carbs: round1((calories * (split.carbs / 100)) / KCAL_PER_G.carbs),
    fat: round1((calories * (split.fat / 100)) / KCAL_PER_G.fat),
  };
}

function round1(n) {
  return Math.round(n * 10) / 10;
}

function calcBurnedCalories(met, durationMin, intensity, weight = state.weight) {
  const hours = Number(durationMin) / 60;
  const factor = INTENSITY_FACTOR[intensity] || 1;
  return Math.max(1, Math.round(Number(met) * Number(weight) * hours * factor));
}

function getActivityById(id) {
  return ALL_ACTIVITIES.find((activity) => activity.id === id);
}

function getWorkActivityById(id) {
  return WORK_ACTIVITIES.find((activity) => activity.id === id);
}

function inferWorkTypeFromActivityLevel(activityLevel) {
  return ACTIVITY_LEVEL_TO_WORK[activityLevel] || DEFAULT_WORK_TYPE;
}

function getDefaultWorkType(user) {
  if (user?.defaultWorkType && getWorkActivityById(user.defaultWorkType)) {
    return user.defaultWorkType;
  }
  if (user?.activityLevel) {
    return inferWorkTypeFromActivityLevel(user.activityLevel);
  }
  return DEFAULT_WORK_TYPE;
}

function populateProfileWorkSelect(select, selectedId) {
  if (!select) return;
  const resolved = selectedId || DEFAULT_WORK_TYPE;
  select.innerHTML = "";
  for (const activity of WORK_ACTIVITIES) {
    const option = document.createElement("option");
    option.value = activity.id;
    option.textContent = getActivityName(activity);
    option.selected = activity.id === resolved;
    select.appendChild(option);
  }
}

function getDefaultWorkPreset() {
  return getWorkActivityById(getDefaultWorkType(getCurrentUser())) || getWorkActivityById(DEFAULT_WORK_TYPE);
}

function hasWorkedToday() {
  return state.activities.some((activity) => activity.category === "lavoro");
}

function createWorkActivityFromPreset(preset) {
  const duration = preset.defaultDuration || 480;
  const intensity = preset.defaultIntensity || "moderata";
  return {
    id: crypto.randomUUID(),
    name: preset.name,
    activityId: preset.id,
    calories: calcBurnedCalories(preset.met, duration, intensity, state.weight),
    duration,
    intensity,
    category: "lavoro",
    addedAt: new Date().toISOString(),
  };
}

function setWorkedToday(worked) {
  state.activities = state.activities.filter((activity) => activity.category !== "lavoro");
  if (worked) {
    const preset = getDefaultWorkPreset();
    if (preset) state.activities.unshift(createWorkActivityFromPreset(preset));
  }
  saveState(state);
  render();
}

function refreshTodayWorkFromProfile() {
  if (!hasWorkedToday()) return;
  const preset = getDefaultWorkPreset();
  if (!preset) return;
  state.activities = state.activities.filter((activity) => activity.category !== "lavoro");
  state.activities.unshift(createWorkActivityFromPreset(preset));
  saveState(state);
}

function renderWorkToggle() {
  if (!workToggleMeta) return;
  const worked = hasWorkedToday();
  document.querySelectorAll('input[name="worked-today"]').forEach((input) => {
    input.checked = input.value === "yes" ? worked : !worked;
  });

  if (worked) {
    const work = state.activities.find((activity) => activity.category === "lavoro");
    workToggleMeta.textContent = work
      ? `${getActivityDisplayName(work)} · ${formatDuration(work.duration)} · −${work.calories.toLocaleString(getLocaleTag())} kcal`
      : "";
    workToggleMeta.classList.remove("hidden");
  } else {
    workToggleMeta.textContent = "";
    workToggleMeta.classList.add("hidden");
  }
}

function initWorkToggle() {
  document.querySelectorAll('input[name="worked-today"]').forEach((input) => {
    input.addEventListener("change", () => {
      if (input.checked) setWorkedToday(input.value === "yes");
    });
  });
  renderWorkToggle();
}

function rolloverToNewDay(previousState) {
  const today = getTodayKey();
  const staleDate = previousState.date || today;
  const normalized = normalizeState({ ...previousState, date: staleDate });
  archiveDayWorkCalories(normalized);
  archiveDayToHistory(normalized);
  return finalizeNewDayState(createEmptyState({ ...normalized, ...getProfilePreserve() }));
}

function ensureCurrentDayState() {
  const today = getTodayKey();
  if ((state.date || today) === today) return false;
  state = rolloverToNewDay(state);
  localStorage.setItem(getDataStorageKey(), JSON.stringify(state));
  upsertTodayInHistory(state);
  return true;
}

function initDayChangeMonitor() {
  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState !== "visible") return;
    if (ensureCurrentDayState()) render();
  });

  window.setInterval(() => {
    if (ensureCurrentDayState()) render();
  }, 60_000);
}

function finalizeNewDayState(dayState) {
  return normalizeState(dayState);
}

function formatDuration(minutes) {
  const mins = Number(minutes);
  if (mins >= 60 && mins % 60 === 0) {
    const hours = mins / 60;
    return `${hours} h`;
  }
  return `${mins} min`;
}

function getSelectedIntensity(form, groupName) {
  if (!form) return "moderata";
  const selected = form.querySelector(`input[name="${groupName}"]:checked`);
  return selected ? selected.value : "moderata";
}

function setSelectedIntensity(form, groupName, intensity) {
  if (!form) return;
  const input = form.querySelector(`input[name="${groupName}"][value="${intensity}"]`);
  if (input) input.checked = true;
}

function getFormInputs(config) {
  const { form, typeSelect, nameCustom, durationInput, intensityGroup, category } = config;
  const type = typeSelect.value;
  const isCustom = type === "altro";
  const preset = isCustom ? null : getActivityById(type);
  const name = isCustom ? nameCustom.value.trim() : preset?.name || "";
  const met = isCustom ? DEFAULT_MET : preset?.met || DEFAULT_MET;
  const duration = Number(durationInput.value) || config.defaultDuration;
  const intensity = getSelectedIntensity(form, intensityGroup);
  return { type, isCustom, name, met, duration, intensity, category, activityId: isCustom ? null : type };
}

function updateFormTypeField(config) {
  const isCustom = config.typeSelect.value === "altro";
  config.typeSelect.classList.toggle("hidden", isCustom);
  config.nameCustom.classList.toggle("hidden", !isCustom);
  if (isCustom) {
    config.nameCustom.required = true;
    config.typeSelect.required = false;
  } else {
    config.nameCustom.required = false;
    config.typeSelect.required = true;
  }
}

function updateFormPreview(config) {
  const { isCustom, name, met, duration, intensity, type } = getFormInputs(config);

  if (!config.typeSelect.value || (isCustom && !name)) {
    config.caloriesValueEl.textContent = "0";
    config.caloriesHidden.value = "0";
    config.previewEl.textContent = "";
    return;
  }

  const calories = calcBurnedCalories(met, duration, intensity);

  const preset = isCustom ? null : getActivityById(type);
  const displayName = isCustom ? name : getActivityName(preset);
  config.caloriesValueEl.textContent = calories.toLocaleString(getLocaleTag());
  config.caloriesHidden.value = String(calories);
  config.previewEl.textContent = `${displayName} · ${formatDuration(duration)} · ${getIntensityLabel(intensity)} → ${calories} kcal (${state.weight} kg)`;
}

function applyActivityPreset(preset, config) {
  if (!preset) return;
  setSelectedIntensity(config.form, config.intensityGroup, preset.defaultIntensity);
  config.durationInput.value = String(preset.defaultDuration || config.defaultDuration);
}

function resolveActivityListName(storedName) {
  if (!storedName) return t("today.activity");
  for (const activity of ALL_ACTIVITIES) {
    if (normalizeHabitName(activity.name) === normalizeHabitName(storedName)) {
      return getActivityName(activity);
    }
  }
  return storedName;
}

function resolveFoodListName(storedName, foodId) {
  if (foodId) {
    const food = getFoodById(foodId);
    if (food) return getFoodName(food);
  }
  if (!storedName) return "";
  for (const food of FOOD_CATALOG) {
    if (normalizeHabitName(food.name) === normalizeHabitName(storedName)) {
      return getFoodName(food);
    }
  }
  return storedName;
}

function getFoodById(id) {
  return FOOD_CATALOG.find((food) => food.id === id);
}

function populateFoodSelect(select) {
  if (!select) return;
  select.innerHTML = `<option value="" disabled selected>${t("food.select")}</option>`;

  const foods = [...FOOD_CATALOG].sort((a, b) =>
    getFoodName(a).localeCompare(getFoodName(b), getLocaleTag(), { sensitivity: "base" })
  );

  for (const food of foods) {
    const option = document.createElement("option");
    option.value = food.id;
    const label = getFoodName(food);
    option.textContent = label;
    option.dataset.search = label.toLowerCase();
    select.appendChild(option);
  }

  const other = document.createElement("option");
  other.value = "altro";
  other.textContent = t("food.other");
  select.appendChild(other);
}

function filterFoodSelect(query) {
  if (!foodTypeSelect) return;
  const normalized = query.trim().toLowerCase();

  for (const option of foodTypeSelect.querySelectorAll("option")) {
    if (!option.value) continue;
    if (option.value === "altro") {
      option.hidden = false;
      continue;
    }
    const matches = !normalized || option.dataset.search?.includes(normalized);
    option.hidden = !matches;
  }
}

function updateFoodFormTypeField() {
  if (!foodTypeSelect || !foodNameInput) return;
  const isCustom = foodTypeSelect.value === "altro";
  foodNameInput.classList.toggle("hidden", !isCustom);
  foodNameInput.required = isCustom;
  if (isCustom) {
    selectedFoodPreset = null;
    if (foodGramsInput && !foodGramsInput.value) foodGramsInput.value = "100";
    updateFoodGramsSuffix("g");
  }
}

function updateFoodFromGrams() {
  if (!selectedFoodPreset || !foodGramsInput || !foodCaloriesInput) return;
  const grams = Number(foodGramsInput.value);
  if (!grams || grams <= 0) return;

  const scaled = scaleFoodNutrition(selectedFoodPreset, grams);
  foodCaloriesInput.value = String(scaled.calories);
  document.getElementById("food-protein").value = scaled.protein;
  document.getElementById("food-carbs").value = scaled.carbs;
  document.getElementById("food-fat").value = scaled.fat;
  updateMacroPreview();
}

function applyFoodPreset(food) {
  if (!food || !foodNameInput || !foodCaloriesInput) return;

  selectedFoodPreset = food;
  foodNameInput.value = getFoodName(food);
  if (foodGramsInput) foodGramsInput.value = String(food.grams || 100);
  updateFoodGramsSuffix(food.unit || "g");
  foodCaloriesInput.value = String(food.calories);
  document.getElementById("food-protein").value = food.protein ?? "";
  document.getElementById("food-carbs").value = food.carbs ?? "";
  document.getElementById("food-fat").value = food.fat ?? "";
  autoMacrosCheckbox.checked = false;
  toggleMacroFields();
  updateMacroPreview();
}

function resetFoodForm() {
  if (!addForm) return;
  addForm.reset();
  selectedFoodPreset = null;
  if (foodTypeSelect) foodTypeSelect.selectedIndex = 0;
  if (foodGramsInput) foodGramsInput.value = "100";
  updateFoodGramsSuffix("g");
  autoMacrosCheckbox.checked = true;
  toggleMacroFields();
  updateFoodFormTypeField();
  filterFoodSelect("");
  if (foodSearchInput) foodSearchInput.value = "";
  if (macroPreviewEl) macroPreviewEl.textContent = "";
}

function populateTypeSelect(select, activities, placeholder) {
  if (!select) return;
  select.innerHTML = `<option value="" disabled selected>${placeholder}</option>`;
  for (const activity of activities) {
    const option = document.createElement("option");
    option.value = activity.id;
    option.textContent = getActivityName(activity);
    select.appendChild(option);
  }
  const other = document.createElement("option");
  other.value = "altro";
  other.textContent = t("common.other");
  select.appendChild(other);
}

function resetForm(config) {
  config.form.reset();
  config.typeSelect.value = "";
  config.durationInput.value = String(config.defaultDuration);
  setSelectedIntensity(config.form, config.intensityGroup, "moderata");
  config.nameCustom.value = "";
  updateFormTypeField(config);
  updateFormPreview(config);
}

const sportFormConfig = {
  category: "sport",
  form: activityForm,
  typeSelect: activityTypeSelect,
  nameCustom: activityNameCustom,
  durationInput: activityDurationInput,
  caloriesValueEl: activityCaloriesValue,
  caloriesHidden: activityCaloriesHidden,
  previewEl: activityPreviewEl,
  intensityGroup: "sport-intensity",
  defaultDuration: 30,
};

function initActivityForm(config) {
  if (!config.form) return;

  config.form.addEventListener("submit", (event) => {
    event.preventDefault();
    updateFormPreview(config);
    const { isCustom, name, duration, intensity, category, activityId } = getFormInputs(config);
    const calories = Number(config.caloriesHidden.value);

    if (!config.typeSelect.value) {
      config.typeSelect.focus();
      return;
    }
    if (isCustom && !name) {
      config.nameCustom.focus();
      return;
    }
    if (!calories) return;

    addActivity({ name, calories, duration, intensity, category, activityId });
    resetForm(config);
  });

  config.typeSelect?.addEventListener("change", () => {
    const preset = getActivityById(config.typeSelect.value);
    if (preset) applyActivityPreset(preset, config);
    updateFormTypeField(config);
    updateFormPreview(config);
  });

  config.nameCustom?.addEventListener("input", () => updateFormPreview(config));
  config.durationInput?.addEventListener("input", () => updateFormPreview(config));
  config.form.querySelectorAll(`input[name="${config.intensityGroup}"]`).forEach((input) => {
    input.addEventListener("change", () => updateFormPreview(config));
  });
}

function formatTomorrow() {
  const date = new Date();
  date.setDate(date.getDate() + 1);
  return date.toLocaleDateString(getLocaleTag(), {
    weekday: "long",
    day: "numeric",
    month: "long",
  });
}

function estimateMaintenanceCalories(weight) {
  return Math.round(Number(weight) * 24 * 1.35);
}

function getObjectiveBaseCalories() {
  return calculateTargetCalories(getGoalCalculationInput()).goal;
}

function getPlanFoodCategory(food) {
  if (food.category) return food.category;
  return inferMealCategory(food);
}

function customFoodToPlanItem(key, custom, score = 0) {
  const baseGrams = custom.grams || 100;
  return {
    id: key,
    name: custom.name,
    category: getPlanFoodCategory(custom),
    grams: baseGrams,
    unit: custom.unit || "g",
    calories: Number(custom.calories) || 0,
    protein: Number(custom.protein) || 0,
    carbs: Number(custom.carbs) || 0,
    fat: Number(custom.fat) || 0,
    score,
    isCustom: true,
  };
}

function catalogFoodToPlanItem(food, score = 0) {
  return {
    ...food,
    score,
    isCustom: false,
  };
}

function bumpPlanFoodScore(pool, food, amount = 1) {
  const key = food.id;
  const existing = pool.get(key);
  if (existing) {
    existing.score += amount;
    return;
  }
  pool.set(key, catalogFoodToPlanItem(food, amount));
}

function getUserPlanFoodPool() {
  const habits = loadHabits();
  const pool = new Map();

  for (const [key, uses] of Object.entries(habits.foods)) {
    const catalog = getFoodById(key);
    if (catalog) {
      pool.set(key, catalogFoodToPlanItem(catalog, uses * 10));
      continue;
    }
    if (habits.customFoods[key]) {
      pool.set(key, customFoodToPlanItem(key, habits.customFoods[key], uses * 10));
    }
  }

  const cutoff = new Date();
  cutoff.setDate(cutoff.getDate() - PLAN_HISTORY_DAYS);
  const cutoffKey = cutoff.toISOString().slice(0, 10);

  const registerMealFood = (meal) => {
    const food = findFoodInCatalog({ foodId: meal.foodId, name: meal.name });
    if (food) {
      bumpPlanFoodScore(pool, food, 1);
      return;
    }
    if (!meal.name) return;
    const customKey = `custom:${normalizeHabitName(meal.name)}`;
    const existing = pool.get(customKey);
    if (existing) {
      existing.score += 1;
      return;
    }
    pool.set(
      customKey,
      customFoodToPlanItem(customKey, {
        name: meal.name,
        calories: meal.calories,
        protein: meal.protein,
        carbs: meal.carbs,
        fat: meal.fat,
        grams: meal.grams,
        unit: meal.unit,
      }, 1)
    );
  };

  for (const entry of loadHistory()) {
    if (entry.date < cutoffKey) continue;
    for (const meal of entry.meals || []) registerMealFood(meal);
  }

  for (const meal of state.meals || []) registerMealFood(meal);

  return [...pool.values()].sort((a, b) => b.score - a.score || getFoodName(a).localeCompare(getFoodName(b), getLocaleTag()));
}

function getCatalogFoodsForSlot(slotKey) {
  const categories = MEAL_SLOT_CATEGORIES[slotKey] || [];
  return FOOD_CATALOG.filter((food) => categories.includes(food.category));
}

function sortFoodsByPlanPreference(foods, preferProtein, preferLowCarbs) {
  return [...foods].sort((a, b) => {
    if (b.score !== a.score) return b.score - a.score;
    const density = (food, macro) => macro / Math.max(food.calories, 1);
    if (preferProtein) return density(b, b.protein) - density(a, a.protein);
    if (preferLowCarbs) return density(a, a.carbs) - density(b, b.carbs);
    return getFoodName(a).localeCompare(getFoodName(b), getLocaleTag());
  });
}

function pickFoodForCategories(foods, categories, excludeIds = new Set()) {
  for (const category of categories) {
    const match = foods.find((food) => food.category === category && !excludeIds.has(food.id));
    if (match) return match;
  }
  return foods.find((food) => !excludeIds.has(food.id)) || null;
}

function gramsForTargetCalories(food, targetCalories) {
  if (!food.calories || food.calories <= 0 || !targetCalories) return food.grams || 100;
  const baseGrams = food.grams || 100;
  const grams = Math.round(((targetCalories / food.calories) * baseGrams) / 5) * 5;
  const minGrams = food.unit === "ml" ? 50 : 30;
  return Math.min(500, Math.max(minGrams, grams));
}

function buildPlanItem(food, targetCalories) {
  const grams = gramsForTargetCalories(food, targetCalories);
  const scaled = scaleFoodNutrition(food, grams);
  return {
    foodId: food.id,
    name: getFoodName(food),
    grams,
    unit: food.unit || "g",
    isCustom: Boolean(food.isCustom),
    score: food.score || 0,
    ...scaled,
  };
}

function combinePlanItems(items) {
  const totals = items.reduce(
    (acc, item) => ({
      calories: acc.calories + item.calories,
      protein: Math.round((acc.protein + item.protein) * 10) / 10,
      carbs: Math.round((acc.carbs + item.carbs) * 10) / 10,
      fat: Math.round((acc.fat + item.fat) * 10) / 10,
    }),
    { calories: 0, protein: 0, carbs: 0, fat: 0 }
  );

  const name = items
    .map((item) => `${getFoodName(item)} (${formatPortion(item.grams, item.unit)})`)
    .join(" + ");

  return {
    name,
    items,
    ...totals,
    fromUserFoods: items.some((item) => item.score > 0),
  };
}

function getFoodCandidatesForSlot(slotKey, userPool) {
  const categories = new Set(MEAL_SLOT_CATEGORIES[slotKey] || []);
  const fromUser = userPool.filter((food) => categories.has(getPlanFoodCategory(food)));
  if (fromUser.length) return fromUser;
  return getCatalogFoodsForSlot(slotKey).map((food) => catalogFoodToPlanItem(food, 0));
}

function pickMealFromUserFoods(slotKey, targetKcal, userPool, preferProtein, preferLowCarbs, usedFoodIds) {
  let candidates = sortFoodsByPlanPreference(
    getFoodCandidatesForSlot(slotKey, userPool),
    preferProtein,
    preferLowCarbs
  );

  if (!candidates.length) {
    candidates = sortFoodsByPlanPreference(
      getCatalogFoodsForSlot(slotKey).map((food) => catalogFoodToPlanItem(food, 0)),
      preferProtein,
      preferLowCarbs
    );
  }

  const available = candidates.filter((food) => !usedFoodIds.has(food.id));
  const foods = available.length ? available : candidates;
  const isMainMeal = slotKey === "pranzo" || slotKey === "cena";

  if (isMainMeal && targetKcal >= 300 && foods.length > 1) {
    const primaryCategories = MEAL_SLOT_PRIMARY_CATEGORIES[slotKey];
    const secondaryCategories = MEAL_SLOT_SECONDARY_CATEGORIES[slotKey];
    const primary = pickFoodForCategories(foods, primaryCategories);
    const secondary = primary
      ? pickFoodForCategories(foods, secondaryCategories, new Set([primary.id]))
      : null;

    if (primary && secondary) {
      usedFoodIds.add(primary.id);
      usedFoodIds.add(secondary.id);
      return combinePlanItems([
        buildPlanItem(primary, Math.round(targetKcal * 0.58)),
        buildPlanItem(secondary, Math.round(targetKcal * 0.42)),
      ]);
    }
  }

  const food = foods[0];
  if (!food) {
    return combinePlanItems([
      buildPlanItem(catalogFoodToPlanItem(FOOD_CATALOG[0], 0), targetKcal),
    ]);
  }

  usedFoodIds.add(food.id);
  return combinePlanItems([buildPlanItem(food, targetKcal)]);
}

function buildTomorrowPlan() {
  const consumed = getTotals();
  const burned = getBurnedCalories();
  const budget = getEffectiveBudget(state.goal, burned);
  const remaining = budget - consumed.calories;
  const overshoot = consumed.calories - budget;

  let tomorrowKcal = getObjectiveBaseCalories();
  let note = "";

  if (overshoot > 80) {
    const correction = Math.min(Math.round(overshoot * 0.45), 280);
    tomorrowKcal = Math.max(1200, tomorrowKcal - correction);
    note = t("tomorrow.overshoot", { overshoot, tomorrowKcal });
  } else if (remaining > 400 && consumed.calories > 0) {
    note = t("tomorrow.underBudget", { remaining, tomorrowKcal });
  } else if (consumed.calories === 0 && burned === 0) {
    note = t("tomorrow.empty", { tomorrowKcal, goal: state.goal, weight: state.weight });
  } else {
    note = t("tomorrow.balanced", { tomorrowKcal });
  }

  const preferProtein = consumed.protein < state.macroGoals.protein * 0.75;
  const preferLowCarbs = consumed.carbs > state.macroGoals.carbs * 1.1;
  const userFoodPool = getUserPlanFoodPool();
  const usedFoodIds = new Set();

  const meals = MEAL_SLOTS.map((slot) => {
    const target = Math.round(tomorrowKcal * slot.share);
    const suggestion = pickMealFromUserFoods(
      slot.key,
      target,
      userFoodPool,
      preferProtein,
      preferLowCarbs,
      usedFoodIds
    );
    return { ...slot, target, suggestion };
  });

  const usesUserFoods = meals.some((meal) => meal.suggestion.fromUserFoods);

  const plannedTotal = meals.reduce((sum, meal) => sum + meal.suggestion.calories, 0);
  const plannedMacros = meals.reduce(
    (acc, meal) => ({
      protein: acc.protein + meal.suggestion.protein,
      carbs: acc.carbs + meal.suggestion.carbs,
      fat: acc.fat + meal.suggestion.fat,
    }),
    { protein: 0, carbs: 0, fat: 0 }
  );

  const tips = [];
  if (usesUserFoods) {
    tips.push(t("tomorrow.tipUserFoods"));
  } else {
    tips.push(t("tomorrow.tipNoFoods"));
  }
  if (preferProtein) tips.push(t("tomorrow.tipProtein"));
  if (preferLowCarbs) tips.push(t("tomorrow.tipLowCarbs"));
  if (overshoot > 80) tips.push(t("tomorrow.tipLight"));
  if (!preferProtein && !preferLowCarbs && overshoot <= 80) {
    tips.push(t("tomorrow.tipWater"));
  }

  return {
    tomorrowKcal,
    note,
    meals,
    plannedTotal,
    plannedMacros,
    tip: tips.join(" "),
    usesUserFoods,
  };
}

function macroCalories({ protein, carbs, fat }) {
  return protein * KCAL_PER_G.protein + carbs * KCAL_PER_G.carbs + fat * KCAL_PER_G.fat;
}

function normalizeState(data) {
  const split = data.split || { ...DEFAULT_SPLIT };
  const macroGoals =
    data.macroGoals || macroGoalsFromCalories(data.goal ?? DEFAULT_GOAL, split);

  const meals = (data.meals || []).map((meal) => {
    if (meal.protein != null && meal.carbs != null && meal.fat != null) return meal;
    const estimated = estimateMacrosFromCalories(meal.calories, split);
    return { ...meal, ...estimated };
  });

  let bodyMeasurements = normalizeBodyMeasurements(data.bodyMeasurements);
  const user = getCurrentUser();
  if (!hasAnyBodyMeasurement(bodyMeasurements) && hasAnyBodyMeasurement(user?.bodyMeasurements)) {
    bodyMeasurements = normalizeBodyMeasurements(user.bodyMeasurements);
  }

  return {
    date: data.date || getTodayKey(),
    goal: data.goal ?? DEFAULT_GOAL,
    weight: data.weight ?? DEFAULT_WEIGHT,
    dietObjective: data.dietObjective || "maintain",
    weekStartDay: normalizeWeekStartDay(data.weekStartDay),
    bodyMeasurements,
    split,
    macroGoals,
    meals,
    activities: data.activities || [],
  };
}

function createEmptyState(preserve = {}) {
  const goal = preserve.goal ?? DEFAULT_GOAL;
  const split = preserve.split || { ...DEFAULT_SPLIT };
  return normalizeState({
    date: getTodayKey(),
    goal,
    weight: preserve.weight ?? DEFAULT_WEIGHT,
    dietObjective: preserve.dietObjective || "maintain",
    weekStartDay: normalizeWeekStartDay(preserve.weekStartDay),
    bodyMeasurements: normalizeBodyMeasurements(preserve.bodyMeasurements),
    split,
    macroGoals: preserve.macroGoals || macroGoalsFromCalories(goal, split),
    meals: [],
    activities: [],
  });
}

function loadState() {
  try {
    const raw = localStorage.getItem(getDataStorageKey());
    if (!raw) {
      return finalizeNewDayState(createEmptyState(getProfilePreserve()));
    }
    const data = JSON.parse(raw);
    const normalized = normalizeState(data);
    if (normalized.date !== getTodayKey()) {
      const fresh = rolloverToNewDay(normalized);
      localStorage.setItem(getDataStorageKey(), JSON.stringify(fresh));
      return fresh;
    }
    return normalized;
  } catch {
    return finalizeNewDayState(createEmptyState(getProfilePreserve()));
  }
}

function getProfilePreserve() {
  const user = getCurrentUser();
  if (!user) return {};
  const goal = getRecommendedGoal(user);
  return {
    goal,
    weight: user.weight,
    dietObjective: user.dietObjective,
    weekStartDay: normalizeWeekStartDay(user.weekStartDay),
    bodyMeasurements: normalizeBodyMeasurements(user.bodyMeasurements),
    macroGoals: macroGoalsFromCalories(goal, DEFAULT_SPLIT),
  };
}

function saveState(stateToSave) {
  const today = getTodayKey();
  const staleDate = stateToSave.date || today;

  if (staleDate !== today) {
    const archiveState = normalizeState({
      ...stateToSave,
      date: staleDate,
      meals: (stateToSave.meals || []).filter((meal) => localDateFromIso(meal.addedAt) <= staleDate),
      activities: (stateToSave.activities || []).filter(
        (activity) => localDateFromIso(activity.addedAt) <= staleDate
      ),
    });
    archiveDayWorkCalories(archiveState);
    archiveDayToHistory(archiveState);

    let fresh = finalizeNewDayState(createEmptyState({ ...archiveState, ...getProfilePreserve() }));
    fresh.meals = (stateToSave.meals || []).filter((meal) => localDateFromIso(meal.addedAt) > staleDate);
    fresh.activities = (stateToSave.activities || []).filter(
      (activity) => localDateFromIso(activity.addedAt) > staleDate
    );
    state = normalizeState(fresh);
  } else {
    state = normalizeState({ ...stateToSave, date: today });
  }

  localStorage.setItem(getDataStorageKey(), JSON.stringify(state));
  upsertTodayInHistory(state);
}

let state = loadState();

function addMeal({ name, calories, protein, carbs, fat, grams, unit, foodId, autoMacros }) {
  const cals = Number(calories);
  let macros;

  if (autoMacros) {
    macros = estimateMacrosFromCalories(cals, state.split);
  } else {
    macros = {
      protein: Number(protein) || 0,
      carbs: Number(carbs) || 0,
      fat: Number(fat) || 0,
    };
  }

  const portionGrams = Number(grams);
  const meal = {
    id: crypto.randomUUID(),
    name: name.trim(),
    calories: cals,
    protein: macros.protein,
    carbs: macros.carbs,
    fat: macros.fat,
    addedAt: new Date().toISOString(),
  };

  if (portionGrams > 0) {
    meal.grams = portionGrams;
    meal.unit = unit || "g";
  }

  if (foodId) meal.foodId = foodId;

  state.meals.unshift(meal);
  saveState(state);
  recordFoodHabit({ foodId, name, calories: cals, ...macros, grams: portionGrams, unit });
  render();
}

function removeMeal(id) {
  state.meals = state.meals.filter((meal) => meal.id !== id);
  saveState(state);
  render();
}

function addActivity({ name, calories, duration, intensity, category, activityId }) {
  const cals = Number(calories);
  if (!name || !cals) return;

  state.activities.unshift({
    id: crypto.randomUUID(),
    name: name.trim(),
    calories: cals,
    duration: duration ? Number(duration) : null,
    intensity: intensity || "moderata",
    category: category || "sport",
    addedAt: new Date().toISOString(),
  });
  saveState(state);
  recordActivityHabit({ activityId, name, category: category || "sport" });
  render();
}

function addQuickActivity(activity) {
  const duration = activity.defaultDuration || 30;
  const intensity = activity.defaultIntensity;
  addActivity({
    name: activity.name,
    duration,
    intensity,
    category: activity.category,
    activityId: activity.id,
    calories: calcBurnedCalories(activity.met, duration, intensity),
  });
}

function removeActivity(id) {
  state.activities = state.activities.filter((activity) => activity.id !== id);
  saveState(state);
  render();
}

function resetDay() {
  if (!state.meals.length && !state.activities.length) return;
  if (!confirm(t("msg.resetDay"))) return;
  state.meals = [];
  state.activities = [];
  saveState(state);
  render();
}

function saveSettings({ weight, dietObjective, split, macroGoals, bodyMeasurements, weekStartDay }) {
  const calculated = calculateTargetCalories({
    ...getGoalCalculationInput(),
    weight,
    dietObjective,
  });

  state.goal = calculated.goal;
  state.weight = Number(weight);
  if (bodyMeasurements) {
    state.bodyMeasurements = normalizeBodyMeasurements(bodyMeasurements);
  }
  state.dietObjective = dietObjective || "maintain";
  if (weekStartDay != null) {
    state.weekStartDay = normalizeWeekStartDay(weekStartDay);
  }
  state.split = split;
  state.macroGoals = macroGoals ?? macroGoalsFromCalories(calculated.goal, split);
  saveState(state);

  const user = getCurrentUser();
  if (user) {
    const updated = {
      ...user,
      weight: Number(weight),
      dietObjective: dietObjective || "maintain",
      weekStartDay: state.weekStartDay,
      bodyMeasurements: state.bodyMeasurements,
    };
    persistUser(updated).then(() => updateProfileUI());
  }

  refreshTodayWorkFromProfile();
  render();
}

function getTotals() {
  return state.meals.reduce(
    (acc, meal) => ({
      calories: acc.calories + meal.calories,
      protein: acc.protein + meal.protein,
      carbs: acc.carbs + meal.carbs,
      fat: acc.fat + meal.fat,
    }),
    { calories: 0, protein: 0, carbs: 0, fat: 0 }
  );
}

function getBurnedCalories() {
  return state.activities.reduce((sum, activity) => sum + activity.calories, 0);
}

function getNetCalories(consumed, burned) {
  return consumed - burned;
}

function getEffectiveBudget(goal, burned) {
  return goal + burned;
}

function getProgressMessage(consumed, burned, goal, remaining) {
  const net = getNetCalories(consumed, burned);
  if (consumed === 0 && burned === 0) {
    return "Aggiungi un alimento o registra un'attività fisica.";
  }
  if (burned > 0 && consumed === 0) {
    return `Hai bruciato ${burned} kcal — budget alimentare aumentato a ${getEffectiveBudget(goal, burned)} kcal.`;
  }
  if (remaining > 500) return `Ti restano ${remaining} kcal — ottimo ritmo!`;
  if (remaining > 0) return `Quasi al limite: ancora ${remaining} kcal disponibili.`;
  if (remaining === 0) return "Hai raggiunto esattamente il tuo obiettivo netto!";
  return `Hai superato l'obiettivo netto di ${Math.abs(remaining)} kcal.`;
}

function renderMacroBar(fillEl, current, goal) {
  const percent = goal > 0 ? Math.min((current / goal) * 100, 100) : 0;
  fillEl.style.width = `${percent}%`;
  fillEl.classList.toggle("over", goal > 0 && current > goal);
}

function renderActivityList(listEl, emptyEl, category, countEl, countLabel) {
  if (!listEl) return;

  const items = state.activities.filter((item) => (item.category || "sport") === category);
  listEl.innerHTML = "";

  if (countEl) {
    countEl.textContent = category === "lavoro" ? `${items.length}` : `${items.length} ${t("today.activityCount")}`;
  }

  if (!items.length) {
    emptyEl?.classList.remove("hidden");
    return;
  }

  emptyEl?.classList.add("hidden");

  for (const activity of items) {
    const li = document.createElement("li");
    li.className = `meal-item ${category === "lavoro" ? "work-item" : "activity-item"}`;
    const badgeClass = category === "lavoro" ? "activity-badge-work" : "activity-badge-sport";
    const durationText = activity.duration ? `${formatDuration(activity.duration)} · ` : "";
    li.innerHTML = `
      <span class="meal-badge activity-badge ${badgeClass}">${getActivityCategoryLabel(category)}</span>
      <div class="meal-info">
        <span class="meal-name">${escapeHtml(getActivityDisplayName(activity))}</span>
        <span class="meal-time">${formatTime(activity.addedAt)} · ${durationText}${getIntensityLabel(activity.intensity)}</span>
      </div>
      <span class="meal-calories ${category === "lavoro" ? "work-calories" : "activity-calories"}">−${activity.calories} kcal</span>
      <button type="button" class="meal-remove" aria-label="${t("common.remove", { name: getActivityDisplayName(activity) })}">×</button>
    `;
    li.querySelector(".meal-remove").addEventListener("click", () => removeActivity(activity.id));
    listEl.appendChild(li);
  }
}

function renderSportList() {
  renderActivityList(activitiesList, activitiesEmpty, "sport", activitiesCountEl);
}

function renderMeals() {
  if (!mealsList) return;
  mealsList.innerHTML = "";

  if (!state.meals.length) {
    emptyState?.classList.remove("hidden");
    return;
  }

  emptyState?.classList.add("hidden");

  for (const meal of state.meals) {
    const li = document.createElement("li");
    li.className = "meal-item";
    const portionText = meal.grams ? `${formatPortion(meal.grams, meal.unit || "g")} · ` : "";
    li.innerHTML = `
      <div class="meal-info">
        <span class="meal-name">${escapeHtml(getMealDisplayName(meal))}</span>
        <span class="meal-time">${formatTime(meal.addedAt)} · ${portionText}P ${formatGrams(meal.protein)} · C ${formatGrams(meal.carbs)} · G ${formatGrams(meal.fat)}</span>
      </div>
      <span class="meal-calories">${meal.calories} kcal</span>
      <button type="button" class="meal-remove" aria-label="${t("common.remove", { name: getMealDisplayName(meal) })}">×</button>
    `;
    li.querySelector(".meal-remove").addEventListener("click", () => removeMeal(meal.id));
    mealsList.appendChild(li);
  }
}

function escapeHtml(text) {
  const div = document.createElement("div");
  div.textContent = text;
  return div.innerHTML;
}

function renderTomorrowPlan() {
  if (!tomorrowMealsEl) return;
  const plan = buildTomorrowPlan();
  const targetMacros = macroGoalsFromCalories(plan.tomorrowKcal, state.split);

  tomorrowDateEl.textContent = formatTomorrow();
  tomorrowKcalEl.textContent = plan.tomorrowKcal.toLocaleString(getLocaleTag());
  tomorrowNoteEl.textContent = plan.note;
  tomorrowMacrosEl.innerHTML = `
    <span class="tomorrow-macro-chip macro-protein">P ${Math.round(plan.plannedMacros.protein)} g</span>
    <span class="tomorrow-macro-chip macro-carbs">C ${Math.round(plan.plannedMacros.carbs)} g</span>
    <span class="tomorrow-macro-chip macro-fat">G ${Math.round(plan.plannedMacros.fat)} g</span>
    <span class="tomorrow-macro-meta">${t("tomorrow.planMeta", { total: plan.plannedTotal, protein: targetMacros.protein, carbs: targetMacros.carbs, fat: targetMacros.fat })}</span>
  `;
  tomorrowTipEl.textContent = plan.tip;

  tomorrowMealsEl.innerHTML = "";
  for (const meal of plan.meals) {
    const li = document.createElement("li");
    li.className = "tomorrow-meal";
    const userBadge = meal.suggestion.fromUserFoods
      ? '<span class="tomorrow-meal-badge">' + t("habit.badge") + "</span>"
      : "";
    const itemsHtml =
      meal.suggestion.items?.length > 1
        ? `<ul class="tomorrow-meal-items">${meal.suggestion.items
            .map(
              (item) =>
                `<li>${escapeHtml(getFoodName(item))} · ${formatPortion(item.grams, item.unit)} · ${item.calories} kcal</li>`
            )
            .join("")}</ul>`
        : "";
    li.innerHTML = `
      <div class="tomorrow-meal-head">
        <span class="tomorrow-meal-label">${getMealLabel(meal.key)}${userBadge}</span>
        <span class="tomorrow-meal-target">~${meal.target} kcal</span>
      </div>
      <p class="tomorrow-meal-name">${escapeHtml(meal.suggestion.name)}</p>
      ${itemsHtml}
      <p class="tomorrow-meal-meta">${meal.suggestion.calories} kcal · P ${meal.suggestion.protein} · C ${meal.suggestion.carbs} · G ${meal.suggestion.fat}</p>
    `;
    tomorrowMealsEl.appendChild(li);
  }
}

function renderTodayBodyMeasurements() {
  if (!todayWeightInput) return;

  const activeInputs = BODY_MEASUREMENT_KEYS.map((key) => document.getElementById(`today-${key}`)).filter(Boolean);
  if (document.activeElement !== todayWeightInput) {
    todayWeightInput.value = state.weight;
  }
  populateBodyMeasurementInputs("today", state.bodyMeasurements, activeInputs);

  const user = getCurrentUser();
  if (todayWeightBmiEl) {
    todayWeightBmiEl.textContent =
      user?.height ? `BMI ${calculateBMI(state.weight, user.height)}` : "";
  }

  if (todayWeightNoteEl) {
    todayWeightNoteEl.textContent = `Peso usato per calorie bruciate e obiettivo (${state.goal.toLocaleString(getLocaleTag())} kcal). Le misure vengono salvate per la settimana.`;
  }
}

function updateTodayWeight(weight) {
  const parsed = Number(weight);
  if (!parsed || parsed < 30 || parsed > 250) {
    if (todayWeightInput) todayWeightInput.value = state.weight;
    return;
  }
  if (parsed === state.weight) return;

  saveSettings({
    weight: parsed,
    dietObjective: state.dietObjective,
    split: state.split,
    macroGoals: state.macroGoals,
    bodyMeasurements: state.bodyMeasurements,
  });
}

function updateTodayBodyMeasurements() {
  const measurements = readBodyMeasurementsFromDom("today");
  for (const key of BODY_MEASUREMENT_KEYS) {
    const el = document.getElementById(`today-${key}`);
    const raw = el?.value ?? "";
    if (!raw.trim()) continue;
    const value = measurements[key];
    if (value == null || !isValidBodyMeasurement(key, value)) {
      if (el) el.value = state.bodyMeasurements?.[key] ?? "";
      return;
    }
  }

  if (!saveBodyMeasurements(measurements)) return;
  renderTodayBodyMeasurements();
}

function renderTodayContext() {
  if (!ctxConsumedEl) return;
  const consumed = getTotals().calories;
  const burned = getBurnedCalories();
  const budget = getEffectiveBudget(state.goal, burned);
  const remaining = budget - consumed;

  ctxConsumedEl.textContent = `${consumed.toLocaleString(getLocaleTag())} kcal`;
  ctxBudgetEl.textContent = `${budget.toLocaleString(getLocaleTag())} kcal`;
  ctxRemainingEl.textContent = `${Math.abs(remaining).toLocaleString(getLocaleTag())} kcal`;
  ctxRemainingEl.classList.toggle("positive", remaining >= 0);
  ctxRemainingEl.classList.toggle("negative", remaining < 0);
}

function renderSummary() {
  if (!totalCaloriesEl) return;
  const totals = getTotals();
  const burned = getBurnedCalories();
  const consumed = totals.calories;
  const net = getNetCalories(consumed, burned);
  const { goal, macroGoals } = state;
  const budget = getEffectiveBudget(goal, burned);
  const remaining = budget - consumed;
  const percent = budget > 0 ? Math.min((consumed / budget) * 100, 100) : 0;
  const rawPercent = budget > 0 ? (consumed / budget) * 100 : 0;

  totalCaloriesEl.textContent = net.toLocaleString(getLocaleTag());
  goalDisplayEl.textContent = `${budget.toLocaleString(getLocaleTag())} kcal`;
  consumedDisplayEl.textContent = `${consumed.toLocaleString(getLocaleTag())} kcal`;
  burnedDisplayEl.textContent = `${burned.toLocaleString(getLocaleTag())} kcal`;
  if (mealsCountEl) mealsCountEl.textContent = `${state.meals.length} alimenti`;
  if (activitiesCountEl) {
    const sportCount = state.activities.filter((a) => (a.category || "sport") === "sport").length;
    activitiesCountEl.textContent = `${sportCount} attività`;
  }

  remainingDisplayEl.textContent = `${Math.abs(remaining).toLocaleString(getLocaleTag())} kcal`;
  remainingDisplayEl.classList.toggle("positive", remaining >= 0);
  remainingDisplayEl.classList.toggle("negative", remaining < 0);

  calorieRing.style.setProperty("--progress", Math.min(rawPercent, 100));
  calorieRing.classList.toggle("over", rawPercent > 100 && rawPercent <= 120);
  calorieRing.classList.toggle("way-over", rawPercent > 120);

  progressFill.style.width = `${percent}%`;
  progressFill.classList.toggle("over", rawPercent > 100 && rawPercent <= 120);
  progressFill.classList.toggle("way-over", rawPercent > 120);

  progressBar.setAttribute("aria-valuemax", budget);
  progressBar.setAttribute("aria-valuenow", consumed);

  progressMessage.textContent = getProgressMessage(consumed, burned, goal, remaining);

  totalProteinEl.textContent = formatGrams(totals.protein);
  totalCarbsEl.textContent = formatGrams(totals.carbs);
  totalFatEl.textContent = formatGrams(totals.fat);
  goalProteinEl.textContent = macroGoals.protein;
  goalCarbsEl.textContent = macroGoals.carbs;
  goalFatEl.textContent = macroGoals.fat;

  renderMacroBar(proteinFillEl, totals.protein, macroGoals.protein);
  renderMacroBar(carbsFillEl, totals.carbs, macroGoals.carbs);
  renderMacroBar(fatFillEl, totals.fat, macroGoals.fat);

  const macroKcal = macroCalories(totals);
  const macroShare = totals.calories > 0 ? Math.round((macroKcal / totals.calories) * 100) : 0;
  macroKcalNoteEl.textContent = `Calorie da macro: ${Math.round(macroKcal)} kcal (${macroShare}% del totale alimenti)`;
}

function renderOverviewExtras() {
  if (!overviewMealsCountEl) return;

  overviewMealsCountEl.textContent = `${state.meals.length} alimenti`;
  const sportCount = state.activities.filter((a) => (a.category || "sport") === "sport").length;
  if (overviewActivitiesCountEl) {
    overviewActivitiesCountEl.textContent = `${sportCount} attività`;
  }

  const plan = buildTomorrowPlan();
  if (overviewTomorrowTargetEl) {
    overviewTomorrowTargetEl.textContent = `${plan.tomorrowKcal.toLocaleString(getLocaleTag())} kcal`;
  }

  const stats = computeWeeklyStats();
  if (overviewWeekRemainingEl) {
    const prefix = stats.remaining >= 0 ? "" : "−";
    overviewWeekRemainingEl.textContent = `${prefix}${Math.abs(stats.remaining).toLocaleString(getLocaleTag())} kcal`;
    overviewWeekRemainingEl.classList.toggle("positive", stats.remaining >= 0);
    overviewWeekRemainingEl.classList.toggle("negative", stats.remaining < 0);
  }
  if (overviewWeekRangeEl) {
    overviewWeekRangeEl.textContent = formatWeekRange(stats.start, stats.end);
  }
  if (overviewTotalDaysEl) {
    const totalStats = computeTotalStats();
    overviewTotalDaysEl.textContent = `${totalStats.avgConsumed.toLocaleString(getLocaleTag())} kcal/g`;
  }
}

function renderWeeklySummary() {
  if (!weeklyTargetEl) return;

  const stats = computeWeeklyStats();
  const { weeklyTarget, weeklyBudget, totalConsumed, totalBurned, remaining, rawPercent, percent, daySlots } =
    stats;

  if (weeklyRangeEl) {
    weeklyRangeEl.textContent = formatWeekRange(stats.start, stats.end);
  }

  if (weeklySummarySubtitleEl) {
    weeklySummarySubtitleEl.textContent = `Target = obiettivo giornaliero × 7 · settimana da ${getWeekStartDayLabel().toLowerCase()}`;
  }

  weeklyTargetEl.textContent = `${weeklyTarget.toLocaleString(getLocaleTag())} kcal`;
  weeklyBudgetEl.textContent = `${weeklyBudget.toLocaleString(getLocaleTag())} kcal`;
  weeklyConsumedEl.textContent = `${totalConsumed.toLocaleString(getLocaleTag())} kcal`;
  weeklyBurnedEl.textContent = `${totalBurned.toLocaleString(getLocaleTag())} kcal`;
  weeklyRemainingEl.textContent = `${Math.abs(remaining).toLocaleString(getLocaleTag())} kcal`;
  weeklyRemainingEl.classList.toggle("positive", remaining >= 0);
  weeklyRemainingEl.classList.toggle("negative", remaining < 0);

  if (weeklyProgressPercentEl) {
    weeklyProgressPercentEl.textContent = `${Math.round(rawPercent)}%`;
  }

  if (weeklyRingValue) {
    weeklyRingValue.textContent = totalConsumed.toLocaleString(getLocaleTag());
  }

  if (weeklyRing) {
    weeklyRing.style.setProperty("--progress", Math.min(rawPercent, 100));
    weeklyRing.classList.toggle("over", rawPercent > 100 && rawPercent <= 120);
    weeklyRing.classList.toggle("way-over", rawPercent > 120);
  }

  if (weeklyProgressFill) {
    weeklyProgressFill.style.width = `${percent}%`;
    weeklyProgressFill.classList.toggle("over", rawPercent > 100 && rawPercent <= 120);
    weeklyProgressFill.classList.toggle("way-over", rawPercent > 120);
  }

  if (weeklyProgressBar) {
    weeklyProgressBar.setAttribute("aria-valuemax", weeklyBudget);
    weeklyProgressBar.setAttribute("aria-valuenow", totalConsumed);
  }

  if (weeklyMessageEl) {
    weeklyMessageEl.textContent = getWeeklyProgressMessage(stats);
  }

  renderWeeklyChart(stats);
  renderWeeklyNutrition();
  renderWeeklyActivity();
  renderWeeklyWeightChart();
}

function renderTotalsPage() {
  if (!totalsConsumedEl) return;

  const stats = computeTotalStats();
  const {
    consumed,
    burned,
    net,
    avgConsumed,
    avgBurned,
    avgNet,
    avgProtein,
    avgCarbs,
    avgFat,
    avgMicros,
    protein,
    carbs,
    fat,
    activity,
    daysTracked,
    daysWithFood,
    daysWithActivity,
    firstDate,
    lastDate,
    workBurnedTotal,
    avgSportBurned,
    avgSportSessions,
    avgSportDuration,
    avgWorkBurned,
    currentWeight,
    weightDelta,
    weightDays,
    firstWeight,
    lastWeight,
    measurementSeries,
    topActivities,
    foodDays,
    activityDays,
    sampleDays,
  } = stats;
  const macroGoals = state.macroGoals;

  if (totalsPageLabelEl) {
    totalsPageLabelEl.textContent =
      daysTracked > 0
        ? t("totals.avgOnDays", { days: sampleDays, daysLabel: daysLabel(sampleDays) })
        : t("msg.noData");
  }

  if (totalsPeriodEl) {
    totalsPeriodEl.textContent =
      firstDate && lastDate
        ? `${formatHistoryDateLabel(firstDate)} – ${formatHistoryDateLabel(lastDate)}`
        : t("totals.startRecording");
  }

  if (totalsDaysBadgeEl) {
    totalsDaysBadgeEl.textContent = `${sampleDays} ${daysLabel(sampleDays)}`;
  }

  totalsConsumedEl.textContent = formatLocaleNumber(avgConsumed);
  totalsBurnedEl.textContent = formatLocaleNumber(avgBurned);
  totalsNetEl.textContent = `${avgNet >= 0 ? "" : "−"}${formatLocaleNumber(Math.abs(avgNet))}`;
  totalsNetEl.classList.toggle("positive", avgNet <= 0);
  totalsNetEl.classList.toggle("negative", avgNet > 0);
  totalsAvgDayEl.textContent = formatLocaleNumber(state.goal);

  if (totalsNoteEl) {
    const parts = [];
    if (daysTracked === 0) {
      parts.push(t("totals.noteEmpty"));
    } else {
      parts.push(t("totals.dailyTarget", { kcal: formatLocaleNumber(state.goal) }));
      parts.push(
        t("totals.periodTotal", {
          consumed: formatLocaleNumber(consumed),
          burned: formatLocaleNumber(burned),
        })
      );
      parts.push(
        t("totals.daysWithFood", {
          foodDays: daysWithFood,
          foodDaysLabel: daysLabel(daysWithFood),
          activityDays: daysWithActivity,
        })
      );
    }
    totalsNoteEl.textContent = parts.join(" · ");
  }

  if (totalsMacroBarsEl) {
    if (daysWithFood === 0) {
      totalsMacroBarsEl.innerHTML =
        '<p class="weekly-body-measures-empty">' + escapeHtml(t("totals.noFoodHistory")) + "</p>";
    } else {
      const avgMacroKcal = macroCalories({ protein: avgProtein, carbs: avgCarbs, fat: avgFat }) || 1;
      const macroRows = [
        { label: t("macro.protein"), className: "macro-protein macro-fill-protein", avg: avgProtein, goal: macroGoals.protein, kcal: avgProtein * KCAL_PER_G.protein },
        { label: t("macro.carbs"), className: "macro-carbs macro-fill-carbs", avg: avgCarbs, goal: macroGoals.carbs, kcal: avgCarbs * KCAL_PER_G.carbs },
        { label: t("macro.fat"), className: "macro-fat macro-fill-fat", avg: avgFat, goal: macroGoals.fat, kcal: avgFat * KCAL_PER_G.fat },
      ];
      totalsMacroBarsEl.innerHTML = macroRows
        .map(({ label, className, avg, goal, kcal }) => {
          const share = Math.round((kcal / avgMacroKcal) * 100);
          const percent = goal > 0 ? Math.min((avg / goal) * 100, 100) : 0;
          const over = goal > 0 && avg > goal;
          return `
            <div class="macro-row">
              <div class="macro-header">
                <span class="macro-name ${className.split(" ")[0]}">${label}</span>
                <span class="macro-values">${formatGrams(avg)} / ${Math.round(goal)} g · ${share}% kcal</span>
              </div>
              <div class="macro-bar">
                <div class="macro-fill ${className.split(" ")[1]}${over ? " over" : ""}" style="width:${percent}%"></div>
              </div>
            </div>
          `;
        })
        .join("");
    }
  }

  if (totalsMicroBarsEl) {
    if (daysWithFood === 0) {
      totalsMicroBarsEl.innerHTML =
        '<p class="weekly-body-measures-empty">' + escapeHtml(t("totals.noFoodHistory")) + "</p>";
    } else {
      totalsMicroBarsEl.innerHTML = MICRONUTRIENT_KEYS.map((key) => {
        const meta = MICRONUTRIENT_META[key];
        const current = avgMicros[key] || 0;
        const target = meta.dailyTarget;
        const percent = target > 0 ? Math.min((current / target) * 100, 100) : 0;
        const over = meta.capAtTarget && current > target;
        const under = !meta.capAtTarget && target > 0 && current < target * 0.5;
        const fillClass = over ? "micro-fill-over" : under ? "micro-fill-low" : "micro-fill-ok";
        return `
          <div class="macro-row micro-row">
            <div class="macro-header">
              <span class="macro-name micro-name">${getMicroLabel(key)}</span>
              <span class="macro-values">${formatMicroValue(key, current)} / ${formatMicroValue(key, target)} ${meta.unit}</span>
            </div>
            <div class="macro-bar micro-bar">
              <div class="macro-fill micro-fill ${fillClass}${over ? " over" : ""}" style="width:${percent}%"></div>
            </div>
          </div>
        `;
      }).join("");
    }
  }

  if (totalsMicroNoteEl) {
    totalsMicroNoteEl.textContent =
      daysWithFood > 0
        ? `Media giornaliera stimata su ${foodDays} giorn${foodDays === 1 ? "o" : "i"} con alimenti · confronto con target giornaliero.`
        : "—";
  }

  if (totalsSportBurnedEl) {
    totalsSportBurnedEl.textContent = avgSportBurned.toLocaleString(getLocaleTag());
  }
  if (totalsSportSessionsEl) {
    totalsSportSessionsEl.textContent = String(avgSportSessions);
  }
  if (totalsSportDurationEl) {
    totalsSportDurationEl.textContent = formatTotalDuration(avgSportDuration);
  }
  if (totalsWorkBurnedEl) {
    totalsWorkBurnedEl.textContent = avgWorkBurned.toLocaleString(getLocaleTag());
  }

  if (totalsActivityListEl) {
    if (!topActivities.length) {
      totalsActivityListEl.innerHTML =
        '<p class="weekly-activity-empty">Nessuna attività registrata nello storico.</p>';
    } else {
      totalsActivityListEl.innerHTML = topActivities
        .map(([name, data]) => {
          const sessionsLabel =
            data.avgCount === 1
              ? "1 sessione/giorno attivo"
              : `${data.avgCount} sessioni/giorno attivo`;
          const durationLabel = data.duration ? ` · ${formatTotalDuration(avgPerDay(data.duration, activityDays))}/giorno` : "";
          return `
            <div class="weekly-activity-row">
              <div class="weekly-activity-row-info">
                <span class="weekly-activity-name">${escapeHtml(resolveActivityListName(name))}</span>
                <span class="weekly-activity-meta">${sessionsLabel}${durationLabel} · ${data.count} totali</span>
              </div>
              <span class="weekly-activity-kcal stat-exercise">${data.avgCalories.toLocaleString(getLocaleTag())} kcal/g</span>
            </div>
          `;
        })
        .join("");
    }
  }

  if (totalsWeightCurrentEl) {
    totalsWeightCurrentEl.textContent = formatWeight(currentWeight);
  }

  if (totalsWeightDeltaEl) {
    if (weightDelta == null || weightDays < 2) {
      totalsWeightDeltaEl.textContent = "—";
      totalsWeightDeltaEl.classList.remove("positive", "negative");
    } else if (weightDelta === 0) {
      totalsWeightDeltaEl.textContent = "0 kg";
      totalsWeightDeltaEl.classList.remove("positive", "negative");
    } else {
      const sign = weightDelta > 0 ? "+" : "";
      totalsWeightDeltaEl.textContent = `${sign}${formatWeight(weightDelta)} kg`;
      totalsWeightDeltaEl.classList.toggle("positive", weightDelta < 0);
      totalsWeightDeltaEl.classList.toggle("negative", weightDelta > 0);
    }
  }

  if (totalsWeightDaysEl) {
    totalsWeightDaysEl.textContent = String(weightDays);
  }

  if (totalsBodyMeasuresEl) {
    if (!measurementSeries.length) {
      totalsBodyMeasuresEl.innerHTML =
        '<p class="weekly-body-measures-empty">Nessuna misura corporea nello storico.</p>';
    } else {
      totalsBodyMeasuresEl.innerHTML = measurementSeries
        .map((series) => {
          const currentLabel =
            series.current != null ? `${formatMeasurement(series.current)} cm` : "—";
          const deltaLabel = formatMeasurementDelta(series.delta);
          const deltaClass =
            series.delta == null
              ? ""
              : series.delta < 0
                ? " positive"
                : series.delta > 0
                  ? " negative"
                  : "";
          return `
            <div class="weekly-body-measure-pill">
              <span class="weekly-body-measure-name">${series.label}</span>
              <strong>${currentLabel}</strong>
              <span class="weekly-body-measure-delta${deltaClass}">${deltaLabel}</span>
            </div>
          `;
        })
        .join("");
    }
  }

  if (totalsBodyNoteEl) {
    const parts = [];
    if (firstWeight && lastWeight && weightDays >= 2) {
      parts.push(
        `Peso: ${formatWeight(firstWeight.weight)} kg (${formatHistoryDateLabel(firstWeight.date)}) → ${formatWeight(lastWeight.weight)} kg (${formatHistoryDateLabel(lastWeight.date)})`
      );
    } else if (weightDays === 1) {
      parts.push("Peso registrato in un solo giorno.");
    }
    if (measurementSeries.length) {
      parts.push(`${measurementSeries.length} misure corporee tracciate`);
    }
    totalsBodyNoteEl.textContent = parts.length ? parts.join(" · ") : "Registra peso e misure nella tab Oggi.";
  }
}

function getAllMeasurementSeries(stats) {
  const { measurementSeries, daySlots, currentMeasurements } = stats;
  const byKey = new Map(measurementSeries.map((series) => [series.key, series]));

  return BODY_MEASUREMENT_KEYS.map((key) => {
    if (byKey.has(key)) return byKey.get(key);
    return {
      key,
      label: getBodyMeasureLabel(key),
      color: BODY_MEASUREMENT_COLORS[key],
      current: currentMeasurements?.[key] ?? null,
      delta: null,
      recorded: [],
      dayValues: daySlots.map((day) => ({
        label: day.label,
        isToday: day.isToday,
        isFuture: day.isFuture,
        value: day.isFuture ? null : day.bodyMeasurements[key],
      })),
    };
  });
}

function buildBodyMeasurementLineSvg(series, daySlots) {
  const points = series.dayValues
    .map((day, index) => ({ ...day, index }))
    .filter((day) => !day.isFuture && day.value != null && day.value > 0);

  if (!points.length) return "";

  const chartWidth = 380;
  const chartHeight = 150;
  const padLeft = 44;
  const padRight = 12;
  const padTop = 16;
  const padBottom = 34;
  const plotW = chartWidth - padLeft - padRight;
  const plotH = chartHeight - padTop - padBottom;
  const groupWidth = plotW / 7;
  const baseY = padTop + plotH;
  const plotX = padLeft;
  const plotRight = chartWidth - padRight;

  const values = points.map((point) => point.value);
  const minVal = Math.min(...values);
  const maxVal = Math.max(...values);
  const yMin = minVal === maxVal ? minVal - 2 : minVal - 1;
  const yMax = minVal === maxVal ? maxVal + 2 : maxVal + 1;
  const yRange = yMax - yMin || 1;
  const scaleY = (value) => padTop + plotH - ((value - yMin) / yRange) * plotH;
  const scaleX = (index) => plotX + groupWidth * index + groupWidth / 2;

  let svg = `<svg viewBox="0 0 ${chartWidth} ${chartHeight}" class="weekly-chart-svg weekly-measure-chart-svg" role="img" aria-label="Grafico ${escapeHtml(series.label)} settimanale">`;

  svg += `<rect x="${plotX}" y="${padTop}" width="${plotW}" height="${plotH}" rx="10" class="chart-plot-bg" />`;

  daySlots.forEach((day, index) => {
    if (!day.isToday) return;
    const bandX = plotX + groupWidth * index + 2;
    svg += `<rect x="${bandX}" y="${padTop + 2}" width="${groupWidth - 4}" height="${plotH - 4}" rx="8" class="chart-today-band" />`;
  });

  for (let step = 0; step <= 3; step += 1) {
    const y = padTop + plotH - (plotH * step) / 3;
    const value = yMin + (yRange * step) / 3;
    const gridClass = step === 0 ? "chart-grid" : "chart-grid chart-grid-muted";
    svg += `<line x1="${plotX}" y1="${y}" x2="${plotRight}" y2="${y}" class="${gridClass}" />`;
    svg += `<text x="${plotX - 8}" y="${y + 4}" class="chart-axis-label" text-anchor="end">${formatMeasurement(value)}</text>`;
  }

  svg += `<line x1="${plotX}" y1="${baseY}" x2="${plotRight}" y2="${baseY}" class="chart-axis-line" />`;
  svg += `<text x="${plotX}" y="${padTop - 4}" class="chart-axis-title">cm</text>`;

  if (points.length > 1) {
    const pathPoints = points.map((point) => `${scaleX(point.index)} ${scaleY(point.value)}`);
    svg += `<polyline points="${pathPoints.join(" ")}" fill="none" stroke="${series.color}" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="chart-measure-line" />`;
  }

  points.forEach((point) => {
    const x = scaleX(point.index);
    const y = scaleY(point.value);
    const pointClass = point.isToday ? "chart-measure-point chart-measure-point-today" : "chart-measure-point";
    const tooltip = `${point.label}: ${formatMeasurement(point.value)} cm`;
    svg += `<g aria-label="${escapeHtml(tooltip)}"><title>${escapeHtml(tooltip)}</title>`;
    svg += `<circle cx="${x}" cy="${y}" r="${point.isToday ? 5 : 4}" class="${pointClass}" style="fill:${series.color}" />`;
    svg += `<text x="${x}" y="${y - 8}" class="chart-value-label chart-measure-value" text-anchor="middle" style="fill:${series.color}">${formatMeasurement(point.value)}</text>`;
    svg += `</g>`;
  });

  daySlots.forEach((day, index) => {
    const centerX = scaleX(index);
    const labelClass = day.isToday ? "chart-day-label chart-day-today" : "chart-day-label";
    if (day.isFuture) {
      svg += `<text x="${centerX}" y="${chartHeight - 10}" class="${labelClass} chart-day-future" text-anchor="middle">${escapeHtml(day.label)}</text>`;
      return;
    }
    svg += `<text x="${centerX}" y="${chartHeight - 10}" class="${labelClass}" text-anchor="middle">${escapeHtml(day.label)}</text>`;
  });

  svg += "</svg>";
  return svg;
}

function renderWeeklyBodyMeasurements(stats) {
  if (!weeklyBodyMeasuresSummaryEl && !weeklyBodyMeasuresChartsEl && !weeklyBodyMeasuresLinesEl) return;

  const { measurementSeries, daysWithMeasurements, daySlots } = stats;
  const allSeries = getAllMeasurementSeries(stats);
  const activeSeries = measurementSeries.length
    ? measurementSeries
    : allSeries.filter((series) => series.current != null && series.current > 0);
  const chartSeries = measurementSeries.filter((series) =>
    series.dayValues.some((day) => !day.isFuture && day.value != null && day.value > 0)
  );

  if (weeklyMeasuresCountEl) {
    weeklyMeasuresCountEl.textContent = String(
      allSeries.filter((series) => series.current != null && series.current > 0).length
    );
  }

  if (weeklyBodyMeasuresSummaryEl) {
    if (!activeSeries.length && daysWithMeasurements === 0) {
      weeklyBodyMeasuresSummaryEl.innerHTML =
        '<p class="weekly-body-measures-empty">Nessuna misura registrata questa settimana. Inseriscile nella tab Oggi o nel Profilo.</p>';
    } else {
      weeklyBodyMeasuresSummaryEl.innerHTML = allSeries
        .map((series) => {
          const hasValue = series.current != null && series.current > 0;
          const currentLabel = hasValue ? `${formatMeasurement(series.current)} cm` : "—";
          const deltaLabel = hasValue ? formatMeasurementDelta(series.delta) : "—";
          const deltaClass =
            !hasValue || series.delta == null
              ? ""
              : series.delta < 0
                ? " positive"
                : series.delta > 0
                  ? " negative"
                  : "";
          const emptyClass = hasValue ? "" : " weekly-body-measure-pill-empty";
          return `
            <div class="weekly-body-measure-pill${emptyClass}">
              <span class="weekly-body-measure-name">${series.label}</span>
              <strong>${currentLabel}</strong>
              <span class="weekly-body-measure-delta${deltaClass}">${deltaLabel}</span>
            </div>
          `;
        })
        .join("");
    }
  }

  if (weeklyBodyMeasuresLinesEl) {
    if (!chartSeries.length) {
      weeklyBodyMeasuresLinesEl.innerHTML = "";
    } else {
      weeklyBodyMeasuresLinesEl.innerHTML = chartSeries
        .map((series) => {
          const svg = buildBodyMeasurementLineSvg(series, daySlots);
          if (!svg) return "";
          return `
            <div class="weekly-body-measure-line-block">
              <div class="weekly-body-measure-block-head">
                <span class="weekly-body-measure-block-title" style="border-color:${series.color}">${series.label}</span>
                <span class="weekly-body-measure-block-meta">Andamento settimanale · cm</span>
              </div>
              <div class="weekly-chart-wrap weekly-measure-chart-wrap">${svg}</div>
            </div>
          `;
        })
        .join("");
    }
  }

  if (weeklyBodyMeasuresChartsEl) {
    if (!chartSeries.length) {
      weeklyBodyMeasuresChartsEl.innerHTML = "";
    } else {
      weeklyBodyMeasuresChartsEl.innerHTML = chartSeries
        .map((series) => {
          const activeValues = series.dayValues.filter((day) => !day.isFuture && day.value != null);
          const maxVal = Math.max(...activeValues.map((day) => day.value), 1);
          const rows = series.dayValues
            .map((day) => {
              const percent =
                day.isFuture || day.value == null ? 0 : Math.min((day.value / maxVal) * 100, 100);
              const valueLabel =
                day.isFuture ? "—" : day.value != null ? formatMeasurement(day.value) : "—";
              const todayClass = day.isToday ? " weekly-body-measure-day-today" : "";
              const futureClass = day.isFuture ? " weekly-body-measure-day-future" : "";
              return `
                <div class="weekly-body-measure-day${todayClass}${futureClass}">
                  <span class="weekly-body-measure-day-label">${day.label}</span>
                  <div class="weekly-body-measure-day-bar" aria-hidden="true">
                    <div class="weekly-body-measure-day-fill" style="width:${percent}%;background:${series.color}"></div>
                  </div>
                  <span class="weekly-body-measure-day-val">${valueLabel}</span>
                </div>
              `;
            })
            .join("");
          return `
            <div class="weekly-body-measure-block">
              <div class="weekly-body-measure-block-head">
                <span class="weekly-body-measure-block-title" style="border-color:${series.color}">${series.label}</span>
                <span class="weekly-body-measure-block-meta">${series.recorded.length} giorn${series.recorded.length === 1 ? "o" : "i"} · cm</span>
              </div>
              <div class="weekly-body-measure-days">${rows}</div>
            </div>
          `;
        })
        .join("");
    }
  }
}

function renderWeeklyWeightChart() {
  const stats = computeWeeklyWeightStats();
  const {
    daySlots,
    minWeight,
    maxWeight,
    delta,
    daysRecorded,
    currentWeight,
    daysWithMeasurements,
    measurementSeries,
  } = stats;
  const recordedDays = daySlots.filter((day) => day.hasWeight && !day.isFuture);
  const hasBodyData = daysRecorded > 0 || measurementSeries.length > 0;

  if (!weeklyWeightChartEl && !weeklyWeightCurrentEl && !weeklyBodyMeasuresSummaryEl) return;

  if (weeklyWeightCurrentEl) {
    weeklyWeightCurrentEl.textContent = formatWeight(currentWeight);
  }

  if (weeklyWeightDeltaEl) {
    if (delta == null || daysRecorded < 2) {
      weeklyWeightDeltaEl.textContent = "—";
      weeklyWeightDeltaEl.classList.remove("positive", "negative");
    } else if (delta === 0) {
      weeklyWeightDeltaEl.textContent = "0 kg";
      weeklyWeightDeltaEl.classList.remove("positive", "negative");
    } else {
      const sign = delta > 0 ? "+" : "";
      weeklyWeightDeltaEl.textContent = `${sign}${formatWeight(delta)} kg`;
      weeklyWeightDeltaEl.classList.toggle("positive", delta < 0);
      weeklyWeightDeltaEl.classList.toggle("negative", delta > 0);
    }
  }

  if (weeklyWeightDaysEl) {
    weeklyWeightDaysEl.textContent = String(Math.max(daysRecorded, daysWithMeasurements));
  }

  if (weeklyWeightNoteEl) {
    const parts = [];
    if (!hasBodyData) {
      parts.push("Registra peso e misure corporee nella tab Oggi per vedere l'andamento settimanale.");
    } else {
      if (daysRecorded >= 2) {
        parts.push(
          `Peso: ${formatWeight(recordedDays[0].weight)} kg (${recordedDays[0].label}) → ${formatWeight(recordedDays[recordedDays.length - 1].weight)} kg (${recordedDays[recordedDays.length - 1].label})`
        );
      } else if (daysRecorded === 1) {
        parts.push("Peso: un solo giorno registrato.");
      }
      if (daysWithMeasurements > 0) {
        parts.push(
          `${daysWithMeasurements} giorn${daysWithMeasurements === 1 ? "o" : "i"} con misure corpo`
        );
      }
    }
    weeklyWeightNoteEl.textContent = parts.join(" · ");
  }

  if (!recordedDays.length) {
    if (weeklyWeightChartEl) {
      weeklyWeightChartEl.innerHTML = measurementSeries.length
        ? '<p class="weekly-weight-empty">Nessun dato peso questa settimana. Le misure corpo sono riportate sotto.</p>'
        : '<p class="weekly-weight-empty">Nessun dato corporeo disponibile per questa settimana.</p>';
    }
  } else if (weeklyWeightChartEl) {
  const chartWidth = 380;
  const chartHeight = 220;
  const padLeft = 48;
  const padRight = 12;
  const padTop = 22;
  const padBottom = 44;
  const plotW = chartWidth - padLeft - padRight;
  const plotH = chartHeight - padTop - padBottom;
  const groupWidth = plotW / 7;
  const baseY = padTop + plotH;
  const plotX = padLeft;
  const plotRight = chartWidth - padRight;
  const yMin = minWeight === maxWeight ? minWeight - 1 : minWeight - 0.4;
  const yMax = minWeight === maxWeight ? maxWeight + 1 : maxWeight + 0.4;
  const yRange = yMax - yMin || 1;
  const scaleY = (weight) => padTop + plotH - ((weight - yMin) / yRange) * plotH;
  const scaleX = (index) => plotX + groupWidth * index + groupWidth / 2;

  let svg = `<svg viewBox="0 0 ${chartWidth} ${chartHeight}" class="weekly-chart-svg" role="img" aria-label="Grafico peso settimanale">`;
  svg += `<defs>
    <linearGradient id="gradWeightLine" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#7e57c2"/>
      <stop offset="100%" stop-color="#5e35b1"/>
    </linearGradient>
  </defs>`;

  svg += `<rect x="${plotX}" y="${padTop}" width="${plotW}" height="${plotH}" rx="10" class="chart-plot-bg" />`;

  daySlots.forEach((day, index) => {
    if (!day.isToday) return;
    const bandX = plotX + groupWidth * index + 2;
    svg += `<rect x="${bandX}" y="${padTop + 2}" width="${groupWidth - 4}" height="${plotH - 4}" rx="8" class="chart-today-band" />`;
  });

  for (let step = 0; step <= 4; step += 1) {
    const y = padTop + plotH - (plotH * step) / 4;
    const value = yMin + (yRange * step) / 4;
    const gridClass = step === 0 ? "chart-grid" : "chart-grid chart-grid-muted";
    svg += `<line x1="${plotX}" y1="${y}" x2="${plotRight}" y2="${y}" class="${gridClass}" />`;
    svg += `<text x="${plotX - 10}" y="${y + 4}" class="chart-axis-label" text-anchor="end">${formatWeight(value)}</text>`;
  }

  svg += `<line x1="${plotX}" y1="${baseY}" x2="${plotRight}" y2="${baseY}" class="chart-axis-line" />`;
  svg += `<text x="${plotX}" y="${padTop - 6}" class="chart-axis-title">kg</text>`;

  if (recordedDays.length > 1) {
    const pathPoints = recordedDays.map((day) => {
      const index = daySlots.findIndex((slot) => slot.date === day.date);
      return `${scaleX(index)} ${scaleY(day.weight)}`;
    });
    svg += `<polyline points="${pathPoints.join(" ")}" class="chart-weight-line" fill="none" stroke="url(#gradWeightLine)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />`;
  }

  recordedDays.forEach((day) => {
    const index = daySlots.findIndex((slot) => slot.date === day.date);
    const x = scaleX(index);
    const y = scaleY(day.weight);
    const pointClass = day.isToday ? "chart-weight-point chart-weight-point-today" : "chart-weight-point";
    const tooltip = `${day.label}: ${formatWeight(day.weight)} kg`;
    svg += `<g aria-label="${escapeHtml(tooltip)}"><title>${escapeHtml(tooltip)}</title>`;
    svg += `<circle cx="${x}" cy="${y}" r="${day.isToday ? 6 : 5}" class="${pointClass}" />`;
    svg += `<text x="${x}" y="${y - 10}" class="chart-value-label chart-weight-value" text-anchor="middle">${formatWeight(day.weight)}</text>`;
    svg += `</g>`;
  });

  daySlots.forEach((day, index) => {
    const centerX = scaleX(index);
    const labelClass = day.isToday ? "chart-day-label chart-day-today" : "chart-day-label";
    if (day.isFuture) {
      svg += `<text x="${centerX}" y="${chartHeight - 12}" class="${labelClass} chart-day-future" text-anchor="middle">${escapeHtml(day.label)}</text>`;
      return;
    }
    svg += `<text x="${centerX}" y="${chartHeight - 12}" class="${labelClass}" text-anchor="middle">${escapeHtml(day.label)}</text>`;
  });

  svg += "</svg>";
  weeklyWeightChartEl.innerHTML = svg;
  }

  renderWeeklyBodyMeasurements(stats);
}

function renderWeeklyActivity() {
  if (!weeklySportBurnedEl && !weeklyActivityListEl) return;

  const activity = computeWeeklyActivityStats();
  const { total, topActivities, daySlots, daysActive } = activity;

  if (weeklySportBurnedEl) {
    weeklySportBurnedEl.textContent = `${total.sportBurned.toLocaleString(getLocaleTag())} kcal`;
  }
  if (weeklySportSessionsEl) {
    weeklySportSessionsEl.textContent = String(total.sportCount);
  }
  if (weeklySportDurationEl) {
    weeklySportDurationEl.textContent = formatTotalDuration(total.sportDuration);
  }

  if (weeklyActivityListEl) {
    if (!topActivities.length) {
      weeklyActivityListEl.innerHTML =
        '<p class="weekly-activity-empty">Nessuna attività sportiva registrata questa settimana.</p>';
    } else {
      weeklyActivityListEl.innerHTML = topActivities
        .map(([name, data]) => {
          const sessionsLabel = data.count === 1 ? "1 sessione" : `${data.count} sessioni`;
          const durationLabel = data.duration ? ` · ${formatTotalDuration(data.duration)}` : "";
          return `
            <div class="weekly-activity-row">
              <div class="weekly-activity-row-info">
                <span class="weekly-activity-name">${escapeHtml(resolveActivityListName(name))}</span>
                <span class="weekly-activity-meta">${sessionsLabel}${durationLabel}</span>
              </div>
              <span class="weekly-activity-kcal stat-exercise">−${data.calories.toLocaleString(getLocaleTag())} kcal</span>
            </div>
          `;
        })
        .join("");
    }
  }

  if (weeklyActivityDaysEl) {
    const activeDays = daySlots.filter((day) => !day.isFuture);
    const maxBurn = Math.max(...activeDays.map((day) => day.sportBurned), 1);
    weeklyActivityDaysEl.innerHTML = daySlots
      .map((day) => {
        const percent = day.isFuture ? 0 : Math.min((day.sportBurned / maxBurn) * 100, 100);
        const valueLabel = day.isFuture
          ? "—"
          : day.sportBurned > 0
            ? day.sportBurned.toLocaleString(getLocaleTag())
            : "0";
        const todayClass = day.isToday ? " weekly-activity-day-today" : "";
        const futureClass = day.isFuture ? " weekly-activity-day-future" : "";
        return `
          <div class="weekly-activity-day${todayClass}${futureClass}">
            <span class="weekly-activity-day-label">${day.label}</span>
            <div class="weekly-activity-day-bar" aria-hidden="true">
              <div class="weekly-activity-day-fill" style="width:${percent}%"></div>
            </div>
            <span class="weekly-activity-day-val">${valueLabel}</span>
          </div>
        `;
      })
      .join("");
  }

  if (weeklyActivityNoteEl) {
    const parts = [];
    if (daysActive === 0 && total.sportCount === 0) {
      parts.push("Registra attività sportive nella tab Oggi per vedere il riepilogo settimanale.");
    } else {
      parts.push(
        `${daysActive} giorn${daysActive === 1 ? "o" : "i"} attiv${daysActive === 1 ? "o" : "i"} · ${total.sportCount} session${total.sportCount === 1 ? "e" : "i"} sport`
      );
    }
    if (total.workBurned > 0) {
      parts.push(
        `Lavoro: ${total.workBurned.toLocaleString(getLocaleTag())} kcal (${total.workCount} registrazion${total.workCount === 1 ? "e" : "i"})`
      );
    }
    weeklyActivityNoteEl.textContent = parts.join(" · ");
  }
}

function renderWeeklyNutrition() {
  if (!weeklyMacroBarsEl && !weeklyMicroBarsEl) return;

  const nutrition = computeWeeklyNutritionStats();
  const { protein, carbs, fat, micros, macroGoalsWeekly, microTargets, daysWithMeals } = nutrition;

  if (weeklyMacroBarsEl) {
    const macroRows = [
      { key: "protein", label: t("macro.protein"), className: "macro-protein macro-fill-protein", current: protein, goal: macroGoalsWeekly.protein },
      { key: "carbs", label: t("macro.carbs"), className: "macro-carbs macro-fill-carbs", current: carbs, goal: macroGoalsWeekly.carbs },
      { key: "fat", label: t("macro.fat"), className: "macro-fat macro-fill-fat", current: fat, goal: macroGoalsWeekly.fat },
    ];

    weeklyMacroBarsEl.innerHTML = macroRows
      .map(({ label, className, current, goal }) => {
        const percent = goal > 0 ? Math.min((current / goal) * 100, 100) : 0;
        const over = goal > 0 && current > goal;
        return `
          <div class="macro-row">
            <div class="macro-header">
              <span class="macro-name ${className.split(" ")[0]}">${label}</span>
              <span class="macro-values">${formatGrams(current)} / ${Math.round(goal)} g</span>
            </div>
            <div class="macro-bar">
              <div class="macro-fill ${className.split(" ")[1]}${over ? " over" : ""}" style="width:${percent}%"></div>
            </div>
          </div>
        `;
      })
      .join("");
  }

  if (weeklyMicroBarsEl) {
    weeklyMicroBarsEl.innerHTML = MICRONUTRIENT_KEYS.map((key) => {
      const meta = MICRONUTRIENT_META[key];
      const current = micros[key] || 0;
      const target = microTargets[key];
      const percent = target > 0 ? Math.min((current / target) * 100, 100) : 0;
      const over = meta.capAtTarget && current > target;
      const under = !meta.capAtTarget && target > 0 && current < target * 0.5;
      const fillClass = over ? "micro-fill-over" : under ? "micro-fill-low" : "micro-fill-ok";
      return `
        <div class="macro-row micro-row">
          <div class="macro-header">
            <span class="macro-name micro-name">${getMicroLabel(key)}</span>
            <span class="macro-values">${formatMicroValue(key, current)} / ${formatMicroValue(key, target)} ${meta.unit}</span>
          </div>
          <div class="macro-bar micro-bar">
            <div class="macro-fill micro-fill ${fillClass}${over ? " over" : ""}" style="width:${percent}%"></div>
          </div>
        </div>
      `;
    }).join("");
  }

  if (weeklyMicroNoteEl) {
    if (daysWithMeals === 0) {
      weeklyMicroNoteEl.textContent =
        "Registra alimenti durante la settimana per vedere macro e micronutrienti stimati.";
    } else {
      weeklyMicroNoteEl.textContent = `Stime basate su ${daysWithMeals} giorn${daysWithMeals === 1 ? "o" : "i"} con alimenti registrati · target = obiettivo giornaliero × 7`;
    }
  }
}

function renderWeeklyChart(stats) {
  if (!weeklyChartEl) return;

  const { daySlots } = stats;
  const chartWidth = 380;
  const chartHeight = 248;
  const padLeft = 48;
  const padRight = 12;
  const padTop = 22;
  const padBottom = 44;
  const plotW = chartWidth - padLeft - padRight;
  const plotH = chartHeight - padTop - padBottom;
  const activeDays = daySlots.filter((day) => !day.isFuture);
  const maxVal = Math.max(
    state.goal,
    ...activeDays.flatMap((day) => [day.consumed, day.budget]),
    1
  ) * 1.15;
  const groupWidth = plotW / 7;
  const barWidth = Math.min(16, groupWidth * 0.19);
  const baseY = padTop + plotH;
  const plotX = padLeft;
  const plotRight = chartWidth - padRight;

  let svg = `<svg viewBox="0 0 ${chartWidth} ${chartHeight}" class="weekly-chart-svg" role="img" aria-label="Grafico calorie settimanali">`;
  svg += `<defs>
    <linearGradient id="gradBudget" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#80deea"/>
      <stop offset="100%" stop-color="#4dd0e1"/>
    </linearGradient>
    <linearGradient id="gradConsumed" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#69f0ae"/>
      <stop offset="100%" stop-color="#00c853"/>
    </linearGradient>
    <linearGradient id="gradToday" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#b9ff57"/>
      <stop offset="100%" stop-color="#00e676"/>
    </linearGradient>
    <linearGradient id="gradOver" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#ff9100"/>
      <stop offset="100%" stop-color="#ff5722"/>
    </linearGradient>
  </defs>`;

  svg += `<rect x="${plotX}" y="${padTop}" width="${plotW}" height="${plotH}" rx="10" class="chart-plot-bg" />`;

  daySlots.forEach((day, index) => {
    if (!day.isToday) return;
    const bandX = plotX + groupWidth * index + 2;
    svg += `<rect x="${bandX}" y="${padTop + 2}" width="${groupWidth - 4}" height="${plotH - 4}" rx="8" class="chart-today-band" />`;
  });

  for (let step = 0; step <= 4; step += 1) {
    const y = padTop + plotH - (plotH * step) / 4;
    const value = Math.round((maxVal * step) / 4);
    const gridClass = step === 0 ? "chart-grid" : "chart-grid chart-grid-muted";
    svg += `<line x1="${plotX}" y1="${y}" x2="${plotRight}" y2="${y}" class="${gridClass}" />`;
    if (step > 0) {
      svg += `<text x="${plotX - 10}" y="${y + 4}" class="chart-axis-label" text-anchor="end">${value.toLocaleString(getLocaleTag())}</text>`;
    }
  }

  svg += `<line x1="${plotX}" y1="${baseY}" x2="${plotRight}" y2="${baseY}" class="chart-axis-line" />`;
  svg += `<text x="${plotX}" y="${padTop - 6}" class="chart-axis-title">kcal</text>`;

  daySlots.forEach((day, index) => {
    const centerX = plotX + groupWidth * index + groupWidth / 2;
    const labelClass = day.isToday ? "chart-day-label chart-day-today" : "chart-day-label";
    const tooltip = day.isFuture
      ? `${day.label}: non ancora disponibile`
      : `${day.label}: ${day.consumed.toLocaleString(getLocaleTag())} assunte / ${day.budget.toLocaleString(getLocaleTag())} budget`;

    if (day.isFuture) {
      svg += `<text x="${centerX}" y="${chartHeight - 12}" class="${labelClass} chart-day-future" text-anchor="middle">${escapeHtml(day.label)}</text>`;
      return;
    }

    const budgetHeight = (day.budget / maxVal) * plotH;
    const consumedHeight = (day.consumed / maxVal) * plotH;
    const budgetX = centerX - barWidth - 4;
    const consumedX = centerX + 4;
    const isOver = day.consumed > day.budget;
    const fillId = isOver ? "gradOver" : day.isToday ? "gradToday" : "gradConsumed";
    const consumedBarHeight = Math.max(consumedHeight, day.consumed > 0 ? 3 : 0);

    svg += `<g aria-label="${escapeHtml(tooltip)}"><title>${escapeHtml(tooltip)}</title>`;
    svg += `<rect x="${budgetX}" y="${baseY - budgetHeight}" width="${barWidth}" height="${budgetHeight}" fill="url(#gradBudget)" rx="5" opacity="0.92" />`;
    svg += `<rect x="${consumedX}" y="${baseY - consumedBarHeight}" width="${barWidth}" height="${consumedBarHeight}" fill="url(#${fillId})" rx="5" />`;
    if (day.consumed > 0) {
      svg += `<text x="${consumedX + barWidth / 2}" y="${baseY - consumedBarHeight - 5}" class="chart-value-label" text-anchor="middle">${day.consumed.toLocaleString(getLocaleTag())}</text>`;
    }
    svg += `<text x="${centerX}" y="${chartHeight - 12}" class="${labelClass}" text-anchor="middle">${escapeHtml(day.label)}</text>`;
    svg += `</g>`;
  });

  svg += "</svg>";
  weeklyChartEl.innerHTML = svg;
}

function updateMacroPreview() {
  const calories = Number(foodCaloriesInput.value);
  if (!calories || autoMacrosCheckbox.checked) {
    if (autoMacrosCheckbox.checked && calories) {
      const m = estimateMacrosFromCalories(calories, state.split);
      macroPreviewEl.textContent = `Stima: P ${formatGrams(m.protein)} g · C ${formatGrams(m.carbs)} g · G ${formatGrams(m.fat)} g`;
    } else {
      macroPreviewEl.textContent = "";
    }
    return;
  }

  const protein = Number(document.getElementById("food-protein").value) || 0;
  const carbs = Number(document.getElementById("food-carbs").value) || 0;
  const fat = Number(document.getElementById("food-fat").value) || 0;
  const fromMacros = macroCalories({ protein, carbs, fat });
  macroPreviewEl.textContent = `Calorie da macro: ${Math.round(fromMacros)} kcal`;
}

function updateSplitSum() {
  const sum =
    Number(splitProteinInput.value || 0) +
    Number(splitCarbsInput.value || 0) +
    Number(splitFatInput.value || 0);
  splitSumEl.textContent = t("user.splitTotal", { value: sum });
  splitSumEl.classList.toggle("invalid", sum !== 100);
}

function syncMacroGoalsFromSplit() {
  if (!goalInput || !splitProteinInput || !goalCarbsInput || !goalFatInput) return;
  const split = {
    protein: Number(splitProteinInput.value),
    carbs: Number(splitCarbsInput.value),
    fat: Number(splitFatInput.value),
  };
  if (split.protein + split.carbs + split.fat !== 100) return;
  const goals = macroGoalsFromCalories(Number(goalInput.value), split);
  goalProteinInput.value = goals.protein;
  goalCarbsInput.value = goals.carbs;
  goalFatInput.value = goals.fat;
}

function updateAutoGoalPreview() {
  if (!goalInput) return;

  const calculated = calculateTargetCalories(getGoalCalculationInput());
  goalInput.value = calculated.goal;
  if (goalCalcNoteEl) goalCalcNoteEl.textContent = calculated.note;
  syncMacroGoalsFromSplit();
}

function applyMacroGoalsFromSplit() {
  const split = {
    protein: Number(splitProteinInput.value),
    carbs: Number(splitCarbsInput.value),
    fat: Number(splitFatInput.value),
  };
  const sum = split.protein + split.carbs + split.fat;
  if (sum !== 100) {
    alert("La ripartizione deve sommare esattamente 100%.");
    return;
  }
  syncMacroGoalsFromSplit();
}

function toggleMacroFields() {
  const auto = autoMacrosCheckbox.checked;
  macroFields.classList.toggle("hidden", auto);
  updateMacroPreview();
}

function renderQuickChips() {
  if (!quickChips) return;
  quickChips.innerHTML = "";

  for (const { food, isHabitual } of getHabitualFoodItems()) {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = `food-quick-item${isHabitual ? " food-quick-item-habitual" : ""}`;
    btn.innerHTML = `
      <span class="food-quick-name">${escapeHtml(getFoodName(food))}</span>
      ${isHabitual ? '<span class="food-quick-badge">' + t("habit.badge") + "</span>" : ""}
    `;
    btn.addEventListener("click", () => {
      addMeal({
        foodId: food.id,
        name: food.name,
        calories: food.calories,
        protein: food.protein,
        carbs: food.carbs,
        fat: food.fat,
        grams: food.grams,
        unit: food.unit || "g",
        autoMacros: false,
      });
    });
    quickChips.appendChild(btn);
  }
}

function renderActivityChips() {
  if (!activityChips) return;
  activityChips.innerHTML = "";

  for (const { activity, isHabitual } of getHabitualActivityItems()) {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = `food-quick-item activity-quick-item${isHabitual ? " food-quick-item-habitual" : ""}`;
    btn.innerHTML = `
      <span class="food-quick-name">${escapeHtml(getActivityName(activity))}</span>
      ${isHabitual ? '<span class="food-quick-badge">' + t("habit.badge") + "</span>" : ""}
    `;
    btn.addEventListener("click", () => addQuickActivity(activity));
    activityChips.appendChild(btn);
  }
}

function populateSettingsForm() {
  if (!goalInput) return;
  weightInput.value = state.weight;
  dietObjectiveSelect.value = state.dietObjective;
  populateWeekStartDaySelect(weekStartDaySelect, getWeekStartDay());
  splitProteinInput.value = state.split.protein;
  splitCarbsInput.value = state.split.carbs;
  splitFatInput.value = state.split.fat;
  goalProteinInput.value = state.macroGoals.protein;
  goalCarbsInput.value = state.macroGoals.carbs;
  goalFatInput.value = state.macroGoals.fat;
  updateSplitSum();
  updateAutoGoalPreview();
}

function renderUserPage() {
  const user = getCurrentUser();
  const profileSection = document.getElementById("user-profile-section");

  if (profileSection) profileSection.classList.toggle("hidden", !user);

  if (userPageLabel) {
    userPageLabel.textContent = user ? user.name : t("user.goalsOnly");
  }

  if (user) {
    populateProfileView(user);
  }

  populateSettingsForm();
}

function initUserPage() {
  if (PAGE !== "user") return;

  populateProfileWorkSelect(
    document.getElementById("edit-work-type"),
    getDefaultWorkType(getCurrentUser())
  );

  renderUserPage();

  dietObjectiveSelect?.addEventListener("change", updateAutoGoalPreview);
  weightInput?.addEventListener("input", updateAutoGoalPreview);
  [splitProteinInput, splitCarbsInput, splitFatInput].forEach((input) => {
    input?.addEventListener("input", () => {
      updateSplitSum();
      syncMacroGoalsFromSplit();
    });
  });

  if (window.location.hash === "#obiettivi") {
    document.getElementById("user-settings-section")?.scrollIntoView({ behavior: "smooth" });
  }
}

function syncLanguageFlagButtons() {
  const current = getLanguage();
  document.querySelectorAll(".language-flag-btn").forEach((btn) => {
    const active = btn.dataset.lang === current;
    btn.classList.toggle("is-active", active);
    btn.setAttribute("aria-pressed", String(active));
  });
}

function initLanguageFlags() {
  const container = document.getElementById("language-flags");
  if (!container || container.dataset.wired === "1") {
    syncLanguageFlagButtons();
    return;
  }

  container.dataset.wired = "1";
  container.querySelectorAll(".language-flag-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      saveLanguage(btn.dataset.lang);
    });
  });
  syncLanguageFlagButtons();
}

function showSettingsSavedNote() {
  if (!settingsSavedNote) return;
  settingsSavedNote.classList.remove("hidden");
  window.clearTimeout(showSettingsSavedNote._timer);
  showSettingsSavedNote._timer = window.setTimeout(() => {
    settingsSavedNote.classList.add("hidden");
  }, 2500);
}

function render() {
  ensureCurrentDayState();
  updateProfileUI();

  if (PAGE === "overview") {
    if (overviewPageLabel) overviewPageLabel.textContent = formatToday();
    renderSummary();
    renderOverviewExtras();
    return;
  }

  if (PAGE === "today") {
    if (todayLabel) todayLabel.textContent = formatToday();
    renderTodayBodyMeasurements();
    renderWorkToggle();
    renderSportList();
    renderMeals();
    renderQuickChips();
    renderActivityChips();
    return;
  }

  if (PAGE === "totals") {
    renderTotalsPage();
    return;
  }

  if (PAGE === "week") {
    const stats = computeWeeklyStats();
    if (weekPageLabel) {
      weekPageLabel.textContent = formatWeekRange(stats.start, stats.end);
    }
    renderWeeklySummary();
    return;
  }

  if (PAGE === "tomorrow") {
    if (tomorrowPageLabel) {
      tomorrowPageLabel.textContent = formatTomorrow();
    }
    renderTodayContext();
    renderTomorrowPlan();
    return;
  }

  if (PAGE === "user") {
    renderUserPage();
  }
}

addForm?.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!foodTypeSelect?.value) {
    foodTypeSelect?.focus();
    return;
  }

  const isCustom = foodTypeSelect.value === "altro";
  const preset = isCustom ? null : getFoodById(foodTypeSelect.value);
  const formData = new FormData(addForm);

  if (isCustom && !String(formData.get("name") || "").trim()) {
    foodNameInput?.focus();
    return;
  }

  addMeal({
    name: isCustom ? formData.get("name") : preset.name,
    foodId: isCustom ? null : preset?.id,
    calories: formData.get("calories"),
    protein: isCustom ? formData.get("protein") : document.getElementById("food-protein").value,
    carbs: isCustom ? formData.get("carbs") : document.getElementById("food-carbs").value,
    fat: isCustom ? formData.get("fat") : document.getElementById("food-fat").value,
    grams: formData.get("grams"),
    unit: isCustom ? "g" : preset?.unit || "g",
    autoMacros: isCustom && autoMacrosCheckbox.checked,
  });
  resetFoodForm();
});

resetBtn?.addEventListener("click", resetDay);

logoutBtn?.addEventListener("click", logoutUser);

document.querySelectorAll(".auth-tab").forEach((tab) => {
  tab.addEventListener("click", () => switchAuthTab(tab.dataset.authTab));
});

loginForm?.addEventListener("submit", async (event) => {
  event.preventDefault();
  clearAuthError();
  const remember = document.getElementById("login-remember")?.checked ?? true;
  try {
    await loginUser(
      document.getElementById("login-email").value,
      document.getElementById("login-password").value,
      remember
    );
  } catch (error) {
    showAuthError(error.message);
  }
});

resetPasswordForm?.addEventListener("submit", async (event) => {
  event.preventDefault();
  clearAuthError();
  try {
    const email = document.getElementById("reset-email").value;
    await resetUserPassword(
      email,
      document.getElementById("reset-name").value,
      document.getElementById("reset-password").value,
      document.getElementById("reset-password-confirm").value
    );
    const params = new URLSearchParams({ reset: "1", email: email.trim() });
    const redirect = new URLSearchParams(window.location.search).get("redirect");
    if (redirect && isSafeRedirect(redirect)) params.set("redirect", redirect);
    window.location.href = `login.html?${params.toString()}`;
  } catch (error) {
    showAuthError(error.message);
  }
});

registerForm?.addEventListener("submit", async (event) => {
  event.preventDefault();
  clearAuthError();
  try {
    await registerUser({
      name: document.getElementById("reg-name").value,
      email: document.getElementById("reg-email").value,
      password: document.getElementById("reg-password").value,
      age: document.getElementById("reg-age").value,
      sex: document.getElementById("reg-sex").value,
      height: document.getElementById("reg-height").value,
      weight: document.getElementById("reg-weight").value,
      activityLevel: document.getElementById("reg-activity").value,
      dietObjective: document.getElementById("reg-diet-objective").value,
      defaultWorkType: document.getElementById("reg-work-type").value,
    });
    registerForm.reset();
  } catch (error) {
    showAuthError(error.message);
  }
});

profileEditForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  saveProfileEdits({
    name: document.getElementById("edit-name").value,
    weight: document.getElementById("edit-weight").value,
    age: document.getElementById("edit-age").value,
    height: document.getElementById("edit-height").value,
    sex: document.getElementById("edit-sex").value,
    activityLevel: document.getElementById("edit-activity").value,
    dietObjective: document.getElementById("edit-diet-objective").value,
    defaultWorkType: document.getElementById("edit-work-type").value,
    bodyMeasurements: readBodyMeasurementsFromDom("edit"),
  });
});

const regActivitySelect = document.getElementById("reg-activity");
const regWorkTypeSelect = document.getElementById("reg-work-type");

regActivitySelect?.addEventListener("change", () => {
  if (!regWorkTypeSelect) return;
  regWorkTypeSelect.value = inferWorkTypeFromActivityLevel(regActivitySelect.value);
});

populateProfileWorkSelect(
  regWorkTypeSelect,
  inferWorkTypeFromActivityLevel(regActivitySelect?.value || "moderate")
);

settingsCancel?.addEventListener("click", () => settingsDialog?.close());

calcMacroGoalsBtn?.addEventListener("click", applyMacroGoalsFromSplit);

[splitProteinInput, splitCarbsInput, splitFatInput].forEach((input) => {
  input?.addEventListener("input", updateSplitSum);
});

autoMacrosCheckbox?.addEventListener("change", toggleMacroFields);
foodCaloriesInput?.addEventListener("input", updateMacroPreview);
["food-protein", "food-carbs", "food-fat"].forEach((id) => {
  document.getElementById(id)?.addEventListener("input", updateMacroPreview);
});

settingsForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  const split = {
    protein: Number(splitProteinInput.value),
    carbs: Number(splitCarbsInput.value),
    fat: Number(splitFatInput.value),
  };
  if (split.protein + split.carbs + split.fat !== 100) {
    alert(t("msg.splitMust100"));
    return;
  }
  saveSettings({
    weight: weightInput.value,
    dietObjective: dietObjectiveSelect.value,
    weekStartDay: weekStartDaySelect?.value ?? getWeekStartDay(),
    split,
    macroGoals: {
      protein: Number(goalProteinInput.value),
      carbs: Number(goalCarbsInput.value),
      fat: Number(goalFatInput.value),
    },
  });
  settingsDialog?.close();
  showSettingsSavedNote();
});

const foodScannerModal = document.getElementById("food-scanner-modal");
const foodScannerViewportId = "food-scanner-viewport";
const foodScannerStatusEl = document.getElementById("food-scanner-status");
const foodBarcodeManualInput = document.getElementById("food-barcode-manual");

let foodScannerInstance = null;
let foodScannerBusy = false;
let foodScannerLastCode = "";

function pickNutrientValue(nutriments, keys) {
  if (!nutriments) return null;
  for (const key of keys) {
    const raw = nutriments[key];
    if (raw != null && raw !== "" && !Number.isNaN(Number(raw))) {
      return Number(raw);
    }
  }
  return null;
}

function parseOpenFoodFactsProduct(product, barcode) {
  const lang = getLanguage();
  const localizedName =
    (lang === "it" && product.product_name_it) ||
    (lang === "en" && product.product_name_en) ||
    (lang === "es" && product.product_name_es) ||
    product.product_name ||
    product.generic_name ||
    t("scan.unknownProduct");

  const nutriments = product.nutriments || {};
  let calories = pickNutrientValue(nutriments, ["energy-kcal_100g", "energy-kcal"]);
  if (calories == null) {
    const energyKj = pickNutrientValue(nutriments, ["energy_100g", "energy"]);
    if (energyKj != null) calories = Math.round(energyKj / 4.184);
  }

  const protein = pickNutrientValue(nutriments, ["proteins_100g", "proteins"]);
  const carbs = pickNutrientValue(nutriments, ["carbohydrates_100g", "carbohydrates"]);
  const fat = pickNutrientValue(nutriments, ["fat_100g", "fat"]);

  return {
    barcode,
    name: String(localizedName).trim() || t("scan.unknownProduct"),
    grams: 100,
    unit: "g",
    calories: calories ?? 0,
    protein: protein ?? 0,
    carbs: carbs ?? 0,
    fat: fat ?? 0,
  };
}

async function lookupBarcodeProduct(barcode) {
  const code = String(barcode || "").replace(/\D/g, "");
  if (!code) return null;

  const response = await fetch(
    `https://world.openfoodfacts.org/api/v2/product/${encodeURIComponent(code)}.json?fields=code,product_name,product_name_it,product_name_en,product_name_es,generic_name,nutriments`
  );
  if (!response.ok) throw new Error("lookup_failed");

  const data = await response.json();
  if (data.status !== 1 || !data.product) return null;
  return parseOpenFoodFactsProduct(data.product, code);
}

function setFoodScannerStatus(messageKey) {
  if (!foodScannerStatusEl) return;
  foodScannerStatusEl.textContent = t(messageKey);
}

function applyScannedProduct(product) {
  if (!product || !foodTypeSelect || !foodNameInput || !foodCaloriesInput) return;

  foodTypeSelect.value = "altro";
  updateFoodFormTypeField();

  selectedFoodPreset = {
    name: product.name,
    grams: product.grams || 100,
    unit: product.unit || "g",
    calories: product.calories,
    protein: product.protein,
    carbs: product.carbs,
    fat: product.fat,
  };

  foodNameInput.value = product.name;
  if (foodGramsInput) foodGramsInput.value = String(product.grams || 100);
  updateFoodGramsSuffix(product.unit || "g");
  foodCaloriesInput.value = String(product.calories);
  document.getElementById("food-protein").value = product.protein ?? "";
  document.getElementById("food-carbs").value = product.carbs ?? "";
  document.getElementById("food-fat").value = product.fat ?? "";
  autoMacrosCheckbox.checked = false;
  toggleMacroFields();
  updateMacroPreview();

  document.querySelector(".food-add-section")?.scrollIntoView({ behavior: "smooth", block: "nearest" });
  foodGramsInput?.focus();
}

async function handleBarcodeLookup(barcode) {
  const code = String(barcode || "").replace(/\D/g, "");
  if (!code || foodScannerBusy) return;

  foodScannerBusy = true;
  foodScannerLastCode = code;
  setFoodScannerStatus("scan.lookup");

  try {
    const product = await lookupBarcodeProduct(code);
    if (!product) {
      setFoodScannerStatus("scan.notFound");
      foodScannerLastCode = "";
      return;
    }
    await closeFoodScanner();
    applyScannedProduct(product);
  } catch {
    setFoodScannerStatus("scan.error");
    foodScannerLastCode = "";
  } finally {
    foodScannerBusy = false;
  }
}

function onFoodBarcodeDetected(decodedText) {
  const code = String(decodedText || "").replace(/\D/g, "");
  if (!code || code === foodScannerLastCode || foodScannerBusy) return;
  handleBarcodeLookup(code);
}

async function startFoodScannerCamera() {
  if (typeof Html5Qrcode === "undefined") {
    setFoodScannerStatus("scan.cameraError");
    return;
  }

  if (!foodScannerInstance) {
    foodScannerInstance = new Html5Qrcode(foodScannerViewportId);
  }

  if (foodScannerInstance.isScanning) return;

  try {
    await foodScannerInstance.start(
      { facingMode: "environment" },
      {
        fps: 10,
        qrbox: (viewfinderWidth, viewfinderHeight) => {
          const width = Math.min(viewfinderWidth * 0.85, 320);
          const height = Math.min(viewfinderHeight * 0.35, 140);
          return { width: Math.floor(width), height: Math.floor(height) };
        },
        aspectRatio: 1.777,
      },
      onFoodBarcodeDetected
    );
    setFoodScannerStatus("scan.hint");
  } catch {
    setFoodScannerStatus("scan.cameraError");
  }
}

async function closeFoodScanner() {
  foodScannerBusy = false;
  foodScannerLastCode = "";

  if (foodScannerInstance?.isScanning) {
    try {
      await foodScannerInstance.stop();
    } catch {
      /* ignore stop errors */
    }
  }

  foodScannerModal?.classList.add("hidden");
  document.body.classList.remove("food-scanner-open");
  setFoodScannerStatus("scan.hint");
  if (foodBarcodeManualInput) foodBarcodeManualInput.value = "";
}

async function openFoodScanner() {
  if (!foodScannerModal) return;

  foodScannerModal.classList.remove("hidden");
  document.body.classList.add("food-scanner-open");
  setFoodScannerStatus("scan.hint");
  await startFoodScannerCamera();
}

function initFoodBarcodeScanner() {
  if (PAGE !== "today") return;

  document.getElementById("food-scan-btn")?.addEventListener("click", () => {
    openFoodScanner();
  });

  document.getElementById("food-scanner-close")?.addEventListener("click", () => {
    closeFoodScanner();
  });

  document.getElementById("food-scanner-backdrop")?.addEventListener("click", () => {
    closeFoodScanner();
  });

  document.getElementById("food-barcode-lookup")?.addEventListener("click", () => {
    handleBarcodeLookup(foodBarcodeManualInput?.value);
  });

  foodBarcodeManualInput?.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleBarcodeLookup(foodBarcodeManualInput.value);
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && foodScannerModal && !foodScannerModal.classList.contains("hidden")) {
      closeFoodScanner();
    }
  });
}

function initTodayPage() {
  if (PAGE !== "today") return;

  populateTypeSelect(activityTypeSelect, SPORT_ACTIVITIES, t("today.activity"));
  populateFoodSelect(foodTypeSelect);

  initActivityForm(sportFormConfig);
  initWorkToggle();

  resetForm(sportFormConfig);
  resetFoodForm();

  foodTypeSelect?.addEventListener("change", () => {
    const preset = getFoodById(foodTypeSelect.value);
    if (preset) applyFoodPreset(preset);
    updateFoodFormTypeField();
    if (foodTypeSelect.value === "altro") {
      foodNameInput?.focus();
    }
  });

  foodGramsInput?.addEventListener("input", updateFoodFromGrams);

  foodSearchInput?.addEventListener("input", () => {
    filterFoodSelect(foodSearchInput.value);
  });

  toggleMacroFields();
  renderQuickChips();

  todayWeightInput?.addEventListener("change", () => updateTodayWeight(todayWeightInput.value));
  todayWeightInput?.addEventListener("blur", () => updateTodayWeight(todayWeightInput.value));

  for (const key of BODY_MEASUREMENT_KEYS) {
    const input = document.getElementById(`today-${key}`);
    input?.addEventListener("change", updateTodayBodyMeasurements);
    input?.addEventListener("blur", updateTodayBodyMeasurements);
  }

  initFoodBarcodeScanner();
}

function initWeekPage() {
  if (PAGE !== "week") return;

  populateWeekStartDaySelect(weekStartDayPicker, getWeekStartDay());
  weekStartDayPicker?.addEventListener("change", () => {
    saveWeekStartDay(weekStartDayPicker.value);
  });
}

function initAuthLanguageSelect() {
  if (PAGE !== "login") return;
  initLanguageFlags();
}

function initLoginPage() {
  if (PAGE !== "login") return;

  initAuthLanguageSelect();
  wireAuthPageLinks();
  wireForgotPasswordLink();

  const params = new URLSearchParams(window.location.search);
  if (params.get("reset") === "1") {
    const resetEmail = params.get("email")?.trim();
    if (resetEmail) {
      const loginEmailInput = document.getElementById("login-email");
      if (loginEmailInput) loginEmailInput.value = resetEmail;
    }
    showAuthSuccess(t("auth.resetSuccess"));
    document.getElementById("login-password")?.focus();
  }

  if (getCurrentUserId()) {
    redirectAfterAuth();
    return;
  }

  loadRememberLoginForm();

  document.getElementById("login-remember")?.addEventListener("change", (event) => {
    if (event.target.checked) return;
    localStorage.setItem(REMEMBER_ME_KEY, "0");
    localStorage.removeItem(REMEMBER_EMAIL_KEY);
  });
}

function initRegisterPage() {
  if (PAGE !== "register") return;

  if (getCurrentUserId()) {
    redirectAfterAuth();
    return;
  }

  populateProfileWorkSelect(
    regWorkTypeSelect,
    inferWorkTypeFromActivityLevel(regActivitySelect?.value || "moderate")
  );

  wireAuthPageLinks();
}

function initResetPasswordPage() {
  if (PAGE !== "reset-password") return;

  if (getCurrentUserId()) {
    redirectAfterAuth();
    return;
  }

  wireAuthPageLinks();

  const params = new URLSearchParams(window.location.search);
  const presetEmail = params.get("email")?.trim();
  if (presetEmail) {
    const resetEmailInput = document.getElementById("reset-email");
    if (resetEmailInput) resetEmailInput.value = presetEmail;
  }
  document.getElementById("reset-name")?.focus();
}

async function bootstrapApp() {
  initMobileAppShell();

  try {
    await initUserDatabase();
  } catch (error) {
    console.error("Impossibile inizializzare il database utenti:", error);
  }

  const user = getCurrentUser();
  initLanguage(user?.language);
  applyPageTranslations();
  initBottomNavIcons();

  if (PAGE === "login") {
    initLoginPage();
    return;
  }

  if (PAGE === "register") {
    initRegisterPage();
    return;
  }

  if (PAGE === "reset-password") {
    initResetPasswordPage();
    return;
  }

  if (PAGE === "tutorial") {
    return;
  }

  requireAuth();
  requireSubscription();

  initDayChangeMonitor();
  initTodayPage();
  initUserPage();
  initWeekPage();
  render();
}

bootstrapApp();

function isNativeMobileApp() {
  return Boolean(window.Capacitor?.isNativePlatform?.());
}

function isInstalledMobileApp() {
  return (
    isNativeMobileApp() ||
    window.matchMedia("(display-mode: standalone)").matches ||
    window.navigator.standalone === true
  );
}

function isMobilePreviewMode() {
  return new URLSearchParams(window.location.search).has("mobilePreview");
}

function initMobileAppShell() {
  if (isInstalledMobileApp() || isMobilePreviewMode()) {
    document.documentElement.classList.add("mobile-app");
  }

  if (!isNativeMobileApp()) return;

  const cap = window.Capacitor;

  cap.Plugins.SplashScreen?.hide?.();
  cap.Plugins.StatusBar?.setStyle?.({ style: "DARK" });
  cap.Plugins.StatusBar?.setBackgroundColor?.({ color: "#0a2342" });
  cap.Plugins.Keyboard?.setResizeMode?.({ mode: "body" });

  cap.Plugins.App?.addListener?.("backButton", ({ canGoBack }) => {
    if (canGoBack) {
      window.history.back();
      return;
    }
    cap.Plugins.App.minimizeApp();
  });
}

const LOCALE_KEY = "dayafterdiet-locale";
const SUPPORTED = ["it", "en", "es"];
const DEFAULT_LANG = "it";

const M = {
  it: {
    "meta.title": "DaD — DayafterDiet | Diario alimentare e fitness",
    "meta.description":
      "DaD (DayafterDiet) — traccia calorie, macro, pasti e attività fisica ogni giorno. Semplice, personale, sul tuo dispositivo.",
    "nav.language": "Lingua",
    "nav.main": "Principale",
    "nav.menu": "Menu",
    "nav.features": "Funzioni",
    "nav.sections": "Sezioni",
    "nav.science": "Scienza",
    "nav.how": "Come funziona",
    "nav.faq": "FAQ",
    "nav.try": "Prova l'app",
    "nav.login": "Accedi",
    "hero.eyebrow": "DayafterDiet",
    "hero.title": "Il tuo diario alimentare, <em>semplice ogni giorno</em>",
    "hero.lead":
      "DaD ti aiuta a tenere sotto controllo calorie, macro, pasti e attività fisica — con obiettivi personalizzati e un riepilogo chiaro di come sta andando la tua giornata.",
    "hero.ctaStart": "Inizia gratis",
    "hero.ctaMore": "Scopri di più",
    "hero.point1": "Dati sul tuo dispositivo",
    "hero.point2": "Italiano, English, Español",
    "hero.point3": "Web app e app Android",
    "mock.today": "Oggi",
    "mock.net": "netto kcal",
    "mock.budget": "Budget",
    "mock.consumed": "Assunte",
    "mock.burned": "Bruciate",
    "mock.chip1": "Caffè",
    "mock.chip2": "Pasta",
    "mock.chip3": "Palestra",
    "mock.chip4": "Corsa",
    "mock.row1": "Yogurt greco",
    "mock.row2": "Palestra · 30 min",
    "mock.row3": "Insalata di pollo",
    "feat.eyebrow": "Funzioni",
    "feat.title": "Tutto ciò che serve, niente di superfluo",
    "feat.lead":
      "DaD è pensata per chi vuole monitorare l'alimentazione senza app complicate: registri, vedi il saldo giornaliero e pianifichi il domani.",
    "feat.diary.t": "Diario giornaliero",
    "feat.diary.d": "Registra alimenti e attività fisica con chip rapidi, ricerca nel catalogo o inserimento manuale.",
    "feat.goals.t": "Obiettivi personali",
    "feat.goals.d": "Calorie target calcolate da peso, altezza, attività e obiettivo dieta — mantenimento, perdita o massa.",
    "feat.macro.t": "Macro e riepilogo",
    "feat.macro.d": "Proteine, carboidrati e grassi con barre di avanzamento e panoramica calorie nette.",
    "feat.activity.t": "Attività e lavoro",
    "feat.activity.d": "Sport, durata e intensità con calorie bruciate automatiche. Registra anche il lavoro della giornata.",
    "feat.week.t": "Settimana e totali",
    "feat.week.d": "Riepilogo settimanale, dieta di domani suggerita e statistiche storiche nel tempo.",
    "feat.scan.t": "Scansione barcode",
    "feat.scan.d": "Inquadra il codice a barre del prodotto: DaD recupera nome e valori nutrizionali da Open Food Facts.",
    "feat.body.t": "Misure corporee",
    "feat.body.d": "Aggiorna peso, vita, fianchi e altre circonferenze. BMI e TDEE si ricalcolano automaticamente.",
    "feat.privacy.t": "Privacy first",
    "feat.privacy.d": "Account e diario salvati sul dispositivo. Niente cloud obbligatorio per i tuoi dati alimentari.",
    "sec.eyebrow": "Sezioni dell'app",
    "sec.title": "Naviga con chiarezza",
    "sec.lead": "Ogni area di DaD ha uno scopo preciso: dalla registrazione quotidiana alle statistiche nel tempo.",
    "sec.today.t": "Oggi",
    "sec.today.d": "Il cuore dell'app: budget calorico, misure, lavoro, alimenti e attività del giorno.",
    "sec.overview.t": "Riepilogo",
    "sec.overview.d": "Panoramica di calorie assunte, bruciate e macro con grafici chiari.",
    "sec.tomorrow.t": "Domani",
    "sec.tomorrow.d": "Suggerimenti per la giornata successiva in base al tuo obiettivo e al saldo attuale.",
    "sec.week.t": "Settimana",
    "sec.week.d": "Andamento settimanale: giorni in target, media calorie e trend.",
    "sec.totals.t": "Totali",
    "sec.totals.d": "Statistiche storiche: peso, calorie e progressi nel tempo.",
    "sec.profile.t": "Profilo",
    "sec.profile.d": "Scheda personale, obiettivo dieta, lingua e impostazioni account.",
    "sci.eyebrow": "Studio scientifico",
    "sci.title": "Perché monitorare le calorie su base settimanale",
    "sci.lead":
      "Il controllo del peso non dipende da un singolo giorno, ma dal bilancio energetico medio nel tempo. DaD integra questa logica con un budget settimanale che tiene conto di attività fisica e giorni più o meno abbondanti.",
    "sci.c1.t": "Bilancio energetico, non giorno per giorno",
    "sci.c1.p1":
      "La variazione di peso è guidata dal deficit o surplus calorico sostenuto nel tempo, non da una singola cena o da un giorno «sbagliato».",
    "sci.c1.p2":
      "Per questo motivo molti protocolli clinici ragionano su finestre di settimane, non su 24 ore isolate.",
    "sci.c2.t": "Flessibilità e aderenza alla dieta",
    "sci.c2.p1":
      "Studi su diete rigide e flessibili mostrano risultati simili quando il deficit settimanale totale è lo stesso.",
    "sci.c2.p2":
      "Un approccio settimanale permette di gestire cene fuori e allenamenti intensi senza sentirsi «fuori budget» ogni sera.",
    "sci.c3.t": "Come lo calcola DaD",
    "sci.c3.p": "La sezione Settimana dell'app applica un modello semplice e trasparente:",
    "sci.c3.wt": "Target settimanale",
    "sci.c3.wv": "obiettivo giornaliero × 7",
    "sci.c3.bt": "Budget effettivo",
    "sci.c3.bv": "target settimanale + calorie bruciate con l'attività",
    "sci.c3.st": "Saldo disponibile",
    "sci.c3.sv": "budget effettivo − calorie assunte nella settimana",
    "sci.c3.note":
      "Esempio: con target 2.000 kcal/giorno e 1.400 kcal bruciate in palestra nella settimana, il budget effettivo è 15.400 kcal.",
    "sci.c4.t": "Cosa dicono le evidenze",
    "sci.c4.l1": "Restrizione energetica intermittente e continua producono perdita di peso comparabile a parità di deficit totale.",
    "sci.c4.l2": "Diete flessibili e rigide risultano equivalenti per la perdita di grasso a parità di apporto calorico.",
    "sci.c4.l3": "I pattern settimanali di assunzione calorica sono predittivi del successo nel lungo periodo.",
    "sci.c4.l4": "Variabilità moderata tra i giorni resta compatibile con il controllo del peso.",
    "sci.refs": "Bibliografia",
    "sci.disclaimer":
      "Nota: DaD è uno strumento di monitoraggio personale, non un dispositivo medico. Per patologie o piani alimentari terapeutici consulta sempre un medico o un dietista.",
    "how.eyebrow": "Come funziona",
    "how.title": "Tre passi per partire",
    "how.s1.t": "Crea il tuo account",
    "how.s1.d": "Registrati con email e imposta la scheda personale: peso, obiettivo e livello di attività.",
    "how.s2.t": "Registra la giornata",
    "how.s2.d": "Aggiungi pasti e movimento nella tab Oggi. Il budget calorico si aggiorna in tempo reale.",
    "how.s3.t": "Monitora i progressi",
    "how.s3.d": "Controlla riepilogo, settimana e totali per capire se sei in linea con i tuoi obiettivi.",
    "faq.eyebrow": "FAQ",
    "faq.title": "Domande frequenti",
    "faq.q1": "DaD è gratuita?",
    "faq.a1": "Sì, puoi usare l'app web gratuitamente. Registrati e inizia subito a tracciare la tua alimentazione.",
    "faq.q2": "Dove vengono salvati i miei dati?",
    "faq.a2": "Account e diario sono conservati principalmente sul tuo dispositivo. Nessun server cloud obbligatorio.",
    "faq.q3": "Funziona su Android?",
    "faq.a3": "Sì. Puoi usare la web app dal browser oppure installare la versione Android a schermo intero.",
    "faq.q4": "Quali lingue sono supportate?",
    "faq.a4": "Italiano, inglese e spagnolo. Cambia lingua con le bandiere in alto o dalla pagina di login.",
    "faq.q5": "Come calcola le calorie target?",
    "faq.a5":
      "DaD calcola BMR e TDEE in base a età, altezza, peso e attività, poi applica un aggiustamento in base al tuo obiettivo.",
    "faq.q6": "Perché DaD usa un budget settimanale?",
    "faq.a6":
      'Il peso risponde al bilancio energetico medio nel tempo. Vedi la sezione <a href="#scienza">Studio scientifico</a> per i riferimenti.',
    "cta.eyebrow": "Prova l'app",
    "cta.title": "Apri DaD dal browser o installa su Android",
    "cta.lead": "L'app web è disponibile subito. Su Android puoi usare la versione mobile ottimizzata a schermo intero.",
    "cta.web": "Apri l'app web",
    "cta.register": "Registrati",
    "footer.tagline": "Diario alimentare e fitness personale.",
    "footer.privacy": "Privacy",
    "footer.guide": "Guida",
    "footer.copy": "© 2026 DayafterDiet",
  },
  en: {
    "meta.title": "DaD — DayafterDiet | Food diary & fitness",
    "meta.description":
      "DaD (DayafterDiet) — track calories, macros, meals and exercise every day. Simple, personal, on your device.",
    "nav.language": "Language",
    "nav.main": "Main",
    "nav.menu": "Menu",
    "nav.features": "Features",
    "nav.sections": "Sections",
    "nav.science": "Science",
    "nav.how": "How it works",
    "nav.faq": "FAQ",
    "nav.try": "Try the app",
    "nav.login": "Log in",
    "hero.eyebrow": "DayafterDiet",
    "hero.title": "Your food diary, <em>simple every day</em>",
    "hero.lead":
      "DaD helps you track calories, macros, meals and exercise — with personalized goals and a clear picture of your day.",
    "hero.ctaStart": "Start free",
    "hero.ctaMore": "Learn more",
    "hero.point1": "Data on your device",
    "hero.point2": "Italian, English, Spanish",
    "hero.point3": "Web app & Android",
    "mock.today": "Today",
    "mock.net": "net kcal",
    "mock.budget": "Budget",
    "mock.consumed": "Consumed",
    "mock.burned": "Burned",
    "mock.chip1": "Coffee",
    "mock.chip2": "Pasta",
    "mock.chip3": "Gym",
    "mock.chip4": "Running",
    "mock.row1": "Greek yogurt",
    "mock.row2": "Gym · 30 min",
    "mock.row3": "Chicken salad",
    "feat.eyebrow": "Features",
    "feat.title": "Everything you need, nothing extra",
    "feat.lead":
      "DaD is for people who want to track food without a complicated app: log, see your daily balance and plan tomorrow.",
    "feat.diary.t": "Daily diary",
    "feat.diary.d": "Log food and exercise with quick chips, catalog search or manual entry.",
    "feat.goals.t": "Personal goals",
    "feat.goals.d": "Target calories from weight, height, activity and diet goal — maintain, lose or gain.",
    "feat.macro.t": "Macros & overview",
    "feat.macro.d": "Protein, carbs and fat with progress bars and net calorie overview.",
    "feat.activity.t": "Activity & work",
    "feat.activity.d": "Sport, duration and intensity with automatic burned calories. Log work too.",
    "feat.week.t": "Week & totals",
    "feat.week.d": "Weekly summary, suggested tomorrow plan and historical stats.",
    "feat.scan.t": "Barcode scan",
    "feat.scan.d": "Scan a product barcode: DaD fetches name and nutrition from Open Food Facts.",
    "feat.body.t": "Body measurements",
    "feat.body.d": "Update weight, waist, hips and more. BMI and TDEE recalculate automatically.",
    "feat.privacy.t": "Privacy first",
    "feat.privacy.d": "Account and diary saved on device. No mandatory cloud for your food data.",
    "sec.eyebrow": "App sections",
    "sec.title": "Navigate with clarity",
    "sec.lead": "Each area of DaD has a clear purpose — from daily logging to long-term stats.",
    "sec.today.t": "Today",
    "sec.today.d": "The heart of the app: calorie budget, measurements, work, food and activity.",
    "sec.overview.t": "Overview",
    "sec.overview.d": "Summary of calories in, burned and macros with clear charts.",
    "sec.tomorrow.t": "Tomorrow",
    "sec.tomorrow.d": "Suggestions for the next day based on your goal and current balance.",
    "sec.week.t": "Week",
    "sec.week.d": "Weekly trend: days on target, average calories and progress.",
    "sec.totals.t": "Totals",
    "sec.totals.d": "Historical stats: weight, calories and progress over time.",
    "sec.profile.t": "Profile",
    "sec.profile.d": "Personal card, diet goal, language and account settings.",
    "sci.eyebrow": "Scientific background",
    "sci.title": "Why track calories on a weekly basis",
    "sci.lead":
      "Weight control depends on average energy balance over time, not a single day. DaD uses a weekly budget that includes exercise and lighter or heavier days.",
    "sci.c1.t": "Energy balance, not day by day",
    "sci.c1.p1": "Weight change follows sustained caloric deficit or surplus over time, not one meal or one «bad» day.",
    "sci.c1.p2": "Many clinical protocols look at weeks, not isolated 24-hour windows.",
    "sci.c2.t": "Flexibility and diet adherence",
    "sci.c2.p1": "Rigid and flexible diets show similar fat-loss results when total weekly deficit matches.",
    "sci.c2.p2": "A weekly approach handles dinners out and hard training days without feeling off budget every night.",
    "sci.c3.t": "How DaD calculates it",
    "sci.c3.p": "The Week section uses a simple, transparent model:",
    "sci.c3.wt": "Weekly target",
    "sci.c3.wv": "daily goal × 7",
    "sci.c3.bt": "Effective budget",
    "sci.c3.bv": "weekly target + calories burned from activity",
    "sci.c3.st": "Remaining balance",
    "sci.c3.sv": "effective budget − calories consumed in the week",
    "sci.c3.note": "Example: 2,000 kcal/day goal and 1,400 kcal burned at the gym → 15,400 kcal effective budget.",
    "sci.c4.t": "What evidence shows",
    "sci.c4.l1": "Intermittent and continuous energy restriction produce comparable weight loss with equal total deficit.",
    "sci.c4.l2": "Flexible and rigid diets are equivalent for fat loss with equal total intake.",
    "sci.c4.l3": "Weekly calorie intake patterns predict long-term success in weight-loss apps.",
    "sci.c4.l4": "Moderate day-to-day variability remains compatible with weight control.",
    "sci.refs": "References",
    "sci.disclaimer":
      "Note: DaD is a personal tracking tool, not a medical device. For conditions or therapeutic diets, consult a doctor or dietitian.",
    "how.eyebrow": "How it works",
    "how.title": "Three steps to start",
    "how.s1.t": "Create your account",
    "how.s1.d": "Sign up with email and set your profile: weight, goal and activity level.",
    "how.s2.t": "Log your day",
    "how.s2.d": "Add meals and movement on the Today tab. Your calorie budget updates in real time.",
    "how.s3.t": "Track progress",
    "how.s3.d": "Check overview, week and totals to stay aligned with your goals.",
    "faq.eyebrow": "FAQ",
    "faq.title": "Frequently asked questions",
    "faq.q1": "Is DaD free?",
    "faq.a1": "Yes, you can use the web app for free. Sign up and start tracking right away.",
    "faq.q2": "Where is my data stored?",
    "faq.a2": "Account and diary are stored mainly on your device. No mandatory cloud server.",
    "faq.q3": "Does it work on Android?",
    "faq.a3": "Yes. Use the web app in your browser or install the full-screen Android version.",
    "faq.q4": "Which languages are supported?",
    "faq.a4": "Italian, English and Spanish. Switch language with the flags above or from the login page.",
    "faq.q5": "How are target calories calculated?",
    "faq.a5": "DaD calculates BMR and TDEE from age, height, weight and activity, then adjusts for your goal.",
    "faq.q6": "Why does DaD use a weekly budget?",
    "faq.a6": 'Weight responds to average energy balance over time. See <a href="#scienza">Scientific background</a> for references.',
    "cta.eyebrow": "Try the app",
    "cta.title": "Open DaD in your browser or install on Android",
    "cta.lead": "The web app is ready now. On Android, use the optimized full-screen mobile version.",
    "cta.web": "Open web app",
    "cta.register": "Sign up",
    "footer.tagline": "Personal food diary and fitness tracker.",
    "footer.privacy": "Privacy",
    "footer.guide": "Guide",
    "footer.copy": "© 2026 DayafterDiet",
  },
  es: {
    "meta.title": "DaD — DayafterDiet | Diario alimentario y fitness",
    "meta.description":
      "DaD (DayafterDiet) — registra calorías, macros, comidas y actividad cada día. Simple, personal, en tu dispositivo.",
    "nav.language": "Idioma",
    "nav.main": "Principal",
    "nav.menu": "Menú",
    "nav.features": "Funciones",
    "nav.sections": "Secciones",
    "nav.science": "Ciencia",
    "nav.how": "Cómo funciona",
    "nav.faq": "FAQ",
    "nav.try": "Probar la app",
    "nav.login": "Acceder",
    "hero.eyebrow": "DayafterDiet",
    "hero.title": "Tu diario alimentario, <em>simple cada día</em>",
    "hero.lead":
      "DaD te ayuda a controlar calorías, macros, comidas y actividad física — con objetivos personalizados y un resumen claro del día.",
    "hero.ctaStart": "Empezar gratis",
    "hero.ctaMore": "Saber más",
    "hero.point1": "Datos en tu dispositivo",
    "hero.point2": "Italiano, English, Español",
    "hero.point3": "Web app y Android",
    "mock.today": "Hoy",
    "mock.net": "kcal netas",
    "mock.budget": "Presupuesto",
    "mock.consumed": "Consumidas",
    "mock.burned": "Quemadas",
    "mock.chip1": "Café",
    "mock.chip2": "Pasta",
    "mock.chip3": "Gimnasio",
    "mock.chip4": "Correr",
    "mock.row1": "Yogur griego",
    "mock.row2": "Gimnasio · 30 min",
    "mock.row3": "Ensalada de pollo",
    "feat.eyebrow": "Funciones",
    "feat.title": "Todo lo necesario, nada de más",
    "feat.lead":
      "DaD está pensada para quien quiere monitorizar la alimentación sin complicaciones: registras, ves el saldo diario y planificas el mañana.",
    "feat.diary.t": "Diario diario",
    "feat.diary.d": "Registra alimentos y actividad con chips rápidos, búsqueda en catálogo o entrada manual.",
    "feat.goals.t": "Objetivos personales",
    "feat.goals.d": "Calorías objetivo según peso, altura, actividad y meta — mantener, perder o ganar.",
    "feat.macro.t": "Macros y resumen",
    "feat.macro.d": "Proteínas, carbohidratos y grasas con barras de progreso y calorías netas.",
    "feat.activity.t": "Actividad y trabajo",
    "feat.activity.d": "Deporte, duración e intensidad con calorías quemadas automáticas. Registra también el trabajo.",
    "feat.week.t": "Semana y totales",
    "feat.week.d": "Resumen semanal, plan sugerido para mañana y estadísticas históricas.",
    "feat.scan.t": "Escaneo de código",
    "feat.scan.d": "Escanea el código de barras: DaD obtiene nombre y valores nutricionales de Open Food Facts.",
    "feat.body.t": "Medidas corporales",
    "feat.body.d": "Actualiza peso, cintura, caderas y más. BMI y TDEE se recalculan solos.",
    "feat.privacy.t": "Privacidad primero",
    "feat.privacy.d": "Cuenta y diario guardados en el dispositivo. Sin nube obligatoria para tus datos.",
    "sec.eyebrow": "Secciones de la app",
    "sec.title": "Navega con claridad",
    "sec.lead": "Cada área de DaD tiene un propósito: del registro diario a las estadísticas a largo plazo.",
    "sec.today.t": "Hoy",
    "sec.today.d": "El corazón de la app: presupuesto calórico, medidas, trabajo, alimentos y actividad.",
    "sec.overview.t": "Resumen",
    "sec.overview.d": "Panorama de calorías consumidas, quemadas y macros con gráficos claros.",
    "sec.tomorrow.t": "Mañana",
    "sec.tomorrow.d": "Sugerencias para el día siguiente según tu objetivo y saldo actual.",
    "sec.week.t": "Semana",
    "sec.week.d": "Tendencia semanal: días en objetivo, media de calorías y progreso.",
    "sec.totals.t": "Totales",
    "sec.totals.d": "Estadísticas históricas: peso, calorías y progreso en el tiempo.",
    "sec.profile.t": "Perfil",
    "sec.profile.d": "Ficha personal, objetivo de dieta, idioma y ajustes de cuenta.",
    "sci.eyebrow": "Base científica",
    "sci.title": "Por qué monitorizar calorías semanalmente",
    "sci.lead":
      "El control del peso depende del balance energético medio en el tiempo, no de un solo día. DaD usa un presupuesto semanal con actividad y días más o menos abundantes.",
    "sci.c1.t": "Balance energético, no día a día",
    "sci.c1.p1": "El peso responde al déficit o superávit calórico sostenido, no a una cena o un día «malo».",
    "sci.c1.p2": "Muchos protocolos clínicos miran semanas, no ventanas aisladas de 24 horas.",
    "sci.c2.t": "Flexibilidad y adherencia",
    "sci.c2.p1": "Dietas rígidas y flexibles dan resultados similares con el mismo déficit semanal total.",
    "sci.c2.p2": "Un enfoque semanal permite cenas fuera y entrenos intensos sin sentirse fuera de presupuesto cada noche.",
    "sci.c3.t": "Cómo lo calcula DaD",
    "sci.c3.p": "La sección Semana usa un modelo simple y transparente:",
    "sci.c3.wt": "Objetivo semanal",
    "sci.c3.wv": "objetivo diario × 7",
    "sci.c3.bt": "Presupuesto efectivo",
    "sci.c3.bv": "objetivo semanal + calorías quemadas con actividad",
    "sci.c3.st": "Saldo disponible",
    "sci.c3.sv": "presupuesto efectivo − calorías consumidas en la semana",
    "sci.c3.note": "Ejemplo: objetivo 2.000 kcal/día y 1.400 kcal quemadas en gimnasio → 15.400 kcal de presupuesto efectivo.",
    "sci.c4.t": "Qué dicen las evidencias",
    "sci.c4.l1": "Restricción intermitente y continua producen pérdida de peso comparable con igual déficit total.",
    "sci.c4.l2": "Dietas flexibles y rígidas son equivalentes para perder grasa con igual ingesta total.",
    "sci.c4.l3": "Los patrones semanales de ingesta calórica predicen el éxito a largo plazo.",
    "sci.c4.l4": "Variabilidad moderada entre días sigue siendo compatible con el control del peso.",
    "sci.refs": "Bibliografía",
    "sci.disclaimer":
      "Nota: DaD es una herramienta de seguimiento personal, no un dispositivo médico. Para patologías o dietas terapéuticas, consulta a un médico o dietista.",
    "how.eyebrow": "Cómo funciona",
    "how.title": "Tres pasos para empezar",
    "how.s1.t": "Crea tu cuenta",
    "how.s1.d": "Regístrate con email y configura tu ficha: peso, objetivo y nivel de actividad.",
    "how.s2.t": "Registra el día",
    "how.s2.d": "Añade comidas y movimiento en la pestaña Hoy. El presupuesto se actualiza al instante.",
    "how.s3.t": "Monitoriza el progreso",
    "how.s3.d": "Revisa resumen, semana y totales para mantenerte en línea con tus objetivos.",
    "faq.eyebrow": "FAQ",
    "faq.title": "Preguntas frecuentes",
    "faq.q1": "¿DaD es gratis?",
    "faq.a1": "Sí, puedes usar la web app gratis. Regístrate y empieza a registrar tu alimentación.",
    "faq.q2": "¿Dónde se guardan mis datos?",
    "faq.a2": "Cuenta y diario se guardan principalmente en tu dispositivo. Sin nube obligatoria.",
    "faq.q3": "¿Funciona en Android?",
    "faq.a3": "Sí. Usa la web app en el navegador o instala la versión Android a pantalla completa.",
    "faq.q4": "¿Qué idiomas hay?",
    "faq.a4": "Italiano, inglés y español. Cambia el idioma con las banderas arriba o desde la página de login.",
    "faq.q5": "¿Cómo calcula las calorías objetivo?",
    "faq.a5": "DaD calcula BMR y TDEE según edad, altura, peso y actividad, luego ajusta según tu meta.",
    "faq.q6": "¿Por qué usa presupuesto semanal?",
    "faq.a6": 'El peso responde al balance energético medio. Ver <a href="#scienza">Base científica</a> para referencias.',
    "cta.eyebrow": "Probar la app",
    "cta.title": "Abre DaD en el navegador o instala en Android",
    "cta.lead": "La web app está lista. En Android, usa la versión móvil optimizada a pantalla completa.",
    "cta.web": "Abrir web app",
    "cta.register": "Registrarse",
    "footer.tagline": "Diario alimentario y fitness personal.",
    "footer.privacy": "Privacidad",
    "footer.guide": "Guía",
    "footer.copy": "© 2026 DayafterDiet",
  },
};

let currentLang = DEFAULT_LANG;

function normalizeLang(lang) {
  const code = String(lang || "").slice(0, 2).toLowerCase();
  return SUPPORTED.includes(code) ? code : DEFAULT_LANG;
}

function getLanguage() {
  return currentLang;
}

function t(key) {
  const table = M[currentLang] || M.it;
  return table[key] ?? M.it[key] ?? key;
}

function initLanguage() {
  currentLang = normalizeLang(localStorage.getItem(LOCALE_KEY) || DEFAULT_LANG);
}

function saveLanguage(lang) {
  currentLang = normalizeLang(lang);
  localStorage.setItem(LOCALE_KEY, currentLang);
  applyTranslations();
}

function applyTranslations() {
  document.documentElement.lang = currentLang;

  document.title = t("meta.title");
  const desc = document.querySelector('meta[name="description"]');
  if (desc) desc.content = t("meta.description");
  const ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle) ogTitle.content = t("meta.title");
  const ogDesc = document.querySelector('meta[property="og:description"]');
  if (ogDesc) ogDesc.content = t("meta.description");

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    el.textContent = t(el.dataset.i18n);
  });

  document.querySelectorAll("[data-i18n-html]").forEach((el) => {
    el.innerHTML = t(el.dataset.i18nHtml);
  });

  document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
    el.setAttribute("aria-label", t(el.dataset.i18nAria));
  });

  syncLanguageFlags();
}

function syncLanguageFlags() {
  document.querySelectorAll(".language-flag-btn").forEach((btn) => {
    const active = btn.dataset.lang === currentLang;
    btn.classList.toggle("is-active", active);
    btn.setAttribute("aria-pressed", String(active));
  });
}

function initLanguageFlags() {
  const container = document.getElementById("language-flags");
  if (!container || container.dataset.wired === "1") {
    syncLanguageFlags();
    return;
  }
  container.dataset.wired = "1";
  container.querySelectorAll(".language-flag-btn").forEach((btn) => {
    btn.addEventListener("click", () => saveLanguage(btn.dataset.lang));
  });
  syncLanguageFlags();
}

initLanguage();
applyTranslations();
initLanguageFlags();

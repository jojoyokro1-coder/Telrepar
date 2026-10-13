const brands = [
  "Apple", "Samsung", "Xiaomi", "Google", "Huawei", "Oppo", "OnePlus", "Realme", "Vivo", "Honor",
  "Motorola", "Nokia", "Sony", "Asus", "Nothing", "Tecno", "Infinix", "Itel", "ZTE", "Alcatel", "Autre marque"
];

const phoneModels = {
  Apple: [
    "iPhone 16 Pro Max", "iPhone 16 Pro", "iPhone 16 Plus", "iPhone 16",
    "iPhone 15 Pro Max", "iPhone 15 Pro", "iPhone 15 Plus", "iPhone 15",
    "iPhone 14 Pro Max", "iPhone 14 Pro", "iPhone 14 Plus", "iPhone 14",
    "iPhone 13 Pro Max", "iPhone 13 Pro", "iPhone 13", "iPhone 13 mini",
    "iPhone 12 Pro Max", "iPhone 12 Pro", "iPhone 12", "iPhone 12 mini",
    "iPhone 11 Pro Max", "iPhone 11 Pro", "iPhone 11",
    "iPhone SE (2022)", "iPhone SE (2020)", "iPhone SE (2016)",
    "iPhone XS Max", "iPhone XS", "iPhone XR", "iPhone X",
    "iPhone 8 Plus", "iPhone 8", "iPhone 7 Plus", "iPhone 7",
    "iPhone 6s / 6s Plus", "iPhone 6 / 6 Plus", "Autre modèle Apple"
  ],
  Samsung: [
    "Galaxy S25 Ultra", "Galaxy S25+", "Galaxy S25",
    "Galaxy S24 Ultra", "Galaxy S24+", "Galaxy S24", "Galaxy S24 FE",
    "Galaxy S23 Ultra", "Galaxy S23+", "Galaxy S23", "Galaxy S23 FE",
    "Galaxy S22 Ultra", "Galaxy S22+", "Galaxy S22",
    "Galaxy S21 Ultra", "Galaxy S21+", "Galaxy S21", "Galaxy S21 FE",
    "Galaxy S20 Ultra", "Galaxy S20+", "Galaxy S20", "Galaxy S20 FE",
    "Galaxy Z Fold 6", "Galaxy Z Flip 6", "Galaxy Z Fold 5", "Galaxy Z Flip 5",
    "Galaxy Z Fold 4", "Galaxy Z Flip 4", "Galaxy Z Fold 3", "Galaxy Z Flip 3",
    "Galaxy A55 5G", "Galaxy A54 5G", "Galaxy A53 5G", "Galaxy A52s 5G", "Galaxy A52 5G",
    "Galaxy A35 5G", "Galaxy A34 5G", "Galaxy A33 5G", "Galaxy A25 5G", "Galaxy A15 5G", "Galaxy A14", "Galaxy A05s",
    "Galaxy Note 20 Ultra", "Galaxy Note 20", "Galaxy Note 10+", "Galaxy Note 10",
    "Autre modèle Samsung"
  ],
  Xiaomi: [
    "Xiaomi 15 Ultra", "Xiaomi 15 Pro", "Xiaomi 15",
    "Xiaomi 14 Ultra", "Xiaomi 14 Pro", "Xiaomi 14", "Xiaomi 14T Pro", "Xiaomi 14T",
    "Xiaomi 13 Ultra", "Xiaomi 13 Pro", "Xiaomi 13", "Xiaomi 13T Pro", "Xiaomi 13T", "Xiaomi 13 Lite",
    "Xiaomi 12 Pro", "Xiaomi 12", "Xiaomi 12T Pro", "Xiaomi 12T", "Xiaomi 12X",
    "Redmi Note 13 Pro+ 5G", "Redmi Note 13 Pro 5G", "Redmi Note 13 Pro 4G", "Redmi Note 13 5G", "Redmi Note 13 4G",
    "Redmi Note 12 Pro+ 5G", "Redmi Note 12 Pro 5G", "Redmi Note 12 5G", "Redmi Note 12 4G",
    "Redmi Note 11 Pro 5G", "Redmi Note 11", "Redmi 13C", "Redmi 13", "Redmi 12 5G", "Redmi 12", "Redmi 10C", "Redmi 9A",
    "POCO F6 Pro", "POCO F6", "POCO F5 Pro", "POCO F5",
    "POCO X6 Pro 5G", "POCO X6 5G", "POCO X5 Pro 5G", "POCO X4 Pro 5G",
    "POCO M6 Pro", "POCO M6", "POCO C65",
    "Autre modèle Xiaomi"
  ],
  Google: [
    "Pixel 9 Pro Fold", "Pixel 9 Pro XL", "Pixel 9 Pro", "Pixel 9",
    "Pixel 8a", "Pixel 8 Pro", "Pixel 8",
    "Pixel 7a", "Pixel 7 Pro", "Pixel 7",
    "Pixel 6a", "Pixel 6 Pro", "Pixel 6",
    "Pixel 5a 5G", "Pixel 5", "Pixel 4a 5G", "Pixel 4a", "Pixel 4 XL", "Pixel 4",
    "Pixel 3a XL", "Pixel 3a", "Pixel Fold",
    "Autre modèle Google"
  ],
  Huawei: [
    "Pura 70 Ultra", "Pura 70 Pro", "Pura 70",
    "Mate 60 Pro+", "Mate 60 Pro", "Mate 60", "Mate X5",
    "P60 Pro", "P60", "P50 Pro", "P50 Pocket", "P40 Pro+", "P40 Pro", "P40", "P40 Lite",
    "P30 Pro", "P30", "P30 Lite", "P20 Pro", "P20", "P20 Lite",
    "Mate 50 Pro", "Mate 40 Pro", "Mate 30 Pro", "Mate 20 Pro", "Mate 10 Pro",
    "Nova 12 SE", "Nova 11i", "Nova 11", "Nova 10 Pro", "Nova 9", "Nova 8i", "Y6p", "Y7a",
    "Autre modèle Huawei"
  ],
  Oppo: [
    "Find X7 Ultra", "Find X7", "Find N3 Flip", "Find N3", "Find X6 Pro", "Find X6",
    "Find X5 Pro", "Find X5", "Find X5 Lite", "Find X3 Pro", "Find X3 Neo", "Find X3 Lite",
    "Reno 12 Pro 5G", "Reno 12 5G", "Reno 12 FS 5G", "Reno 11 Pro 5G", "Reno 11 5G", "Reno 11 F 5G",
    "Reno 10 Pro 5G", "Reno 10 5G", "Reno 8 Pro 5G", "Reno 8 5G", "Reno 8 Lite", "Reno 7", "Reno 6 5G",
    "A98 5G", "A79 5G", "A78 5G", "A78 4G", "A58 4G", "A38", "A18", "A57s", "A54 5G", "A16",
    "Autre modèle Oppo"
  ],
  OnePlus: [
    "OnePlus 13", "OnePlus 12", "OnePlus 12R",
    "OnePlus 11 5G", "OnePlus 10 Pro 5G", "OnePlus 10T 5G", "OnePlus 10R",
    "OnePlus 9 Pro 5G", "OnePlus 9 5G", "OnePlus 9R", "OnePlus 9RT",
    "OnePlus 8T", "OnePlus 8 Pro", "OnePlus 8", "OnePlus 7T Pro", "OnePlus 7 Pro", "OnePlus 7",
    "OnePlus Nord 4", "OnePlus Nord 3 5G", "OnePlus Nord 2T 5G", "OnePlus Nord 2 5G", "OnePlus Nord",
    "OnePlus Nord CE 4", "OnePlus Nord CE 3 5G", "OnePlus Nord CE 3 Lite 5G", "OnePlus Nord CE 2 5G",
    "OnePlus Nord N30 5G", "OnePlus Nord N20 5G", "OnePlus Nord N100",
    "OnePlus Open (Pliable)",
    "Autre modèle OnePlus"
  ],
  Realme: [
    "Realme GT 6", "Realme GT 6T", "Realme GT 5 Pro", "Realme GT 5", "Realme GT 3", "Realme GT 2 Pro", "Realme GT Neo 5",
    "Realme 12 Pro+ 5G", "Realme 12 Pro 5G", "Realme 12+ 5G", "Realme 12 5G", "Realme 12x 5G",
    "Realme 11 Pro+ 5G", "Realme 11 Pro 5G", "Realme 11 5G", "Realme 10 Pro+", "Realme 10",
    "Realme C67", "Realme C65", "Realme C55", "Realme C53", "Realme C51", "Realme C35", "Realme C33",
    "Autre modèle Realme"
  ],
  Vivo: [
    "Vivo X100 Ultra", "Vivo X100 Pro", "Vivo X100", "Vivo X90 Pro", "Vivo X90", "Vivo X80 Pro", "Vivo X70 Pro+",
    "Vivo X Fold 3 Pro", "Vivo X Fold 3", "Vivo X Fold 2", "Vivo X Flip",
    "Vivo V30 Pro", "Vivo V30 5G", "Vivo V30 Lite", "Vivo V29 5G", "Vivo V29e", "Vivo V27 5G", "Vivo V25 5G",
    "Vivo Y36 5G", "Vivo Y36 4G", "Vivo Y27 5G", "Vivo Y27s", "Vivo Y17s", "Vivo Y02s", "Vivo Y76 5G",
    "Autre modèle Vivo"
  ],
  Honor: [
    "Honor Magic 6 Pro", "Honor Magic 6 Ultimate", "Honor Magic 6 Lite",
    "Honor Magic 5 Pro", "Honor Magic 5 Lite", "Honor Magic 4 Pro",
    "Honor Magic V3", "Honor Magic V2", "Honor Magic Vs",
    "Honor 200 Pro", "Honor 200", "Honor 200 Lite", "Honor 200 Smart",
    "Honor 90", "Honor 90 Lite", "Honor 90 Smart",
    "Honor 70", "Honor 70 Lite", "Honor 50", "Honor 50 Lite",
    "Honor X8b", "Honor X8a", "Honor X7b", "Honor X7a", "Honor X6a",
    "Autre modèle Honor"
  ],
  Motorola: [
    "Edge 50 Ultra", "Edge 50 Pro", "Edge 50 Neo", "Edge 50 Fusion",
    "Edge 40 Pro", "Edge 40", "Edge 40 Neo", "Edge 30 Ultra", "Edge 30 Pro", "Edge 30 Fusion", "Edge 30 Neo",
    "Razr 50 Ultra", "Razr 50", "Razr 40 Ultra", "Razr 40", "Razr 2022",
    "Moto G85 5G", "Moto G84 5G", "Moto G73 5G", "Moto G54 5G", "Moto G34 5G", "Moto G24 Power", "Moto G24", "Moto G14", "Moto G04s",
    "Moto E13", "Moto E22", "Moto G200 5G",
    "Autre modèle Motorola"
  ],
  Nokia: [
    "Nokia XR21", "Nokia XR20", "Nokia X30 5G", "Nokia X20", "Nokia G60 5G", "Nokia G42 5G", "Nokia G22", "Nokia G21", "Nokia G11 Plus", "Nokia G11",
    "Nokia C32", "Nokia C22", "Nokia C31", "Nokia C12", "Nokia 8.3 5G", "Nokia 3310 (4G)", "Nokia 8110 (4G)",
    "HMD Skyline", "HMD Pulse Pro", "HMD Pulse+", "HMD Pulse",
    "Autre modèle Nokia / HMD"
  ],
  Sony: [
    "Xperia 1 VI", "Xperia 1 V", "Xperia 1 IV", "Xperia 1 III", "Xperia 1 II",
    "Xperia 5 V", "Xperia 5 IV", "Xperia 5 III",
    "Xperia 10 VI", "Xperia 10 V", "Xperia 10 IV", "Xperia 10 III",
    "Xperia PRO-I", "Xperia Pro",
    "Autre modèle Sony"
  ],
  Asus: [
    "ROG Phone 8 Pro", "ROG Phone 8", "ROG Phone 7 Ultimate", "ROG Phone 7", "ROG Phone 6 Pro", "ROG Phone 6", "ROG Phone 5s Pro", "ROG Phone 5",
    "Zenfone 11 Ultra", "Zenfone 10", "Zenfone 9", "Zenfone 8 Flip", "Zenfone 8", "Zenfone 7 Pro",
    "Autre modèle Asus"
  ],
  Nothing: [
    "Phone (2a) Plus", "Phone (2a)", "Phone (2)", "Phone (1)",
    "CMF Phone 1",
    "Autre modèle Nothing"
  ],
  Tecno: [
    "Camon 30 Premier 5G", "Camon 30 Pro 5G", "Camon 30 5G", "Camon 30 4G", "Camon 20 Premier 5G", "Camon 20 Pro",
    "Phantom V Fold 2", "Phantom V Flip 2", "Phantom V Fold", "Phantom V Flip", "Phantom X2 Pro 5G",
    "Spark 20 Pro+", "Spark 20 Pro", "Spark 20", "Spark 20C", "Spark 10 Pro",
    "Pova 6 Pro 5G", "Pova 6 Neo", "Pova 5 Pro 5G", "Pova 5", "Pova 4 Pro",
    "Autre modèle Tecno"
  ],
  Infinix: [
    "Zero 40 5G", "Zero 40 4G", "Zero 30 5G", "Zero 30 4G", "Zero Ultra", "Zero 20",
    "Note 40 Pro+ 5G", "Note 40 Pro 5G", "Note 40 Pro 4G", "Note 40 5G", "Note 40 4G", "Note 30 VIP", "Note 30 Pro",
    "GT 20 Pro", "GT 10 Pro",
    "Hot 40 Pro", "Hot 40i", "Hot 40", "Hot 30", "Hot 30i", "Smart 8 Pro", "Smart 8",
    "Autre modèle Infinix"
  ],
  Itel: [
    "S24", "S23+", "S23",
    "P55+", "P55 5G", "P55", "P40",
    "A70", "A60s", "A05s", "Color Pro 5G",
    "Autre modèle Itel"
  ],
  ZTE: [
    "Axon 60 Ultra", "Axon 60", "Axon 50 Ultra", "Axon 40 Ultra", "Axon 30 Ultra",
    "Nubia Z60 Ultra", "Nubia Z60S Pro", "Nubia Z50S Pro", "Nubia Z50 Ultra", "Nubia Flip 5G",
    "RedMagic 9S Pro", "RedMagic 9 Pro", "RedMagic 8S Pro", "RedMagic 8 Pro", "RedMagic 7 Pro",
    "Blade V50 Design", "Blade V50 Smart", "Blade A73 5G", "Blade A54",
    "Autre modèle ZTE"
  ],
  Alcatel: [
    "Alcatel 1S (2021)", "Alcatel 1S (2020)", "Alcatel 1V (2021)", "Alcatel 1B (2022)",
    "Alcatel 3L (2021)", "Alcatel 3X 4CAM", "Alcatel 1SE", "Alcatel 1 (2021)",
    "Autre modèle Alcatel"
  ],
  "Autre marque": [
    "Modèle flagship récent",
    "Modèle milieu de gamme",
    "Modèle d'entrée de gamme",
    "Modèle pliable",
    "Téléphone monobloc / à touches",
    "Autre modèle"
  ]
};

const categories = [
  ["smartphone", "Ecran", "Ecran noir, fissure ou tactile"],
  ["battery-charging", "Batterie & charge", "Charge lente ou batterie faible"],
  ["gauge", "Performance", "Lenteurs et blocages"],
  ["wifi", "Connectivite", "Wi-Fi, reseau ou Bluetooth"],
  ["volume-2", "Son & audio", "Micro ou haut-parleur"],
  ["camera", "Camera", "Photos et camera"],
  ["hard-drive", "Stockage", "Espace et fichiers"],
  ["thermometer", "Surchauffe", "Appareil trop chaud"]
];

const issues = {
  "Ecran": ["Ecran noir", "Ecran fissure", "Tactile ne repond plus", "Scintillement"],
  "Batterie & charge": ["Batterie se decharge vite", "Ne charge plus", "Chauffe pendant la charge"],
  "Performance": ["Lenteur generale", "Redemarrages inattendus", "Bloque au demarrage", "Mises a jour bloquees"],
  "Connectivite": ["Le Wi-Fi ne fonctionne pas", "Bluetooth ne se connecte pas", "Pas de reseau / signal faible", "GPS imprecis"],
  "Son & audio": ["Pas de son", "Micro ne fonctionne pas", "Haut-parleur gresillant"],
  "Camera": ["Photos floues", "Camera ne s'ouvre pas", "Flash ne fonctionne pas"],
  "Stockage": ["Stockage plein", "Fichiers corrompus", "Applications plantent souvent"],
  "Surchauffe": ["Chauffe au repos", "Chauffe en charge", "Chauffe en utilisation intensive"]
};

const state = { 
  page: "home", 
  brand: "Samsung", 
  model: "Galaxy S24", 
  category: null, 
  issue: null,
  stack: ["home"]
};

const screen = document.querySelector("#screen");
const backButton = document.querySelector("[data-back]");
const navButtons = document.querySelectorAll("[data-nav]");

// --- Paramètres & Préférences & i18n ---
const settingsState = {
  animations: localStorage.getItem("telrepar-animations") !== "false",
  sound: localStorage.getItem("telrepar-sound") === "true",
  lang: localStorage.getItem("telrepar-lang") || "fr"
};

const i18n = {
  fr: {
    home: "Accueil",
    history: "Historique",
    settings: "Paramètres",
    changeDevice: "Pas ton tel ?",
    selectedDevice: "Appareil sélectionné",
    chooseCategory: "Choisir une catégorie",
    categoriesLbl: "catégories",
    marques: "marques",
    noPay: "à payer",
    tagline: "Telrepar — Le doc de ton phone",
    eyebrowHome: "Diagnostic de téléphone",
    heroTitle: "Ton phone a un souci ?",
    leadHome: "Diagnostic gratuit en 30 secondes. Zéro prise de tête.",

    step1: "Étape 1 sur 3",
    step1Title: "Dis-nous qui tu es 📱",
    step1Lead: "On fait le reste. Choisis la marque de ton téléphone.",
    searchBrand: "Rechercher une marque",
    searchModel: "Rechercher un modèle",

    step2: "Étape 2 sur 3",
    step2Title: "Presque là... 🔍",
    step2Lead: "Encore un détail. Quel modèle utilises-tu ?",

    step3: "Étape 3 sur 3",
    step3Title: "Décris le souci 🩺",
    step3Lead: "Sélectionne le problème le plus proche de ta situation.",

    diagnoseEyebrow: "Analyse en cours",
    diagnoseTitle: "On ausculte ton appareil... 🩺",
    diagnoseLead: "Diagnostic en cours pour",
    selectedIssueLbl: "Problème sélectionné",
    launchDiagBtn: "Lancer le diagnostic complet",

    diagFinished: "Diagnostic terminé",
    normalTitle: "Bonne nouvelle ! Rien de grave.",
    normalText: "Ce problème est très souvent d'origine logicielle ou lié à un réglage. Suivez les astuces et le guide ci-dessous :",
    warningTitle: "Pas de panique, on a un plan.",
    warningText: "Le diagnostic indique qu'une intervention matérielle ou une manipulation précise est recommandée.",

    healthScoreTitle: "Score de santé estimé",
    goodHealth: "Excellente santé",
    warningHealth: "À optimiser",
    badHealth: "Attention requise",
    sysOs: "Système & OS",
    components: "Composants",
    batteryFlow: "Batterie & Flux",

    tipGood: "🎉 Appareil totalement optimisé ! Tout fonctionne au niveau maximal.",
    tipWarning: "💡 Santé correcte. Suivez les 3 tests ci-dessous pour faire remonter le score à 100% !",
    tipBad: "⚠️ Panne détectée. Cochez les étapes du guide ci-dessous pour régénérer le score !",

    troubleshootGuide: "Guide pas à pas",
    tested: "testé",
    expertHackTitle: "Astuce concrète de technicien",
    workshop: "Si le problème persiste (en atelier)",
    workshopTip: "💡 Astuce avant réparation : effectuez toujours une sauvegarde de vos photos et retirez votre code de verrouillage ou carte SIM avant de confier l'appareil.",
    newDiag: "Nouveau diagnostic",
    viewHistory: "Voir l'historique",

    historyTitle: "Ton carnet de santé 📋",
    historyLead: "Retrouvez les analyses effectuées sur vos appareils.",
    historyEmpty: "Tout est clean pour l'instant ✨",

    cat_Ecran: "Écran",
    cat_Batterie: "Batterie & charge",
    cat_Performance: "Performance",
    cat_Connectivite: "Connectivité",
    cat_Son: "Son & audio",
    cat_Camera: "Caméra",
    cat_Stockage: "Stockage",
    cat_Surchauffe: "Surchauffe",

    typewriterText: "Ton phone bug ? On gère.",
    brandNotListed: "Marque non répertoriée",
    viewModels: "Voir les modèles",
    analyzeIssue: "Analyser ce problème",
    diagInProgress: "Analyse en cours...",
    yourDiags: "Vos diagnostics",
    animationsOn: "Animations activées ✨",
    animationsOff: "Mode économie d'énergie ⚡",
    soundOn: "Effets sonores activés 🔊",
    soundOff: "Mode silencieux 🔇",
    historyEmpty2: "L'historique est déjà vide ✨",
    historyCleared: "Carnet de santé effacé 🗑️",
    allStepsTested: "Toutes les étapes testées ! Score à 100% 👏",
    shareTitle: "Telrepar - Diagnostic Téléphone",
    shareText: "Ton phone a un souci ? Fais un diagnostic gratuit en 30 secondes sur Telrepar !",
    shareThanks: "Merci pour le partage ! 🚀",
    linkCopied: "Lien copié dans le presse-papier ! 📋",
    linkCopyFail: "Impossible de copier le lien",

    stgTitle: "Paramètres",
    stgSubtitle: "Personnalise ton expérience Telrepar",
    stgVisual: "Expérience visuelle",
    stgAnimLabel: "Animations & Particules",
    stgAnimDesc: "Effets 3D tilt, particules et rebonds",
    stgSoundLabel: "Effets sonores tech",
    stgSoundDesc: "Petits bips futuristes aux interactions",
    stgLangLabel: "Langue / Language",
    stgLangDesc: "Français, English, Español",
    stgData: "Appareil & Données",
    stgDeviceLabel: "Appareil configuré",
    stgBtnModify: "Modifier",
    stgHealthLabel: "Carnet de santé",
    stgHealthDesc: "Effacer les diagnostics enregistrés",
    stgBtnClear: "Vider",
    stgApp: "Application",
    stgShareLabel: "Partager l'application",
    stgAboutDesc: "Diagnostic 100% gratuit & sans collecte de données.",
    stgAboutTagline: "« Le doc de ton phone 🩺 »",

    navTests: "Tests Lab",
    testEyebrow: "Laboratoire Hardware",
    testTitle: "Tests interactifs en direct",
    testLead: "Testez les composants physiques de votre smartphone directement depuis votre navigateur.",
    testScoreTitle: "Bilan des tests matériels",
    testScoreUnit: "réussis",
    testScorePerfect: "🎉 Tous les composants physiques fonctionnent parfaitement !",
    testScoreAdvice: "💡 Lancez les tests ci-dessous pour détecter une panne d'écran, micro, son ou capteurs.",
    testStatusPending: "À tester",
    testStatusSuccess: "Réussi ✅",
    testStatusFailed: "Anomalie ❌",
    testLaunchBtn: "Tester",
    testTouchTitle: "Écran & Tactile",
    testTouchDesc: "Détection des zones mortes et multi-touch",
    testMicTitle: "Microphone & Audio",
    testMicDesc: "Test d'entrée audio et égaliseur en direct",
    testSpeakerTitle: "Haut-parleurs Stéréo",
    testSpeakerDesc: "Balayage de fréquences et canaux gauche/droite",
    testVibeTitle: "Vibreur & Haptique",
    testVibeDesc: "Impulsions du moteur de vibration",
    testPixelsTitle: "Pixels & Couleurs",
    testPixelsDesc: "Détection de pixels morts ou de teintes",
    testGyroTitle: "Gyroscope & Niveau",
    testGyroDesc: "Calibration des capteurs d'inclinaison",
    btnPass: "C'est bon ! ✅",
    btnFail: "Ça ne marche pas ❌",
    btnCancel: "Fermer"
  },

  en: {
    home: "Home",
    history: "History",
    settings: "Settings",
    changeDevice: "Not your phone?",
    selectedDevice: "Selected device",
    chooseCategory: "Choose a category",
    categoriesLbl: "categories",
    marques: "brands",
    noPay: "to pay",
    tagline: "Telrepar — Your phone doctor",
    eyebrowHome: "Smartphone Diagnostic",
    heroTitle: "Phone acting up?",
    leadHome: "Free 30-second diagnostic. Zero hassle.",

    step1: "Step 1 of 3",
    step1Title: "Select your brand 📱",
    step1Lead: "We do the rest. Pick your phone manufacturer.",
    searchBrand: "Search a brand",
    searchModel: "Search a model",

    step2: "Step 2 of 3",
    step2Title: "Almost there... 🔍",
    step2Lead: "One more detail. Which model are you using?",

    step3: "Step 3 of 3",
    step3Title: "Describe the issue 🩺",
    step3Lead: "Select the problem closest to your situation.",

    diagnoseEyebrow: "Analysis in progress",
    diagnoseTitle: "Examining your device... 🩺",
    diagnoseLead: "Diagnostic running for",
    selectedIssueLbl: "Selected issue",
    launchDiagBtn: "Run complete diagnostic",

    diagFinished: "Diagnostic complete",
    normalTitle: "Good news! Nothing serious.",
    normalText: "This issue is very often software-related or tied to a setting. Follow the technician tips below:",
    warningTitle: "Don't panic, we have a plan.",
    warningText: "The diagnostic suggests hardware service or precise troubleshooting is recommended.",

    healthScoreTitle: "Estimated Health Score",
    goodHealth: "Excellent health",
    warningHealth: "Needs optimization",
    badHealth: "Attention needed",
    sysOs: "System & OS",
    components: "Hardware",
    batteryFlow: "Battery & Power",

    tipGood: "🎉 Device fully optimized! Everything operates at peak level.",
    tipWarning: "💡 Fair health score. Follow the 3 steps below to boost your score to 100%!",
    tipBad: "⚠️ Issue detected. Check off the guide steps below to regenerate your health score!",

    troubleshootGuide: "Step-by-step guide",
    tested: "tested",
    expertHackTitle: "Technician Pro Tip",
    workshop: "If the issue persists (repair shop)",
    workshopTip: "💡 Tip before repair: always back up your photos and remove your passcode or SIM card before handing in your device.",
    newDiag: "New diagnostic",
    viewHistory: "View history",

    historyTitle: "Health Logbook 📋",
    historyLead: "View past diagnostics performed on your devices.",
    historyEmpty: "All clean for now ✨",

    cat_Ecran: "Screen",
    cat_Batterie: "Battery & Charging",
    cat_Performance: "Performance",
    cat_Connectivite: "Connectivity",
    cat_Son: "Sound & Audio",
    cat_Camera: "Camera",
    cat_Stockage: "Storage",
    cat_Surchauffe: "Overheating",

    typewriterText: "Phone acting up? We fix it.",
    brandNotListed: "Brand not listed",
    viewModels: "View models",
    analyzeIssue: "Analyze this issue",
    diagInProgress: "Analysis in progress...",
    yourDiags: "Your diagnostics",
    animationsOn: "Animations enabled ✨",
    animationsOff: "Power saving mode ⚡",
    soundOn: "Sound effects enabled 🔊",
    soundOff: "Silent mode 🔇",
    historyEmpty2: "History is already empty ✨",
    historyCleared: "Health logbook cleared 🗑️",
    allStepsTested: "All steps tested! Score at 100% 👏",
    shareTitle: "Telrepar - Phone Diagnostic",
    shareText: "Phone acting up? Get a free 30-second diagnostic on Telrepar!",
    shareThanks: "Thanks for sharing! 🚀",
    linkCopied: "Link copied to clipboard! 📋",
    linkCopyFail: "Unable to copy link",

    stgTitle: "Settings",
    stgSubtitle: "Customize your Telrepar experience",
    stgVisual: "Visual Experience",
    stgAnimLabel: "Animations & Particles",
    stgAnimDesc: "3D tilt effects, particles and bounces",
    stgSoundLabel: "Tech Sound Effects",
    stgSoundDesc: "Futuristic bleeps on interaction",
    stgLangLabel: "Language / Langue",
    stgLangDesc: "Français, English, Español",
    stgData: "Device & Data",
    stgDeviceLabel: "Configured device",
    stgBtnModify: "Change",
    stgHealthLabel: "Health logbook",
    stgHealthDesc: "Clear saved diagnostics",
    stgBtnClear: "Clear",
    stgApp: "Application",
    stgShareLabel: "Share the app",
    stgAboutDesc: "100% free diagnostic & zero data collection.",
    stgAboutTagline: "« Your phone doctor 🩺 »",

    navTests: "Tests Lab",
    testEyebrow: "Hardware Laboratory",
    testTitle: "Live Interactive Tests",
    testLead: "Test your smartphone's physical components directly inside your browser.",
    testScoreTitle: "Hardware test summary",
    testScoreUnit: "passed",
    testScorePerfect: "🎉 All physical components operate perfectly!",
    testScoreAdvice: "💡 Run the tests below to detect touch screen, mic, speaker or sensor issues.",
    testStatusPending: "Not tested",
    testStatusSuccess: "Passed ✅",
    testStatusFailed: "Issue ❌",
    testLaunchBtn: "Test",
    testTouchTitle: "Screen & Touch",
    testTouchDesc: "Dead zone detection and multi-touch test",
    testMicTitle: "Microphone & Audio",
    testMicDesc: "Audio input test & live decibel meter",
    testSpeakerTitle: "Stereo Speakers",
    testSpeakerDesc: "Frequency sweep & left/right balance",
    testVibeTitle: "Vibration Engine",
    testVibeDesc: "Haptic engine pulse test",
    testPixelsTitle: "Pixels & Colors",
    testPixelsDesc: "Dead pixel & color tint detection",
    testGyroTitle: "Gyroscope & Level",
    testGyroDesc: "Motion sensor calibration test",
    btnPass: "Works fine! ✅",
    btnFail: "Does not work ❌",
    btnCancel: "Close"
  },

  es: {
    home: "Inicio",
    history: "Historial",
    settings: "Ajustes",
    changeDevice: "¿No es tu teléfono?",
    selectedDevice: "Dispositivo seleccionado",
    chooseCategory: "Elige una categoría",
    categoriesLbl: "categorías",
    marques: "marcas",
    noPay: "a pagar",
    tagline: "Telrepar — El médico de tu móvil",
    eyebrowHome: "Diagnóstico de Teléfono",
    heroTitle: "¿Tu móvil tiene un fallo?",
    leadHome: "Diagnóstico gratuito en 30 segundos. Sin líos.",

    step1: "Paso 1 de 3",
    step1Title: "Elige tu marca 📱",
    step1Lead: "Nosotros hacemos el resto. Elige la marca de tu móvil.",
    searchBrand: "Buscar una marca",
    searchModel: "Buscar un modelo",

    step2: "Paso 2 de 3",
    step2Title: "Casi listo... 🔍",
    step2Lead: "Un detalle más. ¿Qué modelo utilizas?",

    step3: "Paso 3 de 3",
    step3Title: "Describe la avería 🩺",
    step3Lead: "Selecciona el problema más cercano a tu situación.",

    diagnoseEyebrow: "Análisis en curso",
    diagnoseTitle: "Examinando tu dispositivo... 🩺",
    diagnoseLead: "Diagnóstico ejecutándose para",
    selectedIssueLbl: "Problema seleccionado",
    launchDiagBtn: "Iniciar diagnóstico completo",

    diagFinished: "Diagnóstico completado",
    normalTitle: "¡Buenas noticias! Nada grave.",
    normalText: "Este problema suele ser de origen de software o de ajuste. Sigue los consejos a continuación:",
    warningTitle: "Sin pánico, tenemos un plan.",
    warningText: "El diagnóstico indica que se recomienda una reparación o manipulación precisa.",

    healthScoreTitle: "Puntuación de salud estimada",
    goodHealth: "Excelente salud",
    warningHealth: "Por optimizar",
    badHealth: "Atención requerida",
    sysOs: "Sistema y SO",
    components: "Componentes",
    batteryFlow: "Batería y Energía",

    tipGood: "🎉 Dispositivo totalmente optimizado. Funciona al máximo nivel.",
    tipWarning: "💡 Salud aceptable. ¡Sigue las 3 pruebas para subir la puntuación al 100%!",
    tipBad: "⚠️ Avería detectada. Marca los pasos de la guía para regenerar la puntuación.",

    troubleshootGuide: "Guía paso a paso",
    tested: "probado",
    expertHackTitle: "Consejo práctico de técnico",
    workshop: "Si el problema persiste (en taller)",
    workshopTip: "💡 Consejo antes de reparar: guarda siempre tus fotos y retira tu código de bloqueo o tarjeta SIM antes de entregar el equipo.",
    newDiag: "Nuevo diagnóstico",
    viewHistory: "Ver historial",

    historyTitle: "Cuaderno de salud 📋",
    historyLead: "Consulta los diagnósticos realizados en tus dispositivos.",
    historyEmpty: "Todo limpio por ahora ✨",

    cat_Ecran: "Pantalla",
    cat_Batterie: "Batería y Carga",
    cat_Performance: "Rendimiento",
    cat_Connectivite: "Conectividad",
    cat_Son: "Sonido y Audio",
    cat_Camera: "Cámara",
    cat_Stockage: "Almacenamiento",
    cat_Surchauffe: "Sobrecalentamiento",

    typewriterText: "¿Tu móvil falla? Lo arreglamos.",
    brandNotListed: "Marca no listada",
    viewModels: "Ver modelos",
    analyzeIssue: "Analizar este problema",
    diagInProgress: "Análisis en curso...",
    yourDiags: "Tus diagnósticos",
    animationsOn: "Animaciones activadas ✨",
    animationsOff: "Modo ahorro de energía ⚡",
    soundOn: "Efectos sonoros activados 🔊",
    soundOff: "Modo silencioso 🔇",
    historyEmpty2: "El historial ya está vacío ✨",
    historyCleared: "Cuaderno de salud borrado 🗑️",
    allStepsTested: "¡Todos los pasos probados! Puntuación al 100% 👏",
    shareTitle: "Telrepar - Diagnóstico Telefónico",
    shareText: "¿Tu móvil falla? ¡Haz un diagnóstico gratis en 30 segundos en Telrepar!",
    shareThanks: "¡Gracias por compartir! 🚀",
    linkCopied: "¡Enlace copiado al portapapeles! 📋",
    linkCopyFail: "No se pudo copiar el enlace",

    stgTitle: "Ajustes",
    stgSubtitle: "Personaliza tu experiencia Telrepar",
    stgVisual: "Experiencia visual",
    stgAnimLabel: "Animaciones y Partículas",
    stgAnimDesc: "Efectos 3D tilt, partículas y rebotes",
    stgSoundLabel: "Efectos de sonido tech",
    stgSoundDesc: "Sonidos futuristas al interactuar",
    stgLangLabel: "Idioma / Language",
    stgLangDesc: "Français, English, Español",
    stgData: "Dispositivo y Datos",
    stgDeviceLabel: "Dispositivo configurado",
    stgBtnModify: "Cambiar",
    stgHealthLabel: "Cuaderno de salud",
    stgHealthDesc: "Borrar diagnósticos guardados",
    stgBtnClear: "Vaciar",
    stgApp: "Aplicación",
    stgShareLabel: "Compartir la aplicación",
    stgAboutDesc: "Diagnóstico 100% gratuito y sin datos.",
    stgAboutTagline: "« El médico de tu móvil 🩺 »",

    navTests: "Tests Lab",
    testEyebrow: "Laboratorio Hardware",
    testTitle: "Pruebas interactivas en vivo",
    testLead: "Prueba los componentes físicos de tu teléfono directamente en el navegador.",
    testScoreTitle: "Balance de pruebas de hardware",
    testScoreUnit: "superadas",
    testScorePerfect: "🎉 ¡Todos los componentes físicos funcionan perfectamente!",
    testScoreAdvice: "💡 Ejecuta las pruebas a continuación para detectar fallos de pantalla, micro o sensores.",
    testStatusPending: "Por probar",
    testStatusSuccess: "Superado ✅",
    testStatusFailed: "Avería ❌",
    testLaunchBtn: "Probar",
    testTouchTitle: "Pantalla y Táctil",
    testTouchDesc: "Detección de zonas muertas y multitáctil",
    testMicTitle: "Micrófono y Audio",
    testMicDesc: "Prueba de entrada de audio y medidor en vivo",
    testSpeakerTitle: "Altavoces Estéreo",
    testSpeakerDesc: "Barrido de frecuencia y canales izquierda/derecha",
    testVibeTitle: "Vibrador y Háptico",
    testVibeDesc: "Impulsos del motor de vibración",
    testPixelsTitle: "Píxeles y Colores",
    testPixelsDesc: "Detección de píxeles muertos o manchas",
    testGyroTitle: "Giroscopio y Nivel",
    testGyroDesc: "Calibración de sensores de inclinación",
    btnPass: "¡Funciona bien! ✅",
    btnFail: "No funciona ❌",
    btnCancel: "Cerrar"
  }
};

function t(key) {
  const lang = settingsState.lang || 'fr';
  return i18n[lang]?.[key] || i18n['fr']?.[key] || key;
}

function getCategoryLabel(title) {
  const map = {
    "Ecran": t("cat_Ecran"),
    "Batterie & charge": t("cat_Batterie"),
    "Performance": t("cat_Performance"),
    "Connectivite": t("cat_Connectivite"),
    "Son & audio": t("cat_Son"),
    "Camera": t("cat_Camera"),
    "Stockage": t("cat_Stockage"),
    "Surchauffe": t("cat_Surchauffe")
  };
  return map[title] || title;
}

if (!settingsState.animations) {
  document.body.classList.add("animations-disabled");
}

let audioCtx = null;
function playTechSound(type = 'click') {
  if (!settingsState.sound) return;
  try {
    if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    if (audioCtx.state === 'suspended') audioCtx.resume();
    
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    
    const now = audioCtx.currentTime;
    if (type === 'click') {
      osc.type = 'sine';
      osc.frequency.setValueAtTime(540, now);
      osc.frequency.exponentialRampToValueAtTime(780, now + 0.04);
      gain.gain.setValueAtTime(0.06, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);
      osc.start(now);
      osc.stop(now + 0.05);
    } else if (type === 'success') {
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(520, now);
      osc.frequency.exponentialRampToValueAtTime(920, now + 0.12);
      gain.gain.setValueAtTime(0.08, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.15);
      osc.start(now);
      osc.stop(now + 0.15);
    } else if (type === 'toggle') {
      osc.type = 'sine';
      osc.frequency.setValueAtTime(400, now);
      osc.frequency.exponentialRampToValueAtTime(650, now + 0.06);
      gain.gain.setValueAtTime(0.05, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.06);
      osc.start(now);
      osc.stop(now + 0.06);
    }
  } catch (e) {
    // Audio non supporté ou bloqué par le navigateur
  }
}

function showToast(message, type = 'info') {
  const toast = document.querySelector("#toast");
  if (!toast) return;
  toast.innerHTML = message;
  toast.className = `toast toast-${type} show`;
  toast.hidden = false;
  
  if (window.toastTimeout) clearTimeout(window.toastTimeout);
  window.toastTimeout = setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => { toast.hidden = true; }, 300);
  }, 2400);
}

function icon(name) { return `<i data-lucide="${name}"></i>`; }

// --- Navigation ---

function navigateTo(page) {
  if (state.page !== page) {
    playTechSound('click');
    state.stack.push(page);
    state.page = page;
    renderWithTransition();
  }
}

function goBack() {
  if (state.stack.length > 1) {
    playTechSound('click');
    state.stack.pop();
    state.page = state.stack[state.stack.length - 1];
    if (state.page === "home") {
      state.stack = ["home"];
      state.category = null;
      state.issue = null;
    }
    renderWithTransition();
  }
}

// --- Render ---

function renderWithTransition() {
  screen.style.opacity = '0';
  screen.style.transform = 'translateY(8px)';
  
  setTimeout(() => {
    const pages = { home, brands: selectBrand, models: selectModel, issues: selectIssue, diagnose, result, history, tests: hardwareTests };
    screen.innerHTML = `<div class="page-transition">${pages[state.page]()}</div>`;
    
    lucide.createIcons();
    initSpotlightEffect();
    initTiltEffect();
    initRippleEffect();
    initScrollReveal();
    
    if (state.page === 'home') {
      initTypewriter();
      initCountUp();
      createParticles();
    }
    if (state.page === 'result') {
      const isWarning = /fissure|ne charge plus|noir|surchauffe|chauffe/i.test(state.issue);
      if (!isWarning) setTimeout(() => createConfetti(), 500);
      setTimeout(() => initHealthGauge(), 100);
    }
    
    requestAnimationFrame(() => {
      screen.style.opacity = '1';
      screen.style.transform = 'translateY(0)';
    });
    
    updateNavState();
  }, 150);
}

function updateNavState() {
  backButton.hidden = state.page === "home" || state.page === "history" || state.page === "tests";
  navButtons.forEach(button => {
    const navKey = button.dataset.nav;
    const isActive = navKey === state.page || (state.page !== "history" && state.page !== "tests" && navKey === "home");
    button.classList.toggle("active", isActive);
    const span = button.querySelector("span");
    if (span) {
      if (navKey === "home") span.textContent = t("home");
      else if (navKey === "tests") span.textContent = t("navTests");
      else if (navKey === "history") span.textContent = t("history");
    }
  });
}

// --- Page Templates ---

function home() {
  return `
    <div class="hero-glow" style="top: -40px; right: -30px;"></div>
    <div class="particles-container" id="particles"></div>
    <p class="eyebrow">${t("eyebrowHome")}</p>
    <h2><span class="gradient-text" id="hero-title"></span> <span class="emoji-pop">🔧</span></h2>
    <p class="lead">${t("leadHome")}</p>
    <div class="stats-bar reveal-up">
      <div class="stat-item">
        <span class="stat-number" data-target="21">0</span>
        <span class="stat-label">${t("marques")}</span>
      </div>
      <div class="stat-item">
        <span class="stat-number" data-target="8">0</span>
        <span class="stat-label">${t("categoriesLbl")}</span>
      </div>
      <div class="stat-item">
        <span class="stat-number" data-target="0" data-suffix="€">0€</span>
        <span class="stat-label">${t("noPay")}</span>
      </div>
    </div>
    <div class="device-card reveal-up">
      <span class="device-icon">${icon("smartphone")}</span>
      <div><strong>${state.brand} ${state.model}</strong><small>${t("selectedDevice")}</small></div>
      <button class="change-device" data-action="navigate" data-page="brands">${t("changeDevice")}</button>
    </div>
    <div class="section-title reveal-up">${t("chooseCategory")} <span>8 ${t("categoriesLbl")}</span></div>
    <div class="category-grid">
      ${categories.map(([i, title], index) => `
        <button class="category" data-action="select-category" data-category="${title}" type="button" style="--i: ${index}">
          ${icon(i)}<span>${getCategoryLabel(title)}</span>
        </button>
      `).join("")}
    </div>
    <p class="brand-tagline">${t("tagline")}</p>`;
}

function selectBrand() {
  return `
    <div class="step-dots">
      <span class="step-dot active"></span>
      <span class="step-dot"></span>
      <span class="step-dot"></span>
    </div>
    <p class="eyebrow">${t("step1")}</p>
    <h2>${t("step1Title")}</h2>
    <p class="lead">${t("step1Lead")}</p>
    <div class="search">
      ${icon("search")}
      <input id="brand-search" type="search" placeholder="${t("searchBrand")}" autocomplete="off" />
    </div>
    <div class="brand-list" id="brand-list">${brandRows(brands)}</div>`;
}

function brandRows(list) {
  return list.map((brand, index) => `
    <button class="select-row" type="button" data-action="select-brand" data-brand="${brand}" style="--i: ${index}">
      <span class="round-icon">${icon("smartphone")}</span>
      <span class="row-copy"><strong>${brand}</strong><small>${brand === "Autre marque" ? t("brandNotListed") : t("viewModels")}</small></span>
      ${icon("chevron-right")}
    </button>
  `).join("");
}

function modelRows(brand, list) {
  if (!list || list.length === 0) {
    return `<div class="empty"><p>Aucun modèle trouvé pour "${brand}"</p></div>`;
  }
  return list.map((model, index) => `
    <button class="select-row" type="button" data-action="select-model" data-model="${model}" style="--i: ${index}">
      <span class="round-icon">${icon("smartphone")}</span>
      <span class="row-copy"><strong>${model}</strong><small>${brand}</small></span>
      ${icon("chevron-right")}
    </button>
  `).join("");
}

function selectModel() {
  const list = phoneModels[state.brand] || ["Modèle récent", "Modèle milieu de gamme", "Modèle ancien", "Autre modèle"];

  return `
    <div class="step-dots">
      <span class="step-dot done"></span>
      <span class="step-dot active"></span>
      <span class="step-dot"></span>
    </div>
    <p class="eyebrow">${t("step2")} • ${state.brand}</p>
    <h2>${t("step2Title")}</h2>
    <p class="lead">${t("step2Lead")}</p>
    <div class="search">
      ${icon("search")}
      <input id="model-search" type="search" placeholder="${t("searchModel")} (${state.brand})..." autocomplete="off" />
    </div>
    <div class="brand-list" id="model-list">
      ${modelRows(state.brand, list)}
    </div>`;
}

function selectIssue() {
  const list = issues[state.category] || [];
  return `
    <div class="step-dots">
      <span class="step-dot done"></span>
      <span class="step-dot done"></span>
      <span class="step-dot active"></span>
    </div>
    <p class="eyebrow">${t("step3")} • ${getCategoryLabel(state.category)}</p>
    <h2>${t("step3Title")}</h2>
    <p class="lead">${t("step3Lead")}</p>

    <div class="issue-list" id="issue-list">
      ${list.map((issue, index) => `
        <button class="issue-row" type="button" data-action="select-issue" data-issue="${issue}" style="--i: ${index}">
          <span class="round-icon">${icon("circle-alert")}</span>
          <span class="row-copy"><strong>${issue}</strong><small>${t("analyzeIssue")}</small></span>
          ${icon("chevron-right")}
        </button>
      `).join("")}
    </div>`;
}

function diagnose() {
  return `
    <p class="eyebrow">${t("diagnoseEyebrow")}</p>
    <h2>${t("diagnoseTitle")}</h2>
    <p class="lead">${t("diagnoseLead")} ${state.brand} ${state.model}.</p>
    <div class="progress"><span class="progress-bar"></span></div>
    <div class="diag-shimmer-area">
      <div class="shimmer-block wide"></div>
      <div class="shimmer-block medium"></div>
      <div class="shimmer-block short"></div>
    </div>
    <div class="advice" style="opacity: 1; animation: none;">
      <strong>${t("selectedIssueLbl")}</strong>
      <p>${state.issue}</p>
    </div>
    <button class="primary cta-pulse" data-action="finish-diagnosis" type="button" style="margin-top: 24px;">
      ${icon("stethoscope")} ${t("launchDiagBtn")}
    </button>`;
}

function getForcedRestartGuide(brand) {
  if (brand === "Apple") {
    return {
      title: "Forcer le redémarrage (Apple iPhone)",
      desc: "1. Appuyez brièvement sur <strong>Volume +</strong> et relâchez immédiatement.<br>2. Appuyez brièvement sur <strong>Volume -</strong> et relâchez immédiatement.<br>3. Maintenez enfoncé le <strong>bouton latéral droit</strong> pendant 10 à 15 secondes sans lâcher jusqu'à voir la pomme Apple 🍏."
    };
  } else if (brand === "Samsung") {
    return {
      title: "Forcer le redémarrage (Samsung Galaxy)",
      desc: "1. Maintenez simultanément le bouton <strong>Marche/Arrêt</strong> et le bouton <strong>Volume Bas</strong>.<br>2. Gardez les deux boutons enfoncés pendant 7 à 10 secondes d'affilée sans relâcher.<br>3. L'écran s'éteint et l'appareil vibre en affichant le logo Samsung."
    };
  } else if (brand === "Google") {
    return {
      title: "Forcer le redémarrage (Google Pixel)",
      desc: "1. Maintenez le bouton <strong>Marche/Arrêt</strong> enfoncé fermement.<br>2. Gardez la pression continue pendant 30 secondes sans relâcher.<br>3. L'appareil vibrera et le logo 'G' confirmera le redémarrage propre."
    };
  } else if (brand === "Xiaomi") {
    return {
      title: "Forcer le redémarrage (Xiaomi / Redmi)",
      desc: "1. Maintenez le bouton <strong>Alimentation</strong> enfoncé pendant 10 à 15 secondes.<br>2. Dès la vibration ou l'apparition du logo Mi/Xiaomi/HyperOS, relâchez le bouton."
    };
  } else {
    return {
      title: `Forcer le redémarrage (${brand})`,
      desc: "1. Maintenez le bouton <strong>Marche/Arrêt</strong> (ou Marche/Arrêt + Volume Bas) enfoncé.<br>2. Ne relâchez pas pendant 12 à 15 secondes complètes jusqu'à extinction et redémarrage."
    };
  }
}

function getTroubleshootingDetails(brand, category, issue) {
  const restart = getForcedRestartGuide(brand);
  let showRestartBox = false;
  let hack = "";
  let steps = [];
  let proDetails = "En atelier : diagnostic des lignes d'alimentation et des bus de communication de la carte mère sous microscope.";

  // 1. ÉCRAN
  if (issue === "Ecran noir") {
    showRestartBox = true;
    hack = "💡 <strong>Astuce de la lampe torche :</strong> Dans une pièce sombre, allumez la torche d'un autre téléphone et collez-la contre l'écran noir sous un angle de 45°. Si vous apercevez faiblement l'heure ou vos icônes en arrière-plan, votre téléphone est vivant : seul le rétro-éclairage (circuit Backlight) est éteint !";
    steps = [
      {
        title: "Test de réaction par son et vibreur",
        desc: "Basculez le commutateur vibreur, branchez le câble de charge ou appelez votre numéro depuis un autre téléphone. Si l'appareil sonne ou vibre, la carte mère est 100% fonctionnelle.",
        tip: "Preuve irréfutable que vos données sont intactes et qu'il n'y a pas de panne carte mère.",
        icon: "bell"
      },
      {
        title: "Recharge forcée 30 minutes sur secteur mural",
        desc: "Branchez votre smartphone avec un bloc mural officiel de 15W minimum. En cas de décharge profonde (batterie à 0%), aucun affichage n'apparaît pendant les 15 premières minutes.",
        tip: "Évitez les ports USB d'ordinateur trop faibles pour réveiller une batterie vide.",
        icon: "zap"
      },
      {
        title: "Forcer le redémarrage d'urgence",
        desc: `Appliquez la manipulation exacte pour votre ${brand} : ${restart.desc}`,
        tip: "Débloque le pilote d'affichage GPU gelé par une application en tâche de fond.",
        icon: "refresh-cw"
      }
    ];
    proDetails = "En atelier : Remplacement de la dalle OLED ou micro-soudure du fusible de rétro-éclairage (compter 40 à 60 min).";
  } else if (issue === "Ecran fissure") {
    showRestartBox = false;
    hack = "💡 <strong>Astuce d'urgence :</strong> Si des éclats s'effritent, appliquez une bande de ruban adhésif transparent très fin ou du film étirable sur toute la surface. Cela protège vos doigts et empêche l'humidité ambiante de s'infiltrer et d'achever la dalle tactile en dessous.";
    steps = [
      {
        title: "Sauvegarde d'urgence immédiate",
        desc: "Tant que le tactile fonctionne encore en partie, lancez une sauvegarde Cloud (Google One / iCloud) ou branchez votre câble à un PC pour glisser vos photos sur l'ordinateur.",
        tip: "Une fissure peut sectionner les nappes conductrices invisibles du jour au lendemain.",
        icon: "hard-drive-download"
      },
      {
        title: "Test des zones mortes de l'écran",
        desc: "Maintenez une icône d'application et baladez-la sur tous les coins de l'écran. Si l'icône décroche à un endroit précis, cette zone du numériseur tactile est rompue.",
        tip: "Permet de vérifier si le capteur tactile est touché ou seulement le verre de protection.",
        icon: "grid"
      },
      {
        title: "Activer le Mode Sombre forcé",
        desc: "Sur les écrans OLED, les pixels noirs sont physiquement éteints. Cela réduit la chaleur émise par l'écran et limite l'extension des fissures causées par la dilatation thermique.",
        tip: "Paramètres > Affichage > Thème sombre.",
        icon: "moon"
      }
    ];
    proDetails = "En atelier : Remplacement du bloc vitre + écran complet. Si le châssis en aluminium a plié lors du choc, un redressage est requis pour éviter que le nouvel écran ne casse.";
  } else if (issue === "Tactile ne repond plus") {
    showRestartBox = false;
    hack = "💡 <strong>Astuce magique de la souris USB (OTG) :</strong> Branchez un petit adaptateur USB-C vers USB et connectez une simple souris d'ordinateur filaire ou sans fil. Un curseur de souris apparaît instantanément sur l'écran de votre smartphone ! Vous pouvez taper votre code PIN et tout contrôler sans toucher l'écran.";
    steps = [
      {
        title: "Retirer la coque et la protection en verre",
        desc: "Une coque trop serrée ou un verre trempé fissuré génère des pressions permanentes invisibles appelées 'ghost touch'. Retirez-les pour tester l'écran totalement nu.",
        tip: "L'humidité emprisonnée sous un verre trempé perturbe les signaux capacitifs.",
        icon: "layers"
      },
      {
        title: "Nettoyer l'écran avec un chiffon microfibre sec",
        desc: "Frottez vigoureusement l'écran avec un chiffon doux sec. La moindre trace de gras ou gouttelette microscopique court-circuite la détection des doigts.",
        tip: "N'utilisez jamais d'eau ni de gel hydroalcoolique directement sur la dalle.",
        icon: "sparkles"
      },
      {
        title: "Forcer le redémarrage constructeur",
        desc: `Puisque vous ne pouvez pas glisser pour éteindre : ${restart.desc}`,
        tip: "Recharge le micro-logiciel du contrôleur tactile en mémoire vive.",
        icon: "refresh-cw"
      }
    ];
    proDetails = "En atelier : Reconnexion de la nappe FPC tactile ou remplacement du bloc écran complet si le numériseur est endommagé.";
  } else if (issue === "Scintillement") {
    showRestartBox = false;
    hack = "💡 <strong>Astuce Anti-Flicker (DC Dimming) :</strong> Les écrans OLED scintillent à basse luminosité à cause du PWM (modulation d'impulsion). Activez l'option 'Anti-scintillement / Protection des yeux' dans les réglages d'affichage, ou maintenez la luminosité au-dessus de 35%.";
    steps = [
      {
        title: "Bloquer la fréquence à 60 Hz fixe",
        desc: "Rendez-vous dans Réglages > Affichage > Taux de rafraîchissement. Passez de 'Adaptatif 120Hz' à 'Standard 60Hz'. Les variations brutales de fréquence sont la 1ère cause de scintillement.",
        tip: "Stabilise la tension envoyée aux diodes électroluminescentes.",
        icon: "gauge"
      },
      {
        title: "Désactiver la luminosité automatique et True Tone",
        desc: "Les capteurs de luminosité ambiante défectueux font constamment osciller le rétro-éclairage. Réglez une valeur fixe manuelle.",
        tip: "Permet de vérifier si le problème vient du capteur en façade ou de la dalle.",
        icon: "sun"
      },
      {
        title: "Désactiver les superpositions matérielles",
        desc: "Dans les Options développeurs, activez 'Désactiver les superpositions matérielles'. Cela force le processeur graphique (GPU) à gérer l'affichage sans saccade.",
        tip: "Astuce bien connue des techniciens pour éliminer les bugs de rendu.",
        icon: "sliders"
      }
    ];
    proDetails = "En atelier : Nettoyage du connecteur d'affichage sur la carte mère (souvent oxydé après une micro-infiltration de vapeur dans la salle de bain).";
  }

  // 2. BATTERIE & CHARGE
  else if (issue === "Ne charge plus") {
    showRestartBox = false;
    hack = "💡 <strong>Astuce du cure-dent biseauté :</strong> 8 fois sur 10, le port de charge est simplement bourré de peluches de poche tassées. Prenez un cure-dent en bois, biseautez la pointe pour faire une mini-spatule, et grattez délicatement le fond. N'utilisez JAMAIS d'épingle métallique pour ne pas court-circuiter les broches d'alimentation dorées !";
    steps = [
      {
        title: "Vérifier le 'clic' franc de la prise",
        desc: "Enfoncez le câble dans le smartphone. S'il n'y a pas un clic net et que le connecteur bouge ou laisse un espace de 1 mm, il y a encore de la poussière compactée au fond du port.",
        tip: "La fiche doit rentrer jusqu'à toucher le châssis.",
        icon: "cable"
      },
      {
        title: "Test croisé câble et prise murale",
        desc: "Testez un autre câble ET un autre bloc secteur mural d'au moins 15W. Les câbles cassent très souvent de manière invisible sous la gaine au niveau de l'embout.",
        tip: "Évitez les prises USB de voiture ou de PC souvent limitées à 0.5A.",
        icon: "plug"
      },
      {
        title: "Tester la recharge sans fil (Qi / MagSafe)",
        desc: "Si votre appareil est compatible avec la recharge à induction, posez-le sur une base sans fil. Si la charge démarre, la batterie fonctionne et seul le port physique est touché.",
        tip: "Solution de secours idéale pour continuer à utiliser votre téléphone en attendant la réparation.",
        icon: "wifi"
      }
    ];
    proDetails = "En atelier : Désoxydation ultrason ou changement du connecteur de charge (nappe dock). Réparation rapide en 30 minutes.";
  } else if (issue === "Batterie se decharge vite") {
    showRestartBox = false;
    hack = "💡 <strong>Le test révélateur de la nuit :</strong> Chargez le téléphone à 100% avant de dormir, activez le Mode Avion et laissez-le reposer 7h. S'il a perdu moins de 2%, votre batterie est en bonne santé (c'est une application qui tourne en tâche de fond !). S'il a perdu plus de 5-10%, la batterie a une fuite chimique interne et doit être remplacée.";
    steps = [
      {
        title: "Code secret de calibrage (Samsung & Android)",
        desc: "Sur Samsung, ouvrez le composeur d'appels et tapez *#0228#. Cliquez sur 'Quick Start' pour recalibrer instantanément le contrôleur de jauge de tension (BMS).",
        tip: "Sur iPhone : allez dans Réglages > Batterie > État de santé (remplacement recommandé si < 80%).",
        icon: "cpu"
      },
      {
        title: "Couper l'actualisation en arrière-plan",
        desc: "Allez dans Réglages > Général > Actualisation en arrière-plan. Désactivez TikTok, Instagram, Facebook et les jeux. Ils rafraîchissent constamment le flux même téléphone verrouillé.",
        tip: "Permet de regagner immédiatement 20 à 30% d'autonomie quotidienne.",
        icon: "sliders"
      },
      {
        title: "Désactiver la recherche permanente Wi-Fi / Bluetooth",
        desc: "Dans Réglages > Localisation > Recherche Wi-Fi et Bluetooth, désactivez ces deux options qui scannent les antennes 24h/24 même quand vous coupez le Wi-Fi.",
        tip: "Élimine une consommation invisible majeure.",
        icon: "search"
      }
    ];
    proDetails = "En atelier : Remplacement par une batterie certifiée d'origine en 20 minutes avec garantie. Votre autonomie d'origine sera instantanément retrouvée.";
  } else if (issue === "Chauffe pendant la charge" || issue === "Chauffe en charge") {
    showRestartBox = false;
    hack = "💡 <strong>Astuce de la charge standard :</strong> Dans Réglages > Batterie > Plus de paramètres de batterie, désactivez la 'Charge ultra-rapide'. La charge prendra 20 minutes de plus mais fera baisser la température de 12°C, évitant de dégrader la chimie interne de votre batterie.";
    steps = [
      {
        title: "Retirer systématiquement la coque",
        desc: "Les coques en silicone épais ou en cuir agissent comme un isolant thermique et emprisonnent la chaleur dégagée par les accumulateurs.",
        tip: "Ne jamais mettre le téléphone au congélateur (la condensation interne oxyderait la carte mère !).",
        icon: "layers"
      },
      {
        title: "Recharger sur une surface dissipatrice",
        desc: "Posez votre smartphone sur une table en verre, en carrelage ou en métal. Évitez absolument les couettes, oreillers et canapés qui étouffent la dissipation d'air.",
        tip: "La table absorbe passivement la chaleur de l'appareil.",
        icon: "thermometer-snowflake"
      },
      {
        title: "Ne pas utiliser le téléphone en cours de charge",
        desc: "Le streaming vidéo ou les jeux vidéo pendant la recharge cumulent la chaleur du processeur et celle de la batterie.",
        tip: "Laissez l'appareil reposer pendant qu'il se remplit.",
        icon: "pause-circle"
      }
    ];
    proDetails = "En atelier : Contrôle de la puce de régulation de charge (PMIC) et mesure thermique pour exclure tout court-circuit interne.";
  }

  // 3. PERFORMANCE
  else if (issue === "Lenteur generale") {
    showRestartBox = false;
    hack = "💡 <strong>L'astuce secrète des 0.5x :</strong> Allez dans Réglages > À propos > appuyez 7 fois d'affilée sur 'Numéro de build' pour débloquer les Options développeurs. Dans ce menu, réglez 'Échelle d'animation des fenêtres', 'des transitions' et 'de durée' de 1x à 0.5x. Votre smartphone deviendra instantanément 2 fois plus rapide et réactif !";
    steps = [
      {
        title: "Vider le stockage WhatsApp et Telegram",
        desc: "Ouvrez WhatsApp > Réglages > Stockage et données > Gérer le stockage. Supprimez les vidéos transférées de plus de 5 Mo déjà visionnées.",
        tip: "Libère souvent entre 4 et 15 Go de mémoire saturée.",
        icon: "trash-2"
      },
      {
        title: "Garder au moins 10% d'espace libre",
        desc: "Quand la mémoire flash d'un smartphone dépasse 90% d'occupation, le système ne peut plus créer de mémoire tampon (swap zRAM) et le processeur se bride pour ne pas planter.",
        tip: "Supprimez les vidéos et videz la corbeille de votre galerie.",
        icon: "hard-drive"
      },
      {
        title: "Désinstaller les 'nettoyeurs de RAM' et antivirus tiers",
        desc: "Les applications type Clean Master ou antivirus gratuits tournent en tâche de fond permanente et consomment jusqu'à 40% de vos ressources CPU.",
        tip: "Les systèmes iOS et Android gèrent déjà parfaitement la mémoire nativement.",
        icon: "shield-alert"
      }
    ];
    proDetails = "En atelier : Réinstallation propre d'usine (firmware constructeur) et contrôle de l'état d'usure des cellules mémoires UFS/eMMC.";
  } else if (issue === "Redemarrages inattendus") {
    showRestartBox = false;
    hack = "💡 <strong>Le coupable n°1 : la carte Micro-SD !</strong> Si vous avez une carte mémoire micro-SD insérée, retirez-la immédiatement. Quand une carte mémoire vieillit, ses secteurs défectueux bloquent les lectures du processeur, ce qui déclenche un redémarrage d'urgence pour éviter la corruption globale.";
    steps = [
      {
        title: "Démarrer en 'Mode sans échec' (Safe Mode)",
        desc: "Maintenez le bouton Power, puis appuyez longuement sur 'Éteindre' sur l'écran pour redémarrer en Mode sans échec. Si le téléphone ne redémarre plus tout seul, c'est qu'une application téléchargée fait planter le système.",
        tip: "Désinstallez la dernière application installée avant les pannes.",
        icon: "shield-check"
      },
      {
        title: "Contrôler l'usure de la batterie",
        desc: "Une batterie usée subit des micro-chutes de tension brutales dès que le processeur demande un pic de puissance (ouverture d'appareil photo, jeu), ce qui coupe net l'appareil.",
        tip: "Si les redémarrages ont lieu sous 30% de batterie, la batterie est HS.",
        icon: "battery-warning"
      },
      {
        title: "Mettre à jour Android System WebView / iOS",
        desc: "Les pannes de sous-systèmes logiciels sont très souvent corrigées par les patchs de sécurité mensuels.",
        tip: "Vérifiez vos mises à jour dans Google Play Store / App Store.",
        icon: "download"
      }
    ];
    proDetails = "En atelier : Lecture des journaux de crash (Panic Full / Kernel Panic) sous console pour identifier la résistance ou le capteur défaillant.";
  } else if (issue === "Bloque au demarrage") {
    showRestartBox = true;
    hack = "💡 <strong>Astuce du Wipe Cache Partition (Sans effacer vos photos !) :</strong> Éteignez l'appareil, branchez-le en USB à un ordinateur. Maintenez 'Power + Volume Haut' pour accéder au menu Recovery. Avec les touches de volume, descendez sur 'Wipe Cache Partition' et validez avec Power. Cela purge les fichiers temporaires corrompus sans toucher à vos données !";
    steps = [
      {
        title: "Mise en charge 30 minutes avant toute manipulation",
        desc: "Un téléphone bloqué en boucle de démarrage (bootloop) consomme énormément d'énergie. Laissez-le branché sur un chargeur secteur puissant.",
        tip: "Évite que l'appareil ne s'éteigne en pleine tentative de réparation.",
        icon: "zap"
      },
      {
        title: "Forcer le redémarrage d'urgence",
        desc: `Appliquez la manipulation constructeur : ${restart.desc}`,
        tip: "Interrompt la boucle d'exécution infinie du micro-logiciel.",
        icon: "refresh-cw"
      },
      {
        title: "Restauration via ordinateur (Smart Switch / iTunes)",
        desc: "Reliez le smartphone à un PC/Mac et lancez le logiciel officiel de la marque pour réinstaller la mise à jour système sans perte de données.",
        tip: "Option 'Mettre à jour' (et non 'Restaurer d'usine').",
        icon: "laptop"
      }
    ];
    proDetails = "En atelier : Flashage du système officiel avec conservation des données utilisateur via outils agréés.";
  } else if (issue === "Mises a jour bloquees") {
    showRestartBox = false;
    hack = "💡 <strong>Astuce de la date avancée :</strong> Si la mise à jour refuse de démarrer, allez dans Réglages > Date et heure, désactivez le réglage automatique et avancez la date de 2 jours. Relancez la recherche de mise à jour, puis remettez la date automatique. Cela force les serveurs de cache à renouveler le certificat de téléchargement !";
    steps = [
      {
        title: "Vérifier l'espace disponible (8 Go minimum)",
        desc: "Une mise à jour système nécessite souvent le triple de sa taille pour télécharger, décompresser et installer les fichiers système.",
        tip: "Libérez de la place temporairement en supprimant de grosses vidéos.",
        icon: "hard-drive"
      },
      {
        title: "Supprimer le fichier de mise à jour corrompu",
        desc: "Dans Réglages > Stockage > Système / Fichiers, cherchez le paquet de mise à jour partiellement téléchargé, supprimez-le et relancez le téléchargement au propre.",
        tip: "Évite de retélécharger sur un fichier d'installation tronqué.",
        icon: "trash-2"
      },
      {
        title: "Changer de réseau Wi-Fi",
        desc: "Certaines box internet ou réseaux d'entreprise filtrent les serveurs de distribution de logiciels d'Apple et Google. Testez en partage de connexion 4G/5G.",
        tip: "Privilégiez une connexion sans proxy ni VPN actif.",
        icon: "wifi"
      }
    ];
    proDetails = "En atelier : Installation forcée du package OTA par ligne de commande ADB ou logiciel constructeur.";
  }

  // 4. CONNECTIVITÉ
  else if (issue === "Le Wi-Fi ne fonctionne pas") {
    showRestartBox = false;
    hack = "💡 <strong>Astuce de l'Adresse MAC :</strong> Allez dans Réglages > Wi-Fi > cliquez sur la roue crantée (ou le 'i') de votre réseau > 'Type d'adresse MAC' et changez 'Aléatoire' par 'Adresse MAC du téléphone'. 9 fois sur 10, cela résout immédiatement le conflit d'attribution d'adresse IP avec votre box internet !";
    steps = [
      {
        title: "Remplacer les serveurs DNS par Cloudflare (1.1.1.1)",
        desc: "Dans les réglages IP de votre connexion Wi-Fi, passez en 'Statique' et mettez '1.1.1.1' en DNS 1 et '1.0.0.1' en DNS 2. Les pannes Wi-Fi sont souvent dues aux résolveurs DNS défaillants de votre opérateur.",
        tip: "Rend la navigation sur le web instantanément plus rapide et stable.",
        icon: "globe"
      },
      {
        title: "Oublier le réseau et reconnecter",
        desc: "Cliquez sur 'Oublier ce réseau', éteignez le Wi-Fi 10 secondes, rallumez-le et ressaisissez le mot de passe de la box.",
        tip: "Purge les clés de chiffrement Wi-Fi WPA2/WPA3 corrompues.",
        icon: "unplug"
      },
      {
        title: "Réinitialiser les réglages réseau",
        desc: "Allez dans Réglages > Système > Réinitialiser > Réinitialiser les paramètres réseau. Vos photos et contacts ne sont PAS touchés (seuls les codes Wi-Fi sont remis à zéro).",
        tip: "Le remède universel conseillé par Apple et Google.",
        icon: "rotate-ccw"
      }
    ];
    proDetails = "En atelier : Remplacement du câble coaxial d'antenne Wi-Fi ou remplacement du module radio Broadcom/Qualcomm.";
  } else if (issue === "Bluetooth ne se connecte pas") {
    showRestartBox = false;
    hack = "💡 <strong>Vider le cache système Bluetooth :</strong> Allez dans Réglages > Applications > cliquez sur les 3 points en haut > 'Afficher les processus système' > cherchez 'Partage Bluetooth' > Stockage > 'Vider le cache'. Redémarrez le Bluetooth : tous les appairages fantômes et conflits de clés de connexion sont nettoyés !";
    steps = [
      {
        title: "Réinitialiser le casque / l'enceinte",
        desc: "Maintenez le bouton Power de votre accessoire pendant 10 à 15 secondes jusqu'à ce que la diode clignote rapidement en bleu et rouge (mode réinitialisation constructeur).",
        tip: "Permet à l'accessoire d'oublier les anciens téléphones enregistrés.",
        icon: "headphones"
      },
      {
        title: "Supprimer l'appareil de la liste avant d'appairer",
        desc: "Dans les paramètres Bluetooth de votre smartphone, cliquez sur la roue crantée à côté de l'appareil et faites 'Dissocier' ou 'Oublier cet appareil'. Relancez un scan neuf.",
        tip: "Évite les blocages de reconnexion automatique.",
        icon: "trash-2"
      },
      {
        title: "Vérifier les connexions concurrentes",
        desc: "Vérifiez que votre casque n'est pas déjà silencieusement connecté à votre tablette, ordinateur portable ou TV dans une autre pièce.",
        tip: "Désactivez le Bluetooth sur vos autres appareils pendant l'appairage.",
        icon: "laptop"
      }
    ];
    proDetails = "En atelier : Diagnostic du circuit intégré Bluetooth/NFC.";
  } else if (issue === "Pas de reseau / signal faible") {
    showRestartBox = false;
    hack = "💡 <strong>L'astuce de la gomme d'écolier :</strong> Éjectez le tiroir SIM. Frottez délicatement les pistes dorées de votre carte SIM avec une gomme blanche d'écolier pour effacer l'oxydation invisible qui réduit la conductivité électrique, puis essuyez avec un tissu propre et sec !";
    steps = [
      {
        title: "Forcer le mode 4G/LTE au lieu de 5G automatique",
        desc: "Dans Réglages > Connexions > Réseaux mobiles, sélectionnez '4G/3G/2G' au lieu de 5G. Quand la 5G est faible, le smartphone bascule sans cesse entre les fréquences, ce qui coupe vos appels.",
        tip: "Améliore la stabilité du signal et économise 15% de batterie.",
        icon: "radio"
      },
      {
        title: "Activer les Appels Wi-Fi (VoWiFi)",
        desc: "Dans les paramètres de l'application Téléphone, activez 'Appels Wi-Fi'. Vos appels téléphoniques passeront par votre connexion box internet, même si vous êtes dans un sous-sol sans aucun réseau mobile !",
        tip: "Service 100% gratuit inclus chez tous les opérateurs.",
        icon: "phone-call"
      },
      {
        title: "Cycle du Mode Avion de 15 secondes",
        desc: "Activez le Mode Avion pendant 15 secondes puis désactivez-le pour forcer le modem radio à se rattacher à l'antenne relais la plus proche de vous.",
        tip: "Réactualise l'assignation de cellule réseau opérateur.",
        icon: "plane"
      }
    ];
    proDetails = "En atelier : Remplacement des connecteurs coaxiaux d'antenne ou désoxydation du lecteur de carte SIM.";
  } else if (issue === "GPS imprecis") {
    showRestartBox = false;
    hack = "💡 <strong>La calibration en 8 de la boussole :</strong> Ouvrez Google Maps ou Apple Plans. Tenez votre smartphone fermement à bout de bras et tracez dans l'air un grand mouvement fluide en forme de '8' à 3 ou 4 reprises. Cela réinitialise le magnétomètre et la boussole électronique face au champ magnétique terrestre !";
    steps = [
      {
        title: "Désactiver le mode Économie d'énergie",
        desc: "Le mode économie bride la puce GPS en espaçant les requêtes satellites de 1 seconde à 10-15 secondes, ce qui provoque d'énormes retards de positionnement sur la route.",
        tip: "À couper systématiquement lors des trajets guidés par GPS.",
        icon: "battery"
      },
      {
        title: "Vérifier l'option 'Position exacte'",
        desc: "Dans Réglages > Applications > Maps/Waze > Autorisations > Localisation, assurez-vous que l'interrupteur 'Position exacte' est activé (et non 'Position approximative').",
        tip: "Sans cette option, l'erreur de guidage peut atteindre plusieurs centaines de mètres.",
        icon: "map-pin"
      },
      {
        title: "Retirer les coques métalliques ou aimants puissants",
        desc: "Les supports de voiture magnétiques avec grosse plaque en acier collée au dos faussent totalement les capteurs magnétiques et la réception satellite.",
        tip: "Testez votre GPS en tenant le téléphone nu.",
        icon: "magnet"
      }
    ];
    proDetails = "En atelier : Remplacement de l'antenne GPS située au sommet du châssis.";
  }

  // 5. SON & AUDIO
  else if (issue === "Pas de son") {
    showRestartBox = false;
    hack = "💡 <strong>Astuce de la paille / prise casque :</strong> Votre smartphone croit peut-être qu'un casque audio est branché ! Prenez une paille fine, collez-la contre le port USB-C ou jack et aspirez doucement pour retirer les peluches qui font contact avec les broches audio. Vous pouvez aussi brancher et retirer une prise 5 fois d'affilée pour décoincer le commutateur physique.";
    steps = [
      {
        title: "Désactiver le Bluetooth temporairement",
        desc: "Vérifiez que le smartphone n'envoie pas le son à une enceinte Bluetooth restée allumée dans une autre pièce ou dans la voiture garée à proximité.",
        tip: "Désactivez le Bluetooth depuis le centre de contrôle pour tester.",
        icon: "bluetooth"
      },
      {
        title: "Vérifier le commutateur Silence physique",
        desc: "Sur iPhone : vérifiez le loquet orange sur la tranche gauche. Sur Android : vérifiez que le profil n'est pas bloqué en 'Ne pas déranger' ou 'Silencieux'.",
        tip: "Les boutons physiques accumulent souvent des poussières qui les bloquent.",
        icon: "bell-off"
      },
      {
        title: "Tester le son avec des écouteurs",
        desc: "Si le son fonctionne dans les écouteurs mais pas sans, la carte mère est saine et seul le haut-parleur physique externe est en cause.",
        tip: "Isole immédiatement l'origine de la panne.",
        icon: "headphones"
      }
    ];
    proDetails = "En atelier : Remplacement du bloc haut-parleur buzzer inférieur (intervention en 25 minutes).";
  } else if (issue === "Micro ne fonctionne pas") {
    showRestartBox = false;
    hack = "💡 <strong>Le test révélateur des 3 micros :</strong> Votre smartphone possède 3 micros différents ! Testez-les séparément : 1) Le Dictaphone teste le micro du bas (appels). 2) Une vidéo avec la caméra frontale teste le micro du haut (kit mains-libres). 3) Un appel en haut-parleur teste le micro antibruit arrière. Cela vous indique exactement lequel est encrassé !";
    steps = [
      {
        title: "Nettoyer le micro-trou avec un poil de brosse souple",
        desc: "Repérez le minuscule trou d'épingle situé à côté de la prise de charge. Brossez doucement avec un poil de brosse à dents sec pour déloger la cire ou la poussière.",
        tip: "ATTENTION : Ne jamais enfoncer d'aiguille en métal, la membrane du micro est juste derrière !",
        icon: "sparkles"
      },
      {
        title: "Vérifier les autorisations de l'application",
        desc: "Allez dans Réglages > Confidentialité > Microphone et vérifiez que l'application en cause (WhatsApp, Téléphone, etc.) dispose bien de l'accès autorisé.",
        tip: "Une mise à jour révoque parfois silencieusement les droits micro.",
        icon: "shield-check"
      },
      {
        title: "Désactiver l'option 'Isolation de la voix'",
        desc: "Dans les réglages d'accessibilité audio, désactivez temporairement la réduction de bruit pour vérifier si l'algorithme ne coupe pas votre propre voix par erreur.",
        tip: "Utile en cas de son étouffé lors des appels.",
        icon: "mic"
      }
    ];
    proDetails = "En atelier : Désoxydation par ultrasons ou remplacement de la nappe micro inférieure.";
  } else if (issue === "Haut-parleur gresillant") {
    showRestartBox = false;
    hack = "💡 <strong>Astuce du son 165 Hz (Speaker Cleaner) :</strong> Lancez sur YouTube 'Water Eject / Speaker Cleaner 165Hz'. Les ondes acoustiques sinusoïdales à basse fréquence font trembler physiquement la membrane en caoutchouc et expulsent la poussière, le sable ou l'eau coincée sans ouvrir le téléphone !";
    steps = [
      {
        title: "Brossage orienté vers le bas",
        desc: "Tenez votre smartphone avec le haut-parleur orienté vers le sol. Frottez la grille avec une brosse à dents sèche à poils souples pour que les débris tombent par gravité.",
        tip: "Ne soufflez jamais à la bouche pour ne pas ajouter de buée humide.",
        icon: "sparkles"
      },
      {
        title: "Désactiver les effets Dolby Atmos / Égaliseur",
        desc: "Dans Réglages > Sons > Qualité et effets sonores, désactivez les boosters de basses qui saturent et font saturer les bobines acoustiques usées.",
        tip: "Testez avec un profil audio standard équilibré.",
        icon: "volume-2"
      },
      {
        title: "Éviter le volume maximal absolu",
        desc: "Écoutez à 80% du volume max : sur les téléphones de plus de 2 ans, la membrane acoustique détendue vibre contre la grille plastique au volume extrême.",
        tip: "Protège le haut-parleur d'une rupture définitive.",
        icon: "volume-x"
      }
    ];
    proDetails = "En atelier : Remplacement du module haut-parleur si la bobine en cuivre est décentrée ou déchirée.";
  }

  // 6. CAMÉRA
  else if (issue === "Photos floues") {
    showRestartBox = false;
    hack = "💡 <strong>L'astuce du tapotement sec sur la tranche :</strong> Si la caméra refuse de faire la mise au point nette (problème classique après une petite chute), tapotez fermement mais doucement avec 2 doigts sur le côté du bloc photo. L'électroaimant microscopique de l'autofocus (OIS) se décoince souvent instantanément !";
    steps = [
      {
        title: "Nettoyage circulaire de la lentille",
        desc: "Frottez la vitre de l'objectif en mouvements circulaires avec un chiffon microfibre propre. Le film gras déposé par les doigts suffit à rendre l'autofocus laser totalement aveugle.",
        tip: "Évitez le t-shirt qui ne fait qu'étaler le gras sur le verre.",
        icon: "sparkles"
      },
      {
        title: "Retirer les protège-objectifs en verre bas de gamme",
        desc: "Les caches en verre trempé collés sur les caméras créent des réfractions lumineuses et empêchent le capteur ToF/LiDAR de mesurer la distance du sujet.",
        tip: "Retirez la protection pour vérifier si la netteté redevient parfaite.",
        icon: "shield"
      },
      {
        title: "Test de mise au point manuelle",
        desc: "Ouvrez l'appareil photo et tapez avec votre doigt sur un objet situé à 15 cm, puis sur un objet au fond de la pièce. Observez si la lentille bouge pour faire le point.",
        tip: "Permet de vérifier si le moteur de mise au point répond toujours.",
        icon: "camera"
      }
    ];
    proDetails = "En atelier : Remplacement du module optique complet si le moteur de stabilisation magnétique OIS est rompu.";
  } else if (issue === "Camera ne s'ouvre pas") {
    showRestartBox = false;
    hack = "💡 <strong>Le test révélateur de la lampe torche :</strong> Essayez d'allumer votre lampe torche depuis le centre de contrôle. Si la torche est grisée ou refuse de s'allumer, le processeur d'image de la caméra est verrouillé par un crash matériel ou système. Si la torche fonctionne, la caméra est saine et seul le logiciel de l'app photo est en cause !";
    steps = [
      {
        title: "Fermer toutes les applications utilisant la caméra",
        desc: "Ouvrez le multitâche et fermez WhatsApp, Instagram, TikTok, Snapchat et l'Appareil Photo. Deux applications ne peuvent pas accéder au capteur simultanément.",
        tip: "Glissez toutes les applications vers le haut pour les tuer.",
        icon: "x-circle"
      },
      {
        title: "Vider le cache et forcer l'arrêt de l'App Photo",
        desc: "Dans Réglages > Applications > Appareil Photo, appuyez sur 'Forcer l'arrêt', puis dans Stockage, cliquez sur 'Vider le cache'.",
        tip: "Réinitialise les paramètres corrompus de l'application sans toucher à vos photos.",
        icon: "refresh-cw"
      },
      {
        title: "Tester la caméra avec une application tierce",
        desc: "Ouvrez un scanner de documents ou WhatsApp pour prendre une photo. Si la caméra s'affiche ici, le matériel fonctionne parfaitement.",
        tip: "Confirme qu'une simple mise à jour système résoudra la panne.",
        icon: "check-circle"
      }
    ];
    proDetails = "En atelier : Reconnexion de la nappe flex caméra sur la carte mère (souvent déboîtée après une chute) ou remplacement du module.";
  } else if (issue === "Flash ne fonctionne pas") {
    showRestartBox = false;
    hack = "💡 <strong>La règle des 15% de batterie :</strong> Vérifiez le niveau de votre batterie ! Sur la quasi-totalité des smartphones modernes, le flash LED haute puissance est automatiquement désactivé par sécurité matérielle dès que la batterie descend sous les 15% ou 20%, ou si le téléphone est chaud.";
    steps = [
      {
        title: "Recharger au-dessus de 30% et laisser refroidir",
        desc: "Branchez votre téléphone 15 minutes et laissez-le refroidir à l'ombre. Le contrôleur d'alimentation réactivera immédiatement la LED du flash.",
        tip: "Sécurité intégrée pour éviter les surchauffes de l'accumulateur.",
        icon: "battery-charging"
      },
      {
        title: "Forcer le flash sur 'Toujours activé'",
        desc: "Dans l'application Appareil Photo, cliquez sur l'icône de l'éclair et sélectionnez 'Activé' (et non 'Automatique' qui ne déclenche que dans le noir complet).",
        tip: "Permet de vérifier le bon fonctionnement de la diode.",
        icon: "zap"
      },
      {
        title: "Désactiver le mode Économie d'énergie extrême",
        desc: "Le mode ultra-économie coupe les composants énergivores comme la torche et le flash.",
        tip: "Rétablissez le mode standard dans les réglages de batterie.",
        icon: "sliders"
      }
    ];
    proDetails = "En atelier : Remplacement de la nappe LED flash (généralement couplée aux boutons de volume).";
  }

  // 7. STOCKAGE
  else if (issue === "Stockage plein") {
    showRestartBox = false;
    hack = "💡 <strong>Le piège des 'Supprimés récemment' :</strong> Quand vous supprimez des vidéos, elles ne disparaissent PAS ! Elles vont dans 'Albums > Supprimés récemment' et restent stockées à 100% pendant 30 jours. Ouvrez cet album et cliquez sur 'Tout supprimer définitivement' pour récupérer immédiatement plusieurs gigaoctets d'un coup !";
    steps = [
      {
        title: "Vider le cache des fichiers transférés WhatsApp",
        desc: "Dans WhatsApp > Paramètres > Stockage et données > Gérer le stockage, supprimez les vidéos de plus de 5 Mo transférées dans les groupes familiaux et d'amis.",
        tip: "C'est le dossier n°1 qui sature la mémoire à votre insu.",
        icon: "message-circle"
      },
      {
        title: "Décharger les applications non utilisées",
        desc: "Sur iPhone : allez dans Réglages > Stockage iPhone > Décharger les apps inutilisées. Vos comptes et documents restent sauvegardés, mais les gigas de l'application sont libérés.",
        tip: "Sur Android : désinstallez les jeux vidéo lourds auxquels vous ne jouez plus.",
        icon: "package"
      },
      {
        title: "Vider le cache des applications de streaming",
        desc: "Allez dans Réglages > Applications > TikTok / Spotify / YouTube > Stockage > Vider le cache. Les vidéos préchargées occupent souvent 5 à 10 Go invisibles.",
        tip: "Ne supprime pas votre compte ni vos playlists.",
        icon: "trash-2"
      }
    ];
    proDetails = "En atelier : Sauvegarde complète sur disque dur externe chiffré et restauration d'usine de l'espace de stockage.";
  } else if (issue === "Fichiers corrompus") {
    showRestartBox = false;
    hack = "💡 <strong>L'astuce de l'explorateur Files :</strong> Téléchargez l'application gratuite officielle 'Files by Google' (sur Android) ou 'Documents by Readdle' (sur iPhone). Ces explorateurs intègrent des décodeurs universels capables d'ouvrir et réparer des photos, vidéos ou PDF que la galerie par défaut refuse d'afficher !";
    steps = [
      {
        title: "Vérifier et corriger l'extension du fichier",
        desc: "Renommez le fichier pour vous assurer qu'il se termine bien par sa vraie extension (.jpg, .mp4, .pdf). Une lettre manquante suffit à rendre le fichier illisible pour le téléphone.",
        tip: "Modifiable directement dans l'explorateur de fichiers.",
        icon: "file-text"
      },
      {
        title: "Tester la lecture avec VLC",
        desc: "Si une vidéo refuse de se lire, ouvrez-la avec l'application gratuite VLC Mobile. Son moteur multimédia répare automatiquement les index de vidéos endommagés.",
        tip: "Le meilleur outil de secours pour les vidéos tronquées.",
        icon: "play-circle"
      },
      {
        title: "Retirer la carte micro-SD",
        desc: "Si les fichiers corrompus sont sur votre carte mémoire externe, celle-ci est en train de mourir. Branchez-la sur un PC avec un adaptateur pour récupérer vos photos au plus vite.",
        tip: "Ne continuez pas à enregistrer sur une carte mémoire défaillante.",
        icon: "hard-drive"
      }
    ];
    proDetails = "En atelier : Récupération de données par reconstruction de table de partition sous logiciel professionnel.";
  } else if (issue === "Applications plantent souvent") {
    showRestartBox = false;
    hack = "💡 <strong>Le coupable n°1 sur Android : 'Android System WebView' !</strong> C'est le composant système qui affiche le web dans toutes vos applications (banques, réseaux sociaux, jeux). Allez sur le Google Play Store > cherchez 'Android System WebView' et cliquez sur 'Mettre à jour'. Cette simple action répare 90% des crashs d'applications !";
    steps = [
      {
        title: "Vider le cache de l'application en cause",
        desc: "Allez dans Réglages > Applications > sélectionnez l'app qui plante > Stockage > 'Vider le cache'.",
        tip: "Élimine les fichiers temporaires corrompus qui font fermer l'application.",
        icon: "refresh-cw"
      },
      {
        title: "Mettre à jour l'application depuis le store",
        desc: "Ouvrez le Play Store ou l'App Store et vérifiez si une mise à jour corrective a été publiée par les développeurs.",
        tip: "Les bugs majeurs sont généralement corrigés sous 48h.",
        icon: "download"
      },
      {
        title: "Désinstaller puis réinstaller proprement",
        desc: "Supprimez l'application et réinstallez-la au propre. Cela recrée une base de données locale saine.",
        tip: "Attention : assurez-vous de connaître vos identifiants de connexion avant de désinstaller.",
        icon: "trash-2"
      }
    ];
    proDetails = "En atelier : Diagnostic de la mémoire vive (RAM LPDDR) pour exclure toute défaillance matérielle de cellule mémoire.";
  }

  // 8. SURCHAUFFE
  else if (issue === "Chauffe au repos" || issue === "Chauffe en utilisation intensive" || category === "Surchauffe") {
    showRestartBox = false;
    hack = "💡 <strong>Démasquer l'application pirate :</strong> Allez dans Réglages > Batterie. Regardez le pourcentage de consommation sur les dernières 24h. Si une application peu utilisée (comme un jeu, un nettoyeur, un VPN ou un widget météo) dépasse 15-20% de batterie, c'est elle qui fait tourner le processeur à fond en tâche de fond ! Désinstallez-la immédiatement.";
    steps = [
      {
        title: "Couper la synchronisation cloud en 4G/5G",
        desc: "Ouvrez Google Photos ou iCloud Photos et vérifiez s'il n'y a pas une sauvegarde bloquée qui tente d'envoyer des vidéos en boucle à pleine puissance radio.",
        tip: "Passez la sauvegarde en 'Wi-Fi uniquement'.",
        icon: "cloud-off"
      },
      {
        title: "Désactiver le partage de connexion (Hotspot Wi-Fi)",
        desc: "Le mode point d'accès transforme votre téléphone en box internet et fait surchauffer les puces d'amplification d'antennes.",
        tip: "À couper dès que vous n'en avez plus besoin.",
        icon: "radio"
      },
      {
        title: "Laisser reposer 10 minutes à l'ombre",
        desc: "Éteignez le smartphone et posez-le sur une table en verre ou en métal à l'abri du soleil. Ne le mettez jamais au réfrigérateur (risque d'oxydation interne par condensation).",
        tip: "La température normale se rétablit en moins de 10 minutes.",
        icon: "thermometer-snowflake"
      }
    ];
    proDetails = "En atelier : Inspection à la caméra thermique infrarouge pour détecter un court-circuit sur composant CMS de la carte mère.";
  }

  // CAS PAR DÉFAUT
  else {
    showRestartBox = true;
    hack = "💡 <strong>Astuce universelle :</strong> Un grand nombre de dysfonctionnements proviennent d'une saturation de la mémoire vive (RAM) ou d'un conflit de pilotes. Forcer le redémarrage propre réinitialise les registres matériels sans toucher à vos fichiers.";
    steps = [
      {
        title: "Forcer le redémarrage propre",
        desc: `Appliquez la manipulation constructeur : ${restart.desc}`,
        tip: "Vide la mémoire vive et recharge les pilotes du système.",
        icon: "refresh-cw"
      },
      {
        title: "Mettre à jour le système d'exploitation",
        desc: "Installez le dernier correctif de sécurité dans Réglages > Général > Mise à jour logicielle.",
        tip: "Corrige les failles et optimise la compatibilité.",
        icon: "download"
      },
      {
        title: "Vérifier le stockage disponible",
        desc: "Assurez-vous de conserver au moins 10% d'espace libre pour que le système fonctionne sans friction.",
        tip: "Supprimez les fichiers temporaires volumineux.",
        icon: "hard-drive"
      }
    ];
    proDetails = "En atelier : Diagnostic complet sous console de test agréée constructeur.";
  }

  return { restart, showRestartBox, hack, steps, proDetails };
}

function getHealthScoreData(issue, checkedCount = 0, totalCount = 3) {
  const isCritical = /fissure|ne charge plus|noir|surchauffe|chauffe/i.test(issue);
  const isModerate = /batterie|micro|photo|son|gresillant|corrompu|plantent/i.test(issue);
  
  const baseScore = isCritical ? 52 : (isModerate ? 68 : 78);
  const sysBase = isCritical ? 45 : (isModerate ? 65 : 82);
  const hwBase = isCritical ? 40 : (isModerate ? 60 : 85);
  const batBase = isCritical ? 55 : (isModerate ? 50 : 75);

  const ratio = totalCount > 0 ? (checkedCount / totalCount) : 0;
  const currentScore = Math.min(100, Math.round(baseScore + ((100 - baseScore) * ratio)));
  const sysScore = Math.min(100, Math.round(sysBase + ((100 - sysBase) * ratio)));
  const hwScore = Math.min(100, Math.round(hwBase + ((100 - hwBase) * ratio)));
  const batScore = Math.min(100, Math.round(batBase + ((100 - batBase) * ratio)));

  let statusClass = "good";
  let statusText = "Excellente santé";
  let strokeColor = "#4cd1a0";
  let tip = "🎉 Appareil totalement optimisé ! Tout fonctionne au niveau maximal.";

  if (currentScore < 65) {
    statusClass = "bad";
    statusText = "Attention requise";
    strokeColor = "#ff6b7a";
    tip = "⚠️ Panne détectée. Cochez les étapes du guide ci-dessous pour régénérer le score !";
  } else if (currentScore < 85) {
    statusClass = "warning";
    statusText = "À optimiser";
    strokeColor = "#ffb020";
    tip = "💡 Santé correcte. Suivez les 3 tests ci-dessous pour faire remonter le score à 100% !";
  }

  return {
    score: currentScore,
    statusClass,
    statusText,
    strokeColor,
    tip,
    sysScore,
    hwScore,
    batScore
  };
}

function initHealthGauge() {
  const totalSteps = document.querySelectorAll(".step-card").length;
  const checkedSteps = document.querySelectorAll(".step-card.checked").length;
  updateHealthGauge(checkedSteps, totalSteps, true);
}

function updateHealthGauge(checkedCount = 0, totalCount = 3, animate = true) {
  const fill = document.querySelector("#gauge-fill");
  const valEl = document.querySelector("#health-score-val");
  const badgeEl = document.querySelector("#health-score-badge");
  const tipEl = document.querySelector("#health-score-tip");
  
  const sysBar = document.querySelector("#metric-sys");
  const hwBar = document.querySelector("#metric-hw");
  const batBar = document.querySelector("#metric-bat");
  const sysVal = document.querySelector("#metric-sys-val");
  const hwVal = document.querySelector("#metric-hw-val");
  const batVal = document.querySelector("#metric-bat-val");

  if (!fill || !valEl) return;

  const data = getHealthScoreData(state.issue, checkedCount, totalCount);

  // SVG Circumference for r=42 is 263.89
  const circumference = 263.89;
  const offset = circumference - (circumference * (data.score / 100));

  fill.style.strokeDashoffset = offset;
  fill.style.stroke = data.strokeColor;
  fill.style.filter = `drop-shadow(0 0 6px ${data.strokeColor})`;

  if (badgeEl) {
    badgeEl.className = `health-score-badge ${data.statusClass}`;
    badgeEl.textContent = data.statusText;
  }

  if (tipEl) {
    tipEl.textContent = data.tip;
  }

  if (sysBar) sysBar.style.width = `${data.sysScore}%`;
  if (hwBar) hwBar.style.width = `${data.hwScore}%`;
  if (batBar) batBar.style.width = `${data.batScore}%`;
  
  if (sysVal) sysVal.textContent = `${data.sysScore}%`;
  if (hwVal) hwVal.textContent = `${data.hwScore}%`;
  if (batVal) batVal.textContent = `${data.batScore}%`;

  // Numeric count-up animation
  const startVal = parseInt(valEl.textContent) || 0;
  const targetVal = data.score;

  if (startVal === targetVal) {
    valEl.textContent = targetVal;
    return;
  }

  let current = startVal;
  const duration = animate ? 700 : 0;
  const startTime = performance.now();

  function step(now) {
    const elapsed = now - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const easeProgress = 1 - Math.pow(1 - progress, 3);
    current = Math.round(startVal + (targetVal - startVal) * easeProgress);
    valEl.textContent = current;

    if (progress < 1) {
      requestAnimationFrame(step);
    } else {
      valEl.textContent = targetVal;
    }
  }

  if (animate) {
    requestAnimationFrame(step);
  } else {
    valEl.textContent = targetVal;
  }
}

function result() {
  const warning = /fissure|ne charge plus|noir|surchauffe|chauffe/i.test(state.issue);
  const title = warning ? t("warningTitle") : t("normalTitle");
  const text = warning ? t("warningText") : t("normalText");
  const emoji = warning ? "🛠" : "✨";
  
  const details = getTroubleshootingDetails(state.brand, state.category, state.issue);

  return `
    <div class="confetti-container" id="confetti-container"></div>
    <div class="center">
      <div class="result-icon ${warning ? "warning" : "success"}">
        ${icon(warning ? "triangle-alert" : "check-circle-2")}
      </div>
      <p class="eyebrow">${t("diagFinished")} • ${state.brand} ${state.model}</p>
      <h2>${title} <span class="emoji-pop">${emoji}</span></h2>
      <p class="result-copy">${text}</p>
    </div>

    <!-- Score de Santé du Téléphone Jauge Animée -->
    <div class="health-score-card">
      <div class="health-score-header">
        <div class="health-score-title">
          ${icon("activity")} <span>${t("healthScoreTitle")}</span>
        </div>
        <span class="health-score-badge bad" id="health-score-badge">Analyse...</span>
      </div>

      <div class="health-score-body">
        <div class="gauge-wrapper">
          <svg class="health-gauge-svg" viewBox="0 0 100 100">
            <circle class="gauge-track" cx="50" cy="50" r="42" />
            <circle class="gauge-fill" id="gauge-fill" cx="50" cy="50" r="42" stroke-dasharray="263.89" stroke-dashoffset="263.89" />
          </svg>
          <div class="gauge-value-box">
            <span class="gauge-val" id="health-score-val">0</span>
            <span class="gauge-unit">/ 100</span>
          </div>
        </div>

        <div class="health-metrics">
          <div class="health-metric-item">
            <div class="metric-header"><span>${t("sysOs")}</span><span id="metric-sys-val">0%</span></div>
            <div class="metric-bar-bg"><div class="metric-bar-fill" id="metric-sys" style="width: 0%;"></div></div>
          </div>
          <div class="health-metric-item">
            <div class="metric-header"><span>${t("components")}</span><span id="metric-hw-val">0%</span></div>
            <div class="metric-bar-bg"><div class="metric-bar-fill" id="metric-hw" style="width: 0%;"></div></div>
          </div>
          <div class="health-metric-item">
            <div class="metric-header"><span>${t("batteryFlow")}</span><span id="metric-bat-val">0%</span></div>
            <div class="metric-bar-bg"><div class="metric-bar-fill" id="metric-bat" style="width: 0%;"></div></div>
          </div>
        </div>
      </div>

      <p class="health-score-tip" id="health-score-tip">
        💡 ${t("tipBad")}
      </p>
    </div>

    ${details.showRestartBox ? `
    <!-- Raccourci Forçage du Redémarrage (affiché uniquement si pertinent) -->
    <div class="brand-shortcut-box">
      <div class="brand-shortcut-title">
        ${icon("power")} <span>${details.restart.title}</span>
      </div>
      <p class="brand-shortcut-desc">${details.restart.desc}</p>
    </div>` : ""}

    ${details.hack ? `
    <!-- Astuce concrète de technicien -->
    <div class="expert-hack-box">
      <div class="expert-hack-title">
        ${icon("sparkles")} <span>${t("expertHackTitle")}</span>
      </div>
      <p class="expert-hack-desc">${details.hack}</p>
    </div>` : ""}

    <!-- Guide de dépannage pas à pas interactif -->
    <div class="troubleshoot-container">
      <div class="troubleshoot-header">
        <h3 class="troubleshoot-title">${icon("list-checks")} ${t("troubleshootGuide")}</h3>
        <span class="troubleshoot-badge" id="troubleshoot-counter">0 / ${details.steps.length} ${t("tested")}</span>
      </div>
      <div class="troubleshoot-progress-bar">
        <div class="troubleshoot-progress-fill" id="troubleshoot-progress" style="width: 0%;"></div>
      </div>

      <div class="troubleshoot-steps">
        ${details.steps.map((step, idx) => `
          <div class="step-card" data-step="${idx}">
            <div class="step-num">${idx + 1}</div>
            <div class="step-body">
              <div class="step-title-row">
                <h4 class="step-title">${step.title}</h4>
                <button class="step-check-btn" type="button" data-action="toggle-step" aria-label="Marquer comme testé">
                  ${icon("check")}
                </button>
              </div>
              <p class="step-desc">${step.desc}</p>
              ${step.tip ? `<div class="step-tip">${icon("lightbulb")} <span>${step.tip}</span></div>` : ""}
            </div>
          </div>
        `).join("")}
      </div>
    </div>

    <!-- Accordéon : En atelier si besoin -->
    <div class="pro-accordion" id="pro-accordion">
      <div class="pro-accordion-summary" data-action="toggle-accordion">
        <span>${icon("wrench")} ${t("workshop")}</span>
        ${icon("chevron-down")}
      </div>
      <div class="pro-accordion-content">
        <p>${details.proDetails}</p>
        <p style="margin-top: 8px; color: var(--accent); font-weight: 600;">
          ${t("workshopTip")}
        </p>
      </div>
    </div>

    <div class="button-row" style="margin-top: 24px;">
      <button class="primary" data-action="navigate" data-page="home" type="button">
        ${icon("house")} <span>${t("newDiag")}</span>
      </button>
      <button class="secondary" data-action="navigate" data-page="history" type="button">
        ${icon("clock-3")} <span>${t("viewHistory")}</span>
      </button>
    </div>`;
}

function history() {
  const saved = JSON.parse(localStorage.getItem("telrepar-history") || "[]");
  return `
    <p class="eyebrow">${t("yourDiags")}</p>
    <h2>${t("historyTitle").replace(" 📋", "")} <span class="emoji-pop">📋</span></h2>
    <p class="lead">${t("historyLead")}</p>
    ${saved.length ? `
      <div class="issue-list">
        ${saved.map((item, index) => `
          <article class="history-row" style="--i: ${index}">
            <span class="round-icon ${item.warning ? "alert" : "ok"}">
              ${icon(item.warning ? "triangle-alert" : "check-circle-2")}
            </span>
            <div class="row-copy">
              <strong>${item.issue}</strong>
              <small>${item.device}</small>
              <time>${item.date}</time>
            </div>
          </article>
        `).join("")}
      </div>
    ` : `
      <div class="empty">
        ${icon("clipboard-list")}
        <p>${t("historyEmpty")}</p>
      </div>
    `}`;
}

// --- Hardware Lab Interactive Tests ---

function hardwareTests() {
  const testResults = JSON.parse(localStorage.getItem("telrepar-hw-tests") || "{}");
  
  const testsList = [
    { id: "touch", icon: "touchpad", title: t("testTouchTitle"), desc: t("testTouchDesc") },
    { id: "mic", icon: "mic", title: t("testMicTitle"), desc: t("testMicDesc") },
    { id: "speaker", icon: "volume-2", title: t("testSpeakerTitle"), desc: t("testSpeakerDesc") },
    { id: "vibe", icon: "smartphone", title: t("testVibeTitle"), desc: t("testVibeDesc") },
    { id: "pixels", icon: "sun", title: t("testPixelsTitle"), desc: t("testPixelsDesc") },
    { id: "gyro", icon: "compass", title: t("testGyroTitle"), desc: t("testGyroDesc") }
  ];

  let passedCount = 0;
  testsList.forEach(tItem => { if (testResults[tItem.id] === true) passedCount++; });

  const cardsHtml = testsList.map((test, index) => {
    const res = testResults[test.id];
    let badgeClass = "pending";
    let badgeText = t("testStatusPending");
    let cardClass = "";

    if (res === true) {
      badgeClass = "success";
      badgeText = t("testStatusSuccess");
      cardClass = "success";
    } else if (res === false) {
      badgeClass = "failed";
      badgeText = t("testStatusFailed");
      cardClass = "failed";
    }

    return `
      <div class="hw-card ${cardClass}" style="--i: ${index}">
        <div class="hw-card-header">
          <div class="hw-icon">${icon(test.icon)}</div>
          <div class="hw-info">
            <strong>${test.title}</strong>
            <small>${test.desc}</small>
          </div>
        </div>
        <div style="display: flex; align-items: center; justify-content: space-between; gap: 8px;">
          <span class="hw-badge ${badgeClass}">${badgeText}</span>
          <button class="hw-btn" type="button" onclick="startHardwareTest('${test.id}')">
            ${icon("play")} <span>${t("testLaunchBtn")}</span>
          </button>
        </div>
      </div>
    `;
  }).join("");

  return `
    <p class="eyebrow">${t("testEyebrow")}</p>
    <h2>${t("testTitle")} <span class="emoji-pop">🧪</span></h2>
    <p class="lead">${t("testLead")}</p>

    <div class="advice" style="opacity: 1; margin: 0 0 20px;">
      <strong>${t("testScoreTitle")} : ${passedCount}/${testsList.length} ${t("testScoreUnit")}</strong>
      <p>${passedCount === testsList.length ? t("testScorePerfect") : t("testScoreAdvice")}</p>
    </div>

    <div class="hw-grid">
      ${cardsHtml}
    </div>
  `;
}

let currentHwCleanup = null;

function saveHwTestResult(testId, passed) {
  const testResults = JSON.parse(localStorage.getItem("telrepar-hw-tests") || "{}");
  testResults[testId] = passed;
  localStorage.setItem("telrepar-hw-tests", JSON.stringify(testResults));
  if (passed) {
    playTechSound('success');
    createConfetti();
  } else {
    playTechSound('click');
  }
  closeHardwareTestOverlay();
  if (state.page === "tests") {
    renderWithTransition();
  }
}

function closeHardwareTestOverlay() {
  const overlay = document.getElementById("hw-test-overlay");
  if (!overlay) return;
  overlay.hidden = true;
  overlay.style.display = "none";
  if (currentHwCleanup) {
    currentHwCleanup();
    currentHwCleanup = null;
  }
}

const hwCloseBtn = document.getElementById("hw-overlay-close");
if (hwCloseBtn) {
  hwCloseBtn.addEventListener("click", closeHardwareTestOverlay);
}

function startHardwareTest(testId) {
  const overlay = document.getElementById("hw-test-overlay");
  const titleEl = document.getElementById("hw-overlay-title");
  const bodyEl = document.getElementById("hw-overlay-body");
  const actionsEl = document.getElementById("hw-overlay-actions");
  if (!overlay || !bodyEl || !actionsEl) return;

  if (currentHwCleanup) {
    currentHwCleanup();
    currentHwCleanup = null;
  }

  overlay.hidden = false;
  overlay.style.display = "flex";
  playTechSound('click');

  if (testId === "touch") runTouchTest(titleEl, bodyEl, actionsEl);
  else if (testId === "mic") runMicTest(titleEl, bodyEl, actionsEl);
  else if (testId === "speaker") runSpeakerTest(titleEl, bodyEl, actionsEl);
  else if (testId === "vibe") runVibeTest(titleEl, bodyEl, actionsEl);
  else if (testId === "pixels") runPixelsTest(titleEl, bodyEl, actionsEl);
  else if (testId === "gyro") runGyroTest(titleEl, bodyEl, actionsEl);
}

// 1. TOUCH TEST
function runTouchTest(titleEl, bodyEl, actionsEl) {
  titleEl.textContent = t("testTouchTitle");
  const totalCells = 48;
  let filledCount = 0;

  bodyEl.innerHTML = `
    <div style="text-align: center; margin-bottom: 12px;">
      <p style="margin: 0; font-size: 13px; color: var(--muted);">Glissez votre doigt sur toutes les cases pour les colorier en vert !</p>
      <strong style="font-size: 14px; color: var(--accent);" id="touch-progress">0 / ${totalCells} cases</strong>
    </div>
    <div class="touch-grid-wrapper" id="touch-grid">
      ${Array.from({ length: totalCells }).map((_, i) => `<div class="touch-cell" data-index="${i}"></div>`).join("")}
    </div>
  `;

  actionsEl.innerHTML = `
    <button class="secondary" type="button" onclick="saveHwTestResult('touch', false)">${t("btnFail")}</button>
  `;

  const grid = document.getElementById("touch-grid");
  const progressEl = document.getElementById("touch-progress");

  function handleTouch(e) {
    e.preventDefault();
    const touches = e.touches || [e];
    for (let i = 0; i < touches.length; i++) {
      const touch = touches[i];
      const target = document.elementFromPoint(touch.clientX, touch.clientY);
      if (target && target.classList.contains("touch-cell") && !target.classList.contains("active")) {
        target.classList.add("active");
        filledCount++;
        if (progressEl) progressEl.textContent = `${filledCount} / ${totalCells} cases`;
        if (filledCount === totalCells) {
          setTimeout(() => saveHwTestResult("touch", true), 300);
        }
      }
    }
  }

  grid.addEventListener("touchstart", handleTouch, { passive: false });
  grid.addEventListener("touchmove", handleTouch, { passive: false });
  grid.addEventListener("mousemove", (e) => {
    if (e.buttons === 1) handleTouch(e);
  });

  currentHwCleanup = () => {};
}

// 2. MICROPHONE TEST
function runMicTest(titleEl, bodyEl, actionsEl) {
  titleEl.textContent = t("testMicTitle");

  bodyEl.innerHTML = `
    <div class="audio-meter-container">
      <p style="text-align: center; margin: 0; font-size: 13px; color: var(--muted);">Parlez ou soufflez dans le micro pour tester la réception audio !</p>
      <div class="eq-visualizer">
        ${Array.from({ length: 12 }).map(() => `<div class="eq-bar"></div>`).join("")}
      </div>
      <p style="font-size: 12px; color: var(--good); font-weight: 700;" id="mic-status">Demande d'accès au micro...</p>
    </div>
  `;

  actionsEl.innerHTML = `
    <button class="primary" type="button" onclick="saveHwTestResult('mic', true)">${t("btnPass")}</button>
    <button class="secondary" type="button" onclick="saveHwTestResult('mic', false)">${t("btnFail")}</button>
  `;

  let localAudioCtx = null;
  let micStream = null;
  let animId = null;

  async function initMic() {
    try {
      micStream = await navigator.mediaDevices.getUserMedia({ audio: true });
      localAudioCtx = new (window.AudioContext || window.webkitAudioContext)();
      const source = localAudioCtx.createMediaStreamSource(micStream);
      const analyser = localAudioCtx.createAnalyser();
      analyser.fftSize = 32;
      source.connect(analyser);

      const dataArray = new Uint8Array(analyser.frequencyBinCount);
      const eqBars = document.querySelectorAll(".eq-bar");
      const statusEl = document.getElementById("mic-status");
      if (statusEl) statusEl.textContent = "Micro détecté 🎙️ ! Parlez maintenant...";

      function draw() {
        analyser.getByteFrequencyData(dataArray);
        eqBars.forEach((bar, idx) => {
          const val = dataArray[idx] || 0;
          const height = Math.max(10, Math.min(100, (val / 255) * 100));
          bar.style.height = `${height}%`;
          if (val > 100) bar.classList.add("active");
          else bar.classList.remove("active");
        });
        animId = requestAnimationFrame(draw);
      }
      draw();
    } catch (err) {
      const statusEl = document.getElementById("mic-status");
      if (statusEl) {
        statusEl.style.color = "var(--bad)";
        statusEl.textContent = "Impossible d'accéder au micro (Permission refusée ou micro absent)";
      }
    }
  }

  initMic();

  currentHwCleanup = () => {
    if (animId) cancelAnimationFrame(animId);
    if (micStream) micStream.getTracks().forEach(track => track.stop());
    if (localAudioCtx) localAudioCtx.close();
  };
}

// 3. SPEAKER TEST
function playSpeakerTestTone() {
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    if (ctx.state === 'suspended') ctx.resume();

    const freqs = [440, 554.37, 659.25, 880, 1108.73, 1318.51];
    freqs.forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, ctx.currentTime + idx * 0.18);

      const startTime = ctx.currentTime + idx * 0.18;
      gain.gain.setValueAtTime(0.25, startTime);
      gain.gain.exponentialRampToValueAtTime(0.001, startTime + 0.22);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(startTime);
      osc.stop(startTime + 0.22);
    });
  } catch (e) {
    console.error("Audio error:", e);
  }
}

function runSpeakerTest(titleEl, bodyEl, actionsEl) {
  titleEl.textContent = t("testSpeakerTitle");

  bodyEl.innerHTML = `
    <div style="text-align: center; display: flex; flex-direction: column; align-items: center; gap: 16px;">
      <div class="result-icon success" id="speaker-icon" style="margin: 0; width: 72px; height: 72px; transition: transform 0.2s ease;">
        ${icon("volume-2")}
      </div>
      <p style="margin: 0; font-size: 13px; color: var(--muted);">Appuyez sur le bouton ci-dessous. Une mélodie de test va retentir dans le haut-parleur.</p>
      <button class="primary" type="button" id="play-sound-test-btn" style="width: auto; padding: 12px 28px;">
        ${icon("volume-2")} Jouer le son de test (Mélodie)
      </button>
    </div>
  `;

  actionsEl.innerHTML = `
    <button class="primary" type="button" onclick="saveHwTestResult('speaker', true)">${t("btnPass")}</button>
    <button class="secondary" type="button" onclick="saveHwTestResult('speaker', false)">${t("btnFail")}</button>
  `;

  const btn = document.getElementById("play-sound-test-btn");
  const speakerIcon = document.getElementById("speaker-icon");

  if (btn) {
    btn.addEventListener("click", () => {
      playSpeakerTestTone();
      if (speakerIcon) {
        speakerIcon.style.transform = "scale(1.25)";
        setTimeout(() => { speakerIcon.style.transform = "scale(1)"; }, 1200);
      }
      showToast("Son de test en cours d'émission 🔊", "info");
    });
  }

  currentHwCleanup = () => {};
}

// 4. VIBRATION TEST
function triggerHapticPulse() {
  if (navigator.vibrate) {
    navigator.vibrate([200, 80, 200, 80, 400]);
  }
  
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    if (ctx.state === 'suspended') ctx.resume();

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(65, ctx.currentTime);

    gain.gain.setValueAtTime(0.4, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.6);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + 0.6);
  } catch (e) {}
}

function runVibeTest(titleEl, bodyEl, actionsEl) {
  titleEl.textContent = t("testVibeTitle");

  bodyEl.innerHTML = `
    <div style="text-align: center; display: flex; flex-direction: column; align-items: center; gap: 16px;">
      <div class="result-icon warning" id="vibe-icon-wrapper" style="margin: 0; width: 72px; height: 72px; transition: transform 0.1s ease;">
        ${icon("smartphone")}
      </div>
      <p style="margin: 0; font-size: 13px; color: var(--muted);">Appuyez ci-dessous. Le téléphone émettra une impulsion de vibration matérielle et acoustique.</p>
      <button class="primary" type="button" id="trigger-vibe-btn" style="width: auto; padding: 12px 28px;">
        ${icon("zap")} Déclencher la vibration 📳
      </button>
    </div>
  `;

  actionsEl.innerHTML = `
    <button class="primary" type="button" onclick="saveHwTestResult('vibe', true)">${t("btnPass")}</button>
    <button class="secondary" type="button" onclick="saveHwTestResult('vibe', false)">${t("btnFail")}</button>
  `;

  const btn = document.getElementById("trigger-vibe-btn");
  const vibeWrapper = document.getElementById("vibe-icon-wrapper");

  if (btn) {
    btn.addEventListener("click", () => {
      triggerHapticPulse();
      
      if (vibeWrapper) {
        let count = 0;
        const interval = setInterval(() => {
          count++;
          const offsetX = (Math.random() - 0.5) * 16;
          const offsetY = (Math.random() - 0.5) * 16;
          vibeWrapper.style.transform = `translate(${offsetX}px, ${offsetY}px) scale(1.1)`;
          if (count > 12) {
            clearInterval(interval);
            vibeWrapper.style.transform = "none";
          }
        }, 40);
      }

      showToast("Impulsion de vibration envoyée 📳", "info");
    });
  }

  currentHwCleanup = () => {};
}

// 5. PIXELS TEST
function runPixelsTest(titleEl, bodyEl, actionsEl) {
  titleEl.textContent = t("testPixelsTitle");

  const colors = ["#ff0000", "#00ff00", "#0000ff", "#ffffff", "#000000"];
  let colorIndex = 0;

  bodyEl.innerHTML = `
    <div class="pixel-sweep-screen" id="pixel-screen" style="background: ${colors[0]};">
      <div class="pixel-sweep-hint">Touchez l'écran pour changer de couleur (${colorIndex + 1}/${colors.length})</div>
    </div>
  `;

  actionsEl.innerHTML = `
    <button class="primary" type="button" onclick="saveHwTestResult('pixels', true)">${t("btnPass")}</button>
    <button class="secondary" type="button" onclick="saveHwTestResult('pixels', false)">${t("btnFail")}</button>
  `;

  const pixelScreen = document.getElementById("pixel-screen");
  if (pixelScreen) {
    pixelScreen.addEventListener("click", () => {
      colorIndex = (colorIndex + 1) % colors.length;
      pixelScreen.style.background = colors[colorIndex];
      const hint = pixelScreen.querySelector(".pixel-sweep-hint");
      if (hint) hint.textContent = `Touchez l'écran pour changer de couleur (${colorIndex + 1}/${colors.length})`;
    });
  }

  currentHwCleanup = () => {};
}

// 6. GYROSCOPE TEST
function runGyroTest(titleEl, bodyEl, actionsEl) {
  titleEl.textContent = t("testGyroTitle");

  const needsPermission = typeof DeviceOrientationEvent !== "undefined" && typeof DeviceOrientationEvent.requestPermission === "function";

  bodyEl.innerHTML = `
    <div style="text-align: center; display: flex; flex-direction: column; align-items: center; gap: 14px;">
      <p style="margin: 0; font-size: 13px; color: var(--muted);">Inclinez votre téléphone pour amener la bulle au centre du cercle !</p>
      
      ${needsPermission ? `
        <button class="primary" type="button" id="request-gyro-perm-btn" style="width: auto; padding: 10px 20px; font-size: 13px; margin-bottom: 6px;">
          ${icon("compass")} Activer les capteurs (iOS)
        </button>
      ` : ""}

      <div class="gyro-container" id="gyro-touch-area" style="cursor: pointer;">
        <div class="gyro-target"></div>
        <div class="gyro-bubble" id="gyro-bubble"></div>
      </div>

      <p style="font-size: 12.5px; font-weight: 700; color: var(--accent);" id="gyro-coords">Inclinez l'appareil ou faites glisser la bulle...</p>
    </div>
  `;

  actionsEl.innerHTML = `
    <button class="primary" type="button" onclick="saveHwTestResult('gyro', true)">${t("btnPass")}</button>
    <button class="secondary" type="button" onclick="saveHwTestResult('gyro', false)">${t("btnFail")}</button>
  `;

  const bubble = document.getElementById("gyro-bubble");
  const coords = document.getElementById("gyro-coords");
  const permBtn = document.getElementById("request-gyro-perm-btn");
  const touchArea = document.getElementById("gyro-touch-area");

  let isListening = false;

  function handleOrientation(e) {
    if (e.beta === null && e.gamma === null) return;

    const beta = Math.max(-45, Math.min(45, e.beta || 0));   // Pitch
    const gamma = Math.max(-45, Math.min(45, e.gamma || 0)); // Roll

    const x = (gamma / 45) * 80;
    const y = (beta / 45) * 80;

    if (bubble) {
      bubble.style.transform = `translate(${x}px, ${y}px)`;
      const isCentered = Math.abs(beta) < 6 && Math.abs(gamma) < 6;
      bubble.classList.toggle("centered", isCentered);
    }

    if (coords) {
      const isCentered = Math.abs(beta) < 6 && Math.abs(gamma) < 6;
      coords.textContent = `Pitch: ${Math.round(beta)}° | Roll: ${Math.round(gamma)}° ${isCentered ? "🎯 PARFAIT !" : ""}`;
      coords.style.color = isCentered ? "var(--good)" : "var(--accent)";
    }
  }

  function startListening() {
    if (isListening) return;
    window.addEventListener("deviceorientation", handleOrientation);
    isListening = true;
    if (coords) coords.textContent = "Capteur actif ! Inclinez votre téléphone...";
  }

  if (permBtn) {
    permBtn.addEventListener("click", async () => {
      try {
        const response = await DeviceOrientationEvent.requestPermission();
        if (response === "granted") {
          permBtn.style.display = "none";
          startListening();
        } else {
          if (coords) coords.textContent = "Permission refusée par l'utilisateur.";
        }
      } catch (err) {
        startListening();
      }
    });
  } else if (window.DeviceOrientationEvent) {
    startListening();
  }

  // Desktop Mouse / Touch fallback simulation
  if (touchArea) {
    function handlePointerMove(e) {
      const rect = touchArea.getBoundingClientRect();
      const clientX = e.clientX || (e.touches && e.touches[0].clientX);
      const clientY = e.clientY || (e.touches && e.touches[0].clientY);
      if (!clientX || !clientY) return;

      const offsetX = clientX - (rect.left + rect.width / 2);
      const offsetY = clientY - (rect.top + rect.height / 2);

      const x = Math.max(-80, Math.min(80, offsetX));
      const y = Math.max(-80, Math.min(80, offsetY));

      if (bubble) {
        bubble.style.transform = `translate(${x}px, ${y}px)`;
        const isCentered = Math.abs(x) < 15 && Math.abs(y) < 15;
        bubble.classList.toggle("centered", isCentered);
      }

      if (coords) {
        const isCentered = Math.abs(x) < 15 && Math.abs(y) < 15;
        coords.textContent = `X: ${Math.round(x)}px | Y: ${Math.round(y)}px ${isCentered ? "🎯 PARFAIT !" : ""}`;
        coords.style.color = isCentered ? "var(--good)" : "var(--accent)";
      }
    }

    touchArea.addEventListener("mousemove", (e) => { if (e.buttons === 1) handlePointerMove(e); });
    touchArea.addEventListener("touchmove", handlePointerMove, { passive: true });
  }

  currentHwCleanup = () => {
    window.removeEventListener("deviceorientation", handleOrientation);
  };
}

// --- Event Delegation ---

screen.addEventListener("click", (e) => {
  // Clic sur une carte d'étape du guide
  const stepCard = e.target.closest(".step-card");
  if (stepCard && !e.target.closest("[data-action='navigate']")) {
    stepCard.classList.toggle("checked");
    const isChecked = stepCard.classList.contains("checked");
    playTechSound(isChecked ? 'success' : 'click');
    
    const totalSteps = document.querySelectorAll(".step-card").length;
    const checkedSteps = document.querySelectorAll(".step-card.checked").length;
    const counter = document.querySelector("#troubleshoot-counter");
    const progress = document.querySelector("#troubleshoot-progress");
    
    if (counter) counter.textContent = `${checkedSteps} / ${totalSteps} ${t("tested")}`;
    if (progress) progress.style.width = `${(checkedSteps / totalSteps) * 100}%`;
    
    updateHealthGauge(checkedSteps, totalSteps, true);

    if (checkedSteps === totalSteps && totalSteps > 0) {
      showToast(t("allStepsTested"), "success");
      createConfetti();
    }
    return;
  }

  const target = e.target.closest("[data-action]");
  if (!target) return;
  
  const action = target.dataset.action;
  
  if (action === "navigate") {
    navigateTo(target.dataset.page);
  } else if (action === "select-brand") {
    state.brand = target.dataset.brand;
    navigateTo("models");
  } else if (action === "select-model") {
    state.model = target.dataset.model;
    navigateTo("home");
  } else if (action === "select-category") {
    const grid = target.closest(".category-grid");
    if (grid) {
      grid.classList.add("side-exit");
      target.classList.add("selected");
    }
    playTechSound('click');
    state.category = target.dataset.category;
    setTimeout(() => {
      navigateTo("issues");
    }, 220);
  } else if (action === "select-issue") {
    state.issue = target.dataset.issue;
    navigateTo("diagnose");
  } else if (action === "toggle-accordion") {
    const accordion = target.closest(".pro-accordion");
    if (accordion) {
      accordion.classList.toggle("open");
      playTechSound('toggle');
    }
  } else if (action === "finish-diagnosis") {
    const btn = target;
    btn.disabled = true;
    btn.classList.remove('cta-pulse');
    btn.classList.add('shake-subtle');
    btn.innerHTML = `${icon("loader-2")} ${t("diagInProgress")}`;
    lucide.createIcons();
    
    setTimeout(() => {
      const warning = /fissure|ne charge plus|noir|surchauffe|chauffe/i.test(state.issue);
      const current = JSON.parse(localStorage.getItem("telrepar-history") || "[]");
      const now = new Date();
      const dateStr = now.toLocaleDateString('fr-FR', { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' });
      
      current.unshift({ issue: state.issue, device: `${state.brand} ${state.model}`, date: dateStr, warning });
      localStorage.setItem("telrepar-history", JSON.stringify(current.slice(0, 10)));
      
      state.page = "result";
      state.stack.push("result");
      renderWithTransition();
    }, 1500);
  }
});

screen.addEventListener("input", (e) => {
  if (e.target.id === "brand-search") {
    const list = document.querySelector("#brand-list");
    if (list) {
      const filtered = brands.filter(b => b.toLowerCase().includes(e.target.value.toLowerCase()));
      list.innerHTML = brandRows(filtered);
      lucide.createIcons();
    }
  } else if (e.target.id === "model-search") {
    const list = document.querySelector("#model-list");
    if (list) {
      const allModels = phoneModels[state.brand] || ["Modèle récent", "Modèle milieu de gamme", "Modèle ancien", "Autre modèle"];
      const filtered = allModels.filter(m => m.toLowerCase().includes(e.target.value.toLowerCase()));
      list.innerHTML = modelRows(state.brand, filtered);
      lucide.createIcons();
    }
  }
});

backButton.addEventListener("click", goBack);

navButtons.forEach(button => {
  button.addEventListener("click", () => {
    state.page = button.dataset.nav;
    state.stack = [state.page];
    if (state.page === "home") {
      state.category = null;
      state.issue = null;
    }
    renderWithTransition();
  });
});

// --- Modal Paramètres & Handlers ---
const settingsModal = document.querySelector("#settings-modal");
const settingsBtn = document.querySelector("#settings-btn");
const closeSettingsBtn = document.querySelector("#close-settings");
const toggleAnimations = document.querySelector("#toggle-animations");
const toggleSound = document.querySelector("#toggle-sound");
const settingsChangeDevice = document.querySelector("#settings-change-device");
const clearHistoryBtn = document.querySelector("#clear-history-btn");
const shareAppBtn = document.querySelector("#share-app-btn");
const currentDeviceLabel = document.querySelector("#settings-current-device");

const selectLang = document.querySelector("#select-lang");

function updateSettingsLabels() {
  const mapping = {
    "stg-title": "stgTitle",
    "stg-subtitle": "stgSubtitle",
    "stg-section-visual": "stgVisual",
    "stg-anim-label": "stgAnimLabel",
    "stg-anim-desc": "stgAnimDesc",
    "stg-sound-label": "stgSoundLabel",
    "stg-sound-desc": "stgSoundDesc",
    "stg-lang-label": "stgLangLabel",
    "stg-lang-desc": "stgLangDesc",
    "stg-section-data": "stgData",
    "stg-device-label": "stgDeviceLabel",
    "stg-health-label": "stgHealthLabel",
    "stg-health-desc": "stgHealthDesc",
    "stg-section-app": "stgApp",
    "stg-share-label": "stgShareLabel",
    "stg-about-desc": "stgAboutDesc",
    "stg-about-tagline": "stgAboutTagline"
  };

  for (const [id, key] of Object.entries(mapping)) {
    const el = document.getElementById(id);
    if (el) el.textContent = t(key);
  }

  const changeBtn = document.getElementById("settings-change-device");
  if (changeBtn) changeBtn.textContent = t("stgBtnModify");

  const clearBtn = document.getElementById("clear-history-btn");
  if (clearBtn) clearBtn.textContent = t("stgBtnClear");
}

function openSettings() {
  if (!settingsModal) return;
  updateSettingsLabels();
  if (currentDeviceLabel) {
    currentDeviceLabel.textContent = `${state.brand} ${state.model}`;
  }
  if (toggleAnimations) toggleAnimations.checked = settingsState.animations;
  if (toggleSound) toggleSound.checked = settingsState.sound;
  if (selectLang) selectLang.value = settingsState.lang;
  
  settingsModal.hidden = false;
  lucide.createIcons();
  
  requestAnimationFrame(() => {
    settingsModal.classList.add("open");
  });
  playTechSound('click');
}

if (selectLang) {
  selectLang.addEventListener("change", (e) => {
    settingsState.lang = e.target.value;
    localStorage.setItem("telrepar-lang", settingsState.lang);
    updateSettingsLabels();
    playTechSound('toggle');
    const labels = { fr: "Langue : Français 🇫🇷", en: "Language: English 🇬🇧", es: "Idioma: Español 🇪🇸" };
    showToast(labels[settingsState.lang] || "Language updated", "success");
    renderWithTransition();
  });
}

function closeSettings() {
  if (!settingsModal) return;
  settingsModal.classList.remove("open");
  setTimeout(() => {
    settingsModal.hidden = true;
  }, 350);
  playTechSound('click');
}

if (settingsBtn) {
  settingsBtn.addEventListener("click", openSettings);
}

if (closeSettingsBtn) {
  closeSettingsBtn.addEventListener("click", closeSettings);
}

if (settingsModal) {
  settingsModal.addEventListener("click", (e) => {
    if (e.target === settingsModal) {
      closeSettings();
    }
  });
}

if (toggleAnimations) {
  toggleAnimations.addEventListener("change", (e) => {
    settingsState.animations = e.target.checked;
    localStorage.setItem("telrepar-animations", settingsState.animations);
    document.body.classList.toggle("animations-disabled", !settingsState.animations);
    playTechSound('toggle');
    showToast(settingsState.animations ? t("animationsOn") : t("animationsOff"), "info");
  });
}

if (toggleSound) {
  toggleSound.addEventListener("change", (e) => {
    settingsState.sound = e.target.checked;
    localStorage.setItem("telrepar-sound", settingsState.sound);
    if (settingsState.sound) playTechSound('success');
    showToast(settingsState.sound ? t("soundOn") : t("soundOff"), "info");
  });
}

if (settingsChangeDevice) {
  settingsChangeDevice.addEventListener("click", () => {
    closeSettings();
    navigateTo("brands");
  });
}

if (clearHistoryBtn) {
  clearHistoryBtn.addEventListener("click", () => {
    const historyData = JSON.parse(localStorage.getItem("telrepar-history") || "[]");
    if (historyData.length === 0) {
      showToast(t("historyEmpty2"), "info");
      return;
    }
    localStorage.removeItem("telrepar-history");
    playTechSound('click');
    showToast(t("historyCleared"), "danger");
    if (state.page === "history") {
      renderWithTransition();
    }
  });
}

if (shareAppBtn) {
  shareAppBtn.addEventListener("click", async () => {
    playTechSound('click');
    const shareData = {
      title: t("shareTitle"),
      text: t("shareText"),
      url: window.location.href
    };
    
    if (navigator.share) {
      try {
        await navigator.share(shareData);
        showToast(t("shareThanks"), "success");
      } catch (err) {
        // Annulé par l'utilisateur
      }
    } else {
      try {
        await navigator.clipboard.writeText(window.location.href);
        showToast(t("linkCopied"), "success");
      } catch (err) {
        showToast(t("linkCopyFail"), "danger");
      }
    }
  });
}

// ============================================
// ANIMATION FUNCTIONS
// ============================================

// --- Spotlight Effect (mouse glow on categories) ---
function initSpotlightEffect() {
  const cards = document.querySelectorAll('.category');
  cards.forEach(card => {
    card.onmousemove = (e) => {
      const rect = card.getBoundingClientRect();
      card.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
      card.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
    };
  });
}

// --- Typewriter Effect ---
function initTypewriter() {
  const el = document.getElementById('hero-title');
  if (!el) return;
  const text = t("typewriterText");
  el.textContent = '';
  let i = 0;
  
  // Add cursor
  const cursor = document.createElement('span');
  cursor.className = 'typewriter-cursor';
  el.parentNode.insertBefore(cursor, el.nextSibling);
  
  function type() {
    if (i < text.length) {
      el.textContent += text[i];
      i++;
      setTimeout(type, 50 + Math.random() * 40);
    } else {
      // Remove cursor after typing
      setTimeout(() => cursor.remove(), 2000);
    }
  }
  setTimeout(type, 300);
}

// --- Count Up Animation ---
function initCountUp() {
  const counters = document.querySelectorAll('.stat-number[data-target]');
  counters.forEach(counter => {
    const target = parseInt(counter.dataset.target);
    const suffix = counter.dataset.suffix || '';
    if (target === 0) {
      counter.textContent = '0' + suffix;
      return;
    }
    
    let current = 0;
    const duration = 1200;
    const stepTime = duration / target;
    
    function count() {
      current++;
      counter.textContent = current + suffix;
      if (current < target) {
        setTimeout(count, stepTime);
      }
    }
    setTimeout(count, 600);
  });
}

// --- Floating Particles ---
function createParticles() {
  const container = document.getElementById('particles');
  if (!container) return;
  
  for (let i = 0; i < 12; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    const size = Math.random() * 3 + 2;
    particle.style.width = size + 'px';
    particle.style.height = size + 'px';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.bottom = '0';
    particle.style.setProperty('--duration', (Math.random() * 6 + 6) + 's');
    particle.style.setProperty('--delay', (Math.random() * 5) + 's');
    particle.style.setProperty('--drift', (Math.random() * 60 - 30) + 'px');
    particle.style.setProperty('--opacity', (Math.random() * 0.3 + 0.1).toString());
    container.appendChild(particle);
  }
}

// --- Confetti ---
function createConfetti() {
  const container = document.getElementById('confetti-container');
  if (!container) return;
  
  const colors = ['#ffb020', '#ffd700', '#4cd1a0', '#ff6b7a', '#60a5fa', '#c084fc'];
  
  for (let i = 0; i < 30; i++) {
    const piece = document.createElement('div');
    piece.className = 'confetti-piece';
    piece.style.left = Math.random() * 100 + '%';
    piece.style.setProperty('--color', colors[Math.floor(Math.random() * colors.length)]);
    piece.style.setProperty('--size', (Math.random() * 6 + 5) + 'px');
    piece.style.setProperty('--fall-duration', (Math.random() * 1 + 1) + 's');
    piece.style.setProperty('--fall-delay', (Math.random() * 0.5) + 's');
    piece.style.setProperty('--fall-distance', (Math.random() * 200 + 200) + 'px');
    piece.style.setProperty('--rotation', (Math.random() * 720 - 360) + 'deg');
    container.appendChild(piece);
  }
}

// --- 3D Tilt Effect ---
function initTiltEffect() {
  const cards = document.querySelectorAll('.category');
  cards.forEach(card => {
    card.onmousemove = (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -6;
      const rotateY = ((x - centerX) / centerX) * 6;
      
      card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-3px)`;
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    };
    card.onmouseleave = () => {
      card.style.transform = '';
    };
  });
}

// --- Ripple Effect ---
function initRippleEffect() {
  const buttons = document.querySelectorAll('.primary, .secondary, .select-row, .issue-row, .category');
  buttons.forEach(btn => {
    btn.addEventListener('click', function(e) {
      const ripple = document.createElement('span');
      ripple.className = 'ripple-wave';
      const rect = this.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      ripple.style.width = ripple.style.height = size + 'px';
      ripple.style.left = (e.clientX - rect.left - size / 2) + 'px';
      ripple.style.top = (e.clientY - rect.top - size / 2) + 'px';
      this.style.position = 'relative';
      this.style.overflow = 'hidden';
      this.appendChild(ripple);
      setTimeout(() => ripple.remove(), 600);
    });
  });
}

// --- Scroll Reveal ---
function initScrollReveal() {
  const reveals = document.querySelectorAll('.reveal-up');
  if (!reveals.length) return;
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -20px 0px' });
  
  reveals.forEach(el => observer.observe(el));
}

// --- Initial Render ---
renderWithTransition();
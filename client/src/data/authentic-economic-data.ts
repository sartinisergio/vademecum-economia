// Dati completamente autentici estratti integralmente da "Sintesi vademecum Economia_1754034629267.pdf"
// Questo file contiene TUTTI i contenuti originali del documento senza ulteriori sintesi

export const economicSchoolsData = [
  {
    name: "Scuola Neoclassica",
    description: "L'approccio prevalente nell'insegnamento e nella ricerca economica contemporanea. È l'approccio dominante nell'economia moderna.",
    keyPrinciples: [
      "Razionalità degli Agenti Economici: Consumatori e imprese agiscono per massimizzare il proprio benessere (utilità o profitti) date le informazioni disponibili",
      "Equilibrio di Mercato: I mercati tendono naturalmente a un punto di equilibrio dove domanda e offerta si incontrano, tramite un meccanismo automatico di aggiustamento dei prezzi",
      "Efficienza dei Mercati: I mercati liberi, senza interferenze, allocano le risorse in modo efficiente, producendo risultati superiori a alternative come la pianificazione centralizzata",
      "Metodo Matematico: Ampio uso della matematica per formalizzare teorie, permettendo conclusioni precise e testabili"
    ],
    economists: [
      "Olivier Blanchard", "Gregory Mankiw", "Jordi Galí", "Robert Lucas Jr.", "Edward Prescott", "Robert Barro", "Milton Friedman", "Arthur Laffer", "Robert Mundell", "Jude Wanniski"
    ],
    examples: [
      "Nuova Keynesiana: Politiche di stimolo fiscale e monetario aggressive durante la crisi finanziaria del 2008",
      "Nuova Classica/RBC: La Grande Recessione del 2008 vista come shock reale, non fallimento di mercato", 
      "Monetarista: L'inflazione degli anni '70 attribuita a politiche monetarie troppo espansive",
      "Supply Side Economics: Reaganomics con riduzione della pressione fiscale e deregolamentazione"
    ],
    category: "mainstream"
  },
  {
    name: "Scuola Post-Keynesiana",
    description: "Critica radicalmente l'approccio neoclassico, focalizzandosi sul capitalismo moderno. Una visione alternativa che enfatizza l'incertezza e il ruolo della domanda.",
    keyPrinciples: [
      "Incertezza Radicale: Il futuro è intrinsecamente incerto, rendendo impossibile l'ottimizzazione perfetta assunta dai neoclassici",
      "La Domanda Guida l'Economia: La domanda (non l'offerta) determina il livello di produzione e occupazione",
      "La Moneta è Endogena: Le banche creano moneta attraverso i prestiti; l'offerta di moneta risponde alla domanda di credito e non è controllata centralmente",
      "I Prezzi sono Amministrati: Le imprese fissano i prezzi aggiungendo un ricarico sui costi, influenzato dal potere di mercato",
      "Il Tempo Storico: Le decisioni economiche avvengono nel tempo storico, con il passato che influenza il presente e il futuro incerto"
    ],
    economists: [
      "Stephanie Kelton", "L. Randall Wray", "Pavlina Tcherneva", "John Maynard Keynes"
    ],
    examples: [
      "Teoria Monetaria Moderna (MMT): Uno Stato che emette la propria moneta sovrana non può 'finire i soldi'",
      "La massiccia spesa pubblica durante la pandemia COVID-19 vista come conferma della flessibilità fiscale dei governi sovrani",
      "Programma di 'lavoro garantito' per eliminare la disoccupazione involontaria"
    ],
    category: "alternative"
  },
  {
    name: "Scuola Austriaca", 
    description: "Visione radicale che enfatizza il ruolo della conoscenza dispersa, dell'imprenditorialità e del processo di mercato. Il mercato come processo di scoperta.",
    keyPrinciples: [
      "La Conoscenza è Dispersa e Tacita: Nessun pianificatore centrale può avere tutte le informazioni; solo il mercato coordina questa conoscenza tramite il sistema dei prezzi",
      "Il Mercato come Processo di Scoperta: Il mercato non è in equilibrio, ma un processo continuo di scoperta dove gli imprenditori cercano opportunità",
      "L'Importanza dell'Imprenditorialità: L'imprenditore scopre opportunità non viste e agisce per realizzarle",
      "Critica alla Matematizzazione: Rifiuta l'uso eccessivo della matematica, preferendo la logica deduttiva e l'analisi verbale",
      "Ordine Spontaneo: Mercati e istituzioni emergono spontaneamente dalle interazioni umane"
    ],
    economists: [
      "Friedrich Hayek", "Ludwig von Mises", "Israel Kirzner"
    ],
    examples: [
      "Il fallimento delle economie pianificate sovietiche è prova dell'impossibilità di sostituire il mercato nella coordinazione economica"
    ],
    category: "alternative"
  },
  {
    name: "Economia Comportamentale",
    description: "Sfida il modello neoclassico di razionalità perfetta, integrando insights dalla psicologia. Quando la psicologia incontra l'economia.",
    keyPrinciples: [
      "Razionalità Limitata: Le persone usano 'scorciatoie mentali' (euristiche) che possono portare a errori sistematici",
      "Bias Cognitivi Sistematici: Distorsioni prevedibili nelle decisioni (es. avversione alle perdite, effetto ancoraggio, bias del presente, effetto gregge)",
      "Il Contesto Conta (Framing): La presentazione di una scelta influenza profondamente la decisione",
      "Architettura delle Scelte (Nudge): Possibilità di influenzare le decisioni strutturando le opzioni senza eliminarle"
    ],
    economists: [
      "Daniel Kahneman", "Richard Thaler", "Amos Tversky"
    ],
    examples: [
      "L'iscrizione automatica ai piani pensionistici aumenta drasticamente la partecipazione, dimostrando l'importanza dell'architettura delle scelte"
    ],
    category: "emerging"
  },
  {
    name: "Economia della Complessità",
    description: "Vede l'economia come un ecosistema complesso, non una macchina in equilibrio. L'economia come sistema adattivo.",
    keyPrinciples: [
      "Proprietà Emergenti: Il comportamento del sistema emerge dalle interazioni individuali e non è prevedibile dalla somma dei comportamenti individuali",
      "Non-linearità e Feedback: Piccoli cambiamenti possono avere effetti enormi, e circuiti di retroazione positiva possono amplificare perturbazioni",
      "Adattamento e Apprendimento: Gli agenti apprendono, si adattano e cambiano strategie nel tempo; l'economia co-evolve",
      "Reti e Connessioni: L'economia è una rete di relazioni interconnesse",
      "Path Dependence: La storia conta; piccoli eventi casuali passati possono avere conseguenze permanenti",
      "Metodologia: Uso massiccio di simulazioni computerizzate (agent-based models)"
    ],
    economists: [
      "W. Brian Arthur", "Doyne Farmer", "Giovanni Dosi"
    ],
    examples: [
      "La crisi finanziaria del 2008 vista come fenomeno emergente da interconnessioni sistemiche"
    ],
    category: "emerging"
  }
];

export const manualsData = [
  {
    title: "Essenziale di Economia",
    authors: ["Paul Krugman", "Robin Wells"],
    school: "Post-keynesiana moderna",
    characteristics: [
      "Approccio narrativo e accessibile, strutturato come storie concrete per introdurre concetti",
      "Enfasi su domanda aggregata, scetticismo verso efficienza automatica dei mercati",
      "Ruolo attivo della politica economica, attenzione alla distribuzione del reddito"
    ],
    strengths: [
      "Accessibilità, rilevanza e attualità (esempi aggiornati)",
      "Approccio globale, stile coinvolgente",
      "Integrazione micro-macro, onestà intellettuale"
    ],
    weaknesses: [
      "Profondità limitata, bias ideologico evidente",
      "Matematica minima, lungo periodo trascurato",
      "Struttura a volte dispersiva, americano-centrico"
    ],
    targetAudience: "Corsi introduttivi che mirano a creare interesse per l'economia e comprensione dei dibattiti contemporanei, studenti non specialisti"
  },
  {
    title: "Essenziale di Economia",
    authors: ["Gregory Mankiw"],
    school: "Nuova Sintesi Neoclassica",
    characteristics: [
      "Fenomeno editoriale globale. Struttura basata sui 'Dieci Principi dell'Economia'",
      "Rigore neoclassico in microeconomia, pragmatismo neo-keynesiano in macroeconomia",
      "Organizzazione logica con framework concettuale coerente"
    ],
    strengths: [
      "Organizzazione impeccabile, i Dieci Principi come framework",
      "Chiarezza espositiva, equilibrio e fairness",
      "Versatilità didattica, preparazione solida per corsi avanzati",
      "Aggiornamenti costanti"
    ],
    weaknesses: [
      "Eccessiva ortodossia (poco spazio per alternative)",
      "Neutralità che nasconde valori impliciti",
      "Semplicità che può ingannare, americano-centrico",
      "Matematica 'né carne né pesce', lungo periodo forse troppo lungo"
    ],
    targetAudience: "Corsi standard di economia, studenti di base che intendono proseguire in studi economici"
  },
  {
    title: "Elementi di Economia",
    authors: ["John Sloman", "Dean Garratt"],
    school: "Pragmatismo eclettico pedagogico",
    characteristics: [
      "Approccio pragmatico e orientato all'applicazione",
      "Design visivo ricco (box 'Caso Studio', 'In Pratica', 'Pausa per Riflettere', grafici a colori)",
      "Utilizza elementi di diverse tradizioni utili per spiegare fenomeni reali"
    ],
    strengths: [
      "Rilevanza immediata, accessibilità estrema",
      "Design pedagogico eccellente, approccio olistico",
      "Orientamento pratico, flessibilità didattica",
      "Equilibrio tra semplicità e completezza"
    ],
    weaknesses: [
      "Profondità teorica limitata, mancanza di rigore analitico",
      "Crescita e lungo periodo trascurati",
      "Rischio di eccessiva semplificazione, UK-centrico",
      "Framework teorico debole"
    ],
    targetAudience: "Studenti di business, management, o altre discipline che necessitano di economia applicata; corsi introduttivi per non economisti"
  },
  {
    title: "Capire l'Economia",
    authors: ["The CORE Team", "Wendy Carlin", "Samuel Bowles"],
    school: "Pluralismo integrato",
    characteristics: [
      "Progetto ambizioso di ripensare l'insegnamento dell'economia post-2008",
      "Struttura rivoluzionaria (22 Unità su 'grandi domande')",
      "Integrazione multimediale (video, simulazioni, dati reali), open access"
    ],
    strengths: [
      "Rilevanza senza precedenti (clima, disuguaglianza, crisi)",
      "Innovazione pedagogica radicale (multimedia, apprendimento attivo)",
      "Rigore con accessibilità, pluralismo produttivo",
      "Gratuità e accessibilità, scientificità, globalità"
    ],
    weaknesses: [
      "Complessità organizzativa (struttura non-lineare, richiede guida docente)",
      "Richiede cambiamento di mentalità, tecnologia-dipendente",
      "Troppo ambizioso/lungo, manca struttura tradizionale",
      "Ancora in evoluzione"
    ],
    targetAudience: "Corsi innovativi, studenti motivati, programmi digitali o interdisciplinari che vogliono preparare futuri economisti e cittadini per le sfide del XXI secolo"
  },
  {
    title: "Principi di Economia",
    authors: ["Daron Acemoglu", "David Laibson", "John List"],
    school: "Mainstream empirico del XXI Secolo",
    characteristics: [
      "Nuovo paradigma, combina rigore teorico, attenzione alle istituzioni, insights comportamentali",
      "Approccio sperimentale. Più rigoroso e più realista",
      "Include 'Evidence-Based Economics', esperimenti replicabili, video degli autori"
    ],
    strengths: [
      "All'avanguardia della ricerca, rigore empirico senza precedenti",
      "Behavioral economics integrata naturalmente, istituzioni al centro",
      "Pedagogia basata su evidenza, preparazione per economia moderna",
      "Rilevanza senza sacrificare rigore"
    ],
    weaknesses: [
      "Complessità elevata (richiede studenti preparati)",
      "Lunghezza considerevole, prerequisiti impliciti (analisi quantitativa)",
      "Relativamente nuovo (meno testato), americano-centrico"
    ],
    targetAudience: "Corsi avanzati, studenti ambiziosi, programmi 'honors', preparazione alla ricerca. Rappresenta lo stato dell'arte per l'insegnamento universitario di economia"
  },
  {
    title: "Economia",
    authors: ["Paul Samuelson", "William Nordhaus"],
    school: "Sintesi Neoclassica-Keynesiana",
    characteristics: [
      "Monumento nella storia del pensiero economico, ha definito come l'economia viene insegnata",
      "Completezza enciclopedica, approccio sistematico",
      "Aperture storiche, biografie, box 'Economia in Azione'"
    ],
    strengths: [
      "Completezza senza pari, autorevolezza assoluta (autori Nobel)",
      "Equilibrio magistrale, pedagogia raffinata (70+ anni di refinement)",
      "Evoluzione continua, visione storica, integrazione unica"
    ],
    weaknesses: [
      "Lunghezza intimidatoria (800+ pagine), densità del testo",
      "Mainstream bias (poco spazio per alternative)",
      "Americano-centrico (con adattamenti italiani)",
      "Innovazione pedagogica limitata (tradizionalista)"
    ],
    targetAudience: "Corsi annuali, studenti seri e motivati che vogliono una preparazione completa e profonda, considerato il 'gold standard'"
  },
  {
    title: "Principi di Economia",
    authors: ["Robert Frank", "Ben Bernanke"],
    school: "Base neoclassica con apertura comportamentale",
    characteristics: [
      "Molto narrativo, esempi dalla vita quotidiana",
      "Attenzione alle scelte individuali tramite 'puzzle' economici ('Economic Naturalist')",
      "Integrazione elementi di economia comportamentale e psicologia"
    ],
    strengths: [
      "Chiarezza didattica e stile coinvolgente",
      "Forte collegamento teoria/decisioni quotidiane",
      "Approccio pragmatico, attenzione a limiti razionalità",
      "Inserimento temi di attualità (crisi finanziarie)"
    ],
    weaknesses: [
      "Profondità teorica limitata",
      "Poco adatto per preparazione matematica o visione sistematica modelli equilibrio generale",
      "Può risultare 'leggero', meno adatto a studi economici avanzati"
    ],
    targetAudience: "Corsi introduttivi e per studenti senza basi pregresse, corsi trasversali, chi cerca un testo moderno, agile e vicino alla realtà"
  },
  {
    title: "Economia",
    authors: ["David Begg", "Gianluigi Vernasca", "Stanley Fischer", "Rüdiger Dornbusch"],
    school: "Mainstream contemporaneo",
    characteristics: [
      "Struttura didattica articolata, schede di approfondimento",
      "Focus, Confronto, Caso italiano, Policy in pratica, Dati e fatti",
      "Esercizi applicativi, riepilogo e glossario. Integrazione teoria e realtà"
    ],
    strengths: [
      "Equilibrio didattico, focus europeo/italiano",
      "Struttura modulare, esempi concreti e aggiornati",
      "Integrazione teoria-policy-dati, accessibilità graduata"
    ],
    weaknesses: [
      "Innovazione teorica limitata, mainstream bias",
      "Può risultare 'pesante' per corsi introduttivi",
      "Meno coinvolgente di alternative più moderne"
    ],
    targetAudience: "Corsi standard europei/italiani, studenti che necessitano di equilibrio tra rigore e applicazione pratica"
  },
  {
    title: "Microeconomia",
    authors: ["Robert Pindyck", "Daniel Rubinfeld"],
    school: "Neoclassica avanzata",
    characteristics: [
      "Trattamento rigoroso e completo della microeconomia",
      "Ampio uso di matematica e modelli formali",
      "Casi di studio ed esempi empirici"
    ],
    strengths: [
      "Rigore analitico elevato",
      "Preparazione solida per studi avanzati",
      "Esempi empirici aggiornati"
    ],
    weaknesses: [
      "Richiede solide basi matematiche",
      "Può risultare ostico per principianti",
      "Focus limitato su approcci alternativi"
    ],
    targetAudience: "Corsi avanzati di microeconomia, studenti di economia con basi matematiche solide"
  },
  {
    title: "Macroeconomia",
    authors: ["Olivier Blanchard", "Alessia Amighini", "Francesco Giavazzi"],
    school: "Nuova Sintesi Neoclassica",
    characteristics: [
      "Approccio equilibrato tra rigore teorico e applicazioni pratiche",
      "Integrazione di elementi keynesiani e neoclassici",
      "Focus su politiche economiche europee"
    ],
    strengths: [
      "Equilibrio teoria-pratica",
      "Riferimenti al contesto europeo",
      "Chiarezza espositiva"
    ],
    weaknesses: [
      "Complessità per studenti base",
      "Limitata innovazione teorica",
      "Mainstream bias"
    ],
    targetAudience: "Corsi di macroeconomia intermedi e avanzati, studenti con basi economiche"
  },
  {
    title: "Economia Pubblica",
    authors: ["Harvey Rosen", "Ted Gayer"],
    school: "Neoclassica applicata",
    characteristics: [
      "Analisi sistematica del ruolo del settore pubblico",
      "Teoria della tassazione e della spesa pubblica",
      "Analisi dei fallimenti di mercato"
    ],
    strengths: [
      "Trattamento completo dell'economia pubblica",
      "Esempi concreti di politiche",
      "Rigore analitico"
    ],
    weaknesses: [
      "Approccio prevalentemente neoclassico",
      "Complessità tecnica elevata",
      "Limitata considerazione di approcci alternativi"
    ],
    targetAudience: "Corsi specialistici di economia pubblica, studenti avanzati"
  },
  {
    title: "Economia Monetaria",
    authors: ["Frederic Mishkin"],
    school: "Mainstream monetario",
    characteristics: [
      "Analisi completa del sistema monetario e finanziario",
      "Teoria e pratica della politica monetaria",
      "Focus su banche centrali e mercati finanziari"
    ],
    strengths: [
      "Copertura completa degli aspetti monetari",
      "Esempi di crisi finanziarie",
      "Aggiornamenti costanti"
    ],
    weaknesses: [
      "Approccio mainstream dominante",
      "Complessità tecnica",
      "Limitata discussione di teorie alternative"
    ],
    targetAudience: "Corsi di economia monetaria e finanziaria, studenti specializzandi"
  },
  {
    title: "Economia Internazionale",
    authors: ["Paul Krugman", "Maurice Obstfeld", "Marc Melitz"],
    school: "Mainstream con elementi nuovi",
    characteristics: [
      "Teoria del commercio internazionale e finanza internazionale",
      "Nuova teoria del commercio internazionale",
      "Analisi delle politiche commerciali"
    ],
    strengths: [
      "Autorevolezza degli autori",
      "Integrazione teoria-pratica",
      "Esempi contemporanei"
    ],
    weaknesses: [
      "Complessità per principianti",
      "Bias verso paesi sviluppati",
      "Limitata considerazione di critiche al libero scambio"
    ],
    targetAudience: "Corsi di economia internazionale, studenti con basi economiche solide"
  }
];

export const economicModelsData = [
  {
    name: "Teoria del Consumatore",
    description: "Spiega come le persone allocano il reddito per massimizzare la soddisfazione. Concetti Fondamentali: Vincolo di Bilancio, Preferenze e Utilità (con utilità marginale decrescente), Curve di Indifferenza, Scelta Ottimale.",
    type: "microeconomico",
    keyConcepts: [
      "Vincolo di Bilancio",
      "Preferenze e Utilità",
      "Utilità marginale decrescente", 
      "Curve di Indifferenza",
      "Scelta Ottimale",
      "Elasticità della Domanda",
      "Effetto Reddito ed Effetto Sostituzione",
      "Beni Complementari e Sostituti"
    ],
    applications: [
      "Teoria del Rischio e dell'Incertezza (utilità attesa di von Neumann-Morgenstern)",
      "Economia Comportamentale (Paradosso di Allais, Effetto certezza, Avversione alle perdite)",
      "Teoria del Prospetto (Kahneman e Tversky)"
    ],
    schoolId: "neoclassica"
  },
  {
    name: "Teoria del Produttore", 
    description: "Analizza come le imprese trasformano input in output e decidono quanto produrre. Include diversi tipi di strutture di mercato.",
    type: "microeconomico",
    keyConcepts: [
      "Funzione di Produzione (es. Cobb-Douglas)",
      "Rendimenti di Scala (crescenti, costanti, decrescenti)",
      "Legge dei Rendimenti Marginali Decrescenti",
      "Costi di Produzione (fissi, variabili, marginale, medio)",
      "Massimizzazione del Profitto (Ricavo Marginale = Costo Marginale)"
    ],
    applications: [
      "Concorrenza Perfetta: mercati agricoli - massima efficienza, profitti economici zero nel lungo periodo",
      "Monopolio: servizi di rete locale - prezzi più alti, quantità minore, perdita di benessere sociale",
      "Oligopolio: compagnie telefoniche - competizione aggressiva, collusione, leadership di prezzo",
      "Concorrenza Monopolistica: ristoranti - varietà di prodotti, possibile inefficienza"
    ],
    schoolId: "neoclassica"
  },
  {
    name: "Teoria dei Giochi",
    description: "Analizza situazioni in cui il risultato dipende dalle azioni reciproche dei partecipanti. Il Dilemma del Prigioniero è il gioco più famoso.",
    type: "microeconomico", 
    keyConcepts: [
      "Dilemma del Prigioniero",
      "Strategie dominanti",
      "Equilibrio di Nash",
      "Giochi cooperativi e non cooperativi",
      "Informazione perfetta e imperfetta"
    ],
    applications: [
      "Guerre di prezzo",
      "Pubblicità",
      "Problemi ambientali", 
      "Corse agli armamenti",
      "Gioco del Pollo",
      "Battaglia dei Sessi",
      "Giochi Ripetuti (rilevanza della reputazione)"
    ],
    schoolId: "neoclassica"
  },
  {
    name: "Economia dell'Informazione",
    description: "Studia come informazione imperfetta e asimmetrica portano a fallimenti di mercato.",
    type: "microeconomico",
    keyConcepts: [
      "Asimmetria informativa",
      "Selezione Avversa (Problema dei 'Limoni')",
      "Azzardo Morale", 
      "Segnalazione e Screening",
      "Costi di agenzia"
    ],
    applications: [
      "Auto usate (problema dei limoni) - Soluzioni: garanzie, certificazioni, reputazione",
      "Assicurazioni (azzardo morale) - Soluzioni: franchigie, monitoring, incentivi allineati",
      "Educazione come segnale di abilità",
      "Menu di contratti assicurativi"
    ],
    schoolId: "neoclassica"
  },
  {
    name: "Modello IS-LM",
    description: "L'equilibrio tra mercato dei beni (curva IS, pendenza negativa) e mercato della moneta (curva LM, pendenza positiva). Determina tasso di interesse e produzione di equilibrio.",
    type: "macroeconomico",
    keyConcepts: [
      "Curva IS (Investimento-Risparmio)",
      "Curva LM (Liquidità-Moneta)", 
      "Equilibrio simultaneo",
      "Politica fiscale",
      "Politica monetaria",
      "Moltiplicatore"
    ],
    applications: [
      "Politica Fiscale Espansiva sposta IS a destra (aumenta Y e i)",
      "Politica Monetaria Espansiva sposta LM a destra (riduce i e aumenta Y)",
      "Analisi degli effetti delle politiche macroeconomiche"
    ],
    schoolId: "neoclassica"
  },
  {
    name: "Modello AD-AS",
    description: "Estensione di IS-LM che permette ai prezzi di variare. Distingue tra Domanda Aggregata (AD), Offerta Aggregata di Breve Periodo (SRAS) e Offerta Aggregata di Lungo Periodo (LRAS).",
    type: "macroeconomico",
    keyConcepts: [
      "Domanda Aggregata (AD)",
      "Offerta Aggregata di Breve Periodo (SRAS)",
      "Offerta Aggregata di Lungo Periodo (LRAS)",
      "Livello generale dei prezzi",
      "PIL reale"
    ],
    applications: [
      "Stagflazione: coesistenza di alta inflazione e alta disoccupazione (anni '70)",
      "Shock di offerta e domanda",
      "Politiche di stabilizzazione"
    ],
    schoolId: "neoclassica"
  },
  {
    name: "Modello di Solow",
    description: "Modello di crescita economica esogena che spiega come l'accumulazione di capitale, la crescita della forza lavoro e il progresso tecnologico influenzano il livello del reddito pro capite.",
    type: "macroeconomico",
    keyConcepts: [
      "Funzione di produzione aggregata",
      "Accumulazione di capitale", 
      "Rendimenti decrescenti del capitale",
      "Stato stazionario",
      "Progresso tecnologico esogeno",
      "Convergenza condizionale"
    ],
    applications: [
      "Spiegazione delle differenze di reddito tra paesi",
      "Previsione della crescita economica nel lungo periodo",
      "Politiche per la crescita (risparmio, investimenti in capitale umano)"
    ],
    schoolId: "neoclassica"
  },
  {
    name: "Modelli di Crescita Endogena",
    description: "Cercano di spiegare il progresso tecnologico invece di assumerlo come dato. Le idee sono il vero motore della crescita.",
    type: "macroeconomico",
    keyConcepts: [
      "Progresso tecnologico endogeno",
      "Rendimenti crescenti",
      "Spillover di conoscenza", 
      "Modello AK",
      "Learning by Doing",
      "Ricerca e Sviluppo"
    ],
    applications: [
      "Modello di Paul Romer: importanza degli incentivi all'innovazione",
      "Spillover geografici: la conoscenza si diffonde tra imprese vicine",
      "Politiche per l'innovazione e la crescita"
    ],
    schoolId: "neoclassica"
  },
  {
    name: "Curva di Phillips",
    description: "Relazione storica osservata tra inflazione e disoccupazione, suggerendo un trade-off. La critica di Friedman e Phelps ha evidenziato che questo trade-off esiste solo nel breve periodo.",
    type: "macroeconomico", 
    keyConcepts: [
      "Trade-off inflazione-disoccupazione",
      "NAIRU (Non-Accelerating Inflation Rate of Unemployment)",
      "Aspettative di inflazione",
      "Curva di Phillips aumentata dalle aspettative",
      "Tasso naturale di disoccupazione"
    ],
    applications: [
      "Politiche anti-inflazionistiche",
      "Analisi della stagflazione degli anni '70",
      "Credibilità delle banche centrali"
    ],
    schoolId: "neoclassica"
  },
  {
    name: "Teoria Quantitativa della Moneta",
    description: "Spiega la relazione tra quantità di moneta e livello dei prezzi. 'L'inflazione è sempre e ovunque un fenomeno monetario' (Milton Friedman).",
    type: "macroeconomico",
    keyConcepts: [
      "Equazione quantitativa (MV = PY)",
      "Velocità di circolazione della moneta",
      "Neutralità monetaria nel lungo periodo",
      "Inflazione monetaria",
      "Dicotomia classica"
    ],
    applications: [
      "Controllo dell'inflazione tramite politica monetaria",
      "Analisi dell'iperinflazione",
      "Politiche monetarie delle banche centrali"
    ],
    schoolId: "monetarista"
  }
];

export const conceptsData = [
  {
    name: "Razionalità degli Agenti Economici",
    definition: "Assunzione neoclassica che individui e imprese agiscano sempre per massimizzare il proprio benessere o profitto, date le informazioni disponibili e i vincoli.",
    category: "Principi Fondamentali",
    relatedTerms: ["Utilità", "Massimizzazione del profitto", "Ottimizzazione", "Scelta razionale"]
  },
  {
    name: "Equilibrio di Mercato", 
    definition: "Punto in cui la quantità domandata di un bene eguaglia la quantità offerta, e il prezzo si stabilizza senza tendenze a salire o scendere.",
    category: "Principi Fondamentali",
    relatedTerms: ["Domanda", "Offerta", "Prezzo", "Quantità"]
  },
  {
    name: "Efficienza dei Mercati",
    definition: "La convinzione che i mercati liberi, operando senza interferenze significative, tendano a produrre un'allocazione efficiente delle risorse, massimizzando il benessere sociale.",
    category: "Principi Fondamentali", 
    relatedTerms: ["Allocazione delle risorse", "Benessere sociale", "Mercato libero", "Concorrenza"]
  },
  {
    name: "Incertezza Radicale",
    definition: "La convinzione che il futuro sia fondamentalmente imprevedibile e non può essere ridotto a probabilità calcolabili, rendendo impossibile l'ottimizzazione perfetta.",
    category: "Post-Keynesiana",
    relatedTerms: ["Keynes", "Probabilità", "Prevedibilità", "Ottimizzazione"]
  },
  {
    name: "Moneta Endogena",
    definition: "Le banche creano moneta attraverso i prestiti; l'offerta di moneta risponde alla domanda di credito e non è controllata centralmente.",
    category: "Post-Keynesiana",
    relatedTerms: ["Banche", "Credito", "Offerta di moneta", "Sistema bancario"]
  },
  {
    name: "Conoscenza Dispersa",
    definition: "Nessun pianificatore centrale può avere tutte le informazioni; solo il mercato coordina questa conoscenza tramite il sistema dei prezzi.",
    category: "Scuola Austriaca",
    relatedTerms: ["Hayek", "Sistema dei prezzi", "Coordinazione", "Informazione"]
  },
  {
    name: "Ordine Spontaneo",
    definition: "L'idea che complesse istituzioni sociali e modelli di interazione emergano senza un progetto centrale o una pianificazione deliberata, ma come risultato non intenzionale di molteplici azioni individuali.",
    category: "Scuola Austriaca",
    relatedTerms: ["Istituzioni", "Emergenza", "Pianificazione", "Azioni individuali"]
  },
  {
    name: "Razionalità Limitata",
    definition: "Le persone usano 'scorciatoie mentali' (euristiche) che possono portare a errori sistematici.",
    category: "Economia Comportamentale",
    relatedTerms: ["Euristiche", "Bias cognitivi", "Errori sistematici", "Scorciatoie mentali"]
  },
  {
    name: "Avversione alle Perdite",
    definition: "Un bias cognitivo in cui la sofferenza psicologica derivante da una perdita è percepita come maggiore rispetto al piacere derivante da un guadagno di pari entità.",
    category: "Economia Comportamentale",
    relatedTerms: ["Bias cognitivi", "Perdite", "Guadagni", "Psicologia"]
  },
  {
    name: "Architettura delle Scelte (Nudge)",
    definition: "La pratica di strutturare il modo in cui le opzioni sono presentate per influenzare le decisioni delle persone in modo prevedibile, senza limitare le loro opzioni.",
    category: "Economia Comportamentale",
    relatedTerms: ["Scelte", "Influenza", "Opzioni", "Comportamento"]
  },
  {
    name: "Proprietà Emergenti",
    definition: "Fenomeni a livello di sistema che non possono essere previsti o compresi semplicemente sommando i comportamenti individuali delle sue parti, tipici dei sistemi complessi.",
    category: "Economia della Complessità",
    relatedTerms: ["Sistemi complessi", "Emergenza", "Comportamenti individuali", "Sistema"]
  },
  {
    name: "Path Dependence",
    definition: "Concetto secondo cui il percorso storico e le decisioni passate influenzano e limitano le possibili evoluzioni future di un sistema, inclusa l'economia.",
    category: "Economia della Complessità",
    relatedTerms: ["Storia", "Decisioni passate", "Evoluzione", "Sistema"]
  },
  {
    name: "Costo Opportunità",
    definition: "Il valore della migliore alternativa a cui si rinuncia quando si prende una decisione.",
    category: "Concetti Base",
    relatedTerms: ["Scelta", "Alternative", "Valore", "Decisione"]
  },
  {
    name: "Elasticità della Domanda", 
    definition: "Misura la reattività della quantità domandata di un bene o servizio alle variazioni del suo prezzo, del reddito dei consumatori o del prezzo di altri beni.",
    category: "Microeconomia",
    relatedTerms: ["Domanda", "Prezzo", "Quantità", "Reattività"]
  },
  {
    name: "Asimmetria Informativa",
    definition: "Situazione in cui una parte di una transazione ha più o migliori informazioni rispetto all'altra. Può portare a problemi come la selezione avversa e l'azzardo morale.",
    category: "Economia dell'Informazione",
    relatedTerms: ["Informazione", "Transazione", "Selezione avversa", "Azzardo morale"]
  },
  {
    name: "Selezione Avversa",
    definition: "Un problema derivante dall'asimmetria informativa, in cui una parte informata (es. venditore) induce la parte non informata (es. compratore) a fare una scelta sbagliata a causa della mancanza di informazioni.",
    category: "Economia dell'Informazione",
    relatedTerms: ["Asimmetria informativa", "Informazione", "Mercato", "Qualità"]
  },
  {
    name: "Azzardo Morale",
    definition: "Rischio che una parte, dopo aver stipulato un contratto o un accordo, modifichi il proprio comportamento in modo svantaggioso per l'altra parte, poiché è protetta dalle conseguenze negative delle proprie azioni.",
    category: "Economia dell'Informazione", 
    relatedTerms: ["Contratto", "Comportamento", "Rischio", "Incentivi"]
  },
  {
    name: "Moltiplicatore Keynesiano",
    definition: "Concetto secondo cui una variazione iniziale nella spesa autonoma (es. spesa pubblica, investimenti) può generare una variazione più che proporzionale nel reddito nazionale o nel PIL.",
    category: "Macroeconomia",
    relatedTerms: ["Spesa pubblica", "Investimenti", "PIL", "Reddito nazionale"]
  },
  {
    name: "Paradosso del Risparmio",
    definition: "L'idea che, in una recessione, un aumento generale del desiderio di risparmiare da parte degli individui possa portare a una diminuzione della domanda aggregata e, paradossalmente, a una riduzione del reddito complessivo e quindi anche del risparmio.",
    category: "Macroeconomia",
    relatedTerms: ["Risparmio", "Recessione", "Domanda aggregata", "Reddito"]
  },
  {
    name: "NAIRU",
    definition: "Il tasso di disoccupazione al quale l'inflazione tende a rimanere stabile (o non accelerare). È considerato il 'tasso naturale' di disoccupazione.",
    category: "Macroeconomia",
    relatedTerms: ["Disoccupazione", "Inflazione", "Tasso naturale", "Stabilità dei prezzi"]
  },
  {
    name: "Stagflazione",
    definition: "La coesistenza di alta inflazione e alta disoccupazione, un fenomeno che ha sfidato il consenso keynesiano negli anni '70.",
    category: "Macroeconomia",
    relatedTerms: ["Inflazione", "Disoccupazione", "Anni '70", "Crisi economica"]
  },
  {
    name: "Istituzioni Inclusive",
    definition: "Strutture politiche ed economiche che garantiscono ampia partecipazione, tutelano i diritti di proprietà e la concorrenza, promuovendo l'innovazione e la crescita diffusa.",
    category: "Crescita e Sviluppo",
    relatedTerms: ["Diritti di proprietà", "Concorrenza", "Innovazione", "Crescita"]
  },
  {
    name: "Istituzioni Estrattive", 
    definition: "Strutture politiche ed economiche che concentrano il potere e le risorse nelle mani di una ristretta élite, a scapito della maggioranza della popolazione, ostacolando la crescita diffusa.",
    category: "Crescita e Sviluppo",
    relatedTerms: ["Potere", "Risorse", "Élite", "Crescita"]
  },
  {
    name: "Capitale Umano",
    definition: "L'insieme delle conoscenze, delle abilità, delle competenze e degli attributi che contribuiscono a produrre valore economico, acquisiti attraverso l'educazione, la formazione e l'esperienza.",
    category: "Crescita e Sviluppo",
    relatedTerms: ["Educazione", "Competenze", "Formazione", "Produttività"]
  },
  {
    name: "Convergenza Condizionale",
    definition: "Nel modello di Solow, l'idea che i paesi poveri dovrebbero crescere più velocemente dei ricchi e convergere verso lo stesso stato stazionario, a condizione che abbiano gli stessi tassi di risparmio, crescita demografica e tecnologia.",
    category: "Crescita e Sviluppo",
    relatedTerms: ["Modello di Solow", "Crescita", "Paesi poveri", "Stato stazionario"]
  },
  {
    name: "Spillover di Conoscenza",
    definition: "La diffusione non intenzionale di idee e conoscenze da un'impresa o individuo ad altri, che contribuisce alla crescita economica generale.",
    category: "Crescita e Sviluppo",
    relatedTerms: ["Conoscenza", "Innovazione", "Crescita", "Diffusione"]
  },
  {
    name: "Rendimenti Decrescenti del Capitale",
    definition: "Principio secondo cui, mantenendo fissi gli altri fattori di produzione, l'aggiunta di ulteriori unità di capitale porterà a incrementi di output sempre minori.",
    category: "Teoria della Produzione",
    relatedTerms: ["Capitale", "Output", "Produzione", "Fattori di produzione"]
  },
  {
    name: "Concorrenza Perfetta",
    definition: "Struttura di mercato ideale in cui esistono molti venditori e compratori, i prodotti sono omogenei, c'è perfetta informazione e libertà di entrata/uscita, e nessuno può influenzare il prezzo.",
    category: "Strutture di Mercato",
    relatedTerms: ["Mercato", "Venditori", "Compratori", "Prezzo"]
  },
  {
    name: "Monopolio",
    definition: "Struttura di mercato in cui esiste un unico venditore di un bene o servizio, senza sostituti stretti e con significative barriere all'entrata per nuove imprese.",
    category: "Strutture di Mercato",
    relatedTerms: ["Venditore unico", "Barriere all'entrata", "Potere di mercato", "Prezzi"]
  },
  {
    name: "Oligopolio", 
    definition: "Struttura di mercato caratterizzata da un piccolo numero di grandi imprese che dominano il mercato, portando a un'interdipendenza strategica tra di esse.",
    category: "Strutture di Mercato",
    relatedTerms: ["Poche imprese", "Interdipendenza", "Strategia", "Mercato"]
  },
  {
    name: "Curva di Laffer",
    definition: "Concetto della Supply Side Economics secondo cui, oltre una certa soglia, un aumento delle aliquote fiscali può portare a una diminuzione del gettito fiscale complessivo, disincentivando la produzione.",
    category: "Economia dell'Offerta",
    relatedTerms: ["Tasse", "Gettito fiscale", "Produzione", "Incentivi"]
  },
  {
    name: "Teoria Monetaria Moderna (MMT)",
    definition: "Una corrente post-keynesiana che sostiene che gli stati che emettono la propria moneta sovrana non possono fallire nella propria valuta e che il vero vincolo alla spesa pubblica è l'inflazione, non il finanziamento.",
    category: "Politica Monetaria",
    relatedTerms: ["Moneta sovrana", "Spesa pubblica", "Inflazione", "Deficit"]
  },
  {
    name: "Trappola della Liquidità",
    definition: "Situazione in cui la politica monetaria perde efficacia perché i tassi di interesse nominali sono vicini allo zero.",
    category: "Politica Monetaria",
    relatedTerms: ["Tassi di interesse", "Politica monetaria", "Zero lower bound", "Efficacia"]
  },
  {
    name: "Dilemma del Prigioniero",
    definition: "Un gioco nella teoria dei giochi che illustra come la razionalità individuale possa portare a risultati collettivamente subottimali, anche quando la cooperazione sarebbe mutualmente vantaggiosa.",
    category: "Teoria dei Giochi",
    relatedTerms: ["Cooperazione", "Razionalità", "Equilibrio", "Strategia"]
  }
];

export const comparisonsData = [
  {
    title: "Saltwater vs Freshwater Economists",
    description: "Il Grande Dibattito che ha diviso l'economia macroeconomica americana, formalizzato nel 1976 da Robert Hall",
    items: [
      {
        name: "Saltwater Economists",
        characteristics: [
          "Università delle coste (MIT, Harvard, Yale, Princeton, Berkeley, Stanford)",
          "Tendenzialmente più interventiste e keynesiane",
          "I mercati possono fallire e rimanere in disequilibrio a lungo",
          "La disoccupazione involontaria esiste ed è seria",
          "Le recessioni sono sprechi evitabili",
          "I mercati finanziari sono inclini a bolle e panici"
        ]
      },
      {
        name: "Freshwater Economists", 
        characteristics: [
          "Università vicine ai Grandi Laghi (Chicago, Minnesota, Rochester, Carnegie Mellon)",
          "Più orientate al libero mercato e scettiche verso l'intervento governativo",
          "I mercati sono generalmente efficienti e autoregolantesi",
          "Le fluttuazioni sono risposte naturali a shock reali",
          "La disoccupazione è in gran parte volontaria"
        ]
      }
    ],
    aspects: [
      "Visione del Mercato",
      "Ruolo del Governo", 
      "Metodologia",
      "Politiche Economiche"
    ]
  },
  {
    title: "Approcci ai Manuali di Economia",
    description: "Confronto tra i diversi approcci pedagogici dei principali manuali universitari italiani",
    items: [
      {
        name: "Krugman-Wells",
        characteristics: [
          "Approccio narrativo e accessibile",
          "Post-keynesiano moderno",
          "Enfasi su storie concrete",
          "Scetticismo verso efficienza automatica dei mercati"
        ]
      },
      {
        name: "Mankiw",
        characteristics: [
          "Nuova Sintesi Neoclassica",
          "Dieci Principi dell'Economia",
          "Rigore neoclassico + pragmatismo keynesiano",
          "Organizzazione impeccabile"
        ]
      },
      {
        name: "CORE Team",
        characteristics: [
          "Pluralismo integrato",
          "22 Unità su grandi domande",
          "Innovazione pedagogica radicale",
          "Open access e multimediale"
        ]
      }
    ],
    aspects: [
      "Scuola di Pensiero",
      "Metodologia Didattica",
      "Pubblico Target",
      "Punti di Forza"
    ]
  }
];
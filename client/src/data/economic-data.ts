import { InsertEconomicSchool, InsertEconomicModel, InsertManual, InsertConcept, InsertComparison } from "@shared/schema";

export const economicSchoolsData: InsertEconomicSchool[] = [
  {
    name: "Scuola Neoclassica",
    description: "L'approccio prevalente nell'insegnamento e nella ricerca economica contemporanea. Si basa sulla razionalità degli agenti economici, l'equilibrio di mercato e l'efficienza dei mercati.",
    keyPrinciples: [
      "Razionalità degli agenti economici",
      "Equilibrio di mercato",
      "Efficienza dei mercati",
      "Uso della matematica per formalizzare teorie"
    ],
    economists: [
      "Olivier Blanchard",
      "Gregory Mankiw",
      "Jordi Galí",
      "Robert Lucas Jr.",
      "Edward Prescott",
      "Robert Barro",
      "Milton Friedman"
    ],
    examples: "Hanno sostenuto politiche di stimolo fiscale e monetario aggressive durante la crisi finanziaria del 2008. L'inflazione degli anni '70 è attribuita a politiche monetarie troppo espansive.",
    category: "neoclassical"
  },
  {
    name: "Scuola Post-Keynesiana",
    description: "Critica radicalmente l'approccio neoclassico, focalizzandosi sul capitalismo moderno, l'incertezza radicale e il ruolo centrale della domanda.",
    keyPrinciples: [
      "Incertezza radicale del futuro",
      "La domanda guida l'economia",
      "La moneta è endogena",
      "I prezzi sono amministrati",
      "Il tempo storico conta"
    ],
    economists: [
      "Stephanie Kelton",
      "L. Randall Wray",
      "Pavlina Tcherneva"
    ],
    examples: "La massiccia spesa pubblica durante la pandemia COVID-19 è vista come conferma della flessibilità fiscale dei governi sovrani.",
    category: "post-keynesian"
  },
  {
    name: "Scuola Austriaca",
    description: "Visione radicale che enfatizza il ruolo della conoscenza dispersa, dell'imprenditorialità e del processo di mercato come processo di scoperta continua.",
    keyPrinciples: [
      "La conoscenza è dispersa e tacita",
      "Il mercato come processo di scoperta",
      "Importanza dell'imprenditorialità",
      "Critica alla matematizzazione",
      "Ordine spontaneo"
    ],
    economists: [
      "Friedrich Hayek",
      "Ludwig von Mises",
      "Israel Kirzner"
    ],
    examples: "Il fallimento delle economie pianificate sovietiche è prova dell'impossibilità di sostituire il mercato nella coordinazione economica.",
    category: "austrian"
  },
  {
    name: "Economia Comportamentale",
    description: "Sfida il modello neoclassico di razionalità perfetta, incorporando insights dalla psicologia per spiegare le decisioni economiche reali.",
    keyPrinciples: [
      "Razionalità limitata",
      "Bias cognitivi sistematici",
      "Il contesto conta (framing)",
      "Architettura delle scelte (nudge)"
    ],
    economists: [
      "Daniel Kahneman",
      "Richard Thaler",
      "Amos Tversky"
    ],
    examples: "L'iscrizione automatica ai piani pensionistici aumenta drasticamente la partecipazione, dimostrando l'importanza dell'architettura delle scelte.",
    category: "behavioral"
  },
  {
    name: "Economia della Complessità",
    description: "Vede l'economia come un ecosistema complesso, non una macchina in equilibrio, con proprietà emergenti e sistemi adattivi.",
    keyPrinciples: [
      "Proprietà emergenti",
      "Non-linearità e feedback",
      "Adattamento e apprendimento",
      "Reti e connessioni",
      "Path dependence"
    ],
    economists: [
      "W. Brian Arthur",
      "Doyne Farmer",
      "Giovanni Dosi"
    ],
    examples: "La crisi finanziaria del 2008 è vista come fenomeno emergente da interconnessioni sistemiche.",
    category: "complexity"
  }
];

export const economicModelsData: InsertEconomicModel[] = [
  {
    name: "Teoria del Consumatore",
    description: "Spiega come le persone allocano il reddito per massimizzare la soddisfazione, utilizzando vincoli di bilancio, preferenze e curve di indifferenza.",
    type: "micro",
    keyConcepts: [
      "Vincolo di Bilancio",
      "Preferenze e Utilità",
      "Curve di Indifferenza", 
      "Scelta Ottimale",
      "Utilità Marginale Decrescente"
    ],
    applications: [
      "Elasticità della Domanda",
      "Effetto Reddito ed Effetto Sostituzione",
      "Beni Complementari e Sostituti",
      "Teoria del Rischio e dell'Incertezza"
    ],
    schoolId: null
  },
  {
    name: "Teoria del Produttore",
    description: "Analizza come le imprese trasformano input in output e decidono quanto produrre per massimizzare il profitto usando funzioni di produzione e analisi dei costi.",
    type: "micro",
    keyConcepts: [
      "Funzione di Produzione (Cobb-Douglas)",
      "Rendimenti di Scala",
      "Legge dei Rendimenti Marginali Decrescenti",
      "Costi di Produzione",
      "Massimizzazione del Profitto (RM=CM)"
    ],
    applications: [
      "Concorrenza Perfetta",
      "Monopolio",
      "Oligopolio", 
      "Concorrenza Monopolistica"
    ],
    schoolId: null
  },
  {
    name: "Modello IS-LM",
    description: "L'equilibrio tra mercato dei beni (curva IS, pendenza negativa) e mercato della moneta (curva LM, pendenza positiva) che determina tasso di interesse e produzione di equilibrio.",
    type: "macro",
    keyConcepts: [
      "Curva IS (mercato dei beni)",
      "Curva LM (mercato della moneta)",
      "Equilibrio macroeconomico",
      "Politica fiscale sposta IS",
      "Politica monetaria sposta LM"
    ],
    applications: [
      "Analisi degli effetti delle politiche",
      "Determinazione del tasso di interesse",
      "Effetti moltiplicatori",
      "Spiazzamento degli investimenti"
    ],
    schoolId: null
  },
  {
    name: "Modello AD-AS",
    description: "Estensione di IS-LM che permette ai prezzi di variare. La domanda aggregata (spesa totale) incontra l'offerta aggregata per determinare prezzi e produzione.",
    type: "macro",
    keyConcepts: [
      "Domanda Aggregata (AD)",
      "Offerta Aggregata di Breve Periodo (SRAS)",
      "Offerta Aggregata di Lungo Periodo (LRAS)",
      "Livello dei prezzi endogeno",
      "Produzione potenziale"
    ],
    applications: [
      "Analisi degli shock di domanda",
      "Analisi degli shock di offerta",
      "Stagflazione",
      "Politiche di stabilizzazione"
    ],
    schoolId: null
  },
  {
    name: "Modello di Solow",
    description: "Teoria della crescita esogena (Premio Nobel 1987). La produzione Y = F(K, L, A) con accumulazione di capitale, rendimenti decrescenti e progresso tecnologico esogeno.",
    type: "macro",
    keyConcepts: [
      "Funzione di produzione Y = F(K, L, A)",
      "Accumulazione di capitale",
      "Rendimenti decrescenti del capitale",
      "Stato stazionario",
      "Progresso tecnologico esogeno"
    ],
    applications: [
      "Convergenza condizionale",
      "Politiche per la crescita",
      "Paradosso della crescita",
      "Differenze di reddito tra paesi"
    ],
    schoolId: null
  },
  {
    name: "Modelli DSGE",
    description: "Dynamic Stochastic General Equilibrium: stato dell'arte nella macroeconomia accademica. Microfondazioni, aspettative razionali, equilibrio generale, dinamico e stocastico.",
    type: "macro",
    keyConcepts: [
      "Microfondazioni",
      "Aspettative Razionali",
      "Equilibrio Generale",
      "Dinamico e Stocastico",
      "Shock casuali"
    ],
    applications: [
      "Analisi delle politiche delle banche centrali",
      "Previsioni macroeconomiche",
      "Modellazione delle crisi",
      "Policy analysis"
    ],
    schoolId: null
  },
  {
    name: "Modello a Tre Equazioni",
    description: "Modello macroeconomico moderno: 1) Curva IS Dinamica (output gap), 2) Curva di Phillips (inflazione), 3) Regola di Politica Monetaria (banca centrale).",
    type: "macro",
    keyConcepts: [
      "Curva IS Dinamica",
      "Curva di Phillips",
      "Regola di Politica Monetaria",
      "Comportamento banca centrale",
      "Gestione aspettative"
    ],
    applications: [
      "Politica monetaria moderna",
      "Targeting dell'inflazione",
      "Stabilizzazione economica",
      "Analisi delle decisioni BCE"
    ],
    schoolId: null
  },
  {
    name: "Teoria dei Giochi",
    description: "Analizza situazioni strategiche dove il risultato dipende dalle azioni reciproche dei partecipanti. Include Dilemma del Prigioniero, Equilibrio di Nash e giochi ripetuti.",
    type: "micro",
    keyConcepts: [
      "Dilemma del Prigioniero",
      "Equilibrio di Nash",
      "Strategie dominanti",
      "Giochi ripetuti",
      "Reputazione"
    ],
    applications: [
      "Guerre di prezzo",
      "Problemi ambientali",
      "Corse agli armamenti",
      "Contratti e negoziazioni"
    ],
    schoolId: null
  },
  {
    name: "Modello di Romer",
    description: "Crescita endogena basata su idee e innovazione (Nobel 2018). Le idee sono non-rivali e parzialmente escludibili, generando rendimenti crescenti e crescita sostenuta.",
    type: "macro",
    keyConcepts: [
      "Idee come motore della crescita",
      "Non-rivalità delle idee",
      "R&D e innovazione",
      "Spillover di conoscenza",
      "Rendimenti crescenti"
    ],
    applications: [
      "Politiche per l'innovazione",
      "Sussidi alla ricerca",
      "Sistema dei brevetti",
      "Investimenti in università"
    ],
    schoolId: null
  },
  {
    name: "Modello AK",
    description: "Modello di crescita endogena semplice: Y = AK dove K include capitale umano. Se K non ha rendimenti decrescenti, il tasso di crescita = sA con effetti permanenti delle politiche.",
    type: "macro",
    keyConcepts: [
      "Funzione di produzione Y = AK",
      "Capitale allargato (include conoscenze)",
      "Rendimenti costanti",
      "Crescita endogena",
      "Politiche con effetti permanenti"
    ],
    applications: [
      "Politiche per la crescita",
      "Investimenti in capitale umano",
      "Nessuna convergenza automatica",
      "Differenze persistenti tra paesi"
    ],
    schoolId: null
  }
];

export const manualsData: InsertManual[] = [
  {
    title: "Essenziale di Economia",
    authors: ["Paul Krugman", "Robin Wells"],
    school: "Post-keynesiana moderna",
    characteristics: "Approccio narrativo e accessibile, strutturato come storie concrete per introdurre concetti. Enfasi su domanda aggregata e scetticismo verso l'efficienza automatica dei mercati.",
    strengths: [
      "Accessibilità estrema",
      "Rilevanza e attualità",
      "Approccio globale", 
      "Stile coinvolgente",
      "Integrazione micro-macro",
      "Onestà intellettuale"
    ],
    weaknesses: [
      "Profondità limitata",
      "Bias ideologico evidente",
      "Matematica minima",
      "Lungo periodo trascurato",
      "Struttura dispersiva",
      "Americano-centrico"
    ],
    targetAudience: "Corsi introduttivi che mirano a creare interesse per l'economia e comprensione dei dibattiti contemporanei, studenti non specialisti"
  },
  {
    title: "Essenziale di Economia",
    authors: ["Gregory Mankiw"],
    school: "Nuova Sintesi Neoclassica",
    characteristics: "Fenomeno editoriale globale basato sui 'Dieci Principi dell'Economia'. Rigore neoclassico in microeconomia, pragmatismo neo-keynesiano in macroeconomia.",
    strengths: [
      "Organizzazione impeccabile",
      "Framework dei Dieci Principi",
      "Chiarezza espositiva",
      "Equilibrio e fairness",
      "Versatilità didattica", 
      "Preparazione per corsi avanzati",
      "Aggiornamenti costanti"
    ],
    weaknesses: [
      "Eccessiva ortodossia",
      "Neutralità che nasconde valori",
      "Semplicità ingannevole",
      "Approccio americano-centrico",
      "Matematica 'né carne né pesce'",
      "Lungo periodo forse troppo lungo"
    ],
    targetAudience: "Corsi standard di economia, studenti di base che intendono proseguire in studi economici"
  },
  {
    title: "Elementi di Economia",
    authors: ["John Sloman", "Dean Garratt"], 
    school: "Pragmatismo eclettico pedagogico",
    characteristics: "Approccio pragmatico e orientato all'applicazione, con design visivo ricco e focus sulla pratica manageriale.",
    strengths: [
      "Rilevanza immediata",
      "Accessibilità estrema", 
      "Design pedagogico eccellente",
      "Approccio olistico",
      "Orientamento pratico",
      "Flessibilità didattica"
    ],
    weaknesses: [
      "Profondità teorica limitata",
      "Mancanza di rigore analitico",
      "Crescita trascurata",
      "Eccessiva semplificazione",
      "UK-centrico",
      "Framework teorico debole"
    ],
    targetAudience: "Studenti di business, management, o altre discipline che necessitano di economia applicata"
  },
  {
    title: "Capire l'Economia",
    authors: ["The CORE Team"],
    school: "Pluralismo integrato",
    characteristics: "Progetto ambizioso post-2008 con struttura rivoluzionaria, integrazione multimediale e approccio open source.",
    strengths: [
      "Rilevanza senza precedenti",
      "Innovazione pedagogica radicale",
      "Rigore con accessibilità",
      "Pluralismo produttivo",
      "Gratuità e accessibilità", 
      "Approccio scientifico",
      "Globalità"
    ],
    weaknesses: [
      "Complessità organizzativa",
      "Richiede cambio mentalità",
      "Tecnologia-dipendente",
      "Troppo ambizioso",
      "Manca struttura tradizionale",
      "Ancora in evoluzione"
    ],
    targetAudience: "Corsi innovativi, studenti motivati, programmi digitali o interdisciplinari"
  },
  {
    title: "Principi di Economia",
    authors: ["Daron Acemoglu", "David Laibson", "John List"],
    school: "Mainstream empirico del XXI Secolo",
    characteristics: "Nuovo paradigma che combina rigore teorico, attenzione alle istituzioni, insights comportamentali e approccio sperimentale. Include Evidence-Based Economics e esperimenti replicabili.",
    strengths: [
      "All'avanguardia della ricerca",
      "Rigore empirico senza precedenti",
      "Behavioral economics integrata",
      "Istituzioni al centro",
      "Pedagogia basata su evidenza",
      "Preparazione per economia moderna",
      "Rilevanza senza sacrificare rigore"
    ],
    weaknesses: [
      "Complessità elevata",
      "Lunghezza considerevole", 
      "Prerequisiti impliciti",
      "Relativamente nuovo",
      "Americano-centrico"
    ],
    targetAudience: "Corsi avanzati, studenti ambiziosi, programmi honors, preparazione alla ricerca"
  },
  {
    title: "Economia",
    authors: ["Paul Samuelson", "William Nordhaus"],
    school: "Sintesi Neoclassica-Keynesiana",
    characteristics: "Monumento nella storia del pensiero economico con completezza enciclopedica. Micro neoclassica, macro keynesiana nel breve e neoclassica nel lungo periodo.",
    strengths: [
      "Completezza senza pari",
      "Autorevolezza assoluta",
      "Equilibrio magistrale",
      "Pedagogia raffinata",
      "Evoluzione continua",
      "Visione storica",
      "Integrazione unica"
    ],
    weaknesses: [
      "Lunghezza intimidatoria",
      "Densità del testo",
      "Mainstream bias",
      "Americano-centrico",
      "Innovazione pedagogica limitata"
    ],
    targetAudience: "Corsi annuali, studenti seri e motivati che vogliono preparazione completa e profonda"
  },
  {
    title: "Principi di Economia",
    authors: ["Robert Frank", "Ben Bernanke"],
    school: "Neoclassica con aperture comportamentali",
    characteristics: "Molto narrativo con esempi dalla vita quotidiana e attenzione alle scelte individuali tramite puzzle economici. Integrazione elementi di economia comportamentale.",
    strengths: [
      "Chiarezza didattica",
      "Stile coinvolgente",
      "Collegamento teoria-pratica",
      "Approccio pragmatico",
      "Attenzione ai limiti di razionalità",
      "Temi di attualità"
    ],
    weaknesses: [
      "Profondità teorica limitata",
      "Poco adatto per preparazione matematica",
      "Crescita endogena non trattata",
      "Matematica superficiale"
    ],
    targetAudience: "Studenti meno matematicamente orientati, corsi introduttivi con enfasi su applicazioni pratiche"
  },
  {
    title: "Economia",
    authors: ["David Begg", "Gianluigi Vernasca", "Stanley Fischer", "Rudiger Dornbusch"],
    school: "Mainstream contemporaneo",
    characteristics: "Struttura didattica articolata con schede di approfondimento. Equilibrio tra rigore teorico e attenzione a dati, istituzioni e politiche reali.",
    strengths: [
      "Chiarezza e gradualità didattica",
      "Forte attenzione al contesto europeo",
      "Apparato didattico ricco",
      "Attualità su crisi e politiche",
      "Focus su istituzioni europee"
    ],
    weaknesses: [
      "Approfondimenti quantitativi limitati",
      "Ricchezza esempi impegnativa",
      "Focus europeo può richiedere integrazioni"
    ],
    targetAudience: "Corsi universitari di base in Europa, studenti di discipline economiche e politiche"
  },
  {
    title: "Essenziale di Economia",
    authors: ["Stanley L. Brue", "Campbell R. McConnell", "Sean M. Flynn"],
    school: "Mainstream neoclassica",
    characteristics: "Versione compatta con approccio didattico tradizionale ma aggiornato. Apparato didattico sistematico e visivo.",
    strengths: [
      "Chiarezza e gradualità didattica",
      "Apparato visivo e applicativo",
      "Neutralità sulle controversie",
      "Materiali didattici ricchi",
      "Attualità"
    ],
    weaknesses: [
      "Temi innovativi introduttivi",
      "Esempi USA prevalenti",
      "Sinteticità limita approfondimenti"
    ],
    targetAudience: "Corsi base, studenti di facoltà non economiche che necessitano panoramica chiara e accessibile"
  },
  {
    title: "Principi di Economia",
    authors: ["Marc Lieberman", "Robert Hall"],
    school: "Mainstream neoclassica",
    characteristics: "Modulare e sequenziale da concetti base a micro e macro. Ricco di esempi, linguaggio chiaro, attenzione a connessioni logiche.",
    strengths: [
      "Struttura didattica lineare",
      "Numerosi esempi e materiali digitali",
      "Chiarezza espositiva",
      "Forte collegamento teoria-realtà"
    ],
    weaknesses: [
      "Focus su esempi USA",
      "Temi innovativi introduttivi",
      "Trattazione quantitativa essenziale"
    ],
    targetAudience: "Corsi introduttivi, studenti senza background quantitativo avanzato, didattica blended"
  },
  {
    title: "Economia",
    authors: ["Gilberto Antonelli", "Nicola De Liso", "Giovanni Guidetti", "Giuseppe Vittucci Marzetti"],
    school: "Mainstream neoclassica con innovazione",
    characteristics: "Modulare e progressiva. Integrazione di innovazione, lavoro, istituzioni. Trattazione approfondita e critica con confronto tra scuole diverse.",
    strengths: [
      "Completo e interdisciplinare",
      "Enfasi su contesti italiani ed europei",
      "Approccio critico e analitico",
      "Attenzione alle istituzioni"
    ],
    weaknesses: [
      "Complessità scoraggiante per principianti",
      "Richiede conoscenze preliminari",
      "Minore attenzione ad accessibilità"
    ],
    targetAudience: "Studenti universitari avanzati interessati ad aspetti teorici e critici con contesto italiano"
  },
  {
    title: "Economia: un approccio semplice ad una realtà complessa",
    authors: ["Paola Parravicini", "Alessandro Graffi"],
    school: "Critico-riflessivo con base neoclassica",
    characteristics: "Approccio narrativo riflessivo e interdisciplinare. Mette in discussione efficacia dei mercati e loro impatto sociale.",
    strengths: [
      "Chiarezza e gradualità didattica",
      "Forte attenzione al contesto italiano",
      "Approccio critico e riflessivo",
      "Equilibrio tra rigore e inclusività"
    ],
    weaknesses: [
      "Temi emergenti introduttivi",
      "Aspetti quantitativi sacrificati",
      "Struttura meno stimolante per avanzati"
    ],
    targetAudience: "Corsi introduttivi universitari, studenti che affrontano la materia per la prima volta"
  },
  {
    title: "Introduzione all'Economia",
    authors: ["Giuseppe Bertola", "Anna Lo Prete"],
    school: "Mainstream con rigore metodologico",
    characteristics: "Approccio accademico combinando teoria e matematica. Base teorica solida con riferimenti a dati europei e italiani.",
    strengths: [
      "Rigore e chiarezza espositiva",
      "Rilevanza empirica italiana/europea",
      "Apparato didattico ricco",
      "Attenzione alle istituzioni"
    ],
    weaknesses: [
      "Struttura lineare poco stimolante",
      "Formalizzazione può scoraggiare",
      "Temi emergenti introduttivi"
    ],
    targetAudience: "Corsi universitari che cercano rigore metodologico e attenzione ai dati reali italiani ed europei"
  }
];

export const conceptsData: InsertConcept[] = [
  {
    name: "Equilibrio di Mercato",
    definition: "Punto in cui la quantità domandata eguaglia la quantità offerta, e il prezzo si stabilizza senza tendenze a salire o scendere.",
    category: "microeconomia",
    relatedTerms: ["Domanda", "Offerta", "Prezzo di equilibrio", "Quantità di equilibrio"],
    examples: "Nel mercato del grano, quando i produttori vogliono vendere esattamente la stessa quantità che i consumatori vogliono acquistare."
  },
  {
    name: "Costo Opportunità",
    definition: "Il valore della migliore alternativa a cui si rinuncia quando si prende una decisione.",
    category: "microeconomia",
    relatedTerms: ["Scelta razionale", "Trade-off", "Scarsità", "Efficienza allocativa"],
    examples: "Se scegli di studiare invece di lavorare, il costo opportunità è il salario che avresti guadagnato lavorando."
  },
  {
    name: "Elasticità della Domanda",
    definition: "Misura la reattività della quantità domandata di un bene o servizio alle variazioni del suo prezzo, del reddito o del prezzo di altri beni.",
    category: "microeconomia",
    relatedTerms: ["Elasticità anelastica", "Elasticità elastica", "Elasticità unitaria", "Elasticità incrociata"],
    examples: "La benzina ha domanda anelastica (aumenti di prezzo riducono poco la quantità), mentre i viaggi di lusso hanno domanda elastica."
  },
  {
    name: "Esternalità",
    definition: "Effetti di un'attività economica che ricadono su terzi non direttamente coinvolti nella transazione, potendo essere positivi o negativi.",
    category: "microeconomia",
    relatedTerms: ["Esternalità positive", "Esternalità negative", "Fallimenti di mercato", "Intervento pubblico"],
    examples: "L'inquinamento industriale è un'esternalità negativa; l'educazione genera esternalità positive per la società."
  },
  {
    name: "Asimmetria Informativa",
    definition: "Situazione in cui una parte di una transazione ha più o migliori informazioni rispetto all'altra, che può portare a problemi come selezione avversa e azzardo morale.",
    category: "microeconomia",
    relatedTerms: ["Selezione avversa", "Azzardo morale", "Segnalazione", "Screening"],
    examples: "Nel mercato delle auto usate, il venditore conosce meglio i difetti dell'auto rispetto al compratore."
  },
  {
    name: "Inflazione",
    definition: "L'aumento generale e sostenuto del livello dei prezzi in un'economia.",
    category: "macroeconomia",
    relatedTerms: ["Deflazione", "Iperinflazione", "Indice dei prezzi", "Potere d'acquisto"],
    examples: "Se un caffè costa 1€ oggi e 1,02€ l'anno prossimo, c'è stata un'inflazione del 2% per quel bene."
  },
  {
    name: "Aspettative Razionali",
    definition: "Teoria secondo cui gli agenti economici utilizzano tutte le informazioni disponibili per formare le loro aspettative sui futuri valori delle variabili economiche.",
    category: "macroeconomia",
    relatedTerms: ["Lucas critique", "Politica economica", "Credibilità", "Aspettative adattive"],
    examples: "Se la banca centrale annuncia un target di inflazione del 2%, gli agenti si aspettano che l'inflazione sia del 2%."
  },
  {
    name: "Convergenza Condizionale",
    definition: "Nel modello di Solow, l'idea che i paesi poveri dovrebbero crescere più velocemente dei ricchi e convergere verso lo stesso stato stazionario, a condizione che abbiano gli stessi parametri strutturali.",
    category: "macroeconomia",
    relatedTerms: ["Modello di Solow", "Crescita economica", "Stato stazionario", "Catch-up"],
    examples: "I paesi dell'Est Europa dopo il 1989 hanno mostrato crescita più rapida convergendo verso i livelli dell'Ovest."
  },
  {
    name: "Incertezza Radicale",
    definition: "La convinzione post-keynesiana che il futuro sia fondamentalmente imprevedibile e non possa essere ridotto a probabilità calcolabili.",
    category: "macroeconomia",
    relatedTerms: ["Post-keynesiani", "Keynes", "Convenzioni", "Preferenza per la liquidità"],
    examples: "Nessuno poteva prevedere con precisione probabilistica la pandemia COVID-19 e i suoi effetti economici."
  },
  {
    name: "Istituzioni Inclusive",
    definition: "Strutture politiche ed economiche che garantiscono ampia partecipazione, tutelano i diritti di proprietà e la concorrenza, promuovendo l'innovazione e la crescita diffusa.",
    category: "macroeconomia",
    relatedTerms: ["Istituzioni estrattive", "Acemoglu", "Crescita economica", "Sviluppo"],
    examples: "Le democrazie consolidate con stati di diritto forti che garantiscono libertà di impresa e concorrenza."
  },
  {
    name: "Elasticità della Domanda",
    definition: "Misura della reattività della quantità domandata alle variazioni del prezzo.",
    category: "microeconomia",
    relatedTerms: ["Elasticità anelastica", "Elasticità elastica", "Elasticità unitaria"],
    examples: "La benzina ha domanda anelastica (aumenti di prezzo riducono poco la quantità domandata), mentre i viaggi di lusso hanno domanda elastica."
  },
  {
    name: "Costi di Opportunità",
    definition: "Il valore della migliore alternativa cui si rinuncia quando si fa una scelta.",
    category: "microeconomia",
    relatedTerms: ["Scelta razionale", "Trade-off", "Efficienza allocativa"],
    examples: "Se scegli di studiare invece di lavorare, il costo opportunità è il salario che avresti guadagnato lavorando."
  },
  {
    name: "Disoccupazione",
    definition: "La condizione di persone che sono senza lavoro, disponibili a lavorare e che cercano attivamente un'occupazione.",
    category: "macroeconomia",
    relatedTerms: ["Tasso di disoccupazione", "Disoccupazione strutturale", "Disoccupazione ciclica", "NAIRU"],
    examples: "Durante la crisi del 2008, la disoccupazione in molti paesi europei è aumentata drammaticamente."
  },
  {
    name: "Politica Monetaria",
    definition: "L'insieme di decisioni e misure adottate dalla banca centrale per influenzare l'offerta di moneta e i tassi di interesse.",
    category: "macroeconomia", 
    relatedTerms: ["Banca centrale", "Tassi di interesse", "Quantitative easing", "Inflazione target"],
    examples: "La BCE utilizza i tassi di interesse per controllare l'inflazione nell'eurozona."
  },
  {
    name: "Esternalità",
    definition: "Effetti delle attività economiche su terze parti che non partecipano direttamente alla transazione.",
    category: "microeconomia",
    relatedTerms: ["Esternalità positive", "Esternalità negative", "Fallimenti di mercato", "Intervento pubblico"],
    examples: "L'inquinamento industriale è un'esternalità negativa; l'educazione genera esternalità positive per la società."
  },
  {
    name: "Teoria dei Giochi",
    definition: "Studio matematico delle interazioni strategiche tra decisori razionali.",
    category: "microeconomia",
    relatedTerms: ["Equilibrio di Nash", "Strategia dominante", "Dilemma del prigioniero", "Informazione asimmetrica"],
    examples: "Due aziende che decidono se competere o colludere sui prezzi si trovano in una situazione di teoria dei giochi."
  },
  {
    name: "Crescita Economica",
    definition: "L'aumento sostenuto nel tempo della produzione di beni e servizi di un'economia.",
    category: "macroeconomia",
    relatedTerms: ["PIL pro capite", "Produttività", "Investimenti", "Capitale umano", "Innovazione tecnologica"],
    examples: "La Cina ha registrato una crescita economica media del 10% annuo per tre decenni."
  },
  {
    name: "Mercati Finanziari",
    definition: "Luoghi fisici o virtuali dove vengono scambiati strumenti finanziari come azioni, obbligazioni e derivati.",
    category: "macroeconomia",
    relatedTerms: ["Borsa valori", "Mercato dei capitali", "Liquidità", "Volatilità", "Spread"],
    examples: "La borsa di Milano (Borsa Italiana) è il principale mercato finanziario italiano per le azioni."
  },
  {
    name: "Concorrenza Perfetta",
    definition: "Struttura di mercato ideale caratterizzata da molti venditori e compratori, prodotti omogenei e libero ingresso.",
    category: "microeconomia",
    relatedTerms: ["Monopolio", "Oligopolio", "Concorrenza monopolistica", "Barriere all'entrata"],
    examples: "Il mercato agricolo dei cereali si avvicina spesso al modello di concorrenza perfetta."
  },
  {
    name: "Bilancia dei Pagamenti",
    definition: "Registro contabile di tutte le transazioni economiche tra residenti di un paese e il resto del mondo.",
    category: "macroeconomia",
    relatedTerms: ["Conto corrente", "Conto capitale", "Riserve valutarie", "Tasso di cambio"],
    examples: "La Germania ha tradizionalmente un surplus nella bilancia dei pagamenti grazie alle sue esportazioni."
  },
  {
    name: "Equilibrio di Nash",
    definition: "In teoria dei giochi, una situazione in cui ogni giocatore sceglie la strategia ottimale data la strategia degli altri giocatori, e nessun giocatore ha incentivo a cambiare unilateralmente strategia.",
    category: "microeconomia",
    relatedTerms: ["Teoria dei giochi", "Strategia dominante", "Dilemma del prigioniero", "John Nash"],
    examples: "Nel dilemma del prigioniero, l'equilibrio di Nash è quando entrambi confessano, anche se cooperare sarebbe meglio per entrambi."
  },
  {
    name: "Paradosso di Allais",
    definition: "Violazione sistematica della teoria dell'utilità attesa che dimostra come le persone non sempre si comportano razionalmente nelle scelte rischiose.",
    category: "microeconomia",
    relatedTerms: ["Economia comportamentale", "Utilità attesa", "Maurice Allais", "Bias cognitivi"],
    examples: "Le persone preferiscono 1 milione certo a una lotteria 89% di 1 milione, 10% di 5 milioni e 1% di 0, violando la teoria razionale."
  },
  {
    name: "Effetto Gregge",
    definition: "Tendenza degli individui a seguire e imitare le azioni della maggioranza, anche quando le proprie informazioni private suggeriscono il contrario.",
    category: "comportamentale",
    relatedTerms: ["Economia comportamentale", "Bolle speculative", "Cascade informazionali", "Irrazionalità collettiva"],
    examples: "Durante la bolla dot-com, molti investitori hanno comprato azioni tech seguendo la folla, ignorando i fondamentali."
  },
  {
    name: "Curva di Laffer",
    definition: "Relazione teorica tra aliquote fiscali e gettito fiscale, che suggerisce l'esistenza di un'aliquota ottimale oltre la quale aumenti delle tasse riducono il gettito.",
    category: "macroeconomia",
    relatedTerms: ["Supply-side economics", "Arthur Laffer", "Reaganomics", "Politica fiscale"],
    examples: "La teoria suggerisce che ridurre le tasse può aumentare il gettito stimolando l'attività economica."
  },
  {
    name: "Stagflazione",
    definition: "Fenomeno economico caratterizzato dalla combinazione simultanea di alta inflazione e alta disoccupazione, che sfida le previsioni della curva di Phillips tradizionale.",
    category: "macroeconomia",
    relatedTerms: ["Inflazione", "Disoccupazione", "Curva di Phillips", "Shock petroliferi"],
    examples: "Gli anni '70 negli Stati Uniti hanno visto stagflazione causata dagli shock petroliferi e dalle politiche monetarie espansive."
  },
  {
    name: "Teoria del Prospetto",
    definition: "Modello di Kahneman e Tversky che descrive come le persone prendono decisioni in condizioni di rischio, enfatizzando l'avversione alle perdite e l'effetto framing.",
    category: "comportamentale",
    relatedTerms: ["Daniel Kahneman", "Amos Tversky", "Avversione alle perdite", "Economia comportamentale"],
    examples: "Le persone preferiscono evitare una perdita di 100€ piuttosto che guadagnare 100€, mostrando asimmetria nella valutazione."
  },
  {
    name: "Selezione Avversa",
    definition: "Fenomeno per cui l'informazione asimmetrica porta alla selezione di prodotti o partecipanti di qualità inferiore nel mercato.",
    category: "microeconomia",
    relatedTerms: ["Informazione asimmetrica", "Mercato dei limoni", "Akerlof", "Azzardo morale"],
    examples: "Nel mercato delle auto usate, solo i proprietari di auto con problemi sono incentivati a venderle, riducendo la qualità media."
  },
  {
    name: "Azzardo Morale",
    definition: "Situazione in cui una parte, protetta dalle conseguenze negative del proprio comportamento, è incentivata a prendere rischi eccessivi.",
    category: "microeconomia",
    relatedTerms: ["Informazione asimmetrica", "Assicurazioni", "Banche too big to fail", "Principal-agent"],
    examples: "Le banche protette dal salvataggio pubblico possono assumere rischi eccessivi sapendo di essere coperte."
  },
  {
    name: "Curva di Phillips",
    definition: "Relazione empirica che mostra un trade-off di breve periodo tra inflazione e disoccupazione, sfidato dalla stagflazione degli anni '70.",
    category: "macroeconomia",
    relatedTerms: ["Inflazione", "Disoccupazione", "NAIRU", "Stagflazione"],
    examples: "Negli anni '60 sembrava che si potesse ridurre la disoccupazione accettando più inflazione, ma gli anni '70 hanno mostrato i limiti di questa relazione."
  },
  {
    name: "NAIRU",
    definition: "Non-Accelerating Inflation Rate of Unemployment: tasso di disoccupazione al quale l'inflazione rimane stabile nel tempo.",
    category: "macroeconomia",
    relatedTerms: ["Disoccupazione naturale", "Curva di Phillips", "Inflazione", "Politica monetaria"],
    examples: "Se la disoccupazione scende sotto il NAIRU, l'inflazione tende ad accelerare."
  },
  {
    name: "Quantitative Easing",
    definition: "Politica monetaria non convenzionale in cui la banca centrale acquista titoli a lungo termine per aumentare l'offerta di moneta quando i tassi sono già a zero.",
    category: "macroeconomia",
    relatedTerms: ["Banca centrale", "Politica monetaria", "Zero lower bound", "Crisi finanziaria"],
    examples: "La BCE ha utilizzato il QE dopo la crisi del 2008 per stimolare l'economia dell'eurozona."
  },
  {
    name: "Ordine Spontaneo",
    definition: "Concetto della scuola austriaca secondo cui le istituzioni e i mercati emergono spontaneamente dalle interazioni umane senza pianificazione centrale.",
    category: "microeconomia",
    relatedTerms: ["Scuola austriaca", "Friedrich Hayek", "Mano invisibile", "Conoscenza dispersa"],
    examples: "Il linguaggio, la moneta e i mercati sono esempi di ordini spontanei che emergono senza essere progettati centralmente."
  },
  {
    name: "Modelli DSGE",
    definition: "Dynamic Stochastic General Equilibrium: classe di modelli macroeconomici che incorporano microfondazioni, shock casuali e equilibrio generale.",
    category: "macroeconomia",
    relatedTerms: ["Nuova sintesi neoclassica", "Microfondazioni", "Aspettative razionali", "Politica monetaria"],
    examples: "I modelli DSGE sono utilizzati dalle banche centrali per analizzare gli effetti delle politiche monetarie."
  }
];

export const comparisonsData: InsertComparison[] = [
  {
    title: "Scuole di Pensiero: Neoclassica vs Post-Keynesiana",
    description: "Confronto tra l'approccio dominante e la principale scuola critica nell'economia contemporanea.",
    items: [
      { type: "school", id: "neoclassical-school", name: "Scuola Neoclassica" },
      { type: "school", id: "post-keynesian-school", name: "Scuola Post-Keynesiana" }
    ],
    aspects: [
      {
        name: "Concezione del Futuro",
        comparisons: [
          { itemId: "neoclassical-school", value: "Futuro prevedibile attraverso aspettative razionali e probabilità" },
          { itemId: "post-keynesian-school", value: "Incertezza radicale, il futuro è fondamentalmente imprevedibile" }
        ]
      },
      {
        name: "Ruolo della Moneta",
        comparisons: [
          { itemId: "neoclassical-school", value: "Moneta neutrale nel lungo periodo, controllata dalla banca centrale" },
          { itemId: "post-keynesian-school", value: "Moneta endogena, creata dalle banche attraverso i prestiti" }
        ]
      },
      {
        name: "Determinazione dei Prezzi",
        comparisons: [
          { itemId: "neoclassical-school", value: "Prezzi determinati dall'equilibrio di domanda e offerta" },
          { itemId: "post-keynesian-school", value: "Prezzi amministrati dalle imprese con ricarico sui costi" }
        ]
      },
      {
        name: "Metodo di Analisi",
        comparisons: [
          { itemId: "neoclassical-school", value: "Ampio uso della matematica per formalizzare teorie" },
          { itemId: "post-keynesian-school", value: "Focus su tempo storico e analisi istituzionale" }
        ]
      }
    ],
    isCustom: "false"
  },
  {
    title: "Modelli Micro vs Macro: Consumatore vs IS-LM",
    description: "Confronto tra un modello microeconomico fondamentale e uno macroeconomico classico.",
    items: [
      { type: "model", id: "consumer-theory", name: "Teoria del Consumatore" },
      { type: "model", id: "is-lm-model", name: "Modello IS-LM" }
    ],
    aspects: [
      {
        name: "Livello di Analisi",
        comparisons: [
          { itemId: "consumer-theory", value: "Comportamento individuale del consumatore" },
          { itemId: "is-lm-model", value: "Equilibrio macroeconomico aggregato" }
        ]
      },
      {
        name: "Variabili Chiave",
        comparisons: [
          { itemId: "consumer-theory", value: "Reddito, prezzi, utilità, preferenze individuali" },
          { itemId: "is-lm-model", value: "Tasso di interesse, produzione, investimenti, moneta" }
        ]
      },
      {
        name: "Obiettivo",
        comparisons: [
          { itemId: "consumer-theory", value: "Massimizzazione dell'utilità soggetta al vincolo di bilancio" },
          { itemId: "is-lm-model", value: "Equilibrio simultaneo nei mercati dei beni e della moneta" }
        ]
      },
      {
        name: "Applicazioni Pratiche",
        comparisons: [
          { itemId: "consumer-theory", value: "Analisi della domanda, elasticità, effetti di prezzo e reddito" },
          { itemId: "is-lm-model", value: "Politiche fiscali e monetarie, analisi congiunturale" }
        ]
      }
    ],
    isCustom: "false"
  },
  {
    title: "Manuali: Approcci Pedagogici a Confronto",
    description: "Confronto tra diversi approcci didattici nella presentazione dell'economia.",
    items: [
      { type: "manual", id: "mankiw-manual", name: "Mankiw - Essenziale di Economia" },
      { type: "manual", id: "core-manual", name: "CORE Team - Capire l'Economia" }
    ],
    aspects: [
      {
        name: "Scuola di Pensiero",
        comparisons: [
          { itemId: "mankiw-manual", value: "Nuova Sintesi Neoclassica - approccio ortodosso" },
          { itemId: "core-manual", value: "Pluralismo integrato - approccio post-2008" }
        ]
      },
      {
        name: "Struttura Didattica",
        comparisons: [
          { itemId: "mankiw-manual", value: "Organizzazione sui 'Dieci Principi dell'Economia'" },
          { itemId: "core-manual", value: "Struttura rivoluzionaria con integrazione multimediale" }
        ]
      },
      {
        name: "Metodologia",
        comparisons: [
          { itemId: "mankiw-manual", value: "Rigore neoclassico in micro, pragmatismo neo-keynesiano in macro" },
          { itemId: "core-manual", value: "Approccio scientifico con focus su rilevanza contemporanea" }
        ]
      },
      {
        name: "Pubblico Target",
        comparisons: [
          { itemId: "mankiw-manual", value: "Corsi standard, studenti che intendono proseguire in economia" },
          { itemId: "core-manual", value: "Corsi innovativi, programmi digitali e interdisciplinari" }
        ]
      }
    ],
    isCustom: "false"
  }
];

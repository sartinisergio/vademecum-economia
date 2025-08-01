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
    description: "Spiega come le persone allocano il reddito per massimizzare la soddisfazione, utilizzando concetti di utilità marginale e curve di indifferenza.",
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
    description: "Analizza come le imprese trasformano input in output e decidono quanto produrre per massimizzare il profitto.",
    type: "micro",
    keyConcepts: [
      "Funzione di Produzione",
      "Rendimenti di Scala",
      "Legge dei Rendimenti Marginali Decrescenti",
      "Costi di Produzione",
      "Massimizzazione del Profitto"
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
    description: "Analizza l'equilibrio tra mercato dei beni (IS) e mercato della moneta (LM) per determinare tasso di interesse e produzione.",
    type: "macro",
    keyConcepts: [
      "Curva IS (mercato dei beni)",
      "Curva LM (mercato della moneta)",
      "Equilibrio macroeconomico",
      "Politica fiscale",
      "Politica monetaria"
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
    description: "Estensione di IS-LM che permette ai prezzi di variare, analizzando l'interazione tra domanda aggregata e offerta aggregata.",
    type: "macro",
    keyConcepts: [
      "Domanda Aggregata (AD)",
      "Offerta Aggregata di Breve Periodo (SRAS)",
      "Offerta Aggregata di Lungo Periodo (LRAS)",
      "Livello dei prezzi",
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
    description: "Teoria della crescita esogena che spiega l'accumulo di capitale e il ruolo del progresso tecnologico nella crescita economica.",
    type: "macro",
    keyConcepts: [
      "Funzione di produzione aggregata",
      "Accumulazione di capitale",
      "Rendimenti decrescenti",
      "Stato stazionario",
      "Progresso tecnologico esogeno"
    ],
    applications: [
      "Convergenza condizionale",
      "Politiche per la crescita",
      "Differenze di reddito tra paesi",
      "Ruolo del risparmio"
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
  }
];

export const conceptsData: InsertConcept[] = [
  {
    name: "Equilibrio di Mercato",
    definition: "Punto in cui la quantità domandata è uguale alla quantità offerta, determinando prezzo e quantità di equilibrio.",
    category: "microeconomia",
    relatedTerms: ["Domanda", "Offerta", "Prezzo di equilibrio", "Quantità di equilibrio"],
    examples: "Nel mercato del grano, quando i produttori vogliono vendere esattamente la stessa quantità che i consumatori vogliono acquistare."
  },
  {
    name: "Utilità Marginale",
    definition: "La soddisfazione aggiuntiva che un consumatore ottiene dal consumo di un'unità aggiuntiva di un bene.",
    category: "microeconomia",
    relatedTerms: ["Utilità totale", "Legge dell'utilità marginale decrescente", "Scelta del consumatore"],
    examples: "La prima pizza ti dà molta soddisfazione, la seconda un po' meno, la terza ancora meno (utilità marginale decrescente)."
  },
  {
    name: "PIL (Prodotto Interno Lordo)",
    definition: "Il valore di mercato di tutti i beni e servizi finali prodotti in un paese in un determinato periodo.",
    category: "macroeconomia",
    relatedTerms: ["Crescita economica", "PIL nominale", "PIL reale", "PIL pro capite"],
    examples: "Il PIL italiano nel 2023 include tutte le auto Fiat prodotte, i servizi bancari erogati, i pasti serviti nei ristoranti, ecc."
  },
  {
    name: "Inflazione",
    definition: "L'aumento generale e sostenuto del livello dei prezzi in un'economia.",
    category: "macroeconomia",
    relatedTerms: ["Deflazione", "Iperinflazione", "Indice dei prezzi", "Potere d'acquisto"],
    examples: "Se un caffè costa 1€ oggi e 1,02€ l'anno prossimo, c'è stata un'inflazione del 2% per quel bene."
  },
  {
    name: "Elasticità della Domanda",
    definition: "Misura della reattività della quantità domandata alle variazioni del prezzo.",
    category: "microeconomia",
    relatedTerms: ["Elasticità anelastica", "Elasticità elastica", "Elasticità unitaria"],
    examples: "La benzina ha domanda anelastica (aumenti di prezzo riducono poco la quantità domandata), mentre i viaggi di lusso hanno domanda elastica."
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

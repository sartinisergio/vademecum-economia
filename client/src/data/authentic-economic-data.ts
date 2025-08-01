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
    author: "Paul Krugman (Nobel 2008), figura influente della scuola 'saltwater', editorialista del New York Times",
    characteristics: "Approccio narrativo e accessibile, strutturato come storie concrete per introdurre concetti",
    school: "Post-keynesiana moderna, enfasi su domanda aggregata, scetticismo verso efficienza automatica dei mercati, ruolo attivo della politica economica, attenzione alla distribuzione del reddito",
    models: "Microeconomia intuitiva (es. domanda/offerta con gas naturale, teoria del consumatore con allocazione tempo studio/lavoro), strutture di mercato con esempi memorabili. Macroeconomia keynesiana moderna (moltiplicatore, paradosso del risparmio, moneta endogena, crisi 2008)",
    shortLongPeriod: "Approccio 'dal breve al lungo', privilegiando le fluttuazioni cicliche e la disoccupazione come problemi urgenti ('Nel lungo periodo siamo tutti morti.' - Keynes). Crescita trattata sinteticamente",
    growth: "Modello di Solow essenziale, cenni a crescita endogena, enfasi sul progresso tecnologico",
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
    authors: ["N. Gregory Mankiw"],
    author: "N. Gregory Mankiw, Robert M. Beren Professor a Harvard, ex Chairman del Council of Economic Advisers",
    characteristics: "Fenomeno editoriale globale. Struttura basata sui 'Dieci Principi dell'Economia', che forniscono una struttura concettuale coerente. Organizzazione logica",
    school: "Nuova Sintesi Neoclassica (mainstream contemporaneo): rigore neoclassico in microeconomia, pragmatismo neo-keynesiano in macroeconomia (rigidità nel breve periodo, spazio per politiche di stabilizzazione)",
    models: "Microeconomia sistematica (metodo scientifico, diagramma flusso circolare, frontiera possibilità produttive, domanda/offerta come cavallo di battaglia, elasticità, economia del benessere, teoria del consumatore/impresa graduale, strutture di mercato comparative). Macroeconomia 'dal lungo al breve' (PIL, crescita, risparmio, sistema monetario, inflazione, economia aperta, poi fluttuazioni con AD-AS e Curva di Phillips)",
    shortLongPeriod: "Inizia dal lungo periodo (determinanti della crescita) per poi passare al breve (fluttuazioni cicliche). La logica pedagogica è 'prima capire dove l'economia vuole andare, poi perché devia'",
    growth: "Modello di Solow presentato magistralmente (intuizione, rendimenti decrescenti, stato stazionario, ruolo tecnologia, convergenza condizionale), cenni a capitale umano e crescita endogena",
    strengths: [
      "Organizzazione impeccabile, i Dieci Principi come framework",
      "Chiarezza espositiva, equilibrio e fairness", 
      "Versatilità didattica, preparazione solida per corsi avanzati",
      "Aggiornamenti costanti"
    ],
    weaknesses: [
      "Eccessiva ortodossia (poco spazio per alternative)",
      "Neutralità che nasconde valori impliciti",
      "Semplicità che può ingannare, approccio culturalmente specifico (americano-centrico)",
      "Matematica 'né carne né pesce', lungo periodo forse troppo lungo"
    ],
    targetAudience: "Corsi standard di economia, studenti di base che intendono proseguire in studi economici"
  },
  {
    title: "Elementi di Economia",
    authors: ["John Sloman", "Dean Garratt"],
    author: "John Sloman (focus su innovazione pedagogica), Dean Garratt (economia applicata)",
    characteristics: "Approccio pragmatico e orientato all'applicazione, con design visivo ricco (box 'Caso Studio', 'In Pratica', 'Pausa per Riflettere', grafici a colori)",
    school: "Pragmatismo eclettico pedagogico, utilizza elementi di diverse tradizioni (neoclassica semplificata, aperture keynesiane, elementi comportamentali, attenzione istituzionale) utili per spiegare fenomeni reali",
    models: "Microeconomia dal concreto all'astratto (domanda/offerta con casi reali, elasticità come strumento manageriale, comportamento del consumatore semplificato, strutture di mercato per manager, economia del lavoro applicata, fallimenti di mercato con casi concreti). Macroeconomia con focus su policy e pratica (misurazione, modello keynesiano semplificato, moneta e banche, politica fiscale e monetaria, commercio internazionale)",
    shortLongPeriod: "Priorità schiacciante al breve periodo (70% del contenuto) e all'analisi di problemi immediati, riflettendo il pubblico target (studenti di business, management, scienze sociali, ingegneria)",
    growth: "Trattamento semplificato e orientato alle implicazioni pratiche, accenni al modello di Solow, focus su sviluppo sostenibile",
    strengths: [
      "Rilevanza immediata, accessibilità estrema",
      "Design pedagogico eccellente, approccio olistico",
      "Orientamento pratico, flessibilità didattica",
      "Equilibrio tra semplicità e completezza"
    ],
    weaknesses: [
      "Profondità teorica limitata, mancanza di rigore analitico",
      "Crescita e lungo periodo trascurati",
      "Rischio di eccessiva semplificazione, culturalmente specifico (UK-centrico)",
      "Framework teorico debole"
    ],
    targetAudience: "Studenti di business, management, o altre discipline che necessitano di economia applicata; corsi introduttivi per non economisti"
  },
  {
    title: "Capire l'Economia",
    authors: ["The CORE Team"],
    author: "The CORE Team - Progetto collaborativo internazionale guidato da Wendy Carlin e Samuel Bowles",
    characteristics: "Progetto ambizioso di ripensare l'insegnamento dell'economia post-2008. Struttura rivoluzionaria (22 Unità su 'grandi domande'), integrazione multimediale (video, simulazioni, dati reali), open access, personalizzabile",
    school: "Pluralismo integrato che supera le divisioni tradizionali. Incorpora microeconomia comportamentale, economia istituzionale, economia ecologica, macroeconomia post-keynesiana, economia della complessità, economia politica. Fortemente empiricamente fondato",
    models: "Rovescia l'approccio tradizionale: parte da problemi reali (es. 'hockey stick' della crescita) per sviluppare strumenti analitici. Microeconomia integrata con temi macro, teoria dei giochi pervasiva con esperimenti. Macroeconomia come sistema complesso, focalizzata su fluttuazioni, crisi e politiche",
    shortLongPeriod: "Approccio integrato unico, non separazione artificiale. Breve e lungo connessi continuamente (path dependence), sostenibilità come ponte tra decisioni correnti e conseguenze secolari",
    growth: "Visione sofisticata e moderna: crescita come trasformazione strutturale, istituzioni centrali, innovazione endogena, trappole di povertà, sostenibilità",
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
    author: "Daron Acemoglu (Nobel 2024 per le istituzioni), David Laibson (pioniere economia comportamentale), John List (pioniere esperimenti sul campo)",
    characteristics: "Nuovo paradigma, combina rigore teorico, attenzione alle istituzioni, insights comportamentali, approccio sperimentale. Più rigoroso e più realista. Include 'Evidence-Based Economics', esperimenti replicabili, video degli autori",
    school: "Mainstream empirico del XXI Secolo: neoclassico nella struttura ma qualificato da evidenza su deviazioni. Economia comportamentale integrata naturalmente, istituzionalismo moderno, sperimentalismo pervasivo, metodi empirici centrali",
    models: "Microeconomia con teoria testata empiricamente (ottimizzazione con qualificazioni comportamentali, domanda/offerta come framework flessibile con evidenza, teoria dei giochi sperimentale, strutture di mercato con dati, economia del lavoro moderna). Macroeconomia micro-fondata ma realistica (crescita economica e istituzioni - qui Acemoglu brilla con evidenza causale - cicli economici micro-fondati con frizioni finanziarie, politica economica evidence-based)",
    shortLongPeriod: "Approccio integrato sofisticato. Lungo periodo fondamentale (crescita e istituzioni) ma connesso a decisioni correnti. Breve periodo con micro-fondazioni. Collegamenti continui (es. hysteresis)",
    growth: "Trattamento all'avanguardia. Framework unificato (geografia, cultura, istituzioni, con istituzioni dominanti), istituzioni inclusive vs estrattive, evidenza causale (reversal of fortune), innovazione e crescita, trappole di povertà",
    strengths: [
      "All'avanguardia della ricerca, rigore empirico senza precedenti",
      "Behavioral economics integrata naturalmente, istituzioni al centro",
      "Pedagogia basata su evidenza, preparazione per economia moderna",
      "Rilevanza senza sacrificare rigore"
    ],
    weaknesses: [
      "Complessità elevata (richiede studenti preparati)",
      "Lunghezza considerevole, prerequisiti impliciti (analisi quantitativa)",
      "Relativamente nuovo (meno testato), culturalmente specifico (americano-centrico)"
    ],
    targetAudience: "Corsi avanzati, studenti ambiziosi, programmi 'honors', preparazione alla ricerca. Rappresenta lo stato dell'arte per l'insegnamento universitario di economia"
  },
  {
    title: "Economia",
    authors: ["Paul Samuelson", "William Nordhaus"],
    school: "Sintesi Neoclassica-Keynesiana (dominante nel dopoguerra): micro neoclassica, macro keynesiana nel breve, neoclassica nel lungo. Pragmatismo. Capacità di evolversi incorporando nuovi sviluppi (monetarismo, supply-side, nuova crescita, economia dell'informazione, economia ambientale)",
    characteristics: [
      "Autori: Paul Samuelson (Nobel 1970, padre della sintesi neoclassica-keynesiana), William Nordhaus (Nobel 2018, economia del cambiamento climatico)",
      "Monumento nella storia del pensiero economico, ha definito come l'economia viene insegnata. Completezza enciclopedica, approccio sistematico. Aperture storiche, biografie, box 'Economia in Azione'",
      "Modelli: Microeconomia con approccio classico perfezionato (scarsità/scelta, domanda/offerta meticolose, teoria del consumatore/produttore dettagliate, strutture di mercato, mercati dei fattori completi, economia del benessere). Macroeconomia della sintesi (contabilità nazionale, modello keynesiano completo con 'croce keynesiana', IS-LM, inflazione/disoccupazione con Curva di Phillips e critica Friedman-Phelps, crescita, economia internazionale, economia ambientale)",
      "Breve/Lungo Periodo: Trattamento equilibrato e integrato: breve periodo keynesiano, lungo periodo neoclassico, ma sempre mostrando le connessioni e i trade-off intertemporali",
      "Crescita: Trattamento evolutivo che riflette lo sviluppo della teoria: prospettiva storica, modello di Solow canonico (algebra e geometria), contabilità della crescita, cenni a nuove teorie. Forte integrazione dell'economia ambientale (Nordhaus)"
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
    school: "Base neoclassica con forte apertura ai temi comportamentali (bias cognitivi, limiti razionalità). Pragmatico: teoria per risolvere problemi concreti. Bernanke apporta prospettiva di policy reale (crisi 2008)",
    characteristics: [
      "Autori: Robert Frank (economia comportamentale, didattica innovativa), Ben Bernanke (ex presidente Federal Reserve, Nobel 2022 per studi sulle crisi bancarie)",
      "Molto narrativo, esempi dalla vita quotidiana, attenzione alle scelte individuali tramite 'puzzle' economici ('Economic Naturalist'). Integrazione elementi di economia comportamentale e psicologia. Taglio pratico",
      "Modelli: Microeconomia con domanda/offerta su mercati reali, teoria del consumatore con esempi psicologici (framing). Macroeconomia con indicatori fondamentali, modello di Solow intuitivo senza eccessiva matematizzazione. Spiegazione delle crisi con aspettative e fiducia",
      "Breve/Lungo Periodo: Forte attenzione al breve periodo (recessioni, ruolo politiche pubbliche, banca centrale). Lungo periodo su crescita e differenze tra paesi (istituzioni, capitale umano), con spiegazioni narrative",
      "Crescita: Solow semplice ed efficace, enfasi sul capitale umano, istituzioni discusse marginalmente. Crescita endogena non trattata"
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
    school: "Mainstream contemporaneo, riflette il consenso tra neoclassici e neokeynesiani. Equilibrio tra rigore teorico e attenzione a dati, istituzioni e politiche reali, con riferimenti a Europa e Italia",
    characteristics: [
      "Autori: David Begg (didattica, manuali diffusi), Gianluigi Vernasca (edizioni recenti, prospettive contemporanee), Stanley Fischer (macroeconomista, policy maker), Rüdiger Dornbusch (macroeconomia internazionale)",
      "Struttura didattica articolata, schede di approfondimento (Focus, Confronto, Caso italiano, Policy in pratica, Dati e fatti), esercizi applicativi, riepilogo e glossario. Integrazione teoria e realtà",
      "Modelli: Microeconomia con concetti fondamentali graduali, domanda/offerta con applicazioni reali, elasticità con casi empirici, teoria del consumatore/produttore con intuizione e formalizzazione, strutture di mercato con esempi europei, temi di policy. Macroeconomia con indicatori fondamentali su dati europei, modelli di crescita (Solow, capitale umano, progresso tecnico), ciclo economico (IS-LM, AD-AS), politiche economiche con istituzioni europee (BCE, UE)",
      "Breve/Lungo Periodo: Distingue nettamente tra tendenze di lungo periodo (crescita, produttività) e fluttuazioni di breve periodo (cicli, crisi), per interpretare le crisi come deviazioni temporanee",
      "Crescita: Modello di Solow con dati empirici, cenni a crescita endogena e capitale umano, discussione su politiche per lo sviluppo"
    ],
    strengths: [
      "Chiarezza e gradualità didattica, forte attenzione al contesto europeo e italiano",
      "Apparato didattico ricco, attualità (crisi, politiche europee, globalizzazione)"
    ],
    weaknesses: [
      "Approfondimenti quantitativi/specialistici limitati",
      "Ricchezza esempi/dati impegnativa per principianti, focus europeo può richiedere integrazioni"
    ],
    targetAudience: "Corsi universitari di base in Europa, studenti di discipline economiche, politiche, aziendali che desiderano un quadro completo e aggiornato"
  },
  {
    title: "Essenziale di Economia",
    authors: ["Stanley L. Brue", "Campbell R. McConnell", "Sean M. Flynn"],
    school: "Mainstream neoclassica in microeconomia (agenti razionali, scelta ottimale, efficienza di mercato). Sintesi neo-keynesiana in macroeconomia (aggiustamenti automatici vs politiche di stabilizzazione), neutralità sulle controversie",
    characteristics: [
      "Autori: Stanley L. Brue (eccellenza didattica), Campbell R. McConnell (ricerca, didattica), Sean M. Flynn (finanza comportamentale, economia sanitaria)",
      "Versione compatta, approccio didattico tradizionale ma aggiornato. Apparato didattico sistematico e visivo (Confronto per immagini, Focus sul concetto, Analisi applicata, Istantanea dal mondo)",
      "Modelli: Microeconomia con scarsità, scelta, costo opportunità, domanda/offerta graduale, elasticità, teoria del consumatore/produttore progressiva, mercati e fallimenti. Macroeconomia con indicatori fondamentali, modello di Solow centrale, ciclo economico (IS-LM, AD-AS, Curva di Phillips), politiche economiche",
      "Breve/Lungo Periodo: Distingue tra tendenze di lungo periodo (crescita, progresso tecnico) e fluttuazioni di breve periodo (cicli, recessioni)",
      "Crescita: Centralità del modello di Solow (crescita esogena dipendente da progresso tecnologico), funzione di produzione Cobb-Douglas, convergenza. Cenni a teorie della crescita endogena"
    ],
    strengths: [
      "Chiarezza e gradualità didattica, apparato visivo e applicativo",
      "Neutralità e pluralismo (sulle controversie), materiali didattici ricchi, attualità"
    ],
    weaknesses: [
      "Temi innovativi (comportamentale, digitale, sostenibilità) introduttivi",
      "Esempi USA prevalenti (seppur integrati), sinteticità può limitare approfondimenti specialistici"
    ],
    targetAudience: "Migliori sintesi didattiche per l'introduzione all'economia. Corsi base, studenti di facoltà non economiche che necessitano di una panoramica chiara, rigorosa ma accessibile"
  },
  {
    title: "Principi di Economia",
    authors: ["Marc Lieberman", "Robert Hall"],
    school: "Mainstream neoclassica per micro e macro, attenzione ad analisi empirica e applicazioni pratiche. Più approfondito di Krugman, con maggiore attenzione a connessioni logiche e processi analitici",
    characteristics: [
      "Autori: Marc Lieberman (testi universitari di successo), Robert Hall (macroeconomia, mercati del lavoro)",
      "Modulare, sequenza da concetti di base a micro e macro. Ricco di esempi, box, domande di verifica. Linguaggio chiaro e accessibile. Risorse digitali. Approccio schematico e logico",
      "Modelli: Microeconomia approfondita (scelta razionale, vincoli, incentivi, domanda/offerta, teoria del consumatore/impresa con strumenti grafici/numerici, forme di mercato, fallimenti). Macroeconomia più articolata (indicatori, modelli di crescita, ciclo economico, politiche fiscali/monetarie, economia internazionale)",
      "Breve/Lungo Periodo: Maggiore enfasi sull'equilibrio tra breve e lungo periodo, analizzando sia effetti immediati sia cambiamenti strutturali. Distingue tra trend di lungo e variazioni di breve",
      "Crescita: Spazio al modello di Solow e principali teorie, con implicazioni empiriche e politiche. Integrazione di osservazioni sui modelli di crescita endogena (conoscenza e innovazione)"
    ],
    strengths: [
      "Struttura didattica lineare e modulare, numerosi esempi/box/materiali digitali",
      "Chiarezza espositiva, forte collegamento teoria/realtà"
    ],
    weaknesses: [
      "Focus su esempi USA, temi innovativi introduttivi",
      "Trattazione quantitativa essenziale"
    ],
    targetAudience: "Corsi introduttivi, studenti senza background quantitativo avanzato, didattica blended o online"
  },
  {
    title: "Economia",
    authors: ["Gilberto Antonelli", "Nicola De Liso", "Giovanni Guidetti", "Giuseppe Vittucci Marzetti"],
    school: "Prospettiva mainstream neoclassica. Integrazione di innovazione, lavoro, istituzioni e crescita. Trattazione approfondita e critica, confronto tra diverse scuole (neoclassica, keynesiana, evolutivi). Matematica e riflessioni sui limiti dei modelli",
    characteristics: [
      "Autori: Gilberto Antonelli, Nicola De Liso, Giovanni Guidetti, Giuseppe Vittucci Marzetti (docenti con esperienza didattica e di ricerca)",
      "Modulare e progressiva. Obiettivi chiari, esempi, esercizi, materiali di approfondimento. Linguaggio accessibile, rigore teorico, aggiornamento. Riferimenti a dati, casi reali e politiche italiane/europee",
      "Modelli: Microeconomia con vincoli, scelte, preferenze, domanda/offerta con elasticità, teoria del consumatore/produttore con strumenti grafici, strutture di mercato, economia del benessere, fallimenti di mercato. Macroeconomia con indicatori, crescita (Solow, capitale umano, innovazione), ciclo economico, politiche economiche, commercio internazionale",
      "Breve/Lungo Periodo: Equilibrio tra breve e lungo periodo, enfasi su crescita e innovazione, ma attenzione a cicli e politiche nel breve",
      "Crescita: Modello di Solow con particolare attenzione a progresso tecnico e capitale umano, cenni a crescita endogena e innovazione, casi di sviluppo italiano/europeo"
    ],
    strengths: [
      "Rigore teorico con accessibilità, forte attenzione al contesto italiano/europeo",
      "Confronto tra scuole di pensiero, attenzione a innovazione e dinamiche evolutive",
      "Apparato didattico ricco, aggiornamento costante"
    ],
    weaknesses: [
      "Complessità per principianti assoluti",
      "Lunghezza considerevole, richiede tempo e impegno",
      "Focus italiano/europeo può richiedere integrazioni globali"
    ],
    targetAudience: "Corsi universitari di base e intermedi in Italia, studenti di economia, scienze politiche, ingegneria gestionale che desiderano una preparazione solida e critica"
  },

  {
    title: "Economia: un approccio semplice ad una realtà complessa",
    authors: ["Paola Parravicini", "Alessandro Graffi"],
    school: "Meno 'canonico', focus su interpretazione critica della realtà contemporanea. Maggiore attenzione a interconnessioni e aspetti dinamici. Enfatizza il collegamento teoria/realtà, paradossi e criticità. Prospettiva mainstream neoclassica con collegamento a politiche pubbliche e contesto italiano/europeo",
    characteristics: [
      "Autori: Paola Parravicini e Alessandro Graffi (Università di Milano, didattica triennale)",
      "Approccio narrativo riflessivo e interdisciplinare, organizzazione meno rigida. Integra riferimenti storici, sociali e istituzionali. Obiettivo di mettere in discussione l'efficacia dei mercati e il loro impatto sociale. Linguaggio chiaro, inclusivo, attento alle difficoltà. Esempi italiani/internazionali",
      "Modelli: Mette in discussione i modelli tradizionali con interpretazione più critica. Enfasi sul senso pratico e limitazioni. Microeconomia con distorsioni di mercato e limiti pratici delle teorie. Macroeconomia con complessità e limiti della teoria tradizionale, esplorando fattori istituzionali e sistemici",
      "Breve/Lungo Periodo: Distinzione tra breve e lungo periodo inglobata in discussione più ampia su effetti dinamici. Ampio spazio a effetti di lungo termine e cambiamenti strutturali. Favorita comprensione forze strutturali",
      "Crescita: Analizzata in relazione a disuguaglianze sociali e sfide ambientali. Attenzione a modelli qualitativi e impatto sostenibilità. Spazio al modello Solow, discussi capitale umano, innovazione, istituzioni. Cenni a teorie endogene"
    ],
    strengths: [
      "Chiarezza e gradualità didattica, forte attenzione al contesto italiano ed europeo",
      "Schede di approfondimento/materiali didattici, equilibrio tra rigore e inclusività"
    ],
    weaknesses: [
      "Temi emergenti introduttivi, aspetti quantitativi più avanzati sacrificati",
      "Struttura lineare meno stimolante per studenti avanzati"
    ],
    targetAudience: "Corsi introduttivi universitari, studenti che affrontano la materia per la prima volta. Chi cerca un approccio critico e riflessivo che colleghi teoria e realtà"
  },
  {
    title: "Introduzione all'Economia",
    authors: ["Giuseppe Bertola", "Anna Lo Prete"],
    school: "Pensato per corsi universitari strutturati e dettagliati. Combina teoria e formalizzazione matematica, focus rigoroso su fondamenti teorici. Mainstream, solide basi neoclassiche. Costante richiamo a dati reali, istituzioni e specificità europee. Differenza tra analisi teorica e realtà osservata",
    characteristics: [
      "Autori: Giuseppe Bertola (Università di Torino, esperienza internazionale), Anna Lo Prete (Università di Torino, ricerca su macroeconomia, internazionale, istituzioni)",
      "Approccio più accademico, combinando esposizione teorica e applicazione matematica. Linguaggio meno accessibile per chi ha poca familiarità. Base teorica solida, spiegazioni analitiche e strutturate. Stile lineare e trasparente. Riferimenti a dati europei/italiani. Formalizzazione grafica e matematica spiegata",
      "Modelli: Panoramica ampia e approfondita dell'economia teorica. Discussioni più tecniche su mercati, produttività, meccanismi di equilibrio. Enfasi su ipotesi dei modelli. Microeconomia sistematica e graduale, enfasi su ottimizzazione, equilibrio, elasticità, benessere. Macroeconomia con maggiore spazio a meccanismi di equilibrio generale e politiche economiche, analisi più tecnica. Rilievo a istituzioni economiche (BCE, UE), policy mix, contesto italiano",
      "Breve/Lungo Periodo: Trattazione più tecnica, separando chiaramente effetti di breve e lungo periodo. Visione più sistematica e profonda. Sequenza logica da trend di lungo a fluttuazioni di breve",
      "Crescita: Approfondisce modelli di crescita (Solow, endogeni). Integrazione di formalizzazione, dati storici su convergenza, divergenza, 'caso Italia'. Dibattito su politiche per la crescita. Sezione su crescita offre visione classica e nuove prospettive"
    ],
    strengths: [
      "Rigore e chiarezza espositiva, rilevanza empirica (dati italiani/europei)",
      "Apparato didattico ricco, attenzione alle istituzioni"
    ],
    weaknesses: [
      "Struttura lineare può essere poco stimolante per temi comportamentali/digitali",
      "Formalizzazione può scoraggiare studenti senza basi quantitative, temi emergenti introduttivi"
    ],
    targetAudience: "Corsi universitari di primo livello che cercano rigore metodologico e attenzione ai dati reali, specialmente per il contesto italiano ed europeo. Chi desidera una base solida teorica ed empirica"
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
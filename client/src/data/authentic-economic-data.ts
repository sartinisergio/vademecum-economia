export const economicSchoolsData = [
  {
    name: "Scuola Neoclassica",
    description: "La scuola dominante dal tardo XIX secolo, basata sui principi di razionalità, equilibrio di mercato e massimizzazione dell'utilità. Considera il mercato come un meccanismo efficiente di allocazione delle risorse.",
    keyPrinciples: [
      "Razionalità degli Agenti: Gli individui agiscono per massimizzare la propria utilità, le imprese per massimizzare i profitti",
      "Equilibrio di Mercato: I prezzi si aggiustano automaticamente per bilanciare domanda e offerta",
      "Efficienza del Mercato: In condizioni di concorrenza perfetta, il mercato alloca le risorse in modo ottimale",
      "Marginalismo: Le decisioni si basano su calcoli marginali (costo/beneficio marginale)",
      "Informazione Perfetta: Gli agenti hanno accesso completo alle informazioni rilevanti",
      "Metodo: Uso estensivo della matematica e modelli di equilibrio generale"
    ],
    economists: [
      "Léon Walras", "William Stanley Jevons", "Carl Menger", "Alfred Marshall", "Vilfredo Pareto", "Paul Samuelson"
    ],
    examples: [
      "La teoria della domanda e dell'offerta per spiegare la formazione dei prezzi",
      "I modelli di crescita di Solow per analizzare lo sviluppo economico di lungo periodo"
    ],
    category: "mainstream"
  },
  {
    name: "Scuola Post-Keynesiana",
    description: "Sviluppatasi dai lavori di Keynes, enfatizza l'incertezza, l'instabilità dei mercati e il ruolo delle aspettative. Critica l'idea neoclassica di equilibrio automatico.",
    keyPrinciples: [
      "Incertezza Radicale: Il futuro è intrinsecamente imprevedibile, non si può ridurre a calcoli probabilistici",
      "Instabilità Endogena: L'economia capitalista è intrinsecamente instabile, le crisi emergono dal sistema stesso",
      "Ruolo della Domanda: La domanda aggregata è il driver principale dell'attività economica",
      "Prezzi Amministrati: I prezzi sono spesso fissati dalle imprese attraverso markup sui costi, non dall'equilibrio di mercato",
      "Moneta Non Neutrale: La moneta influenza le variabili reali dell'economia, non è solo un 'velo'",
      "Tempo Storico: La storia e le istituzioni contano, l'economia evolve in modo path-dependent"
    ],
    economists: [
      "John Maynard Keynes", "Joan Robinson", "Nicholas Kaldor", "Michał Kalecki", "Hyman Minsky"
    ],
    examples: [
      "La teoria dell'instabilità finanziaria di Minsky per spiegare le crisi economiche",
      "La preferenza per la liquidità per comprendere il ruolo della moneta"
    ],
    category: "heterodox"
  },
  {
    name: "Scuola Austriaca",
    description: "Enfatizza l'azione umana individuale, l'imprenditorialità e i processi di mercato. Critica l'approccio matematico e privilegia la logica deduttiva e l'analisi qualitativa.",
    keyPrinciples: [
      "Azione Umana (Praxeologia): L'economia studia l'azione umana intenzionale e orientata a uno scopo",
      "Individualismo Metodologico: I fenomeni economici vanno spiegati partendo dalle azioni degli individui",
      "Ordine Spontaneo: Il mercato coordina spontaneamente le azioni individuali senza bisogno di pianificazione centrale",
      "Imprenditorialità: Gli imprenditori guidano il processo di mercato attraverso la scoperta di opportunità di profitto",
      "Critica del Costruttivismo: Opposizione alla pianificazione economica centralizzata e all'intervento statale eccessivo",
      "Metodo: Logica deduttiva a partire da assiomi sull'azione umana, critica alla matematizzazione dell'economia"
    ],
    economists: [
      "Carl Menger", "Eugen von Böhm-Bawerk", "Friedrich von Wieser", "Ludwig von Mises", "Friedrich Hayek", "Murray Rothbard"
    ],
    examples: [
      "La teoria del ciclo economico austriaca che attribuisce le crisi all'intervento delle banche centrali",
      "Il concetto di ordine spontaneo per spiegare come i mercati si auto-organizzano"
    ],
    category: "heterodox"
  },
  {
    name: "Economia Comportamentale",
    description: "Integra insights dalla psicologia per comprendere come le persone prendono realmente le decisioni economiche, spesso deviando dalla razionalità perfetta.",
    keyPrinciples: [
      "Razionalità Limitata: Gli individui usano scorciatoie cognitive (euristiche) che possono portare a decisioni subottimali",
      "Bias Cognitivi: Esistono pattern sistematici di deviazione dalla razionalità (ad es. avversione alle perdite, eccesso di fiducia)",
      "Framing Effects: Il modo in cui le opzioni sono presentate influenza le scelte",
      "Preferenze Sociali: Le persone considerano fairness, reciprocità e norme sociali nelle loro decisioni",
      "Auto-controllo Limitato: Difficoltà nel resistere alle tentazioni immediate per benefici futuri",
      "Metodo: Esperimenti di laboratorio e sul campo per testare le teorie comportamentali"
    ],
    economists: [
      "Daniel Kahneman", "Amos Tversky", "Richard Thaler", "Dan Ariely", "Ernst Fehr"
    ],
    examples: [
      "L'iscrizione automatica ai piani pensionistici aumenta drasticamente la partecipazione, dimostrando l'importanza dell'architettura delle scelte"
    ],
    category: "emerging"
  },
  {
    name: "Economia della Complessità",
    description: "Vede l'economia come un ecosistema complesso, non una macchina in equilibrio. L'economia come sistema adattivo che emerge dalle interazioni di agenti eterogenei che apprendono e si adattano.",
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
      "La crisi finanziaria del 2008 è vista come fenomeno emergente da interconnessioni sistemiche"
    ],
    category: "emerging"
  }
];

export const analyticalReportsData = [
  {
    title: "Principi di Economia",
    authors: ["Daron Acemoglu"],
    publisher: "Pearson",
    generalOverview: "Il manuale di Acemoglu rappresenta un approccio decisamente innovativo nell'insegnamento dell'economia politica, caratterizzato da una filosofia pedagogica che privilegia il metodo scientifico e l'analisi empirica rispetto alla tradizionale esposizione teorica. La struttura dell'opera rivela immediatamente questa impostazione metodologica: i primi tre capitoli sono dedicati esclusivamente ai fondamenti epistemologici e metodologici della disciplina, con particolare enfasi sull'ottimizzazione e il naturalismo economico.",
    schoolsOfThought: "L'approccio di Acemoglu è profondamente radicato nella tradizione neoclassica moderna, ma con significative aperture verso le scuole di pensiero più innovative. L'inclusione della teoria dei giochi e dell'economia dell'informazione indica un forte orientamento verso la 'nuova economia industriale', mentre la presenza dell'economia sociale suggerisce un'apertura verso l'economia comportamentale e sperimentale. Sul fronte macroeconomico, l'approccio integra elementi della sintesi neoclassica con modelli di crescita endogena e teorie dello sviluppo istituzionale.",
    microMacroModels: "La struttura microeconomica presenta una progressione sofisticata che va oltre i modelli standard, con il framework dell'ottimizzazione vincolata come strumento unificante applicato sistematicamente ai comportamenti di consumatori e imprese. I modelli di mercato seguono una progressione completa dalla concorrenza perfetta al monopolio, con l'integrazione sistematica della teoria dei giochi per l'analisi delle interazioni strategiche. La sezione macroeconomica integra modelli di crescita con analisi delle fluttuazioni cicliche attraverso modelli DSGE o loro versioni semplificate.",
    growthModels: "La trattazione della crescita economica appare particolarmente approfondita e moderna, con un approccio che integra i modelli di crescita neoclassici con le teorie della crescita endogena e i modelli istituzionali. La collocazione del capitolo sulla crescita prima dell'analisi delle fluttuazioni cicliche indica una priorità concettuale data ai fenomeni di lungo periodo, coerentemente con l'approccio che vede nelle istituzioni e nella tecnologia i driver fondamentali dello sviluppo economico.",
    timeFrameAnalysis: "L'approccio temporale di Acemoglu è particolarmente sofisticato, introducendo esplicitamente la dimensione temporale dell'analisi economica a livello microeconomico attraverso modelli di scelta intertemporale e teoria del portafoglio. A livello macroeconomico, la sequenza è innovativa: dalla misurazione degli aggregati alla crescita di lungo periodo, poi al mercato del lavoro e del credito, e infine alle fluttuazioni di breve periodo. Questa progressione dal lungo al breve periodo riflette una filosofia che vede la crescita come il fenomeno economico fondamentale.",
    nonStandardTopics: "Il manuale presenta numerose innovazioni che lo rendono unico, con l'introduzione di elementi di econometria e analisi empirica, teoria dei giochi, economia dell'informazione, aste e contrattazioni a livello introduttivo. L'economia sociale incorpora elementi di economia sperimentale, psicologia economica e teoria dell'equità. La sezione macroeconomica include analisi cross-country sui determinanti della crescita e argomenti come macroeconomia del commercio internazionale e economia aperta, riflettendo l'importanza della globalizzazione.",
    category: "Competitor"
  },
  {
    title: "Economia",
    authors: ["Antonelli et al."],
    publisher: "Giappichelli",
    generalOverview: "Il manuale di Antonelli rappresenta un approccio sistematico e rigorosamente strutturato all'insegnamento dell'economia politica, caratterizzato da una particolare attenzione alla progressione pedagogica e all'approfondimento metodologico. La struttura bipartita di ogni capitolo ('Per capire' e 'Per approfondire') rivela una filosofia didattica innovativa che permette una fruizione differenziata del contenuto in base al livello di preparazione degli studenti.",
    schoolsOfThought: "L'impostazione teorica è solidamente ancorata alla tradizione neoclassica, con l'approccio sistematico alla teoria del consumatore basato su ottimizzazione vincolata e la teoria dell'impresa secondo l'approccio marshalliano. Tuttavia, presenta significative aperture verso approcci più moderni, integrando contributi della Nuova Economia Istituzionale e della teoria dei contratti incompleti. Sul fronte macroeconomico, l'approccio è eclettico, presentando il confronto tra Nuova Macroeconomia Classica e Nuova Macroeconomia Keynesiana.",
    microMacroModels: "La struttura microeconomica presenta una progressione completa e rigorosa, con il modello standard di scelta del consumatore attraverso l'ottimizzazione vincolata e la teoria dell'impresa attraverso funzioni di produzione e strutture di costo. La sezione macroeconomica presenta una sequenza di modelli di crescente complessità: dal modello reddito-spesa keynesiano al modello IS-LM, fino al modello DA-AS che completa il framework con l'analisi dell'offerta aggregata e delle dinamiche inflazionistiche.",
    growthModels: "La trattazione della crescita economica non appare come argomento autonomo, suggerendo un approccio che integra gli elementi di crescita all'interno dei modelli macroeconomici generali. Questa scelta editoriale riflette un approccio che vede la crescita come risultato dell'interazione tra domanda e offerta aggregate piuttosto che come fenomeno separato, coerentemente con la tradizione macroeconomica europea.",
    timeFrameAnalysis: "L'approccio temporale è sistematicamente sviluppato fin dai primi capitoli microeconomici, con la distinzione tra costi di breve e lungo periodo nella teoria dell'impresa. A livello macroeconomico, la distinzione temporale è particolarmente evidente nel modello DA-AS, dove si analizza l'offerta aggregata in 'brevissimo', 'breve' e lungo periodo, con approfondimenti che incorporano aspettative e rigidità nominali.",
    nonStandardTopics: "Il manuale presenta diverse innovazioni significative, con la struttura bipartita 'Per capire'/'Per approfondire' che rappresenta un'innovazione didattica importante. La sezione avanzata introduce elementi di economia industriale moderna attraverso la teoria dei costi di transazione e dei contratti incompleti. Il trattamento dei fallimenti del mercato include il teorema di Coase e i permessi negoziabili, mentre l'analisi comparativa tra scuole macroeconomiche offre una panoramica delle controversie teoriche contemporanee.",
    category: "Competitor"
  },
  {
    title: "Economia", 
    authors: ["David Begg", "et al."],
    publisher: "McGraw-Hill",
    generalOverview: "Il manuale di Begg rappresenta un approccio sistematico e completo all'insegnamento dell'economia, caratterizzato da una particolare attenzione all'integrazione tra teoria economica e problematiche contemporanee. L'architettura dell'opera procede dai fondamenti teorici alle applicazioni internazionali, con particolare attenzione all'equilibrio tra rigore analitico e accessibilità pedagogica, evidente nella sistematica presenza di appendici matematiche, esempi applicativi e collegamenti con l'attualità economica.",
    schoolsOfThought: "L'impostazione teorica è caratterizzata da un pragmatismo metodologico che integra diversi approcci teorici senza privilegiare dogmaticamente una singola scuola. La sezione microeconomica segue prevalentemente l'approccio neoclassico mainstream, mentre l'inclusione dell'economia comportamentale indica un'apertura verso gli sviluppi più recenti incorporando elementi di psicologia economica e teoria del prospetto. Sul fronte macroeconomico, l'approccio è eclettico, presentando diverse scuole: macroeconomia neoclassica, monetaristi moderati, keynesiani moderati e keynesiani estremi.",
    microMacroModels: "La struttura microeconomica presenta una progressione completa e metodologicamente rigorosa, con la teoria del consumatore sviluppata sistematicamente attraverso vincoli di bilancio, curve di indifferenza e ottimizzazione. La sezione sulle strutture di mercato presenta una trattazione completa dalla concorrenza perfetta al monopolio, con l'integrazione sistematica della teoria dei giochi e modelli di Cournot, Bertrand e Stackelberg. La sezione macroeconomica parte dalla contabilità nazionale per sviluppare il modello keynesiano di base, l'analisi fiscale e monetaria, il modello IS-LM e l'analisi dell'offerta aggregata.",
    growthModels: "La trattazione della crescita economica presenta un approccio moderno e completo che integra elementi del modello di Solow tradizionale con contributi più recenti della teoria della crescita endogena. L'analisi include sistematicamente fattori come conoscenze tecniche, ricerca e sviluppo e ipotesi di convergenza, mentre la sezione sulla crescita endogena incorpora elementi dei modelli di Romer e Lucas. La distinzione tra trend e ciclo fornisce una comprensione integrata dei fenomeni di crescita di lungo periodo e fluttuazioni di breve periodo.",
    timeFrameAnalysis: "L'approccio temporale è sistematicamente sviluppato sia a livello microeconomico che macroeconomico. Nella produzione, la distinzione tra breve e lungo periodo è sviluppata attraverso l'analisi dei fattori fissi e variabili e delle economie di scala. A livello macroeconomico, la distinzione è particolarmente sofisticata, con l'offerta aggregata di breve e lungo periodo e la curva di Phillips verticale di lungo periodo e di breve periodo.",
    nonStandardTopics: "Il manuale presenta numerose innovazioni, con l'economia comportamentale che include teoria del prospetto, effetto dotazione e razionalità limitata, mentre l'economia digitale presenta prodotti informativi digitalizzati ed esternalità di rete. L'economia ambientale include un'analisi completa di protocollo di Kyoto e Accordo di Parigi. L'economia mondiale presenta un'analisi moderna che integra commercio internazionale, integrazione europea e globalizzazione, con attenzione particolare al contesto europeo attraverso l'analisi della Brexit e delle politiche fiscali europee.",
    category: "Competitor"
  },
  {
    title: "Istituzioni di Economia",
    authors: ["Giuseppe Bertola", "Anna Lo Prete"], 
    publisher: "Il Mulino",
    generalOverview: "Il manuale di Bertola e Lo Prete rappresenta un approccio moderno e sistematico all'insegnamento dell'economia politica di base, caratterizzato da una struttura pedagogica progressiva che integra efficacemente microeconomia e macroeconomia. L'opera si distingue per la sua impostazione metodologica rigorosa, evidente già dal primo capitolo dedicato ai 'Principi e metodi dell'analisi economica', che stabilisce le fondamenta epistemologiche della disciplina.",
    schoolsOfThought: "Dall'analisi emerge chiaramente un orientamento prevalentemente neoclassico, con significative aperture verso approcci più moderni. La struttura riflette la tradizione marshalliana nell'organizzazione dei contenuti microeconomici, mentre l'inclusione di 'Rischio, incertezza e informazione' indica un'importante integrazione con la teoria dell'informazione moderna. La presenza di argomenti come 'Speculazione e finanza' suggerisce un'apertura verso la finanza comportamentale e la teoria dei mercati efficienti.",
    microMacroModels: "A livello microeconomico, il testo presenta una progressione completa dei modelli standard, con il modello di scelta del consumatore basato su vincoli di bilancio e curve di indifferenza, e la teoria dell'impresa attraverso funzioni di produzione e di costo. La sezione macroeconomica rivela un approccio sofisticato che integra il modello IS-LM con modelli più avanzati, probabilmente includendo il modello di Solow e sue estensioni per l'analisi di cicli e crescita.",
    growthModels: "L'analisi dei modelli di crescita appare concentrata principalmente nel capitolo sulla 'Crescita economica', dove si affronta specificamente questo argomento come tema autonomo. La presenza di argomenti come 'Possibilità produttive' e 'Tempo e risparmio' indica che gli autori introducono i fondamenti della teoria della crescita già a livello microeconomico, probabilmente attraverso l'analisi delle scelte intertemporali e dell'accumulazione di capitale.",
    timeFrameAnalysis: "La sequenza temporale adottata segue un pattern pedagogicamente efficace, con la distinzione 'Breve e lungo periodo' introdotta esplicitamente nel contesto della teoria della produzione. La progressione dal breve al lungo periodo è evidente nell'analisi prima del comportamento dell'impresa in condizioni date e poi dell'equilibrio di mercato con possibilità di entrata e uscita. A livello macroeconomico, si affrontano prima le politiche di stabilizzazione e poi crescita e sviluppo di lungo periodo.",
    nonStandardTopics: "Il manuale presenta diversi elementi innovativi, con il capitolo su 'Rischio, incertezza e informazione' che rappresenta un'innovazione significativa, introducendo teoria dei giochi, selezione avversa e azzardo morale. La sezione su 'Speculazione e finanza' è particolarmente innovativa per un testo introduttivo, suggerendo un'integrazione tra economia reale e finanziaria. L'inclusione di 'Crisi finanziaria e politica monetaria non convenzionale' indica un aggiornamento alle problematiche economiche più recenti, probabilmente includendo l'analisi della crisi del 2008.",
    category: "Competitor"
  },
  {
    title: "L'Essenziale di Economia",
    authors: ["Stanley Brue", "Campbell McConnell", "Sean Flynn"],
    publisher: "McGraw-Hill",
    generalOverview: "Il manuale di Brue, McConnell e Flynn rappresenta un approccio pragmatico e applicativo all'insegnamento dell'economia, caratterizzato da una forte enfasi sull'utilità pratica e sulla comprensione intuitiva dei fenomeni economici. La struttura settepartita dell'opera rivela una filosofia didattica che privilegia la progressione graduale dalla comprensione dei principi fondamentali alle applicazioni più complesse, con particolare attenzione agli aspetti applicativi e alle evidenze empiriche.",
    schoolsOfThought: "L'impostazione teorica è prevalentemente mainstream, con un solido ancoraggio alla tradizione neoclassica attraverso l'approccio smithiano della 'mano invisibile' e della sovranità del consumatore. Tuttavia, presenta significative aperture verso sviluppi più moderni, incorporando elementi della teoria del benessere sociale e dell'economia ambientale, includendo il teorema di Coase. Sul fronte macroeconomico, l'approccio è eclettico ma con una chiara dominanza keynesiana, riflettendo l'approccio delle politiche di stabilizzazione tipico del consenso post-keynesiano.",
    microMacroModels: "La struttura microeconomica presenta una progressione completa ma semplificata, con il modello standard di domanda e offerta sviluppato con particolare attenzione agli aspetti grafici e intuitivi. La teoria dell'impresa presenta i modelli standard di costo attraverso l'approccio dei rendimenti decrescenti, mentre i modelli di mercato sviluppano sistematicamente concorrenza perfetta, monopolio, concorrenza monopolistica e oligopolio. La sezione macroeconomica presenta una sequenza logica che parte dalla misurazione per arrivare al modello completo di domanda e offerta aggregata.",
    growthModels: "La trattazione della crescita economica è integrata nel capitolo sul PIL, presentando un approccio moderno che combina fattori dal lato dell'offerta con elementi dal lato della domanda e dell'efficienza allocativa. Questa impostazione va oltre il modello di Solow tradizionale, incorporando elementi della teoria della crescita endogena. L'inclusione del dibattito su 'desiderabilità e sostenibilità della crescita' indica un approccio equilibrato che considera sia gli aspetti positivi che i potenziali costi ambientali e sociali.",
    timeFrameAnalysis: "L'approccio temporale è sistematicamente sviluppato sia a livello microeconomico che macroeconomico. Nei costi dell'impresa, la distinzione tra breve e lungo periodo è introdotta attraverso l'analisi dei rendimenti decrescenti e delle economie di scala. La progressione temporale è particolarmente evidente nell'analisi della concorrenza perfetta, distinguendo tra equilibrio di breve periodo e equilibrio di lungo periodo. A livello macroeconomico, l'elasticità dell'offerta introduce esplicitamente la dimensione temporale nel 'periodo immediato', 'breve periodo' e 'lungo periodo'.",
    nonStandardTopics: "Il manuale presenta numerose innovazioni didattiche, con sezioni 'Istantanea dal Mondo' che forniscono dati comparativi internazionali e rendono l'analisi più rilevante. Il trattamento dei fallimenti del mercato è innovativo per un testo introduttivo, presentando un'analisi completa di beni pubblici, esternalità e teorema di Coase. L'analisi dell'oligopolio integra la teoria dei giochi attraverso esempi accessibili come il 'dilemma del prigioniero'. Sul fronte macroeconomico, l'analisi della crisi finanziaria del 2007-2008 e il capitolo sulla disuguaglianza del reddito rappresentano innovazioni significative.",
    category: "Competitor"
  },
  {
    title: "Principi di Economia",
    authors: ["Robert Frank", "Ben Bernanke"],
    publisher: "McGraw-Hill",
    generalOverview: "Il manuale di Frank e Bernanke rappresenta un approccio distintivo e metodologicamente innovativo all'insegnamento dell'economia, caratterizzato da una filosofia pedagogica che privilegia il ragionamento economico applicato rispetto alla mera esposizione teorica. L'architettura ottapartita dell'opera è costruita attorno al concetto centrale del 'naturalismo economico', che rappresenta un tentativo di fondare l'analisi economica su principi comportamentali osservabili empiricamente.",
    schoolsOfThought: "L'approccio teorico è caratterizzato da un eclettismo metodologico sofisticato che integra diverse tradizioni di pensiero economico. Il fondamento rimane solidamente neoclassico, ma presenta significative aperture verso approcci post-neoclassici. L'economia comportamentale incorpora sistematicamente i contributi di Kahneman, Tversky e della scuola comportamentale, mentre la teoria dei giochi riflette l'influenza della 'nuova economia industriale'. L'approccio macroeconomico è distintamente keynesiano, con l'integrazione del modello IS-LM e AD-AS che indica un approccio che abbraccia la sintesi neoclassica moderna.",
    microMacroModels: "La struttura microeconomica presenta una progressione particolarmente sofisticata che va oltre i modelli standard, con la teoria dell'utilità marginale e la 'regola della spesa razionale' che forniscono una base rigorosa ma accessibile. L'innovazione principale risiede nell'integrazione sistematica della teoria dei giochi nell'analisi strategica, rendendo accessibili concetti come l'equilibrio di Nash. La sezione macroeconomica presenta una sequenza logica che parte dalla misurazione degli aggregati per sviluppare prima l'analisi di lungo periodo e poi quella di breve periodo, con il modello reddito-spesa keynesiano come fondamento integrato con il modello IS-LM e il framework AD-AS.",
    growthModels: "La trattazione della crescita economica è particolarmente approfondita e moderna, integrando elementi del modello di Solow tradizionale con contributi della teoria della crescita endogena, enfatizzando il ruolo cruciale della produttività media del lavoro. Il modello include sistematicamente capitale umano, capitale fisico, tecnologia, imprenditorialità e contesto istituzionale, riflettendo un approccio che va oltre la crescita puramente quantitativa. L'analisi su risparmio, investimenti e formazione di capitale completa l'approccio attraverso l'esame dei meccanismi di finanziamento e del ruolo del sistema finanziario.",
    timeFrameAnalysis: "L'approccio temporale è particolarmente sofisticato e rappresenta una delle innovazioni principali del testo. L'innovazione principale risiede nella struttura macroeconomica, dove gli autori invertono la sequenza tradizionale presentando prima l'economia del lungo periodo e poi quella del breve periodo. Questa scelta riflette la convinzione che la crescita costituisca il fenomeno economico fondamentale, con le fluttuazioni cicliche come deviazioni temporanee dal trend di lungo periodo.",
    nonStandardTopics: "Il manuale presenta numerose innovazioni distintive, con il capitolo sui 'quattro errori comuni nel processo decisionale' e l'economia comportamentale che incorpora sistematicamente euristiche cognitive e bias comportamentali. L'economia dell'informazione presenta argomenti tipicamente riservati a corsi avanzati, come il 'modello dei bidoni' e selezione avversa. Le 'esternalità posizionali' e le 'corse agli armamenti di posizione' collegano economia e psicologia sociale. L'approccio metodologico è caratterizzato da un'enfasi sistematica sull'applicazione pratica, con numerose appendici matematiche che integrano rigore formale e comprensione intuitiva.",
    category: "Competitor"
  },
  {
    title: "Essenziale di Economia",
    authors: ["Paul Krugman", "Robin Wells"],
    publisher: "Zanichelli",
    generalOverview: "Il manuale di Krugman e Wells rappresenta un approccio distintivo all'insegnamento dell'economia, caratterizzato da una filosofia pedagogica che privilegia la comprensione intuitiva dei principi economici attraverso applicazioni concrete e casi di studio del mondo reale. L'architettura ottapartita dell'opera è costruita attorno agli 'undici principi fondamentali dell'economia' che costituiscono il filo conduttore dell'intera opera, riflettendo la convinzione che l'economia sia essenzialmente una disciplina unificata da alcuni principi centrali.",
    schoolsOfThought: "L'impostazione teorica è prevalentemente mainstream con una chiara matrice neoclassica, ma presenta significative aperture verso sviluppi più recenti dell'analisi economica. I principi riflettono l'approccio robbinsiano alla definizione dell'economia, mentre l'enfasi sulla 'mano invisibile' presenta la tradizione smithiana in forma moderna. Tuttavia, l'approccio è più sfumato rispetto ai manuali puramente neoclassici, con un riconoscimento equilibrato sia dei meriti che dei limiti del meccanismo di mercato. Sul fronte macroeconomico, l'approccio è distintamente keynesiano, con particolare enfasi sul ruolo delle politiche di stabilizzazione.",
    microMacroModels: "La struttura microeconomica presenta una progressione completa ma accessibile dei modelli standard, con il modello di domanda e offerta sviluppato con particolare attenzione agli aspetti grafici e alle applicazioni pratiche. L'innovazione principale nell'oligopolio risiede nell'integrazione del 'dilemma del prigioniero' come strumento per comprendere il comportamento strategico. La sezione macroeconomica presenta una sequenza logica che parte dalla misurazione degli aggregati per sviluppare prima l'analisi di lungo periodo e poi quella di breve periodo, con i modelli delle politiche fiscali e monetarie che completano il framework.",
    growthModels: "La trattazione della crescita economica presenta un approccio moderno e completo che integra elementi del modello di Solow tradizionale con contributi più recenti, enfatizzando il ruolo cruciale della produttività come determinante del PIL reale pro capite. L'analisi include sistematicamente capitale fisico, capitale umano, tecnologia e risorse naturali, utilizzando il framework della 'funzione di produzione aggregata'. La sezione sui 'miracoli, delusioni e fallimenti' presenta un'analisi comparativa internazionale che include il miracolo dell'Asia orientale e la discussione sulla sostenibilità della crescita mondiale.",
    timeFrameAnalysis: "L'approccio temporale è sistematicamente sviluppato sia a livello microeconomico che macroeconomico. Nei costi di produzione, la distinzione tra breve e lungo periodo è introdotta attraverso l'analisi dei rendimenti di scala e delle economie di scala. A livello macroeconomico, la distinzione temporale è particolarmente evidente nel modello DA-OA, dove si analizza l'offerta aggregata di breve e lungo periodo. La discussione del passaggio 'dal breve periodo al lungo periodo' mostra come l'economia si aggiusti verso l'equilibrio di lungo periodo.",
    nonStandardTopics: "Il manuale presenta numerose innovazioni didattiche distintive, con la struttura basata sugli 'undici principi fondamentali' che rappresenta un'innovazione pedagogica importante. Le sezioni 'Trabocchetti' identificano e correggono errori comuni che gli studenti tendono a commettere. L'economia dello stato sociale presenta un'analisi completa di povertà, disuguaglianza e politiche redistributive. Il commercio internazionale presenta un'analisi moderna che integra teoria del commercio, flussi di capitali e tassi di cambio, mentre le sezioni 'E in Italia...' contestualizzano i concetti teorici nella realtà economica italiana.",
    category: "Competitor"
  },
  {
    title: "Economia Principi e Applicazioni",
    authors: ["Marc Lieberman", "Robert Hall"],
    publisher: "Apogeo",
    generalOverview: "Il manuale di Lieberman e Hall rappresenta un approccio metodologicamente rigoroso all'insegnamento dell'economia, caratterizzato da una particolare enfasi sull'applicazione pratica dei principi teorici e sulla comprensione dei meccanismi economici attraverso esempi concreti. La struttura del testo è costruita attorno al principio del costo-opportunità come concetto unificante dell'analisi economica, sviluppato sistematicamente e applicato coerentemente in tutti i successivi sviluppi teorici.",
    schoolsOfThought: "L'impostazione teorica è solidamente ancorata alla tradizione neoclassica, con particolare enfasi sull'approccio marshalliano all'analisi dei mercati. Tuttavia, presenta significative aperture verso sviluppi più moderni dell'analisi economica, con l'economia industriale moderna nel monopolio e concorrenza imperfetta, e un'analisi approfondita dei fallimenti del mercato che include teoria dell'informazione, esternalità e beni pubblici. Sul fronte macroeconomico, l'approccio è prevalentemente keynesiano, con il modello reddito-spesa come framework centrale integrato con elementi della sintesi neoclassica.",
    microMacroModels: "La struttura microeconomica presenta una progressione completa e rigorosa dei modelli standard, con la teoria del consumatore sviluppata attraverso sia l'approccio dell'utilità marginale che quello delle curve di indifferenza. La teoria dell'impresa integra l'approccio del ricavo totale-costo totale con quello marginale, mentre la sezione sulle strutture di mercato presenta una trattazione completa con l'integrazione della teoria dei giochi nell'analisi dell'oligopolio. La sezione macroeconomica presenta una sequenza logica che parte dalla misurazione degli aggregati per sviluppare prima l'analisi della crescita di lungo periodo e poi quella delle fluttuazioni di breve periodo.",
    growthModels: "La trattazione della crescita economica presenta un approccio moderno e completo che integra elementi del modello di Solow tradizionale con contributi più recenti, enfatizzando il ruolo del rapporto occupazione/popolazione e della produttività come determinanti fondamentali. L'analisi include sistematicamente accumulo di capitale fisico, capitale umano e progresso tecnologico, utilizzando il framework del 'mercato dei fondi mutuabili' per collegare risparmio, investimenti e crescita. La sezione sui 'costi della crescita economica' presenta un'analisi equilibrata che considera trade-off con altri obiettivi sociali.",
    timeFrameAnalysis: "L'approccio temporale è sistematicamente sviluppato sia a livello microeconomico che macroeconomico, con la distinzione tra breve e lungo periodo introdotta attraverso l'analisi dei fattori fissi e variabili nella produzione. L'equilibrio di breve periodo evolve verso l'equilibrio di lungo periodo attraverso l'entrata e l'uscita di imprese, applicato sistematicamente negli altri modelli di mercato. A livello macroeconomico, la distinzione temporale è evidente nella struttura dell'opera, dove si presenta prima l'analisi di lungo periodo e poi quella di breve periodo.",
    nonStandardTopics: "Il manuale presenta numerose innovazioni distintive, con le sezioni 'Applicare la teoria' che collegano sistematicamente teoria ed evidenza empirica attraverso casi di studio dettagliati. Il mercato del lavoro presenta un'analisi particolarmente approfondita che include discriminazione statistica, differenziali compensativi e barriere all'entrata. L'efficienza economica rappresenta un'innovazione significativa per un testo introduttivo, presentando asimmetrie informative, selezione avversa e problemi principale-agente. L'analisi del sistema bancario include la Banca Centrale Europea e l'euro, con applicazioni dettagliate sulla crisi finanziaria del 2008.",
    category: "Competitor"
  },
  {
    title: "L'Essenziale di Economia",
    authors: ["N. Gregory Mankiw"],
    publisher: "Zanichelli", 
    generalOverview: "Il manuale di Mankiw rappresenta l'approccio pedagogico più sistematicamente strutturato nell'insegnamento dell'economia introduttiva, caratterizzato da una filosofia didattica che privilegia la comprensione intuitiva attraverso principi unificanti e applicazioni concrete. L'architettura dell'opera, organizzata in nove parti tematiche, è costruita attorno ai 'dieci principi dell'economia' come framework concettuale centrale che costituiscono il DNA concettuale dell'intera opera.",
    schoolsOfThought: "L'impostazione teorica è prevalentemente mainstream con una solida base neoclassica, ma presenta un approccio equilibrato che riconosce sia i meriti che i limiti del meccanismo di mercato. Il Principio 6 presenta la tradizione smithiana, mentre il Principio 7 riconosce esplicitamente i fallimenti del mercato. La sezione microeconomica riflette l'approccio marshalliano classico, mentre l'ampio spazio dedicato ai fallimenti del mercato indica un'integrazione con la moderna economia del benessere. Sul fronte macroeconomico, l'approccio è distintamente keynesiano per l'analisi di breve periodo, con la distinzione sistematica tra breve e lungo periodo che riflette l'influenza della sintesi neoclassica.",
    microMacroModels: "La struttura microeconomica presenta una progressione completa e pedagogicamente efficace dei modelli standard, con il modello di domanda e offerta sviluppato con particolare attenzione agli aspetti grafici e alle applicazioni pratiche. L'innovazione principale nell'oligopolio risiede nell'integrazione sistematica della teoria dei giochi attraverso il 'dilemma del prigioniero' e l'analisi dei giochi sequenziali. La sezione macroeconomica presenta una sequenza logica che parte dalla misurazione degli aggregati per sviluppare prima l'analisi di lungo periodo e poi quella di breve periodo, con il modello AD-AS come framework centrale.",
    growthModels: "La trattazione della crescita economica presenta un approccio moderno e accessibile che enfatizza il ruolo cruciale della produttività come determinante del tenore di vita, integrando elementi del modello di Solow con contributi più recenti sulla crescita endogena. L'analisi include sistematicamente capitale fisico, capitale umano, risorse naturali, progresso tecnologico e stabilità istituzionale. La discussione sui 'rendimenti decrescenti ed effetto catch-up' fornisce una spiegazione intuitiva della convergenza economica, mentre le 'politiche di crescita economica' presentano un approccio equilibrato.",
    timeFrameAnalysis: "L'approccio temporale è sistematicamente sviluppato e rappresenta una delle caratteristiche distintive del testo. A livello microeconomico, la distinzione temporale è introdotta nei costi di produzione, analizzando costi fissi e variabili nel breve periodo ed economie/diseconomie di scala nel lungo periodo. A livello macroeconomico, la distinzione temporale è particolarmente sofisticata, con parti separate dedicate all'analisi di lungo periodo e alle fluttuazioni di breve periodo. La distinzione tra offerta aggregata di breve e lungo periodo mostra chiaramente i meccanismi di aggiustamento temporale.",
    nonStandardTopics: "Il manuale presenta numerose innovazioni didattiche rivoluzionarie, con la struttura basata sui 'dieci principi fondamentali' che fornisce un framework concettuale unificante. Le sezioni 'Analisi di un Caso' collegano teoria ed evidenza empirica attraverso esempi concreti e attuali. Gli 'strumenti di base della finanza' rappresentano un'innovazione significativa per un testo introduttivo, presentando valore attuale, gestione del rischio e valutazione delle attività finanziarie. Il commercio internazionale presenta un'analisi completa che include effetti distributivi e argomentazioni protezioniste, mentre l'integrazione sistematica della teoria dei giochi nell'oligopolio rende accessibili concetti avanzati.",
    category: "Competitor"
  },
  {
    title: "Principi di Economia",
    authors: ["N. Gregory Mankiw"],
    publisher: "Zanichelli",
    generalOverview: "Il manuale 'Principi di Economia' di Mankiw rappresenta la versione completa e approfondita del pensiero pedagogico dell'autore, caratterizzata da un approccio sistematico e metodologicamente rigoroso che integra teoria economica tradizionale con sviluppi contemporanei della disciplina. L'architettura dell'opera, organizzata in tredici parti tematiche e trentaquattro capitoli, mantiene il framework concettuale dei 'principi fondamentali dell'economia' ma li sviluppa attraverso un'analisi molto più approfondita e sofisticata.",
    schoolsOfThought: "L'impostazione teorica è caratterizzata da un pluralismo metodologico esplicito e sistematico. Mentre mantiene una base solidamente neoclassica, il testo presenta un approccio molto più inclusivo verso le scuole di pensiero alternative, identificando esplicitamente diverse tradizioni: economia neoclassica, femminista, marxista e scuola austriaca. La sezione microeconomica segue l'approccio marshalliano tradizionale ma integra sistematicamente elementi di economia comportamentale, teoria dell'informazione e economia istituzionale. La sezione sull'economia eterodossa presenta sistematicamente economia istituzionale, femminista e della complessità.",
    microMacroModels: "La struttura microeconomica presenta una progressione particolarmente completa e rigorosa, con la teoria del consumatore sviluppata attraverso sia l'approccio dell'utilità marginale che quello delle curve di indifferenza, includendo analisi avanzate come 'sentiero di espansione del reddito' e 'curva di Engel'. La sezione sulle strutture di mercato include non solo i modelli standard ma anche la teoria dei mercati contendibili. La sezione macroeconomica presenta una sequenza particolarmente sofisticata che integra diversi framework teorici, presentando esplicitamente diversi modelli (nuovo classico, neokeynesiano, ciclo economico reale) e il 'modello di Romer' come alternativa moderna.",
    growthModels: "La trattazione della crescita economica è particolarmente approfondita e moderna, presentando sistematicamente i fattori tradizionali ma includendo anche elementi più avanzati come effetti di spillover, rendimenti crescenti e path dependence. L'analisi include esplicitamente la 'teoria della crescita endogena' come sviluppo moderno che supera i limiti del modello di Solow tradizionale. La sezione sulle politiche di crescita è particolarmente completa, includendo non solo fattori economici tradizionali ma anche aspetti istituzionali, ambientali e sociali.",
    timeFrameAnalysis: "L'approccio temporale è sistematicamente sviluppato e rappresenta una delle caratteristiche più sofisticate dell'opera. A livello microeconomico, la distinzione è sviluppata attraverso l'analisi dei costi fissi e variabili e delle economie di scala esterne. A livello macroeconomico, la distinzione temporale è particolarmente sofisticata, con parti separate dedicate all'economia di lungo periodo e alle fluttuazioni di breve periodo. L'analisi della curva di Phillips presenta una trattazione particolarmente avanzata della dinamica temporale, distinguendo tra effetti di breve e lungo periodo delle politiche monetarie.",
    nonStandardTopics: "Il manuale presenta numerose innovazioni che lo rendono unico nel panorama dei testi introduttivi. La sezione sull'economia eterodossa presenta sistematicamente approcci teorici alternativi che raramente trovano spazio nei manuali mainstream. L'economia dell'informazione e comportamentale integra sistematicamente teoria dei giochi, problemi principale-agente e bias comportamentali. Le teorie economiche eterodosse presentano economia istituzionale, femminista e della complessità. La macroeconomia internazionale include analisi contemporanee di shock economici, Unione Europea ed economia della sostenibilità, con l'inclusione di prospettive critiche come l'economia marxista e la scuola austriaca che rappresenta un tentativo di fornire una formazione economica più completa e pluralistica.",
    category: "Competitor"
  },
  {
    title: "Economia",
    authors: ["Parravicini e Graffi"],
    publisher: "Egea",
    generalOverview: "Il manuale di Parravicini e Graffi rappresenta un approccio distintivo all'insegnamento dell'economia, caratterizzato da una particolare attenzione alla dimensione storica e metodologica della disciplina. L'architettura dell'opera, che si apre con un'ampia sezione sui 'Lineamenti di storia del pensiero economico' curata da Mario Pomini, rivela una filosofia didattica che privilegia la comprensione dell'evoluzione teorica come chiave per comprendere i contenuti contemporanei.",
    schoolsOfThought: "L'impostazione teorica dell'opera è caratterizzata da un pluralismo storico esplicito e sistematico. La sezione introduttiva di storia del pensiero presenta un'evoluzione completa dalle origini classiche attraverso la rivoluzione marginalista fino agli sviluppi contemporanei. L'approccio microeconomico segue prevalentemente la tradizione neoclassica marshalliana, mentre l'inclusione sistematica di elementi storici indica un approccio che contestualizza storicamente i modelli teorici. Sul fronte macroeconomico, l'approccio è distintamente keynesiano, con l'integrazione del modello IS-LM e DA-OA per l'analisi delle variazioni di prezzo.",
    microMacroModels: "La struttura microeconomica presenta una progressione completa e metodologicamente rigorosa, con la teoria del consumatore sviluppata sistematicamente attraverso vincoli di bilancio e curve di indifferenza. La teoria dell'impresa presenta un'analisi particolarmente approfondita che distingue chiaramente tra efficienza tecnica ed economica, sviluppando sistematicamente le relazioni di dualità tra struttura di produzione e di costo. La sezione macroeconomica presenta una sequenza logica che parte dal circuito del reddito per sviluppare il modello keynesiano di base, poi il modello IS-LM e infine il modello DA-OA.",
    growthModels: "La trattazione della crescita economica non appare come argomento autonomo, suggerendo un approccio che integra elementi di crescita all'interno dell'analisi macroeconomica generale. L'approccio sembra privilegiare l'analisi delle fluttuazioni di breve periodo rispetto alla crescita di lungo periodo, coerentemente con l'impostazione keynesiana dell'opera. Tuttavia, la sezione di storia del pensiero include probabilmente riferimenti ai modelli di crescita classici fornendo una prospettiva storica sui meccanismi di crescita.",
    timeFrameAnalysis: "L'approccio temporale è sistematicamente sviluppato sia a livello microeconomico che macroeconomico. Nella teoria dell'impresa, la distinzione tra breve e lungo periodo è sviluppata attraverso l'analisi dei rendimenti di scala e delle economie di scala, con particolare attenzione alla 'dualità tra struttura di produzione e di costo'. A livello macroeconomico, la distinzione temporale è particolarmente evidente nel modello DA-OA, dove si analizza l'offerta aggregata di breve e lungo periodo attraverso il mercato del lavoro.",
    nonStandardTopics: "Il manuale presenta diverse innovazioni che lo distinguono dai testi tradizionali. La sezione iniziale di storia del pensiero economico rappresenta un'innovazione significativa, raramente presente in manuali introduttivi con tale ampiezza e sistematicità. Le sezioni 'Economia alla prova' rappresentano un'innovazione didattica importante, collegando teoria ed evidenza empirica. I fallimenti del mercato presentano una trattazione completa che include il 'mercato dei bidoni' come esempio di selezione avversa. Il Sistema Europeo di Banche Centrali e la BCE rappresenta un'innovazione particolarmente rilevante per il contesto europeo, mentre il commercio internazionale distingue tra 'commercio verticale' e 'commercio orizzontale' riflettendo gli sviluppi più recenti della teoria del commercio internazionale.",
    category: "Competitor"
  },
  {
    title: "Economia",
    authors: ["Paul Samuelson", "William Nordhaus"],
    publisher: "McGraw-Hill",
    generalOverview: "Il manuale di Samuelson e Nordhaus rappresenta l'eredità del testo più influente nella storia dell'insegnamento dell'economia, caratterizzato da un approccio enciclopedico e sistematico che integra tradizione teorica consolidata con continui aggiornamenti alle problematiche economiche contemporanee. L'architettura dell'opera mantiene l'impostazione classica samuelsoniana, procedendo dai 'Concetti di base' attraverso la microeconomia e la macroeconomia fino alle applicazioni internazionali, con l'innovazione principale nell'integrazione sistematica di eventi economici contemporanei dalla Grande Crisi del 2008 alla pandemia COVID-19 e alla guerra russo-ucraina.",
    schoolsOfThought: "L'impostazione teorica è caratterizzata dalla celebre 'sintesi neoclassica' che ha dominato l'insegnamento economico per decenni. L'approccio integra elementi della tradizione classica con contributi keynesiani. La sezione microeconomica segue fedelmente l'approccio marshalliano dell'equilibrio parziale, mentre l'economia del benessere presenta sistematicamente i teoremi fondamentali riflettendo l'influenza della tradizione paretiana. Sul fronte macroeconomico, l'approccio è distintamente keynesiano per l'analisi di breve periodo, con il modello IS-LM come framework centrale, mentre l'integrazione con l'analisi di lungo periodo riflette l'influenza della sintesi neoclassica e dei contributi di Solow.",
    microMacroModels: "La struttura microeconomica presenta una progressione completa e sistematica che va dai fondamenti della scelta del consumatore attraverso la teoria della produzione fino all'analisi delle strutture di mercato. L'analisi dei costi presenta una trattazione particolarmente approfondita che distingue tra costi contabili ed economici, mentre la sezione sulle strutture di mercato procede dalla concorrenza perfetta al monopolio, all'oligopolio con teoria dei giochi e alla concorrenza monopolistica. La sezione macroeconomica presenta una sequenza logica che parte dalla contabilità nazionale per sviluppare il modello DA-OA, poi l'analisi di disoccupazione e inflazione, il modello del moltiplicatore, il sistema finanziario e infine il modello IS-LM completo.",
    growthModels: "La trattazione della crescita economica presenta un approccio moderno e completo che integra i 'quattro fattori della crescita' seguendo la tradizione del modello di Solow, ma include anche sviluppi più recenti della teoria della crescita endogena. L'analisi include sistematicamente il 'metodo della contabilità della crescita' sviluppato da Solow e Denison, che permette di decomporre la crescita del PIL nei contributi dei diversi fattori. La distinzione tra 'modelli di crescita nei Paesi sviluppati' e 'modelli di sviluppo nel resto del mondo' fornisce una prospettiva comparativa internazionale, includendo strategie di sviluppo alternative e l'analisi delle trappole della povertà.",
    timeFrameAnalysis: "L'approccio temporale è sistematicamente sviluppato sia a livello microeconomico che macroeconomico, riflettendo la tradizione marshalliana della distinzione temporale. Nella produzione, la distinzione tra breve e lungo periodo è sviluppata attraverso l'analisi dei fattori fissi e variabili e dei rendimenti di scala. A livello macroeconomico, la distinzione temporale è particolarmente sofisticata, con il modello DA-OA che distingue esplicitamente tra offerta aggregata di breve e lungo periodo, mentre l'analisi della curva di Phillips sviluppa la distinzione tra effetti di breve e lungo periodo delle politiche monetarie.",
    nonStandardTopics: "Il manuale presenta numerose innovazioni che riflettono la sua continua evoluzione nel tempo. La 'Microeconomia applicata' include argomenti spesso trascurati nei testi introduttivi: sistema fiscale, politiche antitrust, risorse naturali e ambiente, e disuguaglianza del reddito. Il capitolo su 'Concorrenza monopolistica, rischio e incertezza' rappresenta un'innovazione significativa, integrando teoria delle strutture di mercato con economia dell'informazione e teoria del rischio. L'economia aperta presenta un'analisi particolarmente completa che include sistema monetario internazionale, politiche di stabilizzazione in economia aperta e l'Unione Monetaria Europea. Il capitolo sull'instabilità del nuovo Millennio analizza tre crisi successive: Grande Crisi del 2008, pandemia COVID-19 e guerra russo-ucraina, fornendo strumenti per comprendere le crisi economiche attuali.",
    category: "Competitor"
  },
  {
    title: "Elementi di Economia", 
    authors: ["John Sloman", "Dean Garratt"],
    publisher: "Il Mulino",
    generalOverview: "Il manuale di Sloman e Garratt rappresenta un approccio distintivo all'insegnamento dell'economia, caratterizzato da una filosofia pedagogica che privilegia la comprensione intuitiva dei meccanismi economici attraverso esempi concreti e applicazioni pratiche. L'architettura dell'opera procede dai problemi economici fondamentali alle applicazioni internazionali, distinguendosi per l'integrazione sistematica di contributi specialistici di esperti italiani che arricchiscono l'opera con prospettive specifiche e approfondimenti tecnici.",
    schoolsOfThought: "L'impostazione teorica è caratterizzata da un pragmatismo metodologico che integra diversi approcci teorici senza privilegiare dogmaticamente una singola scuola. La sezione microeconomica segue prevalentemente l'approccio neoclassico marshalliano, mentre l'inclusione dell'economia comportamentale indica un'apertura verso gli sviluppi più recenti incorporando insights dalla psicologia economica. Sul fronte macroeconomico, l'approccio è distintamente keynesiano, con il modello del moltiplicatore keynesiano come framework centrale integrato con l'analisi IS-LM. La presenza di un dibattito esplicito tra 'keynesiani e monetaristi' indica un approccio equilibrato che presenta diverse prospettive teoriche.",
    microMacroModels: "La struttura microeconomica presenta una progressione completa e pedagogicamente efficace, con il modello di domanda e offerta sviluppato con particolare attenzione ai meccanismi di aggiustamento del mercato e all'economia comportamentale. La teoria del consumatore presenta un'analisi rigorosa attraverso vincoli di bilancio, curve di indifferenza e ottimizzazione. La sezione sulle forme di mercato presenta una progressione completa dalla concorrenza perfetta al monopolio, alla concorrenza monopolistica e all'oligopolio, con integrazione sistematica della teoria dei giochi. La sezione macroeconomica presenta una sequenza logica che parte dalle problematiche macroeconomiche generali per sviluppare il modello keynesiano di determinazione del reddito, l'analisi monetaria, le politiche economiche e infine il modello IS-LM completo.",
    growthModels: "La trattazione della crescita economica è integrata nel capitolo su 'Crescita economica e andamento ciclico', suggerendo un approccio che collega crescita di lungo periodo e fluttuazioni cicliche. L'approccio sembra privilegiare l'analisi delle politiche di crescita attraverso le 'politiche pubbliche dal lato dell'offerta su imprese e industrie', indicando un'attenzione particolare agli aspetti microeconomici della crescita e al ruolo delle politiche industriali. Questa scelta editoriale riflette probabilmente l'influenza dell'esperienza europea in materia di politiche industriali e di crescita.",
    timeFrameAnalysis: "L'approccio temporale è sistematicamente sviluppato sia a livello microeconomico che macroeconomico. Nella produzione, la distinzione tra breve e lungo periodo è sviluppata attraverso l'analisi dei fattori fissi e variabili, dei costi e delle economie di scala. A livello macroeconomico, l'aggiustamento nel tempo introduce esplicitamente la dimensione temporale nell'analisi dei mercati. L'analisi keynesiana sviluppa la distinzione tra equilibrio di breve periodo determinato dalla domanda effettiva e aggiustamenti di lungo periodo, mentre il modello IS-LM integra questa distinzione temporale nell'analisi delle politiche economiche.",
    nonStandardTopics: "Il manuale presenta diverse innovazioni che lo distinguono dai testi tradizionali. L'inclusione dell'economia comportamentale rappresenta un'innovazione significativa per un testo introduttivo, incorporando bias cognitivi, euristica decisionale e limitazioni alla razionalità. I 'limiti della teoria tradizionale' forniscono una prospettiva critica sui modelli neoclassici standard. I fallimenti del mercato presentano una trattazione particolarmente completa che include 'potere monopolistico' e diverse forme di intervento pubblico. L'economia internazionale presenta un'analisi moderna che integra commercio internazionale, globalizzazione e istituzioni monetarie internazionali, con un'analisi particolarmente dettagliata dell'Unione Monetaria Europea e delle 'origini dell'euro', fornendo una comprensione specifica del contesto istituzionale europeo.",
    category: "Competitor"
  },
  {
    title: "L'Economia",
    authors: ["The CORE Team"],
    publisher: "Pearson",
    generalOverview: "Il manuale 'The CORE Team' rappresenta un approccio rivoluzionario all'insegnamento dell'economia, caratterizzato da una filosofia pedagogica che privilegia la comprensione dei problemi economici contemporanei attraverso un'integrazione sistematica di storia economica, evidenza empirica e modellizzazione teorica. L'architettura dell'opera è costruita attorno al concetto centrale del 'bastone da hockey della storia' - la rappresentazione grafica dell'accelerazione della crescita economica negli ultimi secoli - che costituisce il filo conduttore dell'intera narrazione.",
    schoolsOfThought: "L'impostazione teorica è caratterizzata da un pluralismo metodologico esplicito che integra diverse tradizioni di pensiero economico senza privilegiare dogmaticamente una singola scuola. L'approccio incorpora elementi della tradizione neoclassica ma li arricchisce sistematicamente con contributi post-keynesiani, istituzionalisti e comportamentali. L'analisi della 'rivoluzione capitalista' presenta un'analisi storica che riflette l'influenza della scuola delle varietà di capitalismo e dell'economia istituzionale comparata. Le interazioni sociali e sul potere incorporano sistematicamente elementi della teoria dei giochi, dell'economia comportamentale e dell'economia politica.",
    microMacroModels: "La struttura dell'opera presenta un'integrazione innovativa tra modelli microeconomici e macroeconomici che supera la tradizionale divisione disciplinare. Il modello di ottimizzazione del consumatore include sistematicamente effetti reddito e sostituzione, ma lo contestualizza storicamente attraverso l'analisi dell'evoluzione dell'orario di lavoro. L'impresa presenta un modello sofisticato che integra problemi principale-agente, rendite da occupazione e salari di efficienza. L'analisi integrata dei mercati concorrenziali e del mercato del lavoro supera la tradizionale separazione tra teoria dei prezzi e macroeconomia, con il modello di 'fissazione del salario e del prezzo' che fornisce una microfondazione per l'analisi macroeconomica della disoccupazione.",
    growthModels: "La trattazione della crescita economica è integrata sistematicamente nell'intera opera, partendo dal 'bastone da hockey della storia' e sviluppandosi attraverso 'progresso tecnico, demografia e crescita economica'. L'approccio sviluppa modelli che integrano elementi del modello di Solow con contributi della teoria della crescita endogena e dell'economia evolutiva. L'analisi della 'trappola malthusiana' e della 'fuga dalla trappola malthusiana' fornisce una prospettiva storica sui meccanismi di crescita che va oltre i modelli puramente formali, incorporando sistematicamente fattori istituzionali, demografici e tecnologici.",
    timeFrameAnalysis: "L'approccio temporale è particolarmente innovativo, integrando sistematicamente prospettive storiche di lungo periodo con analisi di breve periodo. L'analisi delle 'rendite, prezzi e dinamica del mercato' presenta esplicitamente la distinzione tra 'equilibri di breve e di lungo periodo' nel contesto della dinamica dei prezzi. L'analisi temporale è arricchita dall'integrazione di elementi di economia finanziaria che forniscono una comprensione più completa dei meccanismi di aggiustamento temporale. La sezione macroeconomica integra fluttuazioni cicliche con politiche di stabilizzazione, mostrando come le politiche di breve periodo interagiscano con tendenze di lungo periodo.",
    nonStandardTopics: "Il manuale presenta numerose innovazioni che lo rendono unico nel panorama dei testi economici. Le 'interazioni sociali' introducono sistematicamente teoria dei giochi, economia comportamentale e esperimenti economici fin dalle prime fasi del corso. 'Proprietà e potere' rappresenta un'innovazione particolarmente significativa, presentando un'analisi esplicita delle relazioni di potere nell'economia utilizzando il modello 'Angela e Bruno' per illustrare concetti di efficienza paretiana, equità e distribuzione del surplus. L'organizzazione dell'impresa integra sistematicamente problemi principale-agente, contratti incompleti e salari di efficienza. I fallimenti del mercato presentano una trattazione particolarmente completa che include 'mercati mancanti', 'contratti incompleti' e problemi di informazione asimmetrica, mentre l'approccio pedagogico è caratterizzato dall'uso sistematico di dati empirici, esempi storici e evidenze sperimentali.",
    category: "Competitor"
  }
];

export const economicModelsData = [
  {
    id: "1",
    name: "Modello di Domanda e Offerta",
    description: "Il modello fondamentale che spiega la formazione dei prezzi attraverso l'interazione tra domanda e offerta di mercato.",
    type: "microeconomico",
    keyConcepts: ["Equilibrio di mercato", "Prezzo di equilibrio", "Elasticità", "Surplus del consumatore e del produttore"],
    applications: ["Analisi dei mercati", "Politiche di prezzo", "Effetti delle tasse", "Regolamentazione"],
    schoolId: "neoclassica"
  },
  {
    id: "2", 
    name: "Modello IS-LM",
    description: "Modello macroeconomico che analizza l'equilibrio simultaneo nel mercato dei beni (IS) e della moneta (LM).",
    type: "macroeconomico",
    keyConcepts: ["Curva IS", "Curva LM", "Tasso di interesse", "Reddito nazionale", "Politica fiscale e monetaria"],
    applications: ["Analisi delle politiche macroeconomiche", "Effetti della spesa pubblica", "Politica monetaria"],
    schoolId: "post-keynesiana"
  },
  {
    id: "3",
    name: "Modello di Crescita di Solow",
    description: "Modello neoclassico che spiega la crescita economica di lungo periodo attraverso accumulo di capitale e progresso tecnologico.",
    type: "macroeconomico", 
    keyConcepts: ["Stato stazionario", "Funzione di produzione", "Tasso di risparmio", "Progresso tecnologico", "Convergenza"],
    applications: ["Analisi della crescita", "Politiche di sviluppo", "Confronti internazionali", "Investimenti"],
    schoolId: "neoclassica"
  },
  {
    id: "4",
    name: "Modello di Concorrenza Perfetta",
    description: "Modello che descrive un mercato ideale con molti compratori e venditori, prodotti omogenei e informazione perfetta.",
    type: "microeconomico",
    keyConcepts: ["Price taker", "Efficienza allocativa", "Profitto economico nullo", "Libertà di entrata/uscita"],
    applications: ["Benchmark di efficienza", "Analisi del benessere", "Politiche antitrust"],
    schoolId: "neoclassica"
  },
  {
    id: "5",
    name: "Modello di Monopolio",
    description: "Modello che analizza il comportamento di un'impresa che ha il controllo esclusivo di un mercato.",
    type: "microeconomico",
    keyConcepts: ["Potere di mercato", "Discriminazione di prezzo", "Perdita secca", "Barriere all'entrata"],
    applications: ["Regolamentazione", "Politiche antitrust", "Pricing strategies", "Analisi del benessere"],
    schoolId: "neoclassica"
  },
  {
    id: "6",
    name: "Modello AD-AS",
    description: "Modello che spiega il livello generale dei prezzi e dell'output attraverso domanda e offerta aggregate.",
    type: "macroeconomico",
    keyConcepts: ["Domanda aggregata", "Offerta aggregata", "Inflazione", "Disoccupazione", "Shock economici"],
    applications: ["Analisi delle fluttuazioni cicliche", "Politiche di stabilizzazione", "Analisi dell'inflazione"],
    schoolId: "neoclassica"
  },
  {
    id: "7",
    name: "Teoria dei Giochi",
    description: "Framework per analizzare le decisioni strategiche quando il risultato dipende dalle azioni di più agenti.",
    type: "microeconomico", 
    keyConcepts: ["Equilibrio di Nash", "Strategie dominanti", "Giochi cooperativi", "Dilemma del prigioniero"],
    applications: ["Oligopolio", "Aste", "Contrattazione", "Politiche pubbliche"],
    schoolId: "comportamentale"
  },
  {
    id: "8", 
    name: "Modello di Instabilità Finanziaria di Minsky",
    description: "Modello che spiega come la stabilità economica porti endogenamente all'instabilità attraverso cicli del credito.",
    type: "macroeconomico",
    keyConcepts: ["Ipotesi di instabilità", "Cicli del credito", "Finanza speculativa", "Momenti Minsky"],
    applications: ["Analisi delle crisi finanziarie", "Regolamentazione bancaria", "Politiche macroprudenziali"],
    schoolId: "post-keynesiana"
  },
  {
    id: "9",
    name: "Modello di Azione Umana (Praxeologia)",  
    description: "Framework metodologico austriaco che analizza l'economia partendo dall'azione umana intenzionale.",
    type: "microeconomico",
    keyConcepts: ["Azione intenzionale", "Preferenze temporali", "Calcolo economico", "Ordine spontaneo"],
    applications: ["Teoria del valore", "Teoria dell'imprenditorialità", "Critica alla pianificazione centrale"],
    schoolId: "austriaca"
  },
  {
    id: "10",
    name: "Modelli Basati su Agenti (ABM)",
    description: "Modelli computazionali che simulano le interazioni di agenti autonomi per studiare proprietà emergenti del sistema.",
    type: "macroeconomico",
    keyConcepts: ["Agenti eterogenei", "Proprietà emergenti", "Non-linearità", "Adattamento", "Reti complesse"],
    applications: ["Simulazione di mercati", "Analisi di crisi sistemiche", "Politiche basate su evidenza"],
    schoolId: "complessita"
  }
];

export const comparisonsData = [
  // I dati dei confronti verranno inseriti qui
];

export const economicConceptsData = [
  {
    id: "27c39eb8-e05a-48c6-992f-4472ed87b617",
    name: "Efficienza Paretiana",
    definition: "Una situazione in cui non è possibile migliorare la condizione di un individuo senza peggiorare quella di almeno un altro individuo.",
    relatedConcepts: ["Ottimo Paretiano", "Teoria del Benessere", "Allocazione delle Risorse"],
    category: "microeconomia",
    school: "Neoclassica"
  },
  {
    id: "45b72f93-8e21-4a67-b123-891def456789",
    name: "Equilibrio Generale",
    definition: "Teoria che analizza l'equilibrio simultaneo in tutti i mercati di un'economia, considerando le interdipendenze tra i diversi settori.",
    relatedConcepts: ["Equilibrio di Mercato", "Interdipendenza Economica", "Sistema dei Prezzi"],
    category: "microeconomia",
    school: "Neoclassica"
  },
  {
    id: "78c91e45-6f32-4b89-c456-789abc012345",
    name: "Preferenza per la Liquidità",
    definition: "La tendenza degli agenti economici a mantenere denaro liquido piuttosto che investirlo, influenzata da motivi transazionali, precauzionali e speculativi.",
    relatedConcepts: ["Teoria Monetaria", "Tasso di Interesse", "Incertezza"],
    category: "macroeconomia",
    school: "Post-Keynesiana"
  },
  {
    id: "91f24b67-9d43-4c78-d789-012efg345678",
    name: "Ordine Spontaneo",
    definition: "L'emergere di ordine e coordinamento nell'economia attraverso le azioni volontarie degli individui, senza pianificazione centrale.",
    relatedConcepts: ["Mano Invisibile", "Mercato Libero", "Imprenditorialità"],
    category: "teoria_economica",
    school: "Austriaca"
  },
  {
    id: "23d58a89-1e65-4f90-e012-345hij678901",
    name: "Avversione alle Perdite",
    definition: "Tendenza psicologica per cui le persone percepiscono le perdite come più significative dei guadagni equivalenti.",
    relatedConcepts: ["Teoria del Prospetto", "Bias Cognitivi", "Presa di Decisione"],
    category: "comportamentale",
    school: "Comportamentale"
  },
  {
    id: "56g81c12-4h87-4i23-f345-678klm901234",
    name: "Proprietà Emergenti",
    definition: "Caratteristiche del sistema economico che emergono dalle interazioni tra gli agenti ma non sono prevedibili dalla somma dei loro comportamenti individuali.",
    relatedConcepts: ["Sistemi Complessi", "Non-linearità", "Feedback"],
    category: "teoria_economica",
    school: "Complessità"
  },
  {
    id: "89j14f45-7k10-4l56-g678-901nop234567",
    name: "Elasticità della Domanda",
    definition: "Misura della sensibilità della quantità domandata di un bene a variazioni del suo prezzo o di altre variabili economiche.",
    relatedConcepts: ["Funzione di Domanda", "Sensibilità al Prezzo", "Comportamento del Consumatore"],
    category: "microeconomia",
    school: "Neoclassica"
  },
  {
    id: "12m47h78-0n43-4o89-h901-234qrs567890",
    name: "Moltiplicatore Keynesiano",
    definition: "Il rapporto tra la variazione del reddito nazionale e la variazione iniziale della spesa autonoma che l'ha generata.",
    relatedConcepts: ["Spesa Aggregata", "Effetto Moltiplicativo", "Politica Fiscale"],
    category: "macroeconomia",
    school: "Post-Keynesiana"
  },
  {
    id: "45p80k01-3q76-4r12-i234-567tuv890123",
    name: "Calcolo Economico",
    definition: "Il processo mediante il quale gli agenti economici valutano i costi e i benefici delle diverse alternative disponibili per prendere decisioni razionali.",
    relatedConcepts: ["Razionalità Economica", "Costi Opportunità", "Ottimizzazione"],
    category: "teoria_economica",
    school: "Austriaca"
  },
  {
    id: "78s13n34-6t09-4u45-j567-890wxy123456",
    name: "Nudging",
    definition: "Tecniche di 'spinta gentile' che influenzano le scelte delle persone mantenendo la loro libertà di decisione, basate su insights dell'economia comportamentale.",
    relatedConcepts: ["Architettura delle Scelte", "Paternalismo Libertario", "Bias Cognitivi"],
    category: "comportamentale",
    school: "Comportamentale"
  },
  {
    id: "01v46q67-9w32-4x78-k890-123zab456789",
    name: "Agenti Adattivi",
    definition: "Attori economici che apprendono dall'esperienza, modificano le loro strategie nel tempo e si adattano a un ambiente in continuo cambiamento.",
    relatedConcepts: ["Apprendimento", "Adattamento", "Sistemi Complessi"],
    category: "teoria_economica",
    school: "Complessità"
  },
  {
    id: "34y79t90-2z65-4a01-l123-456cde789012",
    name: "Teoria del Valore Lavoro",
    definition: "Teoria secondo cui il valore delle merci è determinato dalla quantità di lavoro socialmente necessario per produrle.",
    relatedConcepts: ["Plusvalore", "Sfruttamento", "Classi Sociali"],
    category: "teoria_economica",
    school: "Marxista"
  },
  {
    id: "67b12w23-5c98-4d34-m456-789fgh012345",
    name: "Incertezza Radicale",
    definition: "Situazioni in cui non è possibile assegnare probabilità agli eventi futuri, diversamente dal rischio dove le probabilità sono note o stimabili.",
    relatedConcepts: ["Preferenza per la Liquidità", "Aspettative", "Instabilità"],
    category: "macroeconomia",
    school: "Post-Keynesiana"
  },
  {
    id: "90e45z56-8f21-4g67-n789-012hij345678",
    name: "Imprenditorialità",
    definition: "L'attività di scoperta e sfruttamento di opportunità di profitto attraverso l'innovazione e l'assunzione di rischi in condizioni di incertezza.",
    relatedConcepts: ["Innovazione", "Rischio", "Coordinamento del Mercato"],
    category: "teoria_economica",
    school: "Austriaca"
  },
  {
    id: "23h78c89-1i54-4j90-o012-345klm678901",
    name: "Framing Effect",
    definition: "Fenomeno per cui le decisioni delle persone sono influenzate dal modo in cui le opzioni vengono presentate o 'incorniciate'.",
    relatedConcepts: ["Bias Cognitivi", "Presentazione delle Scelte", "Psicologia Economica"],
    category: "comportamentale",
    school: "Comportamentale"
  },
  {
    id: "56k01f12-4l87-4m23-p345-678nop901234",
    name: "Path Dependence",
    definition: "Fenomeno per cui gli eventi passati e le scelte storiche influenzano permanentemente i percorsi di sviluppo futuri dell'economia.",
    relatedConcepts: ["Storia Economica", "Lock-in", "Evoluzione Istituzionale"],
    category: "teoria_economica",
    school: "Complessità"
  },
  {
    id: "89n34i45-7o10-4p56-q678-901rst234567",
    name: "Surplus del Consumatore",
    definition: "La differenza tra il prezzo massimo che un consumatore è disposto a pagare per un bene e il prezzo effettivamente pagato.",
    relatedConcepts: ["Benessere del Consumatore", "Curva di Domanda", "Efficienza Allocativa"],
    category: "microeconomia",
    school: "Neoclassica"
  },
  {
    id: "12q67l78-0r43-4s89-r901-234uvw567890",
    name: "Teoria dell'Inflazione da Costi",
    definition: "Spiegazione dell'inflazione basata sull'aumento dei costi di produzione (salari, materie prime) che si trasmette ai prezzi finali.",
    relatedConcepts: ["Markup Pricing", "Conflitto Distributivo", "Spirale Prezzi-Salari"],
    category: "macroeconomia",
    school: "Post-Keynesiana"
  },
  {
    id: "45t90o01-3u76-4v12-s234-567xyz890123",
    name: "Teoria Austriaca del Ciclo",
    definition: "Spiegazione delle fluttuazioni economiche basata sugli effetti distorsivi dell'espansione creditizia artificiale da parte delle banche centrali.",
    relatedConcepts: ["Struttura Produttiva", "Tasso di Interesse Naturale", "Malinvestment"],
    category: "macroeconomia",
    school: "Austriaca"
  },
  {
    id: "78w23r34-6x09-4y45-t567-890abc123456",
    name: "Razionalità Limitata",
    definition: "Concetto che descrive il modo in cui gli individui prendono decisioni utilizzando informazioni incomplete e capacità cognitive limitate.",
    relatedConcepts: ["Herbert Simon", "Euristiche", "Soddisfacimento"],
    category: "comportamentale",
    school: "Comportamentale"
  },
  {
    id: "01z56u67-9a32-4b78-u890-123def456789",
    name: "Feedback Loops",
    definition: "Meccanismi attraverso cui gli effetti di un cambiamento nel sistema economico si ripercuotono su se stessi, amplificando o riducendo il cambiamento iniziale.",
    relatedConcepts: ["Circuiti di Retroazione", "Non-linearità", "Effetti di Rete"],
    category: "teoria_economica",
    school: "Complessità"
  },
  {
    id: "34c89x90-2d65-4e01-v123-456ghi789012",
    name: "Costo Marginale",
    definition: "Il costo aggiuntivo sostenuto per produrre un'unità in più di un bene o servizio.",
    relatedConcepts: ["Ricavo Marginale", "Ottimizzazione della Produzione", "Decisioni dell'Impresa"],
    category: "microeconomia",
    school: "Neoclassica"
  },
  {
    id: "67f12a23-5g98-4h34-w456-789jkl012345",
    name: "Instabilità Finanziaria di Minsky",
    definition: "Teoria secondo cui la stabilità economica genera comportamenti che portano all'instabilità, attraverso l'aumento progressivo della leva finanziaria.",
    relatedConcepts: ["Ipotesi di Instabilità Finanziaria", "Cicli del Credito", "Speculazione"],
    category: "macroeconomia",
    school: "Post-Keynesiana"
  },
  {
    id: "90i45d56-8j21-4k67-x789-012mno345678",
    name: "Praxeologia",
    definition: "La logica dell'azione umana: la scienza che studia la struttura logica dell'azione umana e le sue implicazioni.",
    relatedConcepts: ["Ludwig von Mises", "Metodologia Austriaca", "Azione Intenzionale"],
    category: "teoria_economica",
    school: "Austriaca"
  },
  {
    id: "23l78g89-1m54-4n90-y012-345pqr678901",
    name: "Economia Sperimentale",
    definition: "Metodologia di ricerca che utilizza esperimenti controllati per testare teorie economiche e studiare il comportamento degli agenti.",
    relatedConcepts: ["Vernon Smith", "Laboratorio Economico", "Validazione Empirica"],
    category: "metodologia",
    school: "Comportamentale"
  },
  {
    id: "56o01j12-4p87-4q23-z345-678stu901234",
    name: "Reti Economiche",
    definition: "Strutture di connessioni tra agenti economici che influenzano i flussi di informazioni, risorse e opportunità nell'economia.",
    relatedConcepts: ["Network Analysis", "Connettività", "Effetti di Rete"],
    category: "teoria_economica",
    school: "Complessità"
  },
  {
    id: "89r34m45-7s10-4t56-a678-901vwx234567",
    name: "Equilibrio di Nash",
    definition: "Situazione in cui ogni giocatore sceglie la strategia ottimale data la strategia degli altri giocatori, e nessuno ha incentivi a deviare unilateralmente.",
    relatedConcepts: ["Teoria dei Giochi", "Interazione Strategica", "John Nash"],
    category: "teoria_economica",
    school: "Neoclassica"
  },
  {
    id: "12u67p78-0v43-4w89-b901-234yzb567890",
    name: "Moneta Endogena",
    definition: "Concezione secondo cui l'offerta di moneta è determinata dalla domanda di credito dell'economia, non esogenamente dalle autorità monetarie.",
    relatedConcepts: ["Sistema Bancario", "Credito", "Circuito Monetario"],
    category: "macroeconomia",
    school: "Post-Keynesiana"
  },
  {
    id: "45x90s01-3y76-4z12-c234-567ace890123",
    name: "Conoscenza Tacita",
    definition: "Tipo di conoscenza difficile da formalizzare e trasferire, incorporata nell'esperienza e nelle competenze degli individui.",
    relatedConcepts: ["Michael Polanyi", "Apprendimento", "Trasferimento Tecnologico"],
    category: "teoria_economica",
    school: "Austriaca"
  },
  {
    id: "78a23v34-6b09-4c45-d567-890bdf123456",
    name: "Architettura delle Scelte",
    definition: "Il contesto in cui vengono presentate le opzioni di scelta, che può influenzare sistematicamente le decisioni delle persone.",
    relatedConcepts: ["Choice Architecture", "Default Options", "Nudging"],
    category: "comportamentale",
    school: "Comportamentale"
  },
  {
    id: "01d56y67-9e32-4f78-e890-123ghi456789",
    name: "Auto-Organizzazione",
    definition: "Processo attraverso cui un sistema sviluppa strutture organizzate senza controllo o guida esterna, emergendo dalle interazioni locali tra i componenti.",
    relatedConcepts: ["Sistemi Complessi", "Emergenza", "Ordine Spontaneo"],
    category: "teoria_economica",
    school: "Complessità"
  },
  {
    id: "34g89b90-2h65-4i01-f123-456jkl789012",
    name: "Rendimenti di Scala",
    definition: "Relazione tra l'aumento proporzionale di tutti i fattori di produzione e l'aumento risultante della produzione.",
    relatedConcepts: ["Funzione di Produzione", "Economie di Scala", "Efficienza Produttiva"],
    category: "microeconomia",
    school: "Neoclassica"
  },
  {
    id: "67j12e23-5k98-4l34-g456-789mno012345",
    name: "Convenzioni",
    definition: "Aspettative condivise e auto-rinforzanti che coordinano il comportamento degli agenti economici in situazioni di incertezza.",
    relatedConcepts: ["Coordinamento", "Aspettative", "Keynes"],
    category: "macroeconomia",
    school: "Post-Keynesiana"
  },
  {
    id: "90m45h56-8n21-4o67-h789-012pqr345678",
    name: "Catalessi",
    definition: "Concetto austriaco che descrive gli effetti distorsivi dell'intervento statale sui processi naturali di coordinamento del mercato.",
    relatedConcepts: ["Intervento Statale", "Distorsioni di Mercato", "Catallattica"],
    category: "teoria_economica",
    school: "Austriaca"
  }
];
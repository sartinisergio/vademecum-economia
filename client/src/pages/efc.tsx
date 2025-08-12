import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { 
  TrendingUp, 
  Network, 
  Globe, 
  BarChart3, 
  Target, 
  Users, 
  MapPin,
  BookOpen,
  Lightbulb,
  ArrowRight,
  ExternalLink,
  Building,
  Zap
} from 'lucide-react';

export default function EFCPage() {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const efcData = {
    overview: {
      title: "Economic Fitness and Complexity (EFC)",
      subtitle: "Un Nuovo Paradigma per l'Analisi Economica",
      description: "L'Economic Fitness and Complexity (EFC) è un'innovazione metodologica nell'analisi economica contemporanea. Introduce un approccio nuovo per comprendere e modellare i sistemi economici globali.",
      keyCharacteristics: [
        "Si basa sui principi della scienza dei sistemi complessi e utilizza tecniche avanzate di analisi dei dati",
        "Fornisce una visione bottom-up dell'economia mondiale",
        "A differenza dei modelli economici tradizionali, l'EFC analizza le interconnessioni tra gli attori economici individuali e le loro attività",
        "Considera le economie come ecosistemi in evoluzione con dinamiche non lineari e proprietà emergenti"
      ]
    },
    origins: {
      title: "Le Origini Teoriche e i Pionieri della Metodologia",
      pioneers: [
        {
          name: "César Hidalgo e Ricardo Hausmann",
          institution: "Università di Harvard",
          contribution: "Nel 2009 pubblicarono l'articolo 'The Building Blocks of Economic Complexity'. Questo lavoro introdusse il concetto di Product Space e i primi algoritmi per calcolare l'Economic Complexity Index (ECI) e il Product Complexity Index (PCI).",
          year: "2009"
        },
        {
          name: "Luciano Pietronero",
          institution: "Centro di Ricerca",
          contribution: "Sotto la guida scientifica di Luciano Pietronero, il centro sviluppa sia teorie fondamentali che applicazioni dirette della metodologia.",
          future: "Le future direzioni del progetto includono la formulazione di una micro-fondazione della Fitness basata su principi di ottimizzazione, collegando l'algoritmo di Fitness & Complexity alla teoria del trasporto ottimale per creare ponti con le teorie economiche più classiche."
        }
      ]
    },
    methodology: {
      title: "La Metodologia Fondamentale: Algoritmi e Principi Matematici",
      description: "La metodologia EFC si basa su un sistema di equazioni iterative accoppiate che definisce simultaneamente la fitness dei paesi e la complessità dei prodotti."
    },
    researchCenters: [
      {
        name: "Harvard Growth Lab",
        director: "Ricardo Hausmann",
        tool: "Atlas of Economic Complexity",
        description: "È uno degli strumenti più influenti per la visualizzazione e l'analisi dei dati commerciali globali."
      },
      {
        name: "Observatory of Economic Complexity (OEC)",
        features: [
          "Offre dati dettagliati su oltre 5.000 regioni subnazionali, 5.000 prodotti e migliaia di aziende",
          "La metodologia dell'OEC si basa su un approccio basato sui risultati (outcomes-based approach) che inferisce le capacità economiche dai dati di presenza geografica delle attività",
          "Utilizza il Product Space come mappa di prossimità tra prodotti",
          "Si basa sul principio di Relatedness per analizzare la diversificazione produttiva",
          "Gli indici ECI e PCI sono calcolati attraverso metodi di autovettori"
        ]
      },
      {
        name: "Banca Mondiale",
        integration: "Economic Fitness Database",
        description: "La Banca Mondiale ha integrato l'Economic Fitness nei suoi database ufficiali attraverso l'Economic Fitness Database. Questo database include sia l'Economic Fitness tradizionale che l'Universal Economic Fitness (UEF). Fornisce metriche standardizzate per misurare la diversificazione dei paesi e la loro capacità di produrre beni complessi su base competitiva globale."
      }
    ],
    caseStudies: [
      {
        country: "Cina",
        title: "Il Caso Studio Emblematico",
        description: "La Cina rappresenta il caso studio più emblematico dell'applicazione dell'EFC per guidare strategie di sviluppo economico.",
        achievements: [
          "Dal 1990 al 2010, le aree metropolitane cinesi sono passate da 2 a 23 nella top-30 mondiale per Fitness",
          "Nel 2020, Suzhou occupa la prima posizione mondiale",
          "Le aree metropolitane cinesi dominano le classifiche di Coherence (diversificazione coerente) con 79 su 100 delle città più coerenti",
          "La Cina è organizzata in tre cluster coerenti specializzati in settori tecnologici simili: high-tech, tessile e agro-alimentare"
        ],
        analysis: "Secondo l'analisi dell'Economic Fitness urbano condotta utilizzando dati brevettuali, le aree metropolitane cinesi hanno mostrato una strategia di diversificazione coerente particolarmente efficace."
      },
      {
        countries: "Messico e Brasile",
        title: "Studio Comparativo per Paesi a Reddito Medio",
        analysis: "Lo studio comparativo di Messico e Brasile condotto utilizzando l'Economic Fitness toolkit ha fornito insights preziosi per i paesi a reddito medio.",
        findings: [
          "Entrambi i paesi occupano posizioni simili nel piano Fitness-PILpc, con una crescita prevista del 5,5% (Messico) e 5,8% (Brasile) tra il 2015 e il 2019",
          "Messico eccelle in elettronica, macchinari e componentistica automobilistica complessa",
          "Il Brasile mostra competitività in prodotti animali, chimici, minerari e alcuni sotto-settori della meccanica"
        ],
        framework: "L'analisi ha utilizzato il Country Opportunity Spotlight (COS) framework per identificare quattro tipologie di opportunità: Established Industry, Green Shoot, Capacity Building ed Export-Driven."
      },
      {
        region: "Africa",
        title: "Lezioni per l'Industrializzazione Africana",
        source: "International Finance Corporation (IFC)",
        document: "'What African Industrial Development Can Learn from East Asian Successes'",
        description: "Il documento applica la metodologia Economic Fitness and Complexity per identificare lezioni strategiche per l'industrializzazione africana.",
        recommendations: [
          "Sviluppo di piani a lungo termine per le industrie del futuro"
        ],
        indicators: [
          "Sector Fitness (competitività settoriale)",
          "Progress Score (fattibilità di sviluppo)", 
          "Complexity Gain (capacità di sbloccare opportunità verso industrie più complesse)"
        ]
      }
    ],
    greenTransition: {
      title: "L'EFC nella Transizione Verde e la Sostenibilità",
      source: "Joint Research Centre (JRC) della Commissione Europea",
      overview: "Il Joint Research Centre (JRC) della Commissione Europea ha prodotto una revisione approfondita del ruolo dell'Economic Complexity nella transizione verso la sostenibilità.",
      applications: [
        {
          area: "Relazione tra complessità economica e outcome ambientali",
          findings: "Studi empirici mostrano una correlazione positiva tra la complessità del paniere di esportazione e la capacità di preservare l'ambiente nei paesi ad alto reddito. Nei paesi emergenti, un aumento della complessità può inizialmente portare a maggiori impatti ambientali."
        },
        {
          tools: "Green Complexity Index (GCI) e Green Complexity Potential (GCP)",
          description: "Questi strumenti, sviluppati recentemente, integrano gli aspetti della transizione ecologica nell'analisi della complessità economica. Sono stati utilizzati per valutare i Recovery and Resilience Plans dell'Unione Europea post-pandemia."
        },
        {
          area: "Energia rinnovabile e complessità economica",
          findings: "Ricerche nei paesi OCSE indicano che la complessità economica ha effetti variabili sul consumo di energia rinnovabile, evidenziando la necessità di politiche mirate per armonizzare sviluppo economico e transizione energetica."
        }
      ]
    },
    technologicalTools: {
      title: "Strumenti Tecnologici e Database",
      description: "L'EFC si avvale di piattaforme tecnologiche avanzate e dataset specifici:",
      platforms: [
        {
          name: "Observatory of Economic Complexity (OEC)",
          features: "Utilizza map-lines per visualizzare i flussi commerciali globali e geomap (choropleth) per variabili aggregate per paese."
        },
        {
          name: "Metroverse",
          description: "Un navigatore dell'economia urbana del Growth Lab che copre oltre 1000 città, combinando ricerca avanzata, dataset ad alta risoluzione e visualizzazioni dati."
        }
      ],
      datasets: [
        "Dati commerciali (CEPII BACI)",
        "Dati brevettuali (PATSTAT)", 
        "Dati occupazionali",
        "Dati azionari"
      ]
    },
    postPandemic: {
      title: "EFC e Politiche Post-Pandemia",
      description: "L'Economic Complexity Theory ha fornito un framework metodologico per valutare i piani di ripresa post-COVID-19 nell'Unione Europea. L'EFC si basa principalmente su dati di export, che potrebbero non riflettere pienamente le capacità produttive interne."
    },
    bigData: {
      title: "Big Data Economics e Complessità",
      description: "La convergenza tra big data ed economic complexity apre nuove prospettive per l'analisi economica. Tecniche di Matrix Completion, utilizzate nei sistemi di raccomandazione, sono state applicate per analizzare la complessità economica e migliorare la previsione delle capacità economiche future."
    },
    futureDirections: {
      title: "Prospettive Future e Direzioni di Ricerca",
      directions: [
        "La ricerca si sta orientando verso misure multidimensionali di complessità economica, combinando dati commerciali, brevettuali e di altra natura per spiegare meglio la crescita economica futura e l'uguaglianza di reddito",
        "Si propone l'integrazione con dati di valore aggiunto per migliorare l'Economic Complexity Index",
        "L'analisi scenario-based viene utilizzata per superare le incertezze future nelle politiche di sviluppo industriale"
      ]
    },
    education: {
      title: "Risorse Educative e Formazione",
      resources: [
        {
          name: "Economic Fitness & Complexity School",
          organizer: "CREF",
          description: "Organizzata annualmente dal CREF, offre un'introduzione estensiva al framework di complessità economica, con lezioni teoriche e applicazioni pratiche."
        },
        {
          name: "Handbook of Economic Complexity for Policy",
          publisher: "Commissione Europea",
          description: "Pubblicato dalla Commissione Europea, raccoglie sei anni di esperienza del JRC sulla complessità economica per le politiche."
        },
        {
          name: "Risorse Bibliografiche",
          description: "Il sito della EFC School mantiene una lista di letture essenziali in costante evoluzione."
        }
      ]
    },
    economicSchools: {
      title: "EFC nelle Scuole di Pensiero Economico",
      description: "L'EFC presenta caratteristiche che la rendono sia innovativa che trasversale rispetto alle classificazioni tradizionali.",
      heterodoxComplexity: {
        title: "Heterodox Complexity Economics (HCE)",
        author: "Arne Heise",
        characteristics: [
          "Posizione: Scuola di pensiero eterodossa indipendente",
          "Caratteristiche epistemologiche: Abbraccia non-ergodicità, non sostituibilità, incertezza fondamentale",
          "Ontologia: Sistema economico aperto, social provisioning, rifiuto della neutralità monetaria", 
          "Status: Paradigma eterodosso autonomo"
        ],
        affinity: "L'Economic Fitness and Complexity presenta affinità ontologiche con la Post-Keynesian Economics, condividendo elementi come l'incertezza fondamentale, il non-equilibrio, il ruolo centrale delle istituzioni e l'importanza del tempo storico."
      },
      transversalParadigm: {
        title: "Un Paradigma Trasversale",
        description: "L'EFC presenta caratteristiche che la configurano come paradigma emergente trasversale, promuovendo una formazione pluralista che prepari gli studenti a utilizzare strumenti EFC in contesti teorici diversi, sviluppando sensibilità per l'interconnessione dei paradigmi e promuovendo un approccio problem-solving all'economia."
      }
    },
    hayekConnection: {
      title: "Ponti Concettuali tra Hayek e l'Economic Complexity",
      description: "Esistono consonanze concettuali e metodologiche tra le intuizioni di Friedrich A. Hayek e i moderni sviluppi dell'Economic Fitness and Complexity.",
      fourPillars: [
        {
          pillar: "Ordine Spontaneo",
          hayek: "Il mercato è un esempio di ordine spontaneo.",
          efc: "Nell'EFC, il Product Space, l'evoluzione della fitness economica e le reti commerciali globali sono esempi di ordine spontaneo."
        },
        {
          pillar: "Conoscenza Distribuita", 
          hayek: "Il problema economico fondamentale è assicurare il miglior uso delle risorse conosciute da qualsiasi membro della società.",
          efc: "Nell'EFC, le capacità produttive sono distribuite, le opportunità di diversificazione dipendono da conoscenze locali specifiche e l'algoritmo di Fitness & Complexity processa informazioni distribuite."
        },
        {
          pillar: "Segnali Informativi",
          hayek: "I prezzi sono segnali informativi che coordinano le decisioni di milioni di agenti.",
          efc: "Nell'EFC, il Revealed Comparative Advantage funziona come un \"prezzo\" che segnala le capacità competitive, e l'algoritmo EFC processa informazioni distribuite nei pattern commerciali."
        },
        {
          pillar: "Catallaxy e Sistemi Complessi",
          hayek: "Hayek descrive la catallaxy come il complesso fenomeno dell'attività di mercato.",
          efc: "L'EFC studia l'interazione di paesi, settori e prodotti come agenti autonomi, dove proprietà sistemiche emergono dall'interazione locale e il sistema economico globale si auto-organizza senza controllo centrale."
        }
      ],
      methodologicalConvergences: {
        title: "Le Convergenze Metodologiche Profonde",
        hayek: "Hayek sosteneva che l'economia non è mai in equilibrio, ma sempre in processo di cambiamento.",
        efc: "L'EFC vede l'economia come un sistema in perpetuo divenire, dove la fitness evolve continuamente."
      },
      complexityPatterns: {
        title: "Complessità e Riconoscimento di Pattern",
        hayekComplexity: "Hayek distingueva tra fenomeni semplici, caratterizzati da poche variabili e relazioni lineari, e fenomeni complessi, con molte variabili e relazioni non lineari. L'algoritmo non lineare dell'EFC cattura la complessità intrinseca delle strutture produttive.",
        patternRecognition: "Hayek sosteneva che possiamo riconoscere pattern, ma non prevedere eventi specifici. L'EFC identifica pattern nelle opportunità di diversificazione senza prevedere specifici percorsi di sviluppo."
      },
      concreteExamples: [
        {
          title: "Evoluzione del Product Space",
          description: "Il Product Space di Hidalgo-Hausmann è un esempio di ordine spontaneo hayekiano. Le connessioni tra prodotti emergono senza pianificazione, basandosi su informazioni distribuite e decisioni locali di migliaia di aziende. Strutture coerenti emergono dall'aggregazione di comportamenti individuali."
        },
        {
          title: "Diversificazione Economica", 
          description: "Il processo di diversificazione economica studiato nell'EFC riflette i concetti hayekiani. I paesi scoprono nuove opportunità attraverso l'esperienza, non la pianificazione. Le capacità locali determinano quali salti sono possibili e le imprese si coordinano verso nuovi settori senza un comando centrale."
        },
        {
          title: "Algoritmo di Fitness",
          description: "L'algoritmo iterativo dell'EFC funziona come il meccanismo dei prezzi hayekiano. Elabora informazioni distribuite nei dati commerciali, genera segnali (fitness scores) che guidano le decisioni e facilita il coordinamento verso opportunità di sviluppo."
        }
      ]
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-12">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 gradient-cyan rounded-xl flex items-center justify-center">
              <TrendingUp className="w-7 h-7 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-gray-900">{efcData.overview.title}</h1>
              <p className="text-xl text-gray-600">{efcData.overview.subtitle}</p>
            </div>
          </div>
        </div>
        <p className="text-lg text-gray-700 leading-relaxed">
          {efcData.overview.description}
        </p>
      </div>

      {/* Overview Section */}
      <section className="mb-12">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Lightbulb className="w-6 h-6 mr-3 text-yellow-600" />
              La Rivoluzione dell'Analisi Economica
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {efcData.overview.keyCharacteristics.map((characteristic, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-cyan-500 rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-gray-700 leading-relaxed">{characteristic}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Origins and Pioneers */}
      <section className="mb-12">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Users className="w-6 h-6 mr-3 text-purple-600" />
              {efcData.origins.title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {efcData.origins.pioneers.map((pioneer, index) => (
                <div key={index} className="border-l-4 border-purple-200 pl-6">
                  <div className="flex items-center mb-2">
                    <h4 className="font-semibold text-lg">{pioneer.name}</h4>
                    {pioneer.year && (
                      <Badge variant="outline" className="ml-2 text-xs">
                        {pioneer.year}
                      </Badge>
                    )}
                  </div>
                  <p className="text-sm text-gray-600 mb-2">{pioneer.institution}</p>
                  <p className="text-gray-700 leading-relaxed mb-3">{pioneer.contribution}</p>
                  {pioneer.future && (
                    <div className="bg-purple-50 p-3 rounded-lg">
                      <p className="text-sm text-purple-800 font-medium">Direzioni Future:</p>
                      <p className="text-sm text-purple-700">{pioneer.future}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Methodology */}
      <section className="mb-12">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <BarChart3 className="w-6 h-6 mr-3 text-orange-600" />
              {efcData.methodology.title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 leading-relaxed">{efcData.methodology.description}</p>
          </CardContent>
        </Card>
      </section>

      {/* Research Centers */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
          <Building className="w-6 h-6 mr-3 text-blue-600" />
          I Principali Centri di Ricerca e Strumenti Globali
        </h2>
        <div className="grid md:grid-cols-1 gap-6">
          {efcData.researchCenters.map((center, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="text-xl">{center.name}</CardTitle>
                {center.director && (
                  <p className="text-sm text-gray-600">Diretto da: {center.director}</p>
                )}
              </CardHeader>
              <CardContent>
                {center.tool && (
                  <div className="mb-4">
                    <Badge variant="outline" className="mb-2">{center.tool}</Badge>
                    <p className="text-gray-700">{center.description}</p>
                  </div>
                )}
                {center.features && (
                  <ul className="space-y-2">
                    {center.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <ArrowRight className="w-4 h-4 mt-1 text-blue-500 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                )}
                {center.integration && (
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-blue-900 mb-2">{center.integration}</h5>
                    <p className="text-sm text-blue-800">{center.description}</p>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Case Studies */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
          <MapPin className="w-6 h-6 mr-3 text-green-600" />
          Applicazioni Pratiche e Casi Studio di Successo
        </h2>
        <div className="space-y-6">
          {efcData.caseStudies.map((study, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Globe className="w-5 h-5 mr-2 text-green-600" />
                  {study.country || study.countries || study.region}: {study.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {study.description && (
                    <p className="text-gray-700">{study.description}</p>
                  )}
                  {study.analysis && (
                    <p className="text-gray-700">{study.analysis}</p>
                  )}
                  {study.achievements && (
                    <div>
                      <h5 className="font-semibold mb-2">Risultati Principali:</h5>
                      <ul className="space-y-2">
                        {study.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start space-x-2">
                            <Target className="w-4 h-4 mt-1 text-green-500 flex-shrink-0" />
                            <span className="text-gray-700 text-sm">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {study.findings && (
                    <div>
                      <h5 className="font-semibold mb-2">Risultati dell'Analisi:</h5>
                      <ul className="space-y-2">
                        {study.findings.map((finding, idx) => (
                          <li key={idx} className="flex items-start space-x-2">
                            <BarChart3 className="w-4 h-4 mt-1 text-blue-500 flex-shrink-0" />
                            <span className="text-gray-700 text-sm">{finding}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {study.framework && (
                    <div className="bg-green-50 p-3 rounded-lg">
                      <p className="text-sm text-green-800">{study.framework}</p>
                    </div>
                  )}
                  {study.source && (
                    <div className="border-t pt-3">
                      <p className="text-xs text-gray-500">
                        Fonte: {study.source}
                        {study.document && ` - ${study.document}`}
                      </p>
                    </div>
                  )}
                  {study.recommendations && (
                    <div>
                      <h5 className="font-semibold mb-2">Raccomandazioni:</h5>
                      <ul className="space-y-1">
                        {study.recommendations.map((rec, idx) => (
                          <li key={idx} className="text-sm text-gray-700">• {rec}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {study.indicators && (
                    <div>
                      <h5 className="font-semibold mb-2">Indicatori Chiave:</h5>
                      <div className="flex flex-wrap gap-2">
                        {study.indicators.map((indicator, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {indicator}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Green Transition */}
      <section className="mb-12">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Zap className="w-6 h-6 mr-3 text-green-600" />
              {efcData.greenTransition.title}
            </CardTitle>
            <p className="text-sm text-gray-600">Fonte: {efcData.greenTransition.source}</p>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <p className="text-gray-700">{efcData.greenTransition.overview}</p>
              
              <div className="space-y-4">
                <h4 className="font-semibold text-lg">Aree di Applicazione dell'EFC</h4>
                {efcData.greenTransition.applications.map((app, index) => (
                  <div key={index} className="border-l-4 border-green-200 pl-4">
                    {app.area && (
                      <h5 className="font-semibold text-gray-900 mb-2">{app.area}</h5>
                    )}
                    {app.tools && (
                      <h5 className="font-semibold text-gray-900 mb-2">{app.tools}</h5>
                    )}
                    <p className="text-gray-700 text-sm">
                      {app.findings || app.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Technological Tools */}
      <section className="mb-12">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Network className="w-6 h-6 mr-3 text-blue-600" />
              {efcData.technologicalTools.title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <p className="text-gray-700">{efcData.technologicalTools.description}</p>
              
              <div>
                <h4 className="font-semibold mb-3">Piattaforme Principali</h4>
                <div className="space-y-3">
                  {efcData.technologicalTools.platforms.map((platform, index) => (
                    <div key={index} className="bg-blue-50 p-3 rounded-lg">
                      <h5 className="font-semibold text-blue-900">{platform.name}</h5>
                      <p className="text-sm text-blue-800">{platform.features || platform.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-3">Dataset Principali</h4>
                <div className="flex flex-wrap gap-2">
                  {efcData.technologicalTools.datasets.map((dataset, index) => (
                    <Badge key={index} variant="outline">{dataset}</Badge>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Hayek Connection - Major Section */}
      <section className="mb-12">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center text-xl">
              <Lightbulb className="w-6 h-6 mr-3 text-amber-600" />
              {efcData.hayekConnection.title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-8">
              <p className="text-gray-700 leading-relaxed">{efcData.hayekConnection.description}</p>
              
              <div>
                <h3 className="text-lg font-semibold mb-4">I Quattro Pilastri delle Convergenze Hayekiane</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {efcData.hayekConnection.fourPillars.map((pillar, index) => (
                    <Card key={index} className="border-amber-200">
                      <CardHeader className="pb-3">
                        <CardTitle className="text-base text-amber-900">{pillar.pillar}</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        <div>
                          <p className="text-xs text-gray-600 uppercase tracking-wide mb-1">Hayek</p>
                          <p className="text-sm text-gray-700">{pillar.hayek}</p>
                        </div>
                        <div>
                          <p className="text-xs text-cyan-600 uppercase tracking-wide mb-1">EFC</p>
                          <p className="text-sm text-gray-700">{pillar.efc}</p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              <div className="bg-amber-50 p-6 rounded-lg">
                <h4 className="font-semibold text-amber-900 mb-3">
                  {efcData.hayekConnection.methodologicalConvergences.title}
                </h4>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm text-amber-800"><strong>Hayek:</strong> {efcData.hayekConnection.methodologicalConvergences.hayek}</p>
                  </div>
                  <div>
                    <p className="text-sm text-amber-800"><strong>EFC:</strong> {efcData.hayekConnection.methodologicalConvergences.efc}</p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-4">{efcData.hayekConnection.complexityPatterns.title}</h4>
                <div className="space-y-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-sm mb-2">Complessità secondo Hayek e l'EFC</h5>
                    <p className="text-sm text-gray-700">{efcData.hayekConnection.complexityPatterns.hayekComplexity}</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-sm mb-2">Riconoscimento di Pattern</h5>
                    <p className="text-sm text-gray-700">{efcData.hayekConnection.complexityPatterns.patternRecognition}</p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-4">Esempi Concreti di Convergenze Hayekiane e EFC</h4>
                <div className="space-y-4">
                  {efcData.hayekConnection.concreteExamples.map((example, index) => (
                    <div key={index} className="border-l-4 border-cyan-200 pl-4">
                      <h5 className="font-semibold text-cyan-900 mb-2">{example.title}</h5>
                      <p className="text-sm text-gray-700">{example.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* EFC in Economic Schools */}
      <section className="mb-12">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Building className="w-6 h-6 mr-3 text-indigo-600" />
              {efcData.economicSchools.title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <p className="text-gray-700">{efcData.economicSchools.description}</p>
              
              <div>
                <h4 className="text-lg font-semibold mb-4">{efcData.economicSchools.heterodoxComplexity.title}</h4>
                <p className="text-sm text-gray-600 mb-3">Secondo {efcData.economicSchools.heterodoxComplexity.author}:</p>
                <ul className="space-y-2 mb-4">
                  {efcData.economicSchools.heterodoxComplexity.characteristics.map((char, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <ArrowRight className="w-4 h-4 mt-0.5 text-indigo-500 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{char}</span>
                    </li>
                  ))}
                </ul>
                <div className="bg-indigo-50 p-4 rounded-lg">
                  <p className="text-sm text-indigo-800">{efcData.economicSchools.heterodoxComplexity.affinity}</p>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-3">{efcData.economicSchools.transversalParadigm.title}</h4>
                <p className="text-gray-700">{efcData.economicSchools.transversalParadigm.description}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Education Resources */}
      <section className="mb-12">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <BookOpen className="w-6 h-6 mr-3 text-purple-600" />
              {efcData.education.title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {efcData.education.resources.map((resource, index) => (
                <div key={index} className="border border-gray-200 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{resource.name}</h4>
                  {resource.organizer && (
                    <p className="text-sm text-gray-600 mb-2">Organizzato da: {resource.organizer}</p>
                  )}
                  {resource.publisher && (
                    <p className="text-sm text-gray-600 mb-2">Pubblicato da: {resource.publisher}</p>
                  )}
                  <p className="text-sm text-gray-700">{resource.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Future Directions */}
      <section className="mb-12">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <TrendingUp className="w-6 h-6 mr-3 text-cyan-600" />
              {efcData.futureDirections.title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {efcData.futureDirections.directions.map((direction, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <ArrowRight className="w-4 h-4 mt-1 text-cyan-500 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">{direction}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </section>

      {/* Additional Sections */}
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">EFC e Politiche Post-Pandemia</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-700">{efcData.postPandemic.description}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Big Data Economics e Complessità</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-700">{efcData.bigData.description}</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
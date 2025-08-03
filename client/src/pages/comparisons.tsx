import { useState, useEffect } from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
import { useLocation } from "wouter";
import { GitCompare, Plus, X, ChevronDown, ChevronUp, Search, Filter, Trash2 } from "lucide-react";
import { apiRequest } from "@/lib/queryClient";
import { queryClient } from "@/lib/queryClient";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Skeleton } from "@/components/ui/skeleton";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/hooks/use-toast";
import type { Comparison, EconomicSchool, EconomicModel, Manual, Concept } from "@shared/schema";

interface CreateComparisonState {
  title: string;
  description: string;
  selectedItems: {type: 'school' | 'model' | 'manual' | 'concept', id: string, name: string}[];
  aspects: {name: string, comparisons: {itemId: string, value: string}[]}[];
}

export default function Comparisons() {
  const [location] = useLocation();
  const [expandedComparisons, setExpandedComparisons] = useState<string[]>([]);
  const [showCreateDialog, setShowCreateDialog] = useState(false);
  const [createState, setCreateState] = useState<CreateComparisonState>({
    title: "",
    description: "",
    selectedItems: [],
    aspects: []
  });
  const [searchQuery, setSearchQuery] = useState("");
  const [dialogSearchQuery, setDialogSearchQuery] = useState("");
  const [showSaltwaterDebate, setShowSaltwaterDebate] = useState(false);
  const { toast } = useToast();

  const { data: comparisons, isLoading: comparisonsLoading } = useQuery<Comparison[]>({
    queryKey: ["/api/comparisons"],
  });

  const { data: schools } = useQuery<EconomicSchool[]>({
    queryKey: ["/api/schools"],
  });

  const { data: models } = useQuery<EconomicModel[]>({
    queryKey: ["/api/models"],
  });

  const { data: manuals } = useQuery<Manual[]>({
    queryKey: ["/api/manuals"],
  });

  const { data: concepts } = useQuery<Concept[]>({
    queryKey: ["/api/concepts"],
  });

  // Check URL for debate parameter
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('debate') === 'saltwater-freshwater') {
      setShowSaltwaterDebate(true);
    }
  }, [location]);

  const createComparisonMutation = useMutation({
    mutationFn: async (newComparison: any) => {
      return apiRequest("POST", "/api/comparisons", newComparison);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/comparisons"] });
      toast({
        title: "Confronto salvato!",
        description: "Il tuo confronto personalizzato è stato creato con successo.",
      });
      setShowCreateDialog(false);
      setDialogSearchQuery("");
      setCreateState({
        title: "",
        description: "",
        selectedItems: [],
        aspects: []
      });
    },
    onError: () => {
      toast({
        title: "Errore",
        description: "Si è verificato un errore durante la creazione del confronto.",
        variant: "destructive",
      });
    }
  });

  const deleteComparisonMutation = useMutation({
    mutationFn: async (id: string) => {
      return apiRequest("DELETE", `/api/comparisons/${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/comparisons"] });
      toast({
        title: "Confronto eliminato",
        description: "Il confronto è stato eliminato con successo.",
      });
    },
    onError: () => {
      toast({
        title: "Errore",
        description: "Si è verificato un errore durante l'eliminazione del confronto.",
        variant: "destructive",
      });
    }
  });

  const toggleExpanded = (id: string) => {
    setExpandedComparisons(prev => 
      prev.includes(id) 
        ? prev.filter(compId => compId !== id)
        : [...prev, id]
    );
  };

  const filteredComparisons = comparisons?.filter(comparison =>
    searchQuery === "" ||
    comparison.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    comparison.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    comparison.items.some(item => item.name.toLowerCase().includes(searchQuery.toLowerCase()))
  ) || [];

  // Filter items for dialog search
  const filteredSchools = schools?.filter(school =>
    dialogSearchQuery === "" ||
    school.name.toLowerCase().includes(dialogSearchQuery.toLowerCase())
  ) || [];

  const filteredModels = models?.filter(model =>
    dialogSearchQuery === "" ||
    model.name.toLowerCase().includes(dialogSearchQuery.toLowerCase())
  ) || [];

  const filteredManuals = manuals?.filter(manual =>
    dialogSearchQuery === "" ||
    manual.title.toLowerCase().includes(dialogSearchQuery.toLowerCase())
  ) || [];

  const filteredConcepts = concepts?.filter(concept =>
    dialogSearchQuery === "" ||
    concept.name.toLowerCase().includes(dialogSearchQuery.toLowerCase())
  ) || [];

  if (comparisonsLoading) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <Skeleton className="h-12 w-96 mb-4" />
          <Skeleton className="h-6 w-[600px]" />
        </div>
        <div className="space-y-8">
          {[...Array(3)].map((_, i) => (
            <Skeleton key={i} className="h-[400px]" />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-12">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 gradient-indigo rounded-xl flex items-center justify-center">
              <GitCompare className="w-7 h-7 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-gray-900">Confronti Dinamici</h1>
              <p className="text-xl text-gray-600">Confronta scuole, modelli, manuali e concetti</p>
            </div>
          </div>
          <Dialog open={showCreateDialog} onOpenChange={setShowCreateDialog}>
            <DialogTrigger asChild>
              <Button className="bg-primary hover:bg-primary/90">
                <Plus className="w-5 h-5 mr-2" />
                Crea Confronto
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto" aria-describedby="create-comparison-description">
              <DialogHeader>
                <DialogTitle>Crea Nuovo Confronto</DialogTitle>
              </DialogHeader>
              <div id="create-comparison-description" className="sr-only">
                Dialogo per creare un nuovo confronto personalizzato selezionando elementi da confrontare
              </div>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Titolo del Confronto
                    </label>
                    <Input
                      value={createState.title}
                      onChange={(e) => setCreateState(prev => ({ ...prev, title: e.target.value }))}
                      placeholder="Es: Modelli Macro vs Micro"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Descrizione
                    </label>
                    <Input
                      value={createState.description}
                      onChange={(e) => setCreateState(prev => ({ ...prev, description: e.target.value }))}
                      placeholder="Breve descrizione del confronto"
                    />
                  </div>
                </div>
                
                {/* Search in dialog */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Cerca Elementi
                  </label>
                  <div className="relative">
                    <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                    <Input
                      type="text"
                      placeholder="Cerca scuole, modelli, manuali, concetti..."
                      value={dialogSearchQuery}
                      onChange={(e) => setDialogSearchQuery(e.target.value)}
                      className="pl-9"
                    />
                  </div>
                </div>

                {/* Item Selection */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-4">
                    Seleziona Elementi da Confrontare (min. 2)
                  </label>
                  {/* No results message for dialog search */}
                  {dialogSearchQuery && filteredSchools.length === 0 && filteredModels.length === 0 && 
                   filteredManuals.length === 0 && filteredConcepts.length === 0 && (
                    <div className="text-center py-8">
                      <p className="text-gray-500">Nessun elemento trovato per "{dialogSearchQuery}"</p>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        onClick={() => setDialogSearchQuery("")}
                        className="mt-2"
                      >
                        Cancella ricerca
                      </Button>
                    </div>
                  )}
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {/* Schools */}
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Scuole ({filteredSchools.length})</h4>
                      <div className="space-y-2 max-h-32 overflow-y-auto">
                        {filteredSchools.map(school => (
                          <div key={school.id} className="flex items-center space-x-2">
                            <Checkbox
                              checked={createState.selectedItems.some(item => item.id === school.id)}
                              onCheckedChange={(checked) => {
                                if (checked) {
                                  setCreateState(prev => ({
                                    ...prev,
                                    selectedItems: [...prev.selectedItems, {
                                      type: 'school',
                                      id: school.id,
                                      name: school.name
                                    }]
                                  }));
                                } else {
                                  setCreateState(prev => ({
                                    ...prev,
                                    selectedItems: prev.selectedItems.filter(item => item.id !== school.id)
                                  }));
                                }
                              }}
                            />
                            <span className="text-sm">{school.name}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Models */}
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Modelli ({filteredModels.length})</h4>
                      <div className="space-y-2 max-h-32 overflow-y-auto">
                        {filteredModels.map(model => (
                          <div key={model.id} className="flex items-center space-x-2">
                            <Checkbox
                              checked={createState.selectedItems.some(item => item.id === model.id)}
                              onCheckedChange={(checked) => {
                                if (checked) {
                                  setCreateState(prev => ({
                                    ...prev,
                                    selectedItems: [...prev.selectedItems, {
                                      type: 'model',
                                      id: model.id,
                                      name: model.name
                                    }]
                                  }));
                                } else {
                                  setCreateState(prev => ({
                                    ...prev,
                                    selectedItems: prev.selectedItems.filter(item => item.id !== model.id)
                                  }));
                                }
                              }}
                            />
                            <span className="text-sm">{model.name}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Manuals */}
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Manuali ({filteredManuals.length})</h4>
                      <div className="space-y-2 max-h-32 overflow-y-auto">
                        {filteredManuals.map(manual => (
                          <div key={manual.id} className="flex items-center space-x-2">
                            <Checkbox
                              checked={createState.selectedItems.some(item => item.id === manual.id)}
                              onCheckedChange={(checked) => {
                                if (checked) {
                                  setCreateState(prev => ({
                                    ...prev,
                                    selectedItems: [...prev.selectedItems, {
                                      type: 'manual',
                                      id: manual.id,
                                      name: `${manual.title} (${manual.authors.join(", ")})`
                                    }]
                                  }));
                                } else {
                                  setCreateState(prev => ({
                                    ...prev,
                                    selectedItems: prev.selectedItems.filter(item => item.id !== manual.id)
                                  }));
                                }
                              }}
                            />
                            <div className="text-sm">
                              <div className="font-medium">{manual.title}</div>
                              <div className="text-gray-500 text-xs">{manual.authors.join(", ")}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Concepts */}
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Concetti ({filteredConcepts.length})</h4>
                      <div className="space-y-2 max-h-32 overflow-y-auto">
                        {filteredConcepts.map(concept => (
                          <div key={concept.id} className="flex items-center space-x-2">
                            <Checkbox
                              checked={createState.selectedItems.some(item => item.id === concept.id)}
                              onCheckedChange={(checked) => {
                                if (checked) {
                                  setCreateState(prev => ({
                                    ...prev,
                                    selectedItems: [...prev.selectedItems, {
                                      type: 'concept',
                                      id: concept.id,
                                      name: concept.name
                                    }]
                                  }));
                                } else {
                                  setCreateState(prev => ({
                                    ...prev,
                                    selectedItems: prev.selectedItems.filter(item => item.id !== concept.id)
                                  }));
                                }
                              }}
                            />
                            <span className="text-sm">{concept.name}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Selected Items Display */}
                {createState.selectedItems.length > 0 && (
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Elementi Selezionati ({createState.selectedItems.length})</h4>
                    <div className="flex flex-wrap gap-2">
                      {createState.selectedItems.map(item => (
                        <Badge key={item.id} variant="outline" className="flex items-center space-x-2">
                          <span>{item.name}</span>
                          <Button
                            size="sm"
                            variant="ghost"
                            className="h-auto p-0 hover:bg-transparent"
                            onClick={() => {
                              setCreateState(prev => ({
                                ...prev,
                                selectedItems: prev.selectedItems.filter(i => i.id !== item.id)
                              }));
                            }}
                          >
                            <X className="w-3 h-3" />
                          </Button>
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}

                <div className="flex justify-end space-x-4">
                  <Button variant="outline" onClick={() => {
                    setShowCreateDialog(false);
                    setDialogSearchQuery("");
                    setCreateState({
                      title: "",
                      description: "",
                      selectedItems: [],
                      aspects: []
                    });
                  }}>
                    Annulla
                  </Button>
                  <Button 
                    onClick={() => {
                      if (createState.selectedItems.length >= 2 && createState.title.trim()) {
                        // Genera contenuti automatici ricchi basati sui dati autentici
                        const generateSmartContent = (item: any, aspectName: string) => {
                          const allData = { schools, models, manuals, concepts };
                          
                          if (item.type === "school") {
                            const school = schools?.find(s => s.id === item.id);
                            if (school) {
                              if (aspectName === "Principi Chiave") return school.keyPrinciples.join("; ");
                              if (aspectName === "Economisti di Riferimento") return school.economists.join(", ");
                              if (aspectName === "Esempi Pratici") return school.examples || "Esempi di applicazione pratica";
                              return school.description;
                            }
                          }
                          
                          if (item.type === "model") {
                            const model = models?.find(m => m.id === item.id);
                            if (model) {
                              if (aspectName === "Concetti Chiave") return model.keyConcepts.join("; ");
                              if (aspectName === "Applicazioni") return model.applications.join("; ");
                              if (aspectName === "Tipo") return model.type === "micro" ? "Microeconomico" : "Macroeconomico";
                              return model.description;
                            }
                          }
                          
                          if (item.type === "manual") {
                            const manual = manuals?.find(m => m.id === item.id);
                            if (manual) {
                              if (aspectName === "Autori") return manual.authors.join(", ");
                              if (aspectName === "Scuola di Pensiero") return manual.school;
                              if (aspectName === "Punti di Forza") return manual.strengths.join("; ");
                              if (aspectName === "Target") return manual.targetAudience;
                              return manual.characteristics;
                            }
                          }
                          
                          if (item.type === "concept") {
                            const concept = concepts?.find(c => c.id === item.id);
                            if (concept) {
                              if (aspectName === "Definizione") return concept.definition;
                              if (aspectName === "Categoria") return concept.category;
                              if (aspectName === "Termini Correlati") return concept.relatedTerms.join(", ");
                              if (aspectName === "Esempi") return concept.examples || "Esempi di applicazione";
                              return concept.definition;
                            }
                          }
                          
                          return `Analisi di ${item.name}`;
                        };

                        // Determina aspetti intelligenti basati sui tipi selezionati
                        const selectedTypes = [...new Set(createState.selectedItems.map(item => item.type))];
                        let aspects = [];
                        
                        if (selectedTypes.includes("school")) {
                          aspects.push({
                            name: "Principi Chiave",
                            comparisons: createState.selectedItems.map(item => ({
                              itemId: item.id,
                              value: generateSmartContent(item, "Principi Chiave")
                            }))
                          });
                          aspects.push({
                            name: "Economisti di Riferimento", 
                            comparisons: createState.selectedItems.map(item => ({
                              itemId: item.id,
                              value: generateSmartContent(item, "Economisti di Riferimento")
                            }))
                          });
                        }
                        
                        if (selectedTypes.includes("model")) {
                          aspects.push({
                            name: "Concetti Chiave",
                            comparisons: createState.selectedItems.map(item => ({
                              itemId: item.id,
                              value: generateSmartContent(item, "Concetti Chiave")
                            }))
                          });
                          aspects.push({
                            name: "Applicazioni",
                            comparisons: createState.selectedItems.map(item => ({
                              itemId: item.id,
                              value: generateSmartContent(item, "Applicazioni")
                            }))
                          });
                        }
                        
                        if (selectedTypes.includes("manual")) {
                          aspects.push({
                            name: "Autori e Scuola",
                            comparisons: createState.selectedItems.map(item => ({
                              itemId: item.id,
                              value: generateSmartContent(item, "Autori") + " - " + generateSmartContent(item, "Scuola di Pensiero")
                            }))
                          });
                          aspects.push({
                            name: "Punti di Forza",
                            comparisons: createState.selectedItems.map(item => ({
                              itemId: item.id,
                              value: generateSmartContent(item, "Punti di Forza")
                            }))
                          });
                        }
                        
                        if (selectedTypes.includes("concept")) {
                          aspects.push({
                            name: "Definizioni",
                            comparisons: createState.selectedItems.map(item => ({
                              itemId: item.id,
                              value: generateSmartContent(item, "Definizione")
                            }))
                          });
                          aspects.push({
                            name: "Termini Correlati",
                            comparisons: createState.selectedItems.map(item => ({
                              itemId: item.id,
                              value: generateSmartContent(item, "Termini Correlati")
                            }))
                          });
                        }
                        
                        // Aspetto generale sempre presente
                        aspects.push({
                          name: "Panoramica Generale",
                          comparisons: createState.selectedItems.map(item => ({
                            itemId: item.id,
                            value: generateSmartContent(item, "Generale")
                          }))
                        });

                        const newComparison = {
                          title: createState.title,
                          description: createState.description || "Confronto personalizzato",
                          isCustom: "true",
                          items: createState.selectedItems.map(item => ({
                            type: item.type,
                            id: item.id,
                            name: item.name
                          })),
                          aspects: aspects
                        };
                        createComparisonMutation.mutate(newComparison);
                      }
                    }}
                    disabled={createState.selectedItems.length < 2 || !createState.title.trim() || createComparisonMutation.isPending}
                  >
                    {createComparisonMutation.isPending ? "Creazione..." : "Crea Confronto"}
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
        <p className="text-gray-700 max-w-4xl">
          Confronta qualsiasi combinazione di scuole di pensiero, modelli teorici, manuali e concetti. 
          Usa i confronti predefiniti o crea i tuoi confronti personalizzati per un'analisi approfondita.
        </p>
      </div>

      {/* Saltwater vs Freshwater Special Display */}
      {showSaltwaterDebate && (
        <div className="mb-8">
          <Card className="border-blue-200 bg-gradient-to-r from-blue-50 to-purple-50">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-xl text-blue-900" translate="no">
                  Saltwater vs Freshwater Economists
                </CardTitle>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowSaltwaterDebate(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
              <div className="space-y-4">
                <p className="text-blue-700 text-sm leading-relaxed">
                  Questo è uno dei dibattiti più importanti e duraturi in economia macroeconomica, 
                  <strong>formalizzato nel 1976 da Robert Hall</strong>. Il dibattito deriva dalla posizione 
                  geografica delle università americane e rappresenta due visioni fondamentalmente diverse 
                  del funzionamento dell'economia e del ruolo dello Stato.
                </p>
                
                <div className="bg-blue-100 p-4 rounded-lg">
                  <h5 className="font-semibold text-blue-900 mb-2">La Distinzione Originale di Robert Hall (1976):</h5>
                  <p className="text-sm text-blue-800 italic leading-relaxed">
                    "La visione freshwater sostiene che le fluttuazioni sono largamente attribuibili a 
                    spostamenti dell'offerta e che il governo è essenzialmente incapace di influenzare 
                    il livello di attività economica. La visione saltwater considera gli spostamenti 
                    della domanda responsabili delle fluttuazioni e pensa che le politiche governative 
                    (almeno la politica monetaria) siano capaci di influenzare la domanda."
                  </p>
                </div>
                
                <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
                  <h5 className="font-semibold text-amber-900 mb-2">Perché il Nome Geografia?</h5>
                  <p className="text-sm text-amber-800">
                    <strong>Saltwater (acqua salata):</strong> Università delle coste oceaniche<br/>
                    <strong>Freshwater (acqua dolce):</strong> Università vicine ai Grandi Laghi dell'entroterra americano
                  </p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-5 rounded-lg border-2 border-blue-200 shadow-sm">
                  <div className="flex items-center mb-4">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                      <span className="text-white font-bold text-sm">S</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg text-blue-900" translate="no">Saltwater Economists</h4>
                      <p className="text-xs text-blue-600 font-medium">Università delle coste oceaniche</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="bg-blue-50 p-3 rounded-lg">
                      <h5 className="font-semibold text-sm mb-2 text-blue-900">🏛️ Università Principali:</h5>
                      <p className="text-sm text-blue-800"><strong>MIT, Harvard, Yale, Princeton, Berkeley, Stanford</strong></p>
                      <p className="text-xs text-blue-700 mt-1">Posizione geografica: Coste atlantica e pacifica degli Stati Uniti</p>
                    </div>
                    
                    <div>
                      <h5 className="font-semibold text-sm mb-3 text-gray-900">💭 Visione del Mercato:</h5>
                      <div className="space-y-2">
                        <div className="flex items-start">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mt-1.5 mr-3 flex-shrink-0"></span>
                          <div>
                            <p className="text-sm text-gray-700 font-medium">I mercati possono fallire e rimanere in disequilibrio a lungo</p>
                            <p className="text-xs text-gray-600">Non sempre raggiungono automaticamente l'equilibrio ottimale</p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mt-1.5 mr-3 flex-shrink-0"></span>
                          <div>
                            <p className="text-sm text-gray-700 font-medium">La disoccupazione involontaria esiste ed è seria</p>
                            <p className="text-xs text-gray-600">Contrario alla visione che tutta la disoccupazione sia volontaria</p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mt-1.5 mr-3 flex-shrink-0"></span>
                          <div>
                            <p className="text-sm text-gray-700 font-medium">Le recessioni sono sprechi evitabili</p>
                            <p className="text-xs text-gray-600">Non inevitabili conseguenze naturali del ciclo economico</p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mt-1.5 mr-3 flex-shrink-0"></span>
                          <div>
                            <p className="text-sm text-gray-700 font-medium">I mercati finanziari sono inclini a bolle e panici</p>
                            <p className="text-xs text-gray-600">Tendenza all'instabilità e comportamenti irrazionali collettivi</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h5 className="font-semibold text-sm mb-3 text-gray-900">🏛️ Ruolo del Governo:</h5>
                      <div className="space-y-2">
                        <div className="flex items-start">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mt-1.5 mr-3 flex-shrink-0"></span>
                          <div>
                            <p className="text-sm text-gray-700 font-medium">Cruciale per la stabilizzazione economica</p>
                            <p className="text-xs text-gray-600">Usando sia politiche fiscali che monetarie attive</p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mt-1.5 mr-3 flex-shrink-0"></span>
                          <div>
                            <p className="text-sm text-gray-700 font-medium">La regolamentazione dei mercati finanziari è necessaria</p>
                            <p className="text-xs text-gray-600">Per prevenire crisi e instabilità sistemiche</p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mt-1.5 mr-3 flex-shrink-0"></span>
                          <div>
                            <p className="text-sm text-gray-700 font-medium">Tendenzialmente più interventiste e keynesiane</p>
                            <p className="text-xs text-gray-600">Favorevoli a politiche anticicliche e di sostegno alla domanda</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h5 className="font-semibold text-sm mb-3 text-gray-900">🔬 Metodologia di Ricerca:</h5>
                      <div className="space-y-2">
                        <div className="flex items-start">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mt-1.5 mr-3 flex-shrink-0"></span>
                          <div>
                            <p className="text-sm text-gray-700 font-medium">Più pragmatici, aperti a modelli "ad hoc"</p>
                            <p className="text-xs text-gray-600">Se empiricamente utili, anche senza perfetta coerenza teorica</p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mt-1.5 mr-3 flex-shrink-0"></span>
                          <div>
                            <p className="text-sm text-gray-700 font-medium">Aperti a intuizioni da psicologia/sociologia</p>
                            <p className="text-xs text-gray-600">Interdisciplinarietà e fattori comportamentali nell'economia</p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mt-1.5 mr-3 flex-shrink-0"></span>
                          <div>
                            <p className="text-sm text-gray-700 font-medium">Attenzione ai dettagli istituzionali</p>
                            <p className="text-xs text-gray-600">Importanza del contesto istituzionale e storico</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-5 rounded-lg border-2 border-purple-200 shadow-sm">
                  <div className="flex items-center mb-4">
                    <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center mr-3">
                      <span className="text-white font-bold text-sm">F</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg text-purple-900" translate="no">Freshwater Economists</h4>
                      <p className="text-xs text-purple-600 font-medium">Università dell'entroterra (Grandi Laghi)</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="bg-purple-50 p-3 rounded-lg">
                      <h5 className="font-semibold text-sm mb-2 text-purple-900">🏛️ Università Principali:</h5>
                      <p className="text-sm text-purple-800"><strong>Chicago, Minnesota, Rochester, Carnegie Mellon</strong></p>
                      <p className="text-xs text-purple-700 mt-1">Posizione geografica: Regione dei Grandi Laghi, entroterra americano</p>
                    </div>
                    
                    <div>
                      <h5 className="font-semibold text-sm mb-3 text-gray-900">💭 Visione del Mercato:</h5>
                      <div className="space-y-2">
                        <div className="flex items-start">
                          <span className="w-2 h-2 bg-purple-500 rounded-full mt-1.5 mr-3 flex-shrink-0"></span>
                          <div>
                            <p className="text-sm text-gray-700 font-medium">Generalmente efficienti e autoregolantesi</p>
                            <p className="text-xs text-gray-600">I mercati trovano naturalmente l'equilibrio ottimale</p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <span className="w-2 h-2 bg-purple-500 rounded-full mt-1.5 mr-3 flex-shrink-0"></span>
                          <div>
                            <p className="text-sm text-gray-700 font-medium">Le fluttuazioni sono risposte naturali a shock reali</p>
                            <p className="text-xs text-gray-600">Cicli economici come adattamenti a cambiamenti nell'economia reale</p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <span className="w-2 h-2 bg-purple-500 rounded-full mt-1.5 mr-3 flex-shrink-0"></span>
                          <div>
                            <p className="text-sm text-gray-700 font-medium">La disoccupazione è in gran parte volontaria</p>
                            <p className="text-xs text-gray-600">Risultato di scelte individuali razionali piuttosto che fallimenti del mercato</p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <span className="w-2 h-2 bg-purple-500 rounded-full mt-1.5 mr-3 flex-shrink-0"></span>
                          <div>
                            <p className="text-sm text-gray-700 font-medium">Scettici verso instabilità sistematiche</p>
                            <p className="text-xs text-gray-600">I mercati finanziari sono fondamentalmente stabili ed efficienti</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h5 className="font-semibold text-sm mb-3 text-gray-900">🏛️ Ruolo del Governo:</h5>
                      <div className="space-y-2">
                        <div className="flex items-start">
                          <span className="w-2 h-2 bg-purple-500 rounded-full mt-1.5 mr-3 flex-shrink-0"></span>
                          <div>
                            <p className="text-sm text-gray-700 font-medium">Spesso inefficace o controproducente</p>
                            <p className="text-xs text-gray-600">L'intervento statale può distorcere i meccanismi naturali del mercato</p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <span className="w-2 h-2 bg-purple-500 rounded-full mt-1.5 mr-3 flex-shrink-0"></span>
                          <div>
                            <p className="text-sm text-gray-700 font-medium">Le aspettative razionali neutralizzano molte politiche</p>
                            <p className="text-xs text-gray-600">Gli agenti anticipano le mosse del governo, annullandone l'efficacia</p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <span className="w-2 h-2 bg-purple-500 rounded-full mt-1.5 mr-3 flex-shrink-0"></span>
                          <div>
                            <p className="text-sm text-gray-700 font-medium">Preferiscono regole fisse alla discrezionalità</p>
                            <p className="text-xs text-gray-600">Politiche prevedibili e trasparenti piuttosto che interventi ad hoc</p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <span className="w-2 h-2 bg-purple-500 rounded-full mt-1.5 mr-3 flex-shrink-0"></span>
                          <div>
                            <p className="text-sm text-gray-700 font-medium">Orientate al libero mercato</p>
                            <p className="text-xs text-gray-600">Scettiche verso l'intervento governativo e la regolamentazione</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h5 className="font-semibold text-sm mb-3 text-gray-900">🔬 Metodologia di Ricerca:</h5>
                      <div className="space-y-2">
                        <div className="flex items-start">
                          <span className="w-2 h-2 bg-purple-500 rounded-full mt-1.5 mr-3 flex-shrink-0"></span>
                          <div>
                            <p className="text-sm text-gray-700 font-medium">Insistenza su rigore matematico e "microfondazioni"</p>
                            <p className="text-xs text-gray-600">Ogni modello deve derivare da comportamenti individuali ottimizzanti</p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <span className="w-2 h-2 bg-purple-500 rounded-full mt-1.5 mr-3 flex-shrink-0"></span>
                          <div>
                            <p className="text-sm text-gray-700 font-medium">Scetticismo verso approcci non rigorosi</p>
                            <p className="text-xs text-gray-600">Preferenza per coerenza logica anche a costo del realismo empirico</p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <span className="w-2 h-2 bg-purple-500 rounded-full mt-1.5 mr-3 flex-shrink-0"></span>
                          <div>
                            <p className="text-sm text-gray-700 font-medium">Modellazione esplicita delle aspettative razionali</p>
                            <p className="text-xs text-gray-600">Gli agenti utilizzano tutte le informazioni disponibili in modo ottimale</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t-2 border-blue-200">
                <h4 className="font-bold text-lg text-blue-900 mb-4 flex items-center">
                  <span className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white text-xs">📅</span>
                  </span>
                  Evoluzione Storica del Grande Dibattito
                </h4>
                
                <div className="space-y-4">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
                      <div className="flex items-center mb-3">
                        <span className="bg-orange-500 text-white px-2 py-1 rounded text-xs font-bold mr-2">1970s</span>
                        <h5 className="font-semibold text-orange-900">La Crisi del Keynesismo</h5>
                      </div>
                      <div className="space-y-2">
                        <p className="text-sm text-orange-800"><strong>Evento Scatenante:</strong> La stagflazione (inflazione e disoccupazione elevate simultanee)</p>
                        <p className="text-xs text-orange-700">Questo fenomeno mise in crisi il keynesismo tradizionale, che non riusciva a spiegare come inflazione e disoccupazione potessero coesistere.</p>
                        <p className="text-xs text-orange-700"><strong>Risultato:</strong> Credibilità alla scuola freshwater e alla "rivoluzione delle aspettative razionali" (Lucas, Sargent, Wallace).</p>
                      </div>
                    </div>
                    
                    <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                      <div className="flex items-center mb-3">
                        <span className="bg-red-500 text-white px-2 py-1 rounded text-xs font-bold mr-2">1980s-90s</span>
                        <h5 className="font-semibold text-red-900">Egemonia Freshwater</h5>
                      </div>
                      <div className="space-y-2">
                        <p className="text-sm text-red-800"><strong>Periodo di Dominio:</strong> Le idee freshwater dominano la politica economica</p>
                        <p className="text-xs text-red-700"><strong>Protagonisti chiave:</strong></p>
                        <ul className="text-xs text-red-700 space-y-1 ml-3">
                          <li>• <strong>Paul Volcker</strong> (Federal Reserve): Politica monetaria restrittiva</li>
                          <li>• <strong>Ronald Reagan</strong>: Supply-side economics e deregolamentazione</li>
                          <li>• <strong>Margaret Thatcher</strong>: Politiche neoliberiste nel Regno Unito</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                      <div className="flex items-center mb-3">
                        <span className="bg-green-500 text-white px-2 py-1 rounded text-xs font-bold mr-2">2000s</span>
                        <h5 className="font-semibold text-green-900">Nuova Sintesi Neoclassica</h5>
                      </div>
                      <div className="space-y-2">
                        <p className="text-sm text-green-800"><strong>Tentativo di Convergenza:</strong> Emergenza di una "nuova sintesi neoclassica"</p>
                        <p className="text-xs text-green-700">Combinazione di elementi di entrambe le scuole attraverso i modelli DSGE (Dynamic Stochastic General Equilibrium).</p>
                        <p className="text-xs text-green-700"><strong>Caratteristiche:</strong> Microfondazioni + frizioni nominali + qualche elemento keynesiano.</p>
                      </div>
                    </div>
                    
                    <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                      <div className="flex items-center mb-3">
                        <span className="bg-purple-500 text-white px-2 py-1 rounded text-xs font-bold mr-2">2008</span>
                        <h5 className="font-semibold text-purple-900">Riaccensione del Dibattito</h5>
                      </div>
                      <div className="space-y-2">
                        <p className="text-sm text-purple-800"><strong>La Grande Recessione:</strong> Crisi finanziaria globale riaccende il dibattito</p>
                        <p className="text-xs text-purple-700"><strong>Saltwater:</strong> Sostengono la necessità di intervento governativo massiccio ("Come hanno fatto gli economisti a sbagliare così tanto?" - Paul Krugman)</p>
                        <p className="text-xs text-purple-700"><strong>Freshwater:</strong> Rimangono scettici sugli stimoli fiscali e sulla capacità del governo di risolvere la crisi</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-indigo-50 to-blue-50 p-5 rounded-lg border border-indigo-200">
                    <div className="flex items-center mb-3">
                      <span className="bg-indigo-500 text-white px-3 py-1 rounded text-sm font-bold mr-3">OGGI</span>
                      <h5 className="font-semibold text-lg text-indigo-900">Dove Siamo Ora: Persistenza delle Differenze</h5>
                    </div>
                    <div className="space-y-3">
                      <p className="text-sm text-indigo-800 leading-relaxed">
                        <strong>Il dibattito continua</strong>, nonostante tentativi di sintesi. Si osserva un maggiore riconoscimento 
                        dell'instabilità dei mercati finanziari e l'incorporazione di più frizioni e elementi comportamentali nei modelli.
                      </p>
                      <div className="grid md:grid-cols-2 gap-4 mt-3">
                        <div className="bg-white/50 p-3 rounded border">
                          <p className="text-xs text-indigo-700"><strong>Convergenze emergenti:</strong></p>
                          <ul className="text-xs text-indigo-600 mt-1 space-y-1">
                            <li>• Importanza delle aspettative</li>
                            <li>• Necessità di microfondazioni</li>
                            <li>• Riconoscimento frizioni nei mercati</li>
                          </ul>
                        </div>
                        <div className="bg-white/50 p-3 rounded border">
                          <p className="text-xs text-indigo-700"><strong>Differenze persistenti:</strong></p>
                          <ul className="text-xs text-indigo-600 mt-1 space-y-1">
                            <li>• Efficacia intervento governativo</li>
                            <li>• Stabilità intrinseca dei mercati</li>
                            <li>• Metodologia di ricerca</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Search and Filter */}
      <div className="mb-8">
        <div className="relative">
          <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
          <Input
            type="text"
            placeholder="Cerca nei confronti esistenti..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
        <div className="mt-4">
          <p className="text-sm text-gray-600">
            Mostrando {filteredComparisons.length} di {comparisons?.length || 0} confronti
            {searchQuery && ` per "${searchQuery}"`}
          </p>
        </div>
      </div>

      {/* Comparisons */}
      <div className="space-y-8">
        {filteredComparisons.map((comparison, index) => {
          const isExpanded = expandedComparisons.includes(comparison.id);
          return (
            <Card key={comparison.id} className="overflow-hidden">
              <CardHeader className="cursor-pointer" onClick={() => toggleExpanded(comparison.id)}>
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <CardTitle className="text-xl">{comparison.title}</CardTitle>
                      {comparison.isCustom === "true" && (
                        <Badge className="bg-green-100 text-green-800 border-green-200">
                          Personalizzato
                        </Badge>
                      )}
                    </div>
                    <p className="text-gray-600">{comparison.description}</p>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {comparison.items.map(item => (
                        <Badge key={item.id} variant="outline" className="text-xs">
                          {item.name}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    {comparison.isCustom === "true" && (
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={(e) => {
                          e.stopPropagation();
                          if (window.confirm("Sei sicuro di voler eliminare questo confronto?")) {
                            deleteComparisonMutation.mutate(comparison.id);
                          }
                        }}
                        className="text-red-500 hover:text-red-700 hover:bg-red-50"
                        disabled={deleteComparisonMutation.isPending}
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    )}
                    <Button variant="ghost" size="sm">
                      {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </Button>
                  </div>
                </div>
              </CardHeader>
              
              {isExpanded && (
                <CardContent className="pt-0 pb-8 px-8">
                  <Separator className="mb-6" />
                  <div className="space-y-6">
                    {comparison.aspects.map((aspect, aspectIndex) => (
                      <div key={aspectIndex}>
                        <h4 className="text-lg font-semibold text-gray-900 mb-4">{aspect.name}</h4>
                        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
                          {aspect.comparisons.map((comp, compIndex) => {
                            const item = comparison.items.find(i => i.id === comp.itemId);
                            return (
                              <Card key={compIndex} className="border-l-4 border-l-primary bg-gray-50/50">
                                <CardContent className="p-4">
                                  <div className="mb-2">
                                    <Badge variant="outline" className="mb-2">
                                      {item?.name}
                                    </Badge>
                                  </div>
                                  <p className="text-sm text-gray-700 leading-relaxed">{comp.value}</p>
                                </CardContent>
                              </Card>
                            );
                          })}
                        </div>
                        {aspectIndex < comparison.aspects.length - 1 && (
                          <Separator className="mt-6" />
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              )}
            </Card>
          );
        })}
      </div>

      {/* No results message */}
      {filteredComparisons.length === 0 && searchQuery && (
        <div className="text-center py-12">
          <GitCompare className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Nessun confronto trovato</h3>
          <p className="text-gray-600 mb-4">
            Non sono stati trovati confronti che corrispondono alla tua ricerca.
          </p>
          <Button variant="outline" onClick={() => setSearchQuery("")}>
            Mostra tutti i confronti
          </Button>
        </div>
      )}

      {/* Guide for Creating Comparisons */}
      <div className="mt-12 bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 text-white">
        <h2 className="text-2xl font-bold mb-4">Come Utilizzare i Confronti Dinamici</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex items-start space-x-3">
            <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
              <span className="text-white font-bold text-sm">1</span>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Esplora i Confronti Esistenti</h3>
              <p className="text-gray-300 text-sm">
                Clicca sui confronti per espandere e vedere le analisi comparative dettagliate tra diversi elementi.
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
              <span className="text-white font-bold text-sm">2</span>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Crea Confronti Personalizzati</h3>
              <p className="text-gray-300 text-sm">
                Usa il pulsante "Crea Confronto" per confrontare qualsiasi combinazione di scuole, modelli, manuali e concetti.
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
              <span className="text-white font-bold text-sm">3</span>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Analisi Multidimensionale</h3>
              <p className="text-gray-300 text-sm">
                Ogni confronto analizza diversi aspetti per una comprensione completa delle differenze e similitudini.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Summary Stats */}
      <div className="mt-12 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Panoramica dei Confronti</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">{comparisons?.length || 0}</div>
            <div className="text-gray-600">Confronti Disponibili</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">
              {Array.from(new Set(comparisons?.flatMap(c => c.items.map(item => item.type)) || [])).length}
            </div>
            <div className="text-gray-600">Tipi di Elementi</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">
              {comparisons?.reduce((acc, comp) => acc + comp.aspects.length, 0) || 0}
            </div>
            <div className="text-gray-600">Aspetti Analizzati</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">
              {Array.from(new Set(comparisons?.flatMap(c => c.items.map(item => item.name)) || [])).length}
            </div>
            <div className="text-gray-600">Elementi Unici</div>
          </div>
        </div>
      </div>
    </div>
  );
}

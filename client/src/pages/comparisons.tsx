import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { GitCompare, Plus, X, ChevronDown, ChevronUp, Search, Filter } from "lucide-react";
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
            <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle>Crea Nuovo Confronto</DialogTitle>
              </DialogHeader>
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
                                      name: manual.title
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
                            <span className="text-sm">{manual.title}</span>
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
                      }
                    }}
                    disabled={createState.selectedItems.length < 2 || !createState.title.trim()}
                  >
                    Crea Confronto
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
                  <Button variant="ghost" size="sm">
                    {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </Button>
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

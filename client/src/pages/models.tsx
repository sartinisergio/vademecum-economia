import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useLocation } from "wouter";
import { Calculator, TrendingUp, Brain, Layers, ChevronRight, Filter, RotateCcw, ArrowLeftRight, Printer } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Skeleton } from "@/components/ui/skeleton";
import type { EconomicModel } from "@shared/schema";

export default function Models() {
  const [location] = useLocation();
  const urlParams = new URLSearchParams(location.split('?')[1] || '');
  const typeFilter = urlParams.get('type');
  const [selectedModels, setSelectedModels] = useState<string[]>([]);
  const [displayMode, setDisplayMode] = useState<"all" | "selected">("all");
  const [comparisonMode, setComparisonMode] = useState(false);

  const { data: models, isLoading, error } = useQuery<EconomicModel[]>({
    queryKey: ["/api/models"],
  });

  const microModels = models?.filter(model => model.type === "microeconomico") || [];
  const macroModels = models?.filter(model => model.type === "macroeconomico") || [];

  const toggleModelSelection = (modelId: string) => {
    setSelectedModels(prev => 
      prev.includes(modelId) 
        ? prev.filter(id => id !== modelId)
        : [...prev, modelId]
    );
  };

  const resetSelection = () => {
    setSelectedModels([]);
    setDisplayMode("all");
    setComparisonMode(false);
  };

  const handleComparisonToggle = () => {
    if (selectedModels.length >= 2) {
      setComparisonMode(!comparisonMode);
      setDisplayMode("selected");
    }
  };

  const handlePrint = () => {
    // Il problema potrebbe essere nella logica di filtro - usiamo semplicemente i modelli selezionati
    const modelsForPrint = models?.filter(model => selectedModels.includes(model.id)) || [];
    
    const printContent = `
      <html>
        <head>
          <title>Confronto Modelli Teorici - Vademecum di Economia</title>
          <style>
            body { font-family: Arial, sans-serif; margin: 20px; line-height: 1.6; }
            .header { text-align: center; margin-bottom: 30px; border-bottom: 2px solid #333; padding-bottom: 10px; }
            .model { margin-bottom: 25px; page-break-inside: avoid; }
            .model-title { font-size: 18px; font-weight: bold; color: #333; margin-bottom: 10px; }
            .type-badge { display: inline-block; padding: 4px 8px; background-color: #f0f0f0; border-radius: 4px; font-size: 12px; margin-bottom: 10px; }
            .section { margin-bottom: 15px; }
            .section-title { font-weight: bold; color: #555; margin-bottom: 5px; }
            .list-item { margin-left: 20px; margin-bottom: 3px; }
            .date { font-size: 12px; color: #666; margin-top: 20px; text-align: center; }
            @media print { .no-print { display: none; } }
          </style>
        </head>
        <body>
          <div class="header">
            <h1>Confronto Modelli Teorici Economici</h1>
            <p>Vademecum di Economia - ${new Date().toLocaleDateString('it-IT')}</p>
            <p>Confronto di ${modelsForPrint.length} modelli selezionati</p>
          </div>
          
          ${modelsForPrint.map((model: any) => `
            <div class="model">
              <div class="model-title">${model.name}</div>
              <div class="type-badge">${model.type === 'microeconomico' ? 'Microeconomico' : 'Macroeconomico'}</div>
              
              <div class="section">
                <div class="section-title">Descrizione:</div>
                <div class="list-item">${model.description}</div>
              </div>
              
              ${model.school ? `
              <div class="section">
                <div class="section-title">Scuola di Riferimento:</div>
                <div class="list-item">${model.school}</div>
              </div>` : ''}
              
              <div class="section">
                <div class="section-title">Concetti Chiave:</div>
                ${model.keyConcepts.map((concept: string) => `<div class="list-item">• ${concept}</div>`).join('')}
              </div>
              
              <div class="section">
                <div class="section-title">Applicazioni Pratiche:</div>
                ${model.applications.map((app: string) => `<div class="list-item">• ${app}</div>`).join('')}
              </div>
            </div>
          `).join('')}
          
          <div class="date">
            Documento generato il ${new Date().toLocaleString('it-IT')} - Vademecum di Economia
          </div>
        </body>
      </html>
    `;

    const printWindow = window.open('', '_blank');
    if (printWindow) {
      printWindow.document.write(printContent);
      printWindow.document.close();
      printWindow.focus();
      printWindow.print();
    }
  };

  // Modelli da visualizzare in base alla modalità
  const displayedModels = displayMode === "all" ? models : 
    models?.filter(model => selectedModels.includes(model.id)) || [];
  const displayedMicroModels = displayedModels?.filter(model => model.type === "microeconomico") || [];
  const displayedMacroModels = displayedModels?.filter(model => model.type === "macroeconomico") || [];

  if (isLoading) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <Skeleton className="h-12 w-96 mb-4" />
          <Skeleton className="h-6 w-[600px]" />
        </div>
        <Skeleton className="h-12 w-full mb-8" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {[...Array(6)].map((_, i) => (
            <Skeleton key={i} className="h-96" />
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-red-600 mb-4">Errore nel caricamento</h1>
          <p className="text-gray-600">Non è stato possibile caricare i modelli economici.</p>
        </div>
      </div>
    );
  }

  const ModelCard = ({ model }: { model: EconomicModel }) => {
    const isSelected = selectedModels.includes(model.id);
    return (
    <Card className={`hover:shadow-lg transition-all ${isSelected ? 'ring-2 ring-orange-500 bg-orange-50' : ''}`}>
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-4 flex-1">
            <Checkbox
              checked={isSelected}
              onCheckedChange={() => toggleModelSelection(model.id)}
              className="mt-1"
            />
            <div className={`w-16 h-16 ${model.type === 'microeconomico' ? 'gradient-orange' : 'gradient-red'} rounded-xl flex items-center justify-center`}>
              {model.type === 'microeconomico' ? 
                <Calculator className="w-8 h-8 text-white" /> : 
                <TrendingUp className="w-8 h-8 text-white" />
              }
            </div>
            <div>
              <CardTitle className="text-xl">{model.name}</CardTitle>
              <Badge className={model.type === 'microeconomico' ? 
                "bg-orange-100 text-orange-800 border-orange-200" : 
                "bg-red-100 text-red-800 border-red-200"
              }>
                {model.type === 'microeconomico' ? 'Microeconomico' : 'Macroeconomico'}
              </Badge>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <p className="text-gray-700 leading-relaxed">{model.description}</p>
        
        {/* Key Concepts */}
        <div>
          <div className="flex items-center space-x-2 mb-3">
            <Brain className="w-5 h-5 text-primary" />
            <h4 className="font-semibold text-gray-900">Concetti Chiave</h4>
          </div>
          <div className="space-y-2">
            {model.keyConcepts.map((concept, index) => (
              <div key={index} className="flex items-center space-x-2">
                <ChevronRight className="w-4 h-4 text-primary" />
                <span className="text-sm text-gray-600">{concept}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Applications */}
        <div>
          <div className="flex items-center space-x-2 mb-3">
            <Layers className="w-5 h-5 text-primary" />
            <h4 className="font-semibold text-gray-900">Applicazioni</h4>
          </div>
          <div className="flex flex-wrap gap-2">
            {model.applications.map((application, index) => (
              <Badge key={index} variant="outline" className="text-xs">
                {application}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
    );
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-12">
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-12 h-12 gradient-orange rounded-xl flex items-center justify-center">
            <Calculator className="w-7 h-7 text-white" />
          </div>
          <div>
            <h1 className="text-4xl font-bold text-gray-900">Modelli Teorici</h1>
            <p className="text-xl text-gray-600">Strumenti micro e macroeconomici per comprendere la realtà economica</p>
          </div>
        </div>
        <p className="text-gray-700 max-w-4xl">
          I modelli teorici sono rappresentazioni semplificate della realtà economica, suddivisi tra 
          microeconomia (comportamento di consumatori e imprese) e macroeconomia (sistema economico complessivo). 
          Ogni modello offre strumenti specifici per analizzare fenomeni economici diversi.
        </p>
      </div>

      {/* Filter and Selection Controls */}
      <div className="mb-8 bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
        <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
            <div className="flex items-center space-x-2">
              <Filter className="w-5 h-5 text-gray-600" />
              <h3 className="font-semibold text-gray-900">Seleziona Modelli Teorici</h3>
            </div>
            
            <Select value={displayMode} onValueChange={(value: "all" | "selected") => setDisplayMode(value)}>
              <SelectTrigger className="w-48">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Visualizza tutti i modelli</SelectItem>
                <SelectItem value="selected">Solo modelli selezionati ({selectedModels.length})</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex gap-3">
            <Button 
              variant="outline" 
              onClick={handleComparisonToggle}
              disabled={selectedModels.length < 2}
              className="flex items-center space-x-2"
            >
              <ArrowLeftRight className="w-4 h-4" />
              <span>{comparisonMode ? "Vista normale" : "Confronta selezionati"}</span>
            </Button>
            
            {selectedModels.length >= 2 && (
              <Button 
                variant="outline" 
                onClick={handlePrint}
                className="flex items-center space-x-2"
              >
                <Printer className="w-4 h-4" />
                <span translate="no">Stampa confronto</span>
              </Button>
            )}
            
            <Button 
              variant="outline" 
              onClick={resetSelection}
              disabled={selectedModels.length === 0}
              className="flex items-center space-x-2"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Reset</span>
            </Button>
          </div>
        </div>
        
        {selectedModels.length > 0 && (
          <div className="mt-4 pt-4 border-t border-gray-200">
            <p className="text-sm text-gray-600">
              {selectedModels.length} modelli selezionati
              {selectedModels.length >= 2 && (
                <span className="text-green-600 ml-2">• Confronto disponibile</span>
              )}
            </p>
          </div>
        )}
      </div>

      {/* Detailed Comparison Table - Only in comparison mode */}
      {comparisonMode && selectedModels.length >= 2 && (
        <div className="mb-12 bg-white rounded-2xl border border-gray-200 overflow-hidden">
          <div className="px-6 py-4 bg-gradient-to-r from-orange-50 to-red-50 border-b border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900">Confronto Dettagliato</h2>
            <p className="text-gray-600">Analisi comparativa dei {selectedModels.length} modelli selezionati</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 w-32">Aspetto</th>
                  {displayedModels?.map((model) => (
                    <th key={model.id} className="px-6 py-3 text-left text-sm font-semibold text-gray-900 min-w-80">
                      <div>
                        <div className="font-medium">{model.name}</div>
                        <div className="text-xs text-gray-500 font-normal">{model.type}</div>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 font-medium text-gray-900 bg-gray-50">Tipo</td>
                  {displayedModels?.map((model) => (
                    <td key={model.id} className="px-6 py-4">
                      <Badge className={model.type === 'microeconomico' ? 
                        "bg-orange-100 text-orange-800 border-orange-200" : 
                        "bg-red-100 text-red-800 border-red-200"
                      }>
                        {model.type === 'microeconomico' ? 'Microeconomico' : 'Macroeconomico'}
                      </Badge>
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-gray-900 bg-gray-50">Descrizione</td>
                  {displayedModels?.map((model) => (
                    <td key={model.id} className="px-6 py-4">
                      <div className="text-sm text-gray-600">{model.description}</div>
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-gray-900 bg-gray-50">Concetti Chiave</td>
                  {displayedModels?.map((model) => (
                    <td key={model.id} className="px-6 py-4">
                      <ul className="space-y-1">
                        {model.keyConcepts.map((concept, index) => (
                          <li key={index} className="flex items-start space-x-2">
                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-sm text-gray-600">{concept}</span>
                          </li>
                        ))}
                      </ul>
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-gray-900 bg-gray-50">Applicazioni</td>
                  {displayedModels?.map((model) => (
                    <td key={model.id} className="px-6 py-4">
                      <div className="flex flex-wrap gap-1">
                        {model.applications.map((application, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {application}
                          </Badge>
                        ))}
                      </div>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Tabs for Micro/Macro */}
      <Tabs defaultValue={typeFilter || "all"} className="mb-8">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="all">Tutti i Modelli</TabsTrigger>
          <TabsTrigger value="micro">Microeconomici</TabsTrigger>
          <TabsTrigger value="macro">Macroeconomici</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-8">
          {/* Empty state message when no models to display */}
          {displayMode === "selected" && selectedModels.length === 0 && (
            <div className="text-center py-12">
              <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                <Calculator className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Nessun modello selezionato</h3>
              <p className="text-gray-600 mb-4">Seleziona alcuni modelli per visualizzarli qui</p>
              <Button onClick={() => setDisplayMode("all")} variant="outline">
                Visualizza tutti i modelli
              </Button>
            </div>
          )}

          {/* Microeconomic Models */}
          {displayedMicroModels.length > 0 && (
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <Calculator className="w-6 h-6 text-orange-600" />
                <h2 className="text-2xl font-bold text-gray-900">Modelli Microeconomici</h2>
                <Badge className="bg-orange-100 text-orange-800">{displayedMicroModels.length} modelli</Badge>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
                {displayedMicroModels.map((model) => (
                  <ModelCard key={model.id} model={model} />
                ))}
              </div>
            </div>
          )}

          {/* Macroeconomic Models */}
          {displayedMacroModels.length > 0 && (
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <TrendingUp className="w-6 h-6 text-red-600" />
                <h2 className="text-2xl font-bold text-gray-900">Modelli Macroeconomici</h2>
                <Badge className="bg-red-100 text-red-800">{displayedMacroModels.length} modelli</Badge>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {displayedMacroModels.map((model) => (
                  <ModelCard key={model.id} model={model} />
                ))}
              </div>
            </div>
          )}

          {/* Fallback when no data available at all */}
          {displayMode === "all" && (!models || models.length === 0) && (
            <div className="text-center py-12">
              <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                <Calculator className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Nessun modello disponibile</h3>
              <p className="text-gray-600">I modelli teorici non sono ancora caricati</p>
            </div>
          )}
        </TabsContent>

        <TabsContent value="micro">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {displayedMicroModels.map((model) => (
              <ModelCard key={model.id} model={model} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="macro">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {displayedMacroModels.map((model) => (
              <ModelCard key={model.id} model={model} />
            ))}
          </div>
        </TabsContent>
      </Tabs>

      {/* Summary Stats */}
      <div className="mt-12 bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          {comparisonMode ? `Analisi dei ${selectedModels.length} Modelli Selezionati` : "Panoramica dei Modelli Teorici"}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">{displayedModels?.length || 0}</div>
            <div className="text-gray-600">
              {comparisonMode ? "Modelli Confrontati" : 
               displayMode === "selected" ? "Modelli Selezionati" : "Modelli Totali"}
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-600 mb-2">{displayedMicroModels.length}</div>
            <div className="text-gray-600">Microeconomici</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-red-600 mb-2">{displayedMacroModels.length}</div>
            <div className="text-gray-600">Macroeconomici</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">
              {displayedModels?.reduce((acc, model) => acc + model.keyConcepts.length, 0) || 0}
            </div>
            <div className="text-gray-600">Concetti Totali</div>
          </div>
        </div>
        
        {comparisonMode && selectedModels.length >= 2 && (
          <div className="mt-6 pt-6 border-t border-white/20">
            <div className="text-center">
              <p className="text-gray-700">
                <span className="font-semibold">Modalità Confronto Attiva:</span> Stai confrontando {selectedModels.length} modelli economici selezionati. 
                Usa la tabella sopra per analizzare le differenze tra concetti chiave, applicazioni pratiche e approcci teorici.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

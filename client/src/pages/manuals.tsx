import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { useLocation } from "wouter";
import { BookOpen, Users, Target, CheckCircle, XCircle, GraduationCap, Filter, RotateCcw, ArrowLeftRight, Printer } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Skeleton } from "@/components/ui/skeleton";
import type { AnalyticalReport } from "@shared/schema";

const schoolColors = {
  "Post-keynesiana moderna": "bg-emerald-100 text-emerald-800 border-emerald-200",
  "Nuova Sintesi Neoclassica": "bg-blue-100 text-blue-800 border-blue-200",
  "Pragmatismo eclettico pedagogico": "bg-purple-100 text-purple-800 border-purple-200",
  "Pluralismo integrato": "bg-orange-100 text-orange-800 border-orange-200"
};

const schoolGradients = {
  "Post-keynesiana moderna": "gradient-emerald",
  "Nuova Sintesi Neoclassica": "gradient-blue",
  "Pragmatismo eclettico pedagogico": "gradient-purple",
  "Pluralismo integrato": "gradient-orange"
};

export default function Manuals() {
  const [location] = useLocation();
  const [searchQuery, setSearchQuery] = useState("");
  const [highlightedManual, setHighlightedManual] = useState<string | null>(null);
  const [selectedManuals, setSelectedManuals] = useState<string[]>([]);
  const [displayMode, setDisplayMode] = useState<"all" | "selected">("all");
  const [comparisonMode, setComparisonMode] = useState(false);

  const { data: analyticalReports, isLoading, error } = useQuery<AnalyticalReport[]>({
    queryKey: ["/api/analyticalReports"],
  });

  // Gestisce i parametri URL per ricerca
  useEffect(() => {
    const urlParams = new URLSearchParams(location.split('?')[1] || '');
    const search = urlParams.get('search');
    
    if (search) {
      setSearchQuery(search);
      // Trova il manuale che contiene l'autore cercato
      if (analyticalReports) {
        const foundReport = analyticalReports.find(report => 
          report.authors.some(author => 
            author.toLowerCase().includes(search.toLowerCase())
          )
        );
        if (foundReport) {
          setHighlightedManual(foundReport.title);
        }
      }
    }
  }, [location, analyticalReports]);

  const toggleManualSelection = (manualId: string) => {
    setSelectedManuals(prev => 
      prev.includes(manualId) 
        ? prev.filter(id => id !== manualId)
        : [...prev, manualId]
    );
  };

  const resetSelection = () => {
    setSelectedManuals([]);
    setDisplayMode("all");
    setComparisonMode(false);
  };

  const handleComparisonToggle = () => {
    if (selectedManuals.length >= 2) {
      setComparisonMode(!comparisonMode);
      setDisplayMode("selected");
    }
  };

  const handlePrint = () => {
    // Il problema potrebbe essere nella logica di filtro - usiamo semplicemente i manuali selezionati
    const reportsForPrint = analyticalReports?.filter(report => selectedManuals.includes(report.id)) || [];
    
    const printContent = `
      <html>
        <head>
          <title>Report Analitici - Vademecum di Economia</title>
          <style>
            body { font-family: Arial, sans-serif; margin: 20px; line-height: 1.6; }
            .header { text-align: center; margin-bottom: 30px; border-bottom: 2px solid #333; padding-bottom: 10px; }
            .manual { margin-bottom: 25px; page-break-inside: avoid; }
            .manual-title { font-size: 18px; font-weight: bold; color: #333; margin-bottom: 10px; }
            .authors { font-style: italic; margin-bottom: 10px; }
            .section { margin-bottom: 15px; }
            .section-title { font-weight: bold; color: #555; margin-bottom: 5px; }
            .list-item { margin-left: 20px; margin-bottom: 3px; }
            .comparison-table { width: 100%; border-collapse: collapse; margin: 20px 0; }
            .comparison-table th, .comparison-table td { border: 1px solid #ddd; padding: 8px; text-align: left; }
            .comparison-table th { background-color: #f5f5f5; font-weight: bold; }
            .date { font-size: 12px; color: #666; margin-top: 20px; text-align: center; }
            @media print { .no-print { display: none; } }
          </style>
        </head>
        <body>
          <div class="header">
            <h1>Report Analitici di Economia</h1>
            <p>Vademecum di Economia - ${new Date().toLocaleDateString('it-IT')}</p>
            <p>Confronto di ${reportsForPrint.length} report analitici selezionati</p>
          </div>
          
          ${reportsForPrint.map(report => `
            <div class="manual">
              <div class="manual-title">${report.title}</div>
              <div class="authors">Autori: ${report.authors.join(', ')}</div>
              
              <div class="section">
                <div class="section-title">Editore:</div>
                <div class="list-item">${report.publisher}</div>
              </div>
              
              <div class="section">
                <div class="section-title">Panorama Generale:</div>
                <div class="list-item">${report.generalOverview}</div>
              </div>
              
              <div class="section">
                <div class="section-title">Scuole di Pensiero:</div>
                <div class="list-item">${report.schoolsOfThought}</div>
              </div>
              
              <div class="section">
                <div class="section-title">Modelli Micro/Macro:</div>
                <div class="list-item">${report.microMacroModels}</div>
              </div>
              
              <div class="section">
                <div class="section-title">Analisi Temporale:</div>
                <div class="list-item">${report.timeFrameAnalysis}</div>
              </div>
              
              <div class="section">
                <div class="section-title">Modelli di Crescita:</div>
                <div class="list-item">${report.growthModels}</div>
              </div>
              
              <div class="section">
                <div class="section-title">Argomenti Non Standard:</div>
                <div class="list-item">${report.nonStandardTopics}</div>
              </div>
              
              <div class="section">
                <div class="section-title">Categoria:</div>
                <div class="list-item">${report.category}</div>
              </div>
              
            </div>
          `).join('')}
          
          <div class="date">
            Documento generato il ${new Date().toLocaleString('it-IT')} - Vademecum di Economia
          </div>
        </body>
      </html>
    `;

    // Open print window
    const printWindow = window.open('', '_blank');
    if (printWindow) {
      printWindow.document.write(printContent);
      printWindow.document.close();
      printWindow.focus();
      printWindow.print();
    }
  };

  // Filtra i report analitici in base alla ricerca
  const filteredReports = analyticalReports?.filter(report => {
    if (!searchQuery) return true;
    
    const query = searchQuery.toLowerCase();
    return (
      report.title.toLowerCase().includes(query) ||
      report.authors.some(author => author.toLowerCase().includes(query)) ||
      report.publisher.toLowerCase().includes(query) ||
      report.generalOverview.toLowerCase().includes(query) ||
      report.schoolsOfThought.toLowerCase().includes(query) ||
      report.microMacroModels.toLowerCase().includes(query) ||
      report.growthModels.toLowerCase().includes(query) ||
      report.nonStandardTopics.toLowerCase().includes(query)
    );
  }) || [];

  // Report da visualizzare in base alla modalità
  const displayedReports = displayMode === "all" ? filteredReports : 
    filteredReports.filter(report => selectedManuals.includes(report.id));

  if (isLoading) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <Skeleton className="h-12 w-96 mb-4" />
          <Skeleton className="h-6 w-[600px]" />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {[...Array(4)].map((_, i) => (
            <Skeleton key={i} className="h-[600px]" />
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
          <p className="text-gray-600">Non è stato possibile caricare i manuali.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-12">
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-12 h-12 gradient-emerald rounded-xl flex items-center justify-center">
            <BookOpen className="w-7 h-7 text-white" />
          </div>
          <div>
            <h1 className="text-4xl font-bold text-gray-900">
              {searchQuery ? `Risultati per "${searchQuery}"` : "Report Analitici Universitari"}
            </h1>
            <p className="text-xl text-gray-600">
              {searchQuery 
                ? `${filteredReports.length} manuali trovati` 
                : "Testi di riferimento delle università italiane"
              }
            </p>
          </div>
        </div>
        <p className="text-gray-700 max-w-4xl">
          Questa sezione analizza i principali manuali di economia utilizzati nelle università italiane, 
          focalizzandosi su autori, caratteristiche, scuole di pensiero, punti di forza e debolezza, 
          e pubblico ideale per ciascun testo.
        </p>
      </div>

      {/* Filter and Selection Controls */}
      <div className="mb-8 bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
        <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
            <div className="flex items-center space-x-2">
              <Filter className="w-5 h-5 text-gray-600" />
              <h3 className="font-semibold text-gray-900">Seleziona Report</h3>
            </div>
            
            <Select value={displayMode} onValueChange={(value: "all" | "selected") => setDisplayMode(value)}>
              <SelectTrigger className="w-48">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Visualizza tutti i manuali</SelectItem>
                <SelectItem value="selected">Solo manuali selezionati ({selectedManuals.length})</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex gap-3">
            <Button 
              variant="outline" 
              onClick={handleComparisonToggle}
              disabled={selectedManuals.length < 2}
              className="flex items-center space-x-2"
            >
              <ArrowLeftRight className="w-4 h-4" />
              <span>{comparisonMode ? "Vista normale" : "Confronta selezionati"}</span>
            </Button>
            
            {selectedManuals.length >= 2 && (
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
              disabled={selectedManuals.length === 0}
              className="flex items-center space-x-2"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Reset</span>
            </Button>
          </div>
        </div>
        
        {selectedManuals.length > 0 && (
          <div className="mt-4 pt-4 border-t border-gray-200">
            <p className="text-sm text-gray-600">
              {selectedManuals.length} manuali selezionati
              {selectedManuals.length >= 2 && (
                <span className="text-green-600 ml-2">• Confronto disponibile</span>
              )}
            </p>
          </div>
        )}
      </div>

      {/* Search Results Message */}
      {searchQuery && filteredReports.length === 0 && (
        <div className="text-center py-12">
          <BookOpen className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Nessun manuale trovato</h3>
          <p className="text-gray-600">La ricerca per "{searchQuery}" non ha prodotto risultati.</p>
        </div>
      )}

      {/* Manuals Grid */}
      {displayedReports.length > 0 && (
        <div className={`grid gap-8 mb-12 ${comparisonMode ? 'grid-cols-1' : 'grid-cols-1 lg:grid-cols-2'}`}>
          {displayedReports.map((report) => {
          const isHighlighted = highlightedManual === report.title;
          const isSelected = selectedManuals.includes(report.id);
          return (
            <Card key={report.id} className={`overflow-hidden hover:shadow-lg transition-all ${isHighlighted ? 'ring-2 ring-blue-500 shadow-lg' : ''} ${isSelected ? 'ring-2 ring-green-500 bg-green-50' : ''}`}>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-4 flex-1">
                  <Checkbox
                    checked={isSelected}
                    onCheckedChange={() => toggleManualSelection(report.id)}
                    className="mt-1"
                  />
                  <div className={`w-16 h-16 ${schoolGradients[report.schoolsOfThought as keyof typeof schoolGradients] || 'gradient-blue'} rounded-xl flex items-center justify-center`}>
                    <BookOpen className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl leading-tight">{report.title}</CardTitle>
                    <div className="flex flex-wrap gap-1 mt-2">
                      {(report.authors || []).map((author, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {author}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <Badge className={schoolColors[report.schoolsOfThought as keyof typeof schoolColors] || "bg-gray-100 text-gray-800 border-gray-200"}>
                {report.schoolsOfThought}
              </Badge>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Publisher */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                  <span className="text-blue-500 mr-2">•</span>
                  Editore
                </h4>
                <p className="text-sm text-gray-600 ml-6">{report.publisher}</p>
              </div>

              {/* General Overview */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                  <span className="text-blue-500 mr-2">•</span>
                  Panorama Generale
                </h4>
                <p className="text-sm text-gray-600 ml-6">{report.generalOverview}</p>
              </div>

              {/* School of Thought */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                  <span className="text-blue-500 mr-2">•</span>
                  Scuole di Pensiero
                </h4>
                <p className="text-sm text-gray-600 ml-6">{report.schoolsOfThought}</p>
              </div>

              {/* Micro/Macro Models */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                  <span className="text-blue-500 mr-2">•</span>
                  Modelli Micro/Macro
                </h4>
                <p className="text-sm text-gray-600 ml-6">{report.microMacroModels}</p>
              </div>

              {/* Time Frame Analysis */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                  <span className="text-blue-500 mr-2">•</span>
                  Analisi Temporale
                </h4>
                <p className="text-sm text-gray-600 ml-6">{report.timeFrameAnalysis}</p>
              </div>

              {/* Growth Models */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                  <span className="text-blue-500 mr-2">•</span>
                  Modelli di Crescita
                </h4>
                <p className="text-sm text-gray-600 ml-6">{report.growthModels}</p>
              </div>

              {/* Non-Standard Topics */}
              <div>
                <div className="flex items-center space-x-2 mb-3">
                  <span className="text-blue-500 mr-2">•</span>
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <h4 className="font-semibold text-gray-900">Argomenti Non Standard</h4>
                </div>
                <p className="text-sm text-gray-600 ml-6">{report.nonStandardTopics}</p>
              </div>


              {/* Category */}
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center space-x-2 mb-2">
                  <span className="text-blue-500 mr-2">•</span>
                  <GraduationCap className="w-5 h-5 text-primary" />
                  <h4 className="font-semibold text-gray-900">Categoria</h4>
                </div>
                <p className="text-sm text-gray-600 italic">{report.category}</p>
              </div>
            </CardContent>
          </Card>
          );
        })}
        </div>
      )}

      {/* Detailed Comparison Table - Only in comparison mode */}
      {comparisonMode && selectedManuals.length >= 2 && (
        <div className="mb-12 bg-white rounded-2xl border border-gray-200 overflow-hidden">
          <div className="px-6 py-4 bg-gradient-to-r from-green-50 to-blue-50 border-b border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900">Confronto Dettagliato</h2>
            <p className="text-gray-600">Analisi comparativa dei {selectedManuals.length} manuali selezionati</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 w-32">Aspetto</th>
                  {displayedReports.map((report) => (
                    <th key={report.id} className="px-6 py-3 text-left text-sm font-semibold text-gray-900 min-w-80">
                      <div>
                        <div className="font-medium">{report.title}</div>
                        <div className="text-xs text-gray-500 font-normal">{report.authors.join(", ")}</div>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 font-medium text-gray-900 bg-gray-50">Scuola</td>
                  {displayedReports.map((report) => (
                    <td key={report.id} className="px-6 py-4">
                      <Badge className={schoolColors[report.schoolsOfThought as keyof typeof schoolColors] || "bg-gray-100 text-gray-800 border-gray-200"}>
                        {report.schoolsOfThought}
                      </Badge>
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-gray-900 bg-gray-50">Panorama Generale</td>
                  {displayedReports.map((report) => (
                    <td key={report.id} className="px-6 py-4">
                      <div className="text-sm text-gray-600">{report.generalOverview}</div>
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-gray-900 bg-gray-50">Modelli Micro/Macro</td>
                  {displayedReports.map((report) => (
                    <td key={report.id} className="px-6 py-4">
                      <div className="text-sm text-gray-600">{report.microMacroModels}</div>
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-gray-900 bg-gray-50">Modelli di Crescita</td>
                  {displayedReports.map((report) => (
                    <td key={report.id} className="px-6 py-4">
                      <div className="text-sm text-gray-600">{report.growthModels}</div>
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-gray-900 bg-gray-50">Categoria</td>
                  {displayedReports.map((report) => (
                    <td key={report.id} className="px-6 py-4">
                      <div className="text-sm text-gray-600">{report.category}</div>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Quick Comparison Table */}
      {displayedReports.length > 0 && !comparisonMode && (
        <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
        <div className="px-6 py-4 bg-gray-50 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900">Confronto Rapido</h2>
          <p className="text-gray-600">Panoramica delle caratteristiche principali</p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Manuale</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Scuola</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Punti di Forza</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Pubblico</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredReports.map((report, index) => (
                <tr key={report.id} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="px-6 py-4">
                    <div>
                      <div className="font-medium text-gray-900">{report.title}</div>
                      <div className="text-sm text-gray-500">{report.authors.join(", ")}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <Badge className={schoolColors[report.schoolsOfThought as keyof typeof schoolColors] || "bg-gray-100 text-gray-800 border-gray-200"}>
                      {report.schoolsOfThought}
                    </Badge>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-gray-600">
                      {report.nonStandardTopics.length > 100 
                        ? `${report.nonStandardTopics.substring(0, 100)}...`
                        : report.nonStandardTopics
                      }
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-gray-600">
                      {report.publisher}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        </div>
      )}

      {/* Summary Stats */}
      <div className="mt-12 bg-gradient-to-r from-emerald-50 to-blue-50 rounded-2xl p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          {comparisonMode ? `Analisi dei ${selectedManuals.length} Report Selezionati` : "Panoramica dei Report Analitici"}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">{displayedReports.length}</div>
            <div className="text-gray-600">
              {comparisonMode ? "Report Confrontati" : 
               searchQuery ? "Report Trovati" : 
               displayMode === "selected" ? "Report Selezionati" : "Report Analitici"}
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">
              {Array.from(new Set(displayedReports.map(m => m.schoolsOfThought))).length}
            </div>
            <div className="text-gray-600">Scuole Rappresentate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">
              {Array.from(new Set(displayedReports.flatMap(m => m.authors))).length}
            </div>
            <div className="text-gray-600">Autori Totali</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">
              {displayedReports.length}
            </div>
            <div className="text-gray-600">Punti di Forza</div>
          </div>
        </div>
        
        {comparisonMode && selectedManuals.length >= 2 && (
          <div className="mt-6 pt-6 border-t border-white/20">
            <div className="text-center">
              <p className="text-gray-700">
                <span className="font-semibold">Modalità Confronto Attiva:</span> Stai confrontando {selectedManuals.length} manuali selezionati. 
                Usa la tabella sopra per analizzare le differenze dettagliate tra scuole di pensiero, caratteristiche e pubblico target.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

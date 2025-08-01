import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Building, Users, BookOpen, Target, Filter, RotateCcw, ArrowLeftRight, Printer } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Skeleton } from "@/components/ui/skeleton";
import type { EconomicSchool } from "@shared/schema";

const schoolColors = {
  neoclassical: "bg-blue-100 text-blue-800 border-blue-200",
  "post-keynesian": "bg-emerald-100 text-emerald-800 border-emerald-200",
  austrian: "bg-purple-100 text-purple-800 border-purple-200",
  behavioral: "bg-orange-100 text-orange-800 border-orange-200",
  complexity: "bg-red-100 text-red-800 border-red-200"
};

const schoolGradients = {
  neoclassical: "gradient-blue",
  "post-keynesian": "gradient-emerald",
  austrian: "gradient-purple",
  behavioral: "gradient-orange",
  complexity: "gradient-red"
};

export default function Schools() {
  const [selectedSchools, setSelectedSchools] = useState<string[]>([]);
  const [displayMode, setDisplayMode] = useState<"all" | "selected">("all");
  const [comparisonMode, setComparisonMode] = useState(false);

  const { data: schools, isLoading, error } = useQuery<EconomicSchool[]>({
    queryKey: ["/api/schools"],
  });

  const toggleSchoolSelection = (schoolId: string) => {
    setSelectedSchools(prev => 
      prev.includes(schoolId) 
        ? prev.filter(id => id !== schoolId)
        : [...prev, schoolId]
    );
  };

  const resetSelection = () => {
    setSelectedSchools([]);
    setDisplayMode("all");
    setComparisonMode(false);
  };

  const handleComparisonToggle = () => {
    if (selectedSchools.length >= 2) {
      setComparisonMode(!comparisonMode);
      setDisplayMode("selected");
    }
  };

  const handlePrint = () => {
    // Il problema potrebbe essere nella logica di filtro - usiamo semplicemente le scuole selezionate
    const schoolsForPrint = schools?.filter(school => selectedSchools.includes(school.id)) || [];
    
    const printContent = `
      <html>
        <head>
          <title>Confronto Scuole di Pensiero - Vademecum di Economia</title>
          <style>
            body { font-family: Arial, sans-serif; margin: 20px; line-height: 1.6; }
            .header { text-align: center; margin-bottom: 30px; border-bottom: 2px solid #333; padding-bottom: 10px; }
            .school { margin-bottom: 25px; page-break-inside: avoid; }
            .school-title { font-size: 18px; font-weight: bold; color: #333; margin-bottom: 10px; }
            .section { margin-bottom: 15px; }
            .section-title { font-weight: bold; color: #555; margin-bottom: 5px; }
            .list-item { margin-left: 20px; margin-bottom: 3px; }
            .economists { font-style: italic; margin-bottom: 10px; }
            .date { font-size: 12px; color: #666; margin-top: 20px; text-align: center; }
            @media print { .no-print { display: none; } }
          </style>
        </head>
        <body>
          <div class="header">
            <h1>Confronto Scuole di Pensiero Economico</h1>
            <p>Vademecum di Economia - ${new Date().toLocaleDateString('it-IT')}</p>
            <p>Confronto di ${schoolsForPrint.length} scuole selezionate</p>
          </div>
          
          ${schoolsForPrint.map((school: any) => `
            <div class="school">
              <div class="school-title">${school.name}</div>
              
              <div class="section">
                <div class="section-title">Categoria:</div>
                <div class="list-item">${school.category === 'mainstream' ? 'Mainstream' : 'Alternativa'}</div>
              </div>
              
              <div class="section">
                <div class="section-title">Descrizione:</div>
                <div class="list-item">${school.description}</div>
              </div>
              
              <div class="section">
                <div class="section-title">Principi Fondamentali:</div>
                ${school.keyPrinciples.map((principle: string) => `<div class="list-item">• ${principle}</div>`).join('')}
              </div>
              
              <div class="section">
                <div class="section-title">Economisti Principali:</div>
                <div class="economists">${school.economists.join(', ')}</div>
              </div>
              
              <div class="section">
                <div class="section-title">Esempi Pratici:</div>
                ${school.examples && school.examples.length > 0 ? 
                  school.examples.map((example: string) => `<div class="list-item">• ${example}</div>`).join('') 
                  : '<div class="list-item">Nessun esempio disponibile</div>'}
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

  // Scuole da visualizzare in base alla modalità
  const displayedSchools = displayMode === "all" ? schools : 
    schools?.filter(school => selectedSchools.includes(school.id)) || [];

  if (isLoading) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <Skeleton className="h-12 w-96 mb-4" />
          <Skeleton className="h-6 w-[600px]" />
        </div>
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
          <p className="text-gray-600">Non è stato possibile caricare le scuole di pensiero economico.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-12">
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-12 h-12 gradient-purple rounded-xl flex items-center justify-center">
            <Building className="w-7 h-7 text-white" />
          </div>
          <div>
            <h1 className="text-4xl font-bold text-gray-900">Scuole di Pensiero Economico</h1>
            <p className="text-xl text-gray-600">Le principali correnti che hanno plasmato l'economia moderna</p>
          </div>
        </div>
        <p className="text-gray-700 max-w-4xl">
          L'economia è caratterizzata da una ricchezza di scuole di pensiero, ciascuna con le proprie 
          interpretazioni su mercati, ruolo dello Stato, crescita e crisi finanziarie. Questa diversità 
          è considerata una forza, permettendo l'analisi della complessità economica da prospettive multiple.
        </p>
      </div>

      {/* Filter and Selection Controls */}
      <div className="mb-8 bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
        <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
            <div className="flex items-center space-x-2">
              <Filter className="w-5 h-5 text-gray-600" />
              <h3 className="font-semibold text-gray-900">Seleziona Scuole</h3>
            </div>
            
            <Select value={displayMode} onValueChange={(value: "all" | "selected") => setDisplayMode(value)}>
              <SelectTrigger className="w-48">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Visualizza tutte le scuole</SelectItem>
                <SelectItem value="selected">Solo scuole selezionate ({selectedSchools.length})</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex gap-3">
            <Button 
              variant="outline" 
              onClick={handleComparisonToggle}
              disabled={selectedSchools.length < 2}
              className="flex items-center space-x-2"
            >
              <ArrowLeftRight className="w-4 h-4" />
              <span>{comparisonMode ? "Vista normale" : "Confronta selezionate"}</span>
            </Button>
            
            {selectedSchools.length >= 2 && (
              <Button 
                variant="outline" 
                onClick={handlePrint}
                className="flex items-center space-x-2"
              >
                <Printer className="w-4 h-4" />
                <span>Stampa confronto</span>
              </Button>
            )}
            
            <Button 
              variant="outline" 
              onClick={resetSelection}
              disabled={selectedSchools.length === 0}
              className="flex items-center space-x-2"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Reset</span>
            </Button>
          </div>
        </div>
        
        {selectedSchools.length > 0 && (
          <div className="mt-4 pt-4 border-t border-gray-200">
            <p className="text-sm text-gray-600">
              {selectedSchools.length} scuole selezionate
              {selectedSchools.length >= 2 && (
                <span className="text-green-600 ml-2">• Confronto disponibile</span>
              )}
            </p>
          </div>
        )}
      </div>

      {/* Detailed Comparison Table - Only in comparison mode */}
      {comparisonMode && selectedSchools.length >= 2 && (
        <div className="mb-12 bg-white rounded-2xl border border-gray-200 overflow-hidden">
          <div className="px-6 py-4 bg-gradient-to-r from-blue-50 to-purple-50 border-b border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900">Confronto Dettagliato</h2>
            <p className="text-gray-600">Analisi comparativa delle {selectedSchools.length} scuole selezionate</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 w-32">Aspetto</th>
                  {displayedSchools?.map((school) => (
                    <th key={school.id} className="px-6 py-3 text-left text-sm font-semibold text-gray-900 min-w-80">
                      <div>
                        <div className="font-medium">{school.name}</div>
                        <div className="text-xs text-gray-500 font-normal">{school.category}</div>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 font-medium text-gray-900 bg-gray-50">Categoria</td>
                  {displayedSchools?.map((school) => (
                    <td key={school.id} className="px-6 py-4">
                      <Badge className={schoolColors[school.category as keyof typeof schoolColors]}>
                        {school.category.charAt(0).toUpperCase() + school.category.slice(1)}
                      </Badge>
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-gray-900 bg-gray-50">Descrizione</td>
                  {displayedSchools?.map((school) => (
                    <td key={school.id} className="px-6 py-4">
                      <div className="text-sm text-gray-600">{school.description}</div>
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-gray-900 bg-gray-50">Principi Chiave</td>
                  {displayedSchools?.map((school) => (
                    <td key={school.id} className="px-6 py-4">
                      <ul className="space-y-1">
                        {school.keyPrinciples.map((principle, index) => (
                          <li key={index} className="flex items-start space-x-2">
                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-sm text-gray-600">{principle}</span>
                          </li>
                        ))}
                      </ul>
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-gray-900 bg-gray-50">Economisti</td>
                  {displayedSchools?.map((school) => (
                    <td key={school.id} className="px-6 py-4">
                      <div className="flex flex-wrap gap-1">
                        {school.economists.map((economist, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {economist}
                          </Badge>
                        ))}
                      </div>
                    </td>
                  ))}
                </tr>
                {displayedSchools?.some(school => school.examples) && (
                  <tr>
                    <td className="px-6 py-4 font-medium text-gray-900 bg-gray-50">Esempi Pratici</td>
                    {displayedSchools?.map((school) => (
                      <td key={school.id} className="px-6 py-4">
                        <div className="text-sm text-gray-600 italic">
                          {school.examples || "Non specificato"}
                        </div>
                      </td>
                    ))}
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Schools Grid */}
      {displayedSchools && displayedSchools.length > 0 && (
        <div className={`grid gap-8 mb-12 ${comparisonMode ? 'grid-cols-1' : 'grid-cols-1 lg:grid-cols-2'}`}>
          {displayedSchools.map((school) => {
            const isSelected = selectedSchools.includes(school.id);
            return (
            <Card key={school.id} className={`overflow-hidden hover:shadow-lg transition-all ${isSelected ? 'ring-2 ring-blue-500 bg-blue-50' : ''}`}>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-4 flex-1">
                    <Checkbox
                      checked={isSelected}
                      onCheckedChange={() => toggleSchoolSelection(school.id)}
                      className="mt-1"
                    />
                    <div className={`w-16 h-16 ${schoolGradients[school.category as keyof typeof schoolGradients]} rounded-xl flex items-center justify-center`}>
                      <Building className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl">{school.name}</CardTitle>
                      <Badge className={schoolColors[school.category as keyof typeof schoolColors]}>
                        {school.category.charAt(0).toUpperCase() + school.category.slice(1)}
                      </Badge>
                    </div>
                  </div>
                </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-gray-700 leading-relaxed">{school.description}</p>
              
              {/* Key Principles */}
              <div>
                <div className="flex items-center space-x-2 mb-3">
                  <Target className="w-5 h-5 text-primary" />
                  <h4 className="font-semibold text-gray-900">Principi Chiave</h4>
                </div>
                <ul className="space-y-2">
                  {school.keyPrinciples.map((principle, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-gray-600">{principle}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Economists */}
              <div>
                <div className="flex items-center space-x-2 mb-3">
                  <Users className="w-5 h-5 text-primary" />
                  <h4 className="font-semibold text-gray-900">Economisti di Riferimento</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {school.economists.map((economist, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {economist}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Examples */}
              {school.examples && (
                <div>
                  <div className="flex items-center space-x-2 mb-3">
                    <BookOpen className="w-5 h-5 text-primary" />
                    <h4 className="font-semibold text-gray-900">Esempi Pratici</h4>
                  </div>
                  <p className="text-sm text-gray-600 italic bg-gray-50 p-3 rounded-lg">
                    {school.examples}
                  </p>
                </div>
              )}
            </CardContent>
            </Card>
            );
          })}
        </div>
      )}

      {/* Summary Stats */}
      <div className="mt-12 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          {comparisonMode ? `Analisi delle ${selectedSchools.length} Scuole Selezionate` : "Panoramica delle Scuole"}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">{displayedSchools?.length || 0}</div>
            <div className="text-gray-600">
              {comparisonMode ? "Scuole Confrontate" : 
               displayMode === "selected" ? "Scuole Selezionate" : "Scuole di Pensiero"}
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">
              {displayedSchools?.reduce((acc, school) => acc + school.economists.length, 0) || 0}
            </div>
            <div className="text-gray-600">Economisti Totali</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">
              {displayedSchools?.reduce((acc, school) => acc + school.keyPrinciples.length, 0) || 0}
            </div>
            <div className="text-gray-600">Principi Teorici</div>
          </div>
        </div>
        
        {comparisonMode && selectedSchools.length >= 2 && (
          <div className="mt-6 pt-6 border-t border-white/20">
            <div className="text-center">
              <p className="text-gray-700">
                <span className="font-semibold">Modalità Confronto Attiva:</span> Stai confrontando {selectedSchools.length} scuole di pensiero selezionate. 
                Usa la tabella sopra per analizzare le differenze tra principi, economisti di riferimento e approcci teorici.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

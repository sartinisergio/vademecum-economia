import { useQuery } from "@tanstack/react-query";
import { GitCompare, ArrowRight, Lightbulb, Users, Target } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { Separator } from "@/components/ui/separator";
import type { Comparison } from "@shared/schema";

export default function Comparisons() {
  const { data: comparisons, isLoading, error } = useQuery<Comparison[]>({
    queryKey: ["/api/comparisons"],
  });

  if (isLoading) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <Skeleton className="h-12 w-96 mb-4" />
          <Skeleton className="h-6 w-[600px]" />
        </div>
        <div className="space-y-8">
          {[...Array(2)].map((_, i) => (
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
          <p className="text-gray-600">Non è stato possibile caricare i confronti.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-12">
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-12 h-12 gradient-indigo rounded-xl flex items-center justify-center">
            <GitCompare className="w-7 h-7 text-white" />
          </div>
          <div>
            <h1 className="text-4xl font-bold text-gray-900">Confronti Multilivello</h1>
            <p className="text-xl text-gray-600">Analisi comparative tra teorie e approcci economici</p>
          </div>
        </div>
        <p className="text-gray-700 max-w-4xl">
          Esplora i grandi dibattiti che hanno definito l'economia moderna attraverso confronti dettagliati 
          tra diverse scuole di pensiero, metodologie e approcci teorici. Questi confronti evidenziano 
          le differenze fondamentali nelle visioni del mondo economico.
        </p>
      </div>

      {/* Comparisons */}
      <div className="space-y-12">
        {comparisons?.map((comparison, index) => (
          <Card key={comparison.id} className="overflow-hidden">
            <CardHeader className={index === 0 ? "bg-gradient-to-r from-yellow-50 to-orange-50" : "bg-gradient-to-r from-blue-50 to-purple-50"}>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-2xl mb-2">{comparison.title}</CardTitle>
                  <p className="text-gray-700">{comparison.description}</p>
                </div>
                {index === 0 && (
                  <Badge className="bg-yellow-100 text-yellow-800 border-yellow-200">
                    Dibattito Storico
                  </Badge>
                )}
              </div>
            </CardHeader>
            <CardContent className="p-8">
              {/* Schools Being Compared */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <Users className="w-5 h-5 mr-2 text-primary" />
                  Scuole a Confronto
                </h3>
                <div className="flex flex-wrap gap-3">
                  {comparison.schools.map((school, schoolIndex) => (
                    <Badge key={schoolIndex} variant="outline" className="text-base px-4 py-2">
                      {school}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Key Differences */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-6 flex items-center">
                  <Target className="w-5 h-5 mr-2 text-primary" />
                  Differenze Fondamentali
                </h3>
                <div className="space-y-8">
                  {comparison.keyDifferences.map((difference, diffIndex) => (
                    <div key={diffIndex}>
                      <h4 className="text-lg font-medium text-gray-900 mb-4 flex items-center">
                        <Lightbulb className="w-5 h-5 mr-2 text-orange-500" />
                        {difference.aspect}
                      </h4>
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {difference.differences.map((diff, i) => (
                          <Card key={i} className={`border-l-4 ${i === 0 ? 'border-l-blue-500 bg-blue-50/50' : 'border-l-orange-500 bg-orange-50/50'}`}>
                            <CardContent className="p-4">
                              <div className="flex items-start space-x-3">
                                <div className={`w-3 h-3 rounded-full mt-1 ${i === 0 ? 'bg-blue-500' : 'bg-orange-500'}`}></div>
                                <p className="text-sm text-gray-700 leading-relaxed">{diff}</p>
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                      {diffIndex < comparison.keyDifferences.length - 1 && (
                        <Separator className="mt-6" />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Interactive Comparison Guide */}
      <div className="mt-12 bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 text-white">
        <h2 className="text-2xl font-bold mb-4">Come Leggere i Confronti</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex items-start space-x-3">
            <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
              <span className="text-white font-bold text-sm">1</span>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Identifica le Scuole</h3>
              <p className="text-gray-300 text-sm">
                Ogni confronto presenta le scuole di pensiero coinvolte nel dibattito teorico.
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
              <span className="text-white font-bold text-sm">2</span>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Analizza le Differenze</h3>
              <p className="text-gray-300 text-sm">
                I punti di divergenza sono organizzati per aspetti specifici della teoria economica.
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
              <span className="text-white font-bold text-sm">3</span>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Comprendi l'Impatto</h3>
              <p className="text-gray-300 text-sm">
                Ogni posizione ha implicazioni pratiche per politiche e decisioni economiche.
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
            <div className="text-gray-600">Confronti Attivi</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">
              {Array.from(new Set(comparisons?.flatMap(c => c.schools) || [])).length}
            </div>
            <div className="text-gray-600">Scuole Coinvolte</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">
              {comparisons?.reduce((acc, comp) => acc + comp.keyDifferences.length, 0) || 0}
            </div>
            <div className="text-gray-600">Aspetti Comparati</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">
              {comparisons?.reduce((acc, comp) => 
                acc + comp.keyDifferences.reduce((innerAcc, diff) => innerAcc + diff.differences.length, 0), 0
              ) || 0}
            </div>
            <div className="text-gray-600">Posizioni Teoriche</div>
          </div>
        </div>
      </div>
    </div>
  );
}

import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { useLocation } from "wouter";
import { BookOpen, Users, Target, CheckCircle, XCircle, GraduationCap } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import type { Manual } from "@shared/schema";

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

  const { data: manuals, isLoading, error } = useQuery<Manual[]>({
    queryKey: ["/api/manuals"],
  });

  // Gestisce i parametri URL per ricerca
  useEffect(() => {
    const urlParams = new URLSearchParams(location.split('?')[1] || '');
    const search = urlParams.get('search');
    
    if (search) {
      setSearchQuery(search);
      // Trova il manuale che contiene l'autore cercato
      if (manuals) {
        const foundManual = manuals.find(manual => 
          manual.authors.some(author => 
            author.toLowerCase().includes(search.toLowerCase())
          )
        );
        if (foundManual) {
          setHighlightedManual(foundManual.title);
        }
      }
    }
  }, [location, manuals]);

  // Filtra i manuali in base alla ricerca
  const filteredManuals = manuals?.filter(manual => {
    if (!searchQuery) return true;
    
    const query = searchQuery.toLowerCase();
    return (
      manual.title.toLowerCase().includes(query) ||
      manual.authors.some(author => author.toLowerCase().includes(query)) ||
      manual.characteristics.toLowerCase().includes(query) ||
      manual.strengths.some(strength => strength.toLowerCase().includes(query)) ||
      manual.weaknesses.some(weakness => weakness.toLowerCase().includes(query))
    );
  }) || [];

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
              {searchQuery ? `Risultati per "${searchQuery}"` : "Manuali Universitari"}
            </h1>
            <p className="text-xl text-gray-600">
              {searchQuery 
                ? `${filteredManuals.length} manuali trovati` 
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

      {/* Search Results Message */}
      {searchQuery && filteredManuals.length === 0 && (
        <div className="text-center py-12">
          <BookOpen className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Nessun manuale trovato</h3>
          <p className="text-gray-600">La ricerca per "{searchQuery}" non ha prodotto risultati.</p>
        </div>
      )}

      {/* Manuals Grid */}
      {filteredManuals.length > 0 && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {filteredManuals.map((manual) => {
          const isHighlighted = highlightedManual === manual.title;
          return (
            <Card key={manual.id} className={`overflow-hidden hover:shadow-lg transition-shadow ${isHighlighted ? 'ring-2 ring-blue-500 shadow-lg' : ''}`}>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-4">
                  <div className={`w-16 h-16 ${schoolGradients[manual.school as keyof typeof schoolGradients] || 'gradient-blue'} rounded-xl flex items-center justify-center`}>
                    <BookOpen className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl leading-tight">{manual.title}</CardTitle>
                    <div className="flex flex-wrap gap-1 mt-2">
                      {manual.authors.map((author, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {author}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <Badge className={schoolColors[manual.school as keyof typeof schoolColors] || "bg-gray-100 text-gray-800 border-gray-200"}>
                {manual.school}
              </Badge>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Characteristics */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Caratteristiche</h4>
                <p className="text-sm text-gray-600 leading-relaxed">{manual.characteristics}</p>
              </div>

              {/* Strengths */}
              <div>
                <div className="flex items-center space-x-2 mb-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <h4 className="font-semibold text-gray-900">Punti di Forza</h4>
                </div>
                <ul className="space-y-1">
                  {manual.strengths.map((strength, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-gray-600">{strength}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Weaknesses */}
              <div>
                <div className="flex items-center space-x-2 mb-3">
                  <XCircle className="w-5 h-5 text-red-600" />
                  <h4 className="font-semibold text-gray-900">Punti di Debolezza</h4>
                </div>
                <ul className="space-y-1">
                  {manual.weaknesses.map((weakness, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-gray-600">{weakness}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Target Audience */}
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center space-x-2 mb-2">
                  <GraduationCap className="w-5 h-5 text-primary" />
                  <h4 className="font-semibold text-gray-900">Pubblico Ideale</h4>
                </div>
                <p className="text-sm text-gray-600 italic">{manual.targetAudience}</p>
              </div>
            </CardContent>
          </Card>
          );
        })}
        </div>
      )}

      {/* Comparison Table */}
      {filteredManuals.length > 0 && (
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
              {filteredManuals.map((manual, index) => (
                <tr key={manual.id} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="px-6 py-4">
                    <div>
                      <div className="font-medium text-gray-900">{manual.title}</div>
                      <div className="text-sm text-gray-500">{manual.authors.join(", ")}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <Badge className={schoolColors[manual.school as keyof typeof schoolColors] || "bg-gray-100 text-gray-800 border-gray-200"}>
                      {manual.school}
                    </Badge>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-gray-600">
                      {manual.strengths.slice(0, 2).join(", ")}
                      {manual.strengths.length > 2 && "..."}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-gray-600">
                      {manual.targetAudience.length > 50 
                        ? `${manual.targetAudience.substring(0, 50)}...`
                        : manual.targetAudience
                      }
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
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Panoramica dei Manuali</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">{filteredManuals.length}</div>
            <div className="text-gray-600">{searchQuery ? "Manuali Trovati" : "Manuali Analizzati"}</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">
              {Array.from(new Set(filteredManuals.map(m => m.school))).length}
            </div>
            <div className="text-gray-600">Scuole Rappresentate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">
              {Array.from(new Set(filteredManuals.flatMap(m => m.authors))).length}
            </div>
            <div className="text-gray-600">Autori Totali</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">
              {filteredManuals.reduce((acc, manual) => acc + manual.strengths.length, 0)}
            </div>
            <div className="text-gray-600">Punti di Forza</div>
          </div>
        </div>
      </div>
    </div>
  );
}

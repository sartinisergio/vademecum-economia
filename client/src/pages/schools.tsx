import { useQuery } from "@tanstack/react-query";
import { Building, Users, BookOpen, Target } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
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
  const { data: schools, isLoading, error } = useQuery<EconomicSchool[]>({
    queryKey: ["/api/schools"],
  });

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

      {/* Schools Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {schools?.map((school) => (
          <Card key={school.id} className="overflow-hidden hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-4">
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
        ))}
      </div>

      {/* Summary Stats */}
      <div className="mt-12 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Panoramica delle Scuole</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">{schools?.length || 0}</div>
            <div className="text-gray-600">Scuole di Pensiero</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">
              {schools?.reduce((acc, school) => acc + school.economists.length, 0) || 0}
            </div>
            <div className="text-gray-600">Economisti Totali</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">
              {schools?.reduce((acc, school) => acc + school.keyPrinciples.length, 0) || 0}
            </div>
            <div className="text-gray-600">Principi Teorici</div>
          </div>
        </div>
      </div>
    </div>
  );
}

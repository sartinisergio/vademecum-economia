import { useQuery } from "@tanstack/react-query";
import { useLocation } from "wouter";
import { Calculator, TrendingUp, Brain, Layers, ChevronRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Skeleton } from "@/components/ui/skeleton";
import type { EconomicModel } from "@shared/schema";

export default function Models() {
  const [location] = useLocation();
  const urlParams = new URLSearchParams(location.split('?')[1] || '');
  const typeFilter = urlParams.get('type');

  const { data: models, isLoading, error } = useQuery<EconomicModel[]>({
    queryKey: ["/api/models"],
  });

  const microModels = models?.filter(model => model.type === "micro") || [];
  const macroModels = models?.filter(model => model.type === "macro") || [];

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

  const ModelCard = ({ model }: { model: EconomicModel }) => (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-4">
            <div className={`w-16 h-16 ${model.type === 'micro' ? 'gradient-orange' : 'gradient-red'} rounded-xl flex items-center justify-center`}>
              {model.type === 'micro' ? 
                <Calculator className="w-8 h-8 text-white" /> : 
                <TrendingUp className="w-8 h-8 text-white" />
              }
            </div>
            <div>
              <CardTitle className="text-xl">{model.name}</CardTitle>
              <Badge className={model.type === 'micro' ? 
                "bg-orange-100 text-orange-800 border-orange-200" : 
                "bg-red-100 text-red-800 border-red-200"
              }>
                {model.type === 'micro' ? 'Microeconomico' : 'Macroeconomico'}
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

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-12">
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-12 h-12 gradient-orange rounded-xl flex items-center justify-center">
            <Calculator className="w-7 h-7 text-white" />
          </div>
          <div>
            <h1 className="text-4xl font-bold text-gray-900">Modelli Economici</h1>
            <p className="text-xl text-gray-600">Strumenti teorici per comprendere la realtà economica</p>
          </div>
        </div>
        <p className="text-gray-700 max-w-4xl">
          I modelli economici sono rappresentazioni semplificate della realtà usate per comprendere 
          fenomeni complessi. Dividendo l'analisi tra microeconomia (comportamento dei singoli agenti) 
          e macroeconomia (sistema economico nel suo insieme).
        </p>
      </div>

      {/* Tabs for Micro/Macro */}
      <Tabs defaultValue={typeFilter || "all"} className="mb-8">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="all">Tutti i Modelli</TabsTrigger>
          <TabsTrigger value="micro">Microeconomici</TabsTrigger>
          <TabsTrigger value="macro">Macroeconomici</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-8">
          {/* Microeconomic Models */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <Calculator className="w-6 h-6 text-orange-600" />
              <h2 className="text-2xl font-bold text-gray-900">Modelli Microeconomici</h2>
              <Badge className="bg-orange-100 text-orange-800">{microModels.length} modelli</Badge>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
              {microModels.map((model) => (
                <ModelCard key={model.id} model={model} />
              ))}
            </div>
          </div>

          {/* Macroeconomic Models */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <TrendingUp className="w-6 h-6 text-red-600" />
              <h2 className="text-2xl font-bold text-gray-900">Modelli Macroeconomici</h2>
              <Badge className="bg-red-100 text-red-800">{macroModels.length} modelli</Badge>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {macroModels.map((model) => (
                <ModelCard key={model.id} model={model} />
              ))}
            </div>
          </div>
        </TabsContent>

        <TabsContent value="micro">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {microModels.map((model) => (
              <ModelCard key={model.id} model={model} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="macro">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {macroModels.map((model) => (
              <ModelCard key={model.id} model={model} />
            ))}
          </div>
        </TabsContent>
      </Tabs>

      {/* Summary Stats */}
      <div className="mt-12 bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Panoramica dei Modelli</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">{models?.length || 0}</div>
            <div className="text-gray-600">Modelli Totali</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-600 mb-2">{microModels.length}</div>
            <div className="text-gray-600">Microeconomici</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-red-600 mb-2">{macroModels.length}</div>
            <div className="text-gray-600">Macroeconomici</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">
              {models?.reduce((acc, model) => acc + model.keyConcepts.length, 0) || 0}
            </div>
            <div className="text-gray-600">Concetti Totali</div>
          </div>
        </div>
      </div>
    </div>
  );
}

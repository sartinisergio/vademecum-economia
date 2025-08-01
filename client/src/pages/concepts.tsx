import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Lightbulb, Search, Tag, BookOpen, Filter } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Skeleton } from "@/components/ui/skeleton";
import type { Concept } from "@shared/schema";

export default function Concepts() {
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");

  const { data: concepts, isLoading, error } = useQuery<Concept[]>({
    queryKey: ["/api/concepts"],
  });

  const filteredConcepts = concepts?.filter(concept => {
    const matchesSearch = searchQuery === "" || 
      concept.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      concept.definition.toLowerCase().includes(searchQuery.toLowerCase()) ||
      concept.relatedTerms.some(term => term.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = categoryFilter === "all" || concept.category === categoryFilter;
    
    return matchesSearch && matchesCategory;
  }) || [];

  const categories = Array.from(new Set(concepts?.map(c => c.category) || []));

  if (isLoading) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <Skeleton className="h-12 w-96 mb-4" />
          <Skeleton className="h-6 w-[600px]" />
        </div>
        <div className="flex gap-4 mb-8">
          <Skeleton className="h-12 flex-1" />
          <Skeleton className="h-12 w-48" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(9)].map((_, i) => (
            <Skeleton key={i} className="h-64" />
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
          <p className="text-gray-600">Non è stato possibile caricare i concetti.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-12">
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-12 h-12 gradient-blue rounded-xl flex items-center justify-center">
            <Lightbulb className="w-7 h-7 text-white" />
          </div>
          <div>
            <h1 className="text-4xl font-bold text-gray-900">Concetti Chiave</h1>
            <p className="text-xl text-gray-600">I fondamenti teorici dell'economia moderna</p>
          </div>
        </div>
        <p className="text-gray-700 max-w-4xl">
          Esplora i concetti fondamentali che costituiscono la base della teoria economica. 
          Ogni concetto include definizioni chiare, esempi pratici e collegamenti con altri termini correlati.
        </p>
      </div>

      {/* Search and Filter */}
      <div className="mb-8">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
            <Input
              type="text"
              placeholder="Cerca concetti, definizioni o termini correlati..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          <div className="flex gap-2">
            <Select value={categoryFilter} onValueChange={setCategoryFilter}>
              <SelectTrigger className="w-48">
                <Filter className="w-4 h-4 mr-2" />
                <SelectValue placeholder="Filtra per categoria" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Tutte le categorie</SelectItem>
                {categories.map(category => (
                  <SelectItem key={category} value={category}>
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Button variant="outline" onClick={() => {
              setSearchQuery("");
              setCategoryFilter("all");
            }}>
              Reset
            </Button>
          </div>
        </div>
        
        {/* Results count */}
        <div className="mt-4">
          <p className="text-sm text-gray-600">
            Mostrando {filteredConcepts.length} di {concepts?.length || 0} concetti
            {searchQuery && ` per "${searchQuery}"`}
            {categoryFilter !== "all" && ` nella categoria "${categoryFilter}"`}
          </p>
        </div>
      </div>

      {/* Concepts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {filteredConcepts.map((concept) => (
          <Card key={concept.id} className="hover:shadow-lg transition-shadow h-full">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-3">
                  <div className={`w-12 h-12 ${concept.category === 'microeconomia' ? 'gradient-orange' : 'gradient-red'} rounded-lg flex items-center justify-center`}>
                    <Lightbulb className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-lg leading-tight">{concept.name}</CardTitle>
                    <Badge className={concept.category === 'microeconomia' ? 
                      "bg-orange-100 text-orange-800 border-orange-200" : 
                      "bg-red-100 text-red-800 border-red-200"
                    }>
                      {concept.category.charAt(0).toUpperCase() + concept.category.slice(1)}
                    </Badge>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Definition */}
              <div>
                <p className="text-sm text-gray-700 leading-relaxed">{concept.definition}</p>
              </div>

              {/* Examples */}
              {concept.examples && (
                <div>
                  <div className="flex items-center space-x-2 mb-2">
                    <BookOpen className="w-4 h-4 text-primary" />
                    <h4 className="font-semibold text-gray-900 text-sm">Esempio</h4>
                  </div>
                  <p className="text-xs text-gray-600 italic bg-gray-50 p-2 rounded">
                    {concept.examples}
                  </p>
                </div>
              )}

              {/* Related Terms */}
              <div>
                <div className="flex items-center space-x-2 mb-2">
                  <Tag className="w-4 h-4 text-primary" />
                  <h4 className="font-semibold text-gray-900 text-sm">Termini Correlati</h4>
                </div>
                <div className="flex flex-wrap gap-1">
                  {concept.relatedTerms.map((term, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {term}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* No results message */}
      {filteredConcepts.length === 0 && (
        <div className="text-center py-12">
          <Lightbulb className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Nessun concetto trovato</h3>
          <p className="text-gray-600 mb-4">
            Non sono stati trovati concetti che corrispondono ai tuoi criteri di ricerca.
          </p>
          <Button variant="outline" onClick={() => {
            setSearchQuery("");
            setCategoryFilter("all");
          }}>
            Mostra tutti i concetti
          </Button>
        </div>
      )}

      {/* Summary Stats by Category */}
      <div className="bg-gradient-to-r from-blue-50 to-orange-50 rounded-2xl p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Distribuzione per Categoria</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">{concepts?.length || 0}</div>
            <div className="text-gray-600">Concetti Totali</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-600 mb-2">
              {concepts?.filter(c => c.category === 'microeconomia').length || 0}
            </div>
            <div className="text-gray-600">Microeconomia</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-red-600 mb-2">
              {concepts?.filter(c => c.category === 'macroeconomia').length || 0}
            </div>
            <div className="text-gray-600">Macroeconomia</div>
          </div>
        </div>
      </div>
    </div>
  );
}

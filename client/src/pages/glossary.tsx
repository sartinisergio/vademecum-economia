import { useState, useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import { Hash, Search, Filter, BookOpen, Tag, ChevronRight, ArrowUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Skeleton } from "@/components/ui/skeleton";
import { Separator } from "@/components/ui/separator";
import type { Concept } from "@shared/schema";

export default function Glossary() {
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [selectedLetter, setSelectedLetter] = useState("all");

  const { data: concepts, isLoading, error } = useQuery<Concept[]>({
    queryKey: ["/api/concepts"],
  });

  // Create alphabet array
  const alphabet = Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i));

  // Process and filter concepts
  const { filteredConcepts, alphabeticalGroups, categories } = useMemo(() => {
    if (!concepts) return { filteredConcepts: [], alphabeticalGroups: {}, categories: [] };

    const categories = Array.from(new Set(concepts.map(c => c.category)));
    
    let filtered = concepts.filter(concept => {
      const matchesSearch = searchQuery === "" || 
        concept.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        concept.definition.toLowerCase().includes(searchQuery.toLowerCase()) ||
        concept.relatedTerms.some(term => term.toLowerCase().includes(searchQuery.toLowerCase()));
      
      const matchesCategory = categoryFilter === "all" || concept.category === categoryFilter;
      const matchesLetter = selectedLetter === "all" || concept.name.charAt(0).toUpperCase() === selectedLetter;
      
      return matchesSearch && matchesCategory && matchesLetter;
    });

    // Sort alphabetically
    filtered = filtered.sort((a, b) => a.name.localeCompare(b.name));

    // Group by first letter
    const alphabeticalGroups = filtered.reduce((groups, concept) => {
      const letter = concept.name.charAt(0).toUpperCase();
      if (!groups[letter]) {
        groups[letter] = [];
      }
      groups[letter].push(concept);
      return groups;
    }, {} as Record<string, Concept[]>);

    return { filteredConcepts: filtered, alphabeticalGroups, categories };
  }, [concepts, searchQuery, categoryFilter, selectedLetter]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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
        <Skeleton className="h-16 w-full mb-8" />
        <div className="space-y-4">
          {[...Array(10)].map((_, i) => (
            <Skeleton key={i} className="h-24" />
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
          <p className="text-gray-600">Non è stato possibile caricare il glossario.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-12">
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-12 h-12 gradient-teal rounded-xl flex items-center justify-center">
            <Hash className="w-7 h-7 text-white" />
          </div>
          <div>
            <h1 className="text-4xl font-bold text-gray-900">Glossario Economico</h1>
            <p className="text-xl text-gray-600">Terminologia economica essenziale</p>
          </div>
        </div>
        <p className="text-gray-700 max-w-4xl">
          Un dizionario completo dei termini economici più importanti, organizzato alfabeticamente 
          per una consultazione rapida e efficace. Ogni termine include definizioni chiare, 
          esempi pratici e collegamenti con concetti correlati.
        </p>
      </div>

      {/* Search and Filter Controls */}
      <div className="mb-8">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
            <Input
              type="text"
              placeholder="Cerca nel glossario..."
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
              setSelectedLetter("all");
            }}>
              Reset
            </Button>
          </div>
        </div>
        
        {/* Results count */}
        <div className="mt-4">
          <p className="text-sm text-gray-600">
            Mostrando {filteredConcepts.length} di {concepts?.length || 0} termini
            {searchQuery && ` per "${searchQuery}"`}
            {categoryFilter !== "all" && ` nella categoria "${categoryFilter}"`}
            {selectedLetter !== "all" && ` che iniziano con "${selectedLetter}"`}
          </p>
        </div>
      </div>

      {/* Alphabet Navigation */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Navigazione Alfabetica</h3>
        <div className="flex flex-wrap gap-2">
          <Button
            variant={selectedLetter === "all" ? "default" : "outline"}
            size="sm"
            onClick={() => setSelectedLetter("all")}
          >
            Tutti
          </Button>
          {alphabet.map(letter => {
            const hasTerms = concepts?.some(concept => concept.name.charAt(0).toUpperCase() === letter);
            return (
              <Button
                key={letter}
                variant={selectedLetter === letter ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedLetter(letter)}
                disabled={!hasTerms}
                className={!hasTerms ? "opacity-50" : ""}
              >
                {letter}
              </Button>
            );
          })}
        </div>
      </div>

      {/* Glossary Content */}
      <div className="space-y-8">
        {Object.entries(alphabeticalGroups)
          .sort(([a], [b]) => a.localeCompare(b))
          .map(([letter, concepts]) => (
            <div key={letter} id={`letter-${letter}`}>
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 gradient-teal rounded-xl flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">{letter}</span>
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900">{letter}</h2>
                  <p className="text-gray-600">{concepts.length} termine{concepts.length !== 1 ? 'i' : ''}</p>
                </div>
              </div>
              
              <div className="space-y-4">
                {concepts.map((concept, index) => (
                  <Card key={concept.id} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row md:items-start md:space-x-6">
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-3">
                            <div>
                              <h3 className="text-xl font-bold text-gray-900 mb-2">{concept.name}</h3>
                              <Badge className={concept.category === 'microeconomia' ? 
                                "bg-orange-100 text-orange-800 border-orange-200" : 
                                "bg-red-100 text-red-800 border-red-200"
                              }>
                                {concept.category.charAt(0).toUpperCase() + concept.category.slice(1)}
                              </Badge>
                            </div>
                          </div>
                          
                          <p className="text-gray-700 leading-relaxed mb-4">{concept.definition}</p>
                          
                          {concept.examples && (
                            <div className="mb-4">
                              <div className="flex items-center space-x-2 mb-2">
                                <BookOpen className="w-4 h-4 text-primary" />
                                <span className="font-semibold text-gray-900 text-sm">Esempio</span>
                              </div>
                              <p className="text-sm text-gray-600 italic bg-gray-50 p-3 rounded-lg">
                                {concept.examples}
                              </p>
                            </div>
                          )}
                          
                          <div>
                            <div className="flex items-center space-x-2 mb-2">
                              <Tag className="w-4 h-4 text-primary" />
                              <span className="font-semibold text-gray-900 text-sm">Termini Correlati</span>
                            </div>
                            <div className="flex flex-wrap gap-2">
                              {concept.relatedTerms.map((term, termIndex) => (
                                <Badge key={termIndex} variant="outline" className="text-xs">
                                  {term}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              {Object.keys(alphabeticalGroups).indexOf(letter) < Object.keys(alphabeticalGroups).length - 1 && (
                <Separator className="mt-8" />
              )}
            </div>
          ))}
      </div>

      {/* No results message */}
      {filteredConcepts.length === 0 && (
        <div className="text-center py-12">
          <Hash className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Nessun termine trovato</h3>
          <p className="text-gray-600 mb-4">
            Non sono stati trovati termini che corrispondono ai tuoi criteri di ricerca.
          </p>
          <Button variant="outline" onClick={() => {
            setSearchQuery("");
            setCategoryFilter("all");
            setSelectedLetter("all");
          }}>
            Mostra tutti i termini
          </Button>
        </div>
      )}

      {/* Floating Back to Top Button */}
      {filteredConcepts.length > 10 && (
        <Button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 rounded-full w-12 h-12 shadow-lg"
          size="icon"
        >
          <ArrowUp className="w-5 h-5" />
        </Button>
      )}

      {/* Summary Stats */}
      <div className="mt-12 bg-gradient-to-r from-teal-50 to-cyan-50 rounded-2xl p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Statistiche del Glossario</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">{concepts?.length || 0}</div>
            <div className="text-gray-600">Termini Totali</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">
              {Object.keys(alphabeticalGroups).length}
            </div>
            <div className="text-gray-600">Lettere Coperte</div>
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

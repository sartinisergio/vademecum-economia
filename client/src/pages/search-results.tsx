import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { useLocation, Link } from "wouter";
import { Search, BookOpen, Lightbulb, Users, Target, ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import type { EconomicSchool, EconomicModel, Manual, Concept } from "@shared/schema";

interface SearchResult {
  type: 'school' | 'model' | 'manual' | 'concept';
  item: EconomicSchool | EconomicModel | Manual | Concept;
  matchedFields: string[];
  relevanceScore: number;
}

export default function SearchResults() {
  const [location] = useLocation();
  const [searchQuery, setSearchQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);

  const { data: schools } = useQuery<EconomicSchool[]>({ queryKey: ["/api/schools"] });
  const { data: models } = useQuery<EconomicModel[]>({ queryKey: ["/api/models"] });
  const { data: manuals } = useQuery<Manual[]>({ queryKey: ["/api/manuals"] });
  const { data: concepts } = useQuery<Concept[]>({ queryKey: ["/api/concepts"] });

  // Funzione di ricerca globale
  const performGlobalSearch = (query: string) => {
    if (!query.trim() || !schools || !models || !manuals || !concepts) return [];

    const searchResults: SearchResult[] = [];
    const queryLower = query.toLowerCase();

    // Ricerca nelle scuole economiche
    schools.forEach(school => {
      const matchedFields: string[] = [];
      let relevanceScore = 0;

      if (school.name.toLowerCase().includes(queryLower)) {
        matchedFields.push('nome');
        relevanceScore += 10;
      }
      if (school.description.toLowerCase().includes(queryLower)) {
        matchedFields.push('descrizione');
        relevanceScore += 5;
      }
      if (school.economists.some(economist => economist.toLowerCase().includes(queryLower))) {
        matchedFields.push('economisti');
        relevanceScore += 8;
      }
      if (school.keyPrinciples.some(principle => principle.toLowerCase().includes(queryLower))) {
        matchedFields.push('principi');
        relevanceScore += 6;
      }
      if (school.examples && school.examples.toLowerCase().includes(queryLower)) {
        matchedFields.push('esempi');
        relevanceScore += 4;
      }

      if (matchedFields.length > 0) {
        searchResults.push({
          type: 'school',
          item: school,
          matchedFields,
          relevanceScore
        });
      }
    });

    // Ricerca nei modelli economici
    models.forEach(model => {
      const matchedFields: string[] = [];
      let relevanceScore = 0;

      if (model.name.toLowerCase().includes(queryLower)) {
        matchedFields.push('nome');
        relevanceScore += 10;
      }
      if (model.description.toLowerCase().includes(queryLower)) {
        matchedFields.push('descrizione');
        relevanceScore += 5;
      }
      if (model.keyConcepts.some(concept => concept.toLowerCase().includes(queryLower))) {
        matchedFields.push('concetti chiave');
        relevanceScore += 7;
      }
      if (model.applications.some(app => app.toLowerCase().includes(queryLower))) {
        matchedFields.push('applicazioni');
        relevanceScore += 6;
      }

      if (matchedFields.length > 0) {
        searchResults.push({
          type: 'model',
          item: model,
          matchedFields,
          relevanceScore
        });
      }
    });

    // Ricerca nei manuali
    manuals.forEach(manual => {
      const matchedFields: string[] = [];
      let relevanceScore = 0;

      if (manual.title.toLowerCase().includes(queryLower)) {
        matchedFields.push('titolo');
        relevanceScore += 10;
      }
      if (manual.authors.some(author => author.toLowerCase().includes(queryLower))) {
        matchedFields.push('autori');
        relevanceScore += 9;
      }
      if (manual.school.toLowerCase().includes(queryLower)) {
        matchedFields.push('scuola');
        relevanceScore += 7;
      }
      if (manual.characteristics.toLowerCase().includes(queryLower)) {
        matchedFields.push('caratteristiche');
        relevanceScore += 5;
      }
      if (manual.strengths.some(strength => strength.toLowerCase().includes(queryLower))) {
        matchedFields.push('punti di forza');
        relevanceScore += 6;
      }
      if (manual.weaknesses.some(weakness => weakness.toLowerCase().includes(queryLower))) {
        matchedFields.push('punti di debolezza');
        relevanceScore += 6;
      }
      if (manual.targetAudience.toLowerCase().includes(queryLower)) {
        matchedFields.push('pubblico target');
        relevanceScore += 4;
      }

      if (matchedFields.length > 0) {
        searchResults.push({
          type: 'manual',
          item: manual,
          matchedFields,
          relevanceScore
        });
      }
    });

    // Ricerca nei concetti
    concepts.forEach(concept => {
      const matchedFields: string[] = [];
      let relevanceScore = 0;

      if (concept.name.toLowerCase().includes(queryLower)) {
        matchedFields.push('nome');
        relevanceScore += 10;
      }
      if (concept.definition.toLowerCase().includes(queryLower)) {
        matchedFields.push('definizione');
        relevanceScore += 7;
      }
      if (concept.category.toLowerCase().includes(queryLower)) {
        matchedFields.push('categoria');
        relevanceScore += 5;
      }
      if (concept.relatedTerms.some(term => term.toLowerCase().includes(queryLower))) {
        matchedFields.push('termini correlati');
        relevanceScore += 6;
      }
      if (concept.examples && concept.examples.toLowerCase().includes(queryLower)) {
        matchedFields.push('esempi');
        relevanceScore += 4;
      }

      if (matchedFields.length > 0) {
        searchResults.push({
          type: 'concept',
          item: concept,
          matchedFields,
          relevanceScore
        });
      }
    });

    // Ordina per rilevanza
    return searchResults.sort((a, b) => b.relevanceScore - a.relevanceScore);
  };

  // Gestisce i parametri URL per ricerca
  useEffect(() => {
    const urlParams = new URLSearchParams(location.split('?')[1] || '');
    const search = urlParams.get('search');
    
    if (search) {
      setSearchQuery(search);
      const searchResults = performGlobalSearch(search);
      setResults(searchResults);
    }
  }, [location, schools, models, manuals, concepts]);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'school': return <Users className="w-5 h-5" />;
      case 'model': return <Target className="w-5 h-5" />;
      case 'manual': return <BookOpen className="w-5 h-5" />;
      case 'concept': return <Lightbulb className="w-5 h-5" />;
      default: return <Search className="w-5 h-5" />;
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'school': return 'Scuola di Pensiero';
      case 'model': return 'Modello Economico';
      case 'manual': return 'Manuale';
      case 'concept': return 'Concetto';
      default: return type;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'school': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'model': return 'bg-green-100 text-green-800 border-green-200';
      case 'manual': return 'bg-purple-100 text-purple-800 border-purple-200';
      case 'concept': return 'bg-orange-100 text-orange-800 border-orange-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getItemTitle = (result: SearchResult) => {
    switch (result.type) {
      case 'school': return (result.item as EconomicSchool).name;
      case 'model': return (result.item as EconomicModel).name;
      case 'manual': return (result.item as Manual).title;
      case 'concept': return (result.item as Concept).name;
      default: return 'Sconosciuto';
    }
  };

  const getItemDescription = (result: SearchResult) => {
    switch (result.type) {
      case 'school': return (result.item as EconomicSchool).description;
      case 'model': return (result.item as EconomicModel).description;
      case 'manual': return (result.item as Manual).characteristics;
      case 'concept': return (result.item as Concept).definition;
      default: return '';
    }
  };

  const getItemLink = (result: SearchResult) => {
    switch (result.type) {
      case 'school': return '/schools';
      case 'model': return '/models';
      case 'manual': return '/manuals';
      case 'concept': return '/concepts';
      default: return '/';
    }
  };

  if (!searchQuery) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center py-12">
          <Search className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Nessuna ricerca attiva</h1>
          <p className="text-gray-600">Torna alla dashboard per effettuare una ricerca.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
            <Search className="w-7 h-7 text-white" />
          </div>
          <div>
            <h1 className="text-4xl font-bold text-gray-900">Risultati di Ricerca</h1>
            <p className="text-xl text-gray-600">
              {results.length} risultati per "{searchQuery}"
            </p>
          </div>
        </div>
      </div>

      {/* Results */}
      {results.length === 0 ? (
        <div className="text-center py-12">
          <Search className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Nessun risultato trovato</h3>
          <p className="text-gray-600">
            La ricerca per "{searchQuery}" non ha prodotto risultati in nessuna sezione.
          </p>
        </div>
      ) : (
        <div className="space-y-6">
          {results.map((result, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 ${getTypeColor(result.type)} rounded-lg flex items-center justify-center`}>
                      {getTypeIcon(result.type)}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <Badge className={getTypeColor(result.type)}>
                          {getTypeLabel(result.type)}
                        </Badge>
                        <span className="text-sm text-gray-500">
                          Rilevanza: {result.relevanceScore}
                        </span>
                      </div>
                      <CardTitle className="text-xl leading-tight">
                        {getItemTitle(result)}
                      </CardTitle>
                    </div>
                  </div>
                  <Link href={getItemLink(result)}>
                    <ArrowRight className="w-5 h-5 text-gray-400 hover:text-gray-600" />
                  </Link>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {getItemDescription(result).substring(0, 200)}
                  {getItemDescription(result).length > 200 && "..."}
                </p>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Trovato in:</h4>
                  <div className="flex flex-wrap gap-2">
                    {result.matchedFields.map((field, fieldIndex) => (
                      <Badge key={fieldIndex} variant="outline" className="text-xs">
                        {field}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {/* Summary */}
      {results.length > 0 && (
        <div className="mt-12 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Riepilogo Ricerca</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">
                {results.filter(r => r.type === 'school').length}
              </div>
              <div className="text-gray-600">Scuole</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">
                {results.filter(r => r.type === 'model').length}
              </div>
              <div className="text-gray-600">Modelli</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">
                {results.filter(r => r.type === 'manual').length}
              </div>
              <div className="text-gray-600">Manuali</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">
                {results.filter(r => r.type === 'concept').length}
              </div>
              <div className="text-gray-600">Concetti</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
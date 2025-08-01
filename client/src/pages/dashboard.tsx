import { useQuery } from "@tanstack/react-query";
import { 
  Lightbulb, 
  BookOpen, 
  Building, 
  Calculator, 
  TrendingUp, 
  GitCompare, 
  Hash,
  MessageSquare,
  Bookmark,
  Download,
  HelpCircle,
  Clock,
  Sparkles
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import SearchBar from "@/components/ui/search-bar";
import SectionCard from "@/components/ui/section-card";
import { Badge } from "@/components/ui/badge";

interface Stats {
  schoolsCount: number;
  modelsCount: number;
  manualsCount: number;
  conceptsCount: number;
  comparisonsCount: number;
  microModelsCount: number;
  macroModelsCount: number;
}

export default function Dashboard() {
  const { data: stats, isLoading } = useQuery<Stats>({
    queryKey: ["/api/stats"],
  });

  const handleSearch = (query: string) => {
    console.log("Searching for:", query);
    // TODO: Implement search navigation
  };

  const handleAdvancedSearch = () => {
    console.log("Advanced search clicked");
    // TODO: Open advanced search modal
  };

  const handleRandomConcept = () => {
    console.log("Random concept clicked");
    // TODO: Navigate to random concept
  };

  if (isLoading) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="animate-pulse">
          <div className="hero-gradient rounded-2xl p-8 mb-12 h-64"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="bg-gray-200 rounded-2xl h-48"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Hero Section */}
      <section className="hero-gradient rounded-2xl p-8 mb-12 text-white">
        <div className="max-w-4xl">
          <h1 className="text-2xl md:text-3xl font-bold mb-3">
            Vademecum di economia
          </h1>
          <p className="text-lg md:text-xl font-light mb-4 opacity-90">
            Una piattaforma interattiva per comprendere le teorie economiche moderne, 
            dai modelli neoclassici alle nuove frontiere dell'economia comportamentale.
            Include l'analisi dei principali manuali di economia utilizzati nelle università italiane.
          </p>
        </div>
      </section>

      {/* Search Section */}
      <section className="mb-12">
        <div className="flex flex-col lg:flex-row gap-6 items-center">
          <div className="flex-1 w-full">
            <SearchBar
              onSearch={handleSearch}
              placeholder="Cerca concetti, economisti, teorie..."
              className="w-full"
            />
          </div>
          <div className="flex gap-4">
            <Button 
              onClick={handleAdvancedSearch}
              className="bg-primary hover:bg-primary/90 text-white px-6 py-4 rounded-xl font-medium"
            >
              Ricerca Avanzata
            </Button>
            <Button 
              onClick={handleRandomConcept}
              variant="outline"
              className="px-6 py-4 rounded-xl font-medium"
            >
              Concetto Casuale
            </Button>
          </div>
        </div>
      </section>

      {/* Main Dashboard */}
      <section className="mb-12">
        <h2 className="text-xl font-bold text-gray-900 mb-6 text-center">Esplora per Sezione</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          
          <SectionCard
            title="Concetti Chiave"
            description="Esplora i fondamenti teorici dell'economia moderna"
            icon={<Lightbulb className="w-8 h-8 text-white" />}
            count={`${stats?.conceptsCount || 250}+ concetti`}
            href="/concepts"
            gradient="gradient-blue"
          />

          <SectionCard
            title="Manuali"
            description="Testi di riferimento delle università italiane"
            icon={<BookOpen className="w-8 h-8 text-white" />}
            count={`${stats?.manualsCount || 15}+ manuali`}
            href="/manuals"
            gradient="gradient-emerald"
          />

          <SectionCard
            title="Scuole di Pensiero"
            description="Le principali correnti economiche contemporanee"
            icon={<Building className="w-8 h-8 text-white" />}
            count={`${stats?.schoolsCount || 5} scuole`}
            href="/schools"
            gradient="gradient-purple"
          />

          <SectionCard
            title="Modelli Microeconomici"
            description="Teoria del consumatore, dell'impresa e dei mercati"
            icon={<Calculator className="w-8 h-8 text-white" />}
            count={`${stats?.microModelsCount || 8} modelli`}
            href="/models?type=micro"
            gradient="gradient-orange"
          />

          <SectionCard
            title="Modelli Macroeconomici"
            description="Crescita, cicli economici e politiche pubbliche"
            icon={<TrendingUp className="w-8 h-8 text-white" />}
            count={`${stats?.macroModelsCount || 12} modelli`}
            href="/models?type=macro"
            gradient="gradient-red"
          />

          <SectionCard
            title="Confronti Dinamici"
            description="Confronta scuole, modelli, manuali e concetti"
            icon={<GitCompare className="w-8 h-8 text-white" />}
            count={`${stats?.comparisonsCount || 6} confronti`}
            href="/comparisons"
            gradient="gradient-indigo"
          />

          <SectionCard
            title="Glossario"
            description="Definizioni e terminologia economica essenziale"
            icon={<Hash className="w-8 h-8 text-white" />}
            count={`${stats?.conceptsCount || 500}+ termini`}
            href="/glossary"
            gradient="gradient-teal"
          />

          {/* Featured Debate Card */}
          <div className="card-hover bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-6 border border-gray-100 cursor-pointer text-white">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-4">
              <MessageSquare className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Saltwater vs Freshwater</h3>
            <p className="text-white/80 mb-4 text-sm">Il grande dibattito che ha diviso l'economia moderna</p>
            <div className="flex items-center justify-between">
              <Badge variant="secondary" className="bg-white/20 text-white text-xs">
                Dibattito in corso
              </Badge>
            </div>
          </div>

        </div>
      </section>

      {/* Quick Actions */}
      <section className="mb-12">
        <Card>
          <CardContent className="p-6">
            <h2 className="text-lg font-bold text-gray-900 mb-4">Azioni Rapide</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
              <Button variant="outline" className="flex items-center justify-center space-x-2 h-12">
                <Bookmark className="w-4 h-4" />
                <span className="text-sm">I Miei Preferiti</span>
              </Button>
              <Button variant="outline" className="flex items-center justify-center space-x-2 h-12">
                <Download className="w-4 h-4" />
                <span className="text-sm">Esporta Contenuti</span>
              </Button>
              <Button variant="outline" className="flex items-center justify-center space-x-2 h-12">
                <HelpCircle className="w-4 h-4" />
                <span className="text-sm">Quiz di Verifica</span>
              </Button>
              <Button variant="outline" className="flex items-center justify-center space-x-2 h-12">
                <Clock className="w-4 h-4" />
                <span className="text-sm">Timeline Storica</span>
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}

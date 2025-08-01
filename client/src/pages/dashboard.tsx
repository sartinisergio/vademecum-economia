import { useQuery } from "@tanstack/react-query";
import { useLocation } from "wouter";
import { 
  Lightbulb, 
  BookOpen, 
  Building, 
  Calculator, 
  TrendingUp, 
  GitCompare, 
  Hash,
  MessageSquare,
  Sparkles
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

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
  const [, setLocation] = useLocation();
  const { data: stats, isLoading } = useQuery<Stats>({
    queryKey: ["/api/stats"],
  });

  const { data: concepts } = useQuery<any[]>({
    queryKey: ["/api/concepts"],
  });







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
        <div className="max-w-4xl text-center mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Vademecum di economia
          </h1>
          <p className="text-lg md:text-xl font-light mb-4 opacity-90">
            Una piattaforma interattiva per comprendere le teorie economiche moderne, 
            dai modelli neoclassici alle nuove frontiere dell'economia comportamentale.
            Include l'analisi dei principali manuali di economia utilizzati nelle università italiane.
          </p>
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
            title="Modelli Teorici"
            description="Modelli micro e macroeconomici per comprendere i fenomeni economici"
            icon={<Calculator className="w-8 h-8 text-white" />}
            count={`${stats?.modelsCount || 10} modelli`}
            href="/models"
            gradient="gradient-orange"
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



        </div>
      </section>


    </div>
  );
}

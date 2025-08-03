import { useState } from "react";
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
  Sparkles,
  HelpCircle,
  CheckSquare,
  Printer,
  Search,
  X
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";

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
  const [showGuide, setShowGuide] = useState(false);
  
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
          <p className="text-lg md:text-xl font-light mb-6 opacity-90">
            Una piattaforma interattiva per comprendere le teorie economiche moderne, 
            dai modelli neoclassici alle nuove frontiere dell'economia comportamentale.
            Include l'analisi dei principali manuali di economia utilizzati nelle università italiane.
          </p>
          
          {/* Guide Button */}
          <Dialog open={showGuide} onOpenChange={setShowGuide}>
            <DialogTrigger asChild>
              <Button 
                variant="secondary" 
                size="lg"
                className="bg-white/20 hover:bg-white/30 text-white border-white/30 backdrop-blur-sm"
              >
                <HelpCircle className="w-5 h-5 mr-2" />
                Guida all'uso
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle className="flex items-center text-2xl mb-4">
                  <Sparkles className="w-6 h-6 mr-3 text-primary" />
                  Guida all'uso - Vademecum di Economia
                </DialogTitle>
              </DialogHeader>
              
              <div className="space-y-6">
                {/* Introduzione */}
                <div>
                  <h3 className="text-lg font-semibold mb-3 flex items-center">
                    <BookOpen className="w-5 h-5 mr-2 text-blue-600" />
                    Introduzione all'Applicazione
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Questo vademecum è una piattaforma che fornisce un accesso strutturato alle principali scuole di 
                    pensiero economico, modelli teorici, manuali universitari e concetti chiave utilizzati 
                    nell'insegnamento dell'economia nelle università italiane.
                  </p>
                </div>

                <Separator />

                {/* Sezioni Principali */}
                <div>
                  <h3 className="text-lg font-semibold mb-4 flex items-center">
                    <Hash className="w-5 h-5 mr-2 text-green-600" />
                    Le 6 Sezioni Principali
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 bg-blue-50 rounded-lg">
                      <div className="flex items-center mb-2">
                        <Lightbulb className="w-5 h-5 mr-2 text-blue-600" />
                        <h4 className="font-semibold">Concetti Chiave</h4>
                      </div>
                      <p className="text-sm text-gray-600">Esplora oltre 250 definizioni economiche essenziali con categorie e termini correlati.</p>
                    </div>
                    
                    <div className="p-4 bg-emerald-50 rounded-lg">
                      <div className="flex items-center mb-2">
                        <BookOpen className="w-5 h-5 mr-2 text-emerald-600" />
                        <h4 className="font-semibold">Manuali</h4>
                      </div>
                      <p className="text-sm text-gray-600">13 manuali autentici delle università italiane con dettagli su autori, caratteristiche e approcci.</p>
                    </div>
                    
                    <div className="p-4 bg-purple-50 rounded-lg">
                      <div className="flex items-center mb-2">
                        <Building className="w-5 h-5 mr-2 text-purple-600" />
                        <h4 className="font-semibold">Scuole di Pensiero</h4>
                      </div>
                      <p className="text-sm text-gray-600">5 scuole complete: Neoclassica, Post-Keynesiana, Austriaca, Comportamentale, Complessità.</p>
                    </div>
                    
                    <div className="p-4 bg-orange-50 rounded-lg">
                      <div className="flex items-center mb-2">
                        <Calculator className="w-5 h-5 mr-2 text-orange-600" />
                        <h4 className="font-semibold">Modelli Teorici</h4>
                      </div>
                      <p className="text-sm text-gray-600">10 modelli micro e macroeconomici con applicazioni pratiche e connessioni alle scuole.</p>
                    </div>
                    
                    <div className="p-4 bg-indigo-50 rounded-lg">
                      <div className="flex items-center mb-2">
                        <GitCompare className="w-5 h-5 mr-2 text-indigo-600" />
                        <h4 className="font-semibold">Confronti Dinamici</h4>
                      </div>
                      <p className="text-sm text-gray-600">Strumento interattivo per confrontare scuole, modelli e manuali con tabelle dettagliate.</p>
                    </div>
                    
                    <div className="p-4 bg-teal-50 rounded-lg">
                      <div className="flex items-center mb-2">
                        <Hash className="w-5 h-5 mr-2 text-teal-600" />
                        <h4 className="font-semibold">Glossario</h4>
                      </div>
                      <p className="text-sm text-gray-600">Dizionario completo della terminologia economica con definizioni precise.</p>
                    </div>
                  </div>
                </div>

                <Separator />

                {/* Funzionalità Interattive */}
                <div>
                  <h3 className="text-lg font-semibold mb-4 flex items-center">
                    <CheckSquare className="w-5 h-5 mr-2 text-purple-600" />
                    Funzionalità Interattive
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <CheckSquare className="w-5 h-5 mt-0.5 text-green-500" />
                      <div>
                        <h4 className="font-semibold">Selezione e Confronto</h4>
                        <p className="text-sm text-gray-600">
                          In ogni sezione, seleziona 2 o più elementi utilizzando le checkbox per abilitare la modalità confronto. 
                          Visualizza tabelle comparative dettagliate con tutte le caratteristiche.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <Printer className="w-5 h-5 mt-0.5 text-blue-500" />
                      <div>
                        <h4 className="font-semibold">Stampa Professionale</h4>
                        <p className="text-sm text-gray-600">
                          Stampa confronti in formato PDF professionale con layout ottimizzato, 
                          inclusi tutti i dettagli degli elementi selezionati.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <TrendingUp className="w-5 h-5 mt-0.5 text-orange-500" />
                      <div>
                        <h4 className="font-semibold">Visualizzazione Adattiva</h4>
                        <p className="text-sm text-gray-600">
                          Passa tra vista completa (tutti gli elementi) e vista confronto (solo elementi selezionati) 
                          con un click per focalizzarti sui contenuti di interesse.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <Building className="w-5 h-5 mt-0.5 text-purple-500" />
                      <div>
                        <h4 className="font-semibold">Contenuti Autentici</h4>
                        <p className="text-sm text-gray-600">
                          Tutti i contenuti sono estratti integralmente dal documento originale senza sintesi, 
                          garantendo accuratezza accademica e completezza delle informazioni.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <Separator />

                {/* Come iniziare */}
                <div>
                  <h3 className="text-lg font-semibold mb-4 flex items-center">
                    <Sparkles className="w-5 h-5 mr-2 text-pink-600" />
                    Come Iniziare
                  </h3>
                  
                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-lg">
                    <ol className="list-decimal list-inside space-y-2 text-sm">
                      <li><strong>Esplora le sezioni:</strong> Inizia dalla sezione che ti interessa di più</li>
                      <li><strong>Seleziona elementi:</strong> Usa le checkbox per selezionare 2+ elementi da confrontare</li>
                      <li><strong>Attiva il confronto:</strong> Clicca "Confronta selezionati" per la vista comparativa</li>
                      <li><strong>Stampa risultati:</strong> Usa il pulsante "Stampa confronto" per salvare in PDF</li>
                      <li><strong>Naviga liberamente:</strong> Ogni sezione è interconnessa e autoesplicativa</li>
                    </ol>
                  </div>
                </div>

                {/* Footer del dialog */}
                <div className="flex justify-end pt-4">
                  <Button onClick={() => setShowGuide(false)} variant="outline">
                    <X className="w-4 h-4 mr-2" />
                    Chiudi guida
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
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

          {/* Featured Debate Card */}
          <div 
            className="card-hover bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-6 border border-gray-100 cursor-pointer text-white"
            onClick={() => setLocation("/comparisons")}
          >
            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-4">
              <MessageSquare className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-lg font-semibold mb-2" translate="no">Saltwater vs Freshwater</h3>
            <p className="text-white/80 mb-4 text-sm">Il grande dibattito che ha diviso l'economia moderna</p>
            <div className="flex items-center justify-between">
              <Badge variant="secondary" className="bg-white/20 text-white text-xs">
                Dibattito in corso
              </Badge>
            </div>
          </div>

        </div>
      </section>


    </div>
  );
}

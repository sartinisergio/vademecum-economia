import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import Dashboard from "@/pages/dashboard";
import Schools from "@/pages/schools";
import Models from "@/pages/models";
import Manuals from "@/pages/manuals";
import Concepts from "@/pages/concepts";
import Comparisons from "@/pages/comparisons";
import Glossary from "@/pages/glossary";

import NotFound from "@/pages/not-found";

function Router() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Switch>
          <Route path="/" component={Dashboard} />
          <Route path="/schools" component={Schools} />
          <Route path="/models" component={Models} />
          <Route path="/manuals" component={Manuals} />
          <Route path="/concepts" component={Concepts} />
          <Route path="/comparisons" component={Comparisons} />
          <Route path="/glossary" component={Glossary} />

          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;

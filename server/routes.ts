import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // Economic Schools routes
  app.get("/api/schools", async (req, res) => {
    try {
      const schools = await storage.getAllSchools();
      res.json(schools);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch schools" });
    }
  });

  app.get("/api/schools/:id", async (req, res) => {
    try {
      const school = await storage.getSchoolById(req.params.id);
      if (!school) {
        return res.status(404).json({ error: "School not found" });
      }
      res.json(school);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch school" });
    }
  });

  app.get("/api/schools/category/:category", async (req, res) => {
    try {
      const schools = await storage.getSchoolsByCategory(req.params.category);
      res.json(schools);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch schools by category" });
    }
  });

  // Economic Models routes
  app.get("/api/models", async (req, res) => {
    try {
      const models = await storage.getAllModels();
      res.json(models);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch models" });
    }
  });

  app.get("/api/models/:id", async (req, res) => {
    try {
      const model = await storage.getModelById(req.params.id);
      if (!model) {
        return res.status(404).json({ error: "Model not found" });
      }
      res.json(model);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch model" });
    }
  });

  app.get("/api/models/type/:type", async (req, res) => {
    try {
      const type = req.params.type as "micro" | "macro";
      if (type !== "micro" && type !== "macro") {
        return res.status(400).json({ error: "Invalid model type" });
      }
      const models = await storage.getModelsByType(type);
      res.json(models);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch models by type" });
    }
  });

  // Analytical Reports routes
  app.get("/api/analyticalReports", async (req, res) => {
    try {
      const analyticalReports = await storage.getAllAnalyticalReports();
      res.json(analyticalReports);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch analytical reports" });
    }
  });

  app.get("/api/analyticalReports/:id", async (req, res) => {
    try {
      const analyticalReport = await storage.getAnalyticalReportById(req.params.id);
      if (!analyticalReport) {
        return res.status(404).json({ error: "Analytical report not found" });
      }
      res.json(analyticalReport);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch analytical report" });
    }
  });

  // Concepts routes
  app.get("/api/concepts", async (req, res) => {
    try {
      const concepts = await storage.getAllConcepts();
      res.json(concepts);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch concepts" });
    }
  });

  app.get("/api/concepts/:id", async (req, res) => {
    try {
      const concept = await storage.getConceptById(req.params.id);
      if (!concept) {
        return res.status(404).json({ error: "Concept not found" });
      }
      res.json(concept);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch concept" });
    }
  });

  app.get("/api/concepts/category/:category", async (req, res) => {
    try {
      const concepts = await storage.getConceptsByCategory(req.params.category);
      res.json(concepts);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch concepts by category" });
    }
  });

  // Comparisons routes
  app.get("/api/comparisons", async (req, res) => {
    try {
      const comparisons = await storage.getAllComparisons();
      res.json(comparisons);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch comparisons" });
    }
  });

  app.get("/api/comparisons/:id", async (req, res) => {
    try {
      const comparison = await storage.getComparisonById(req.params.id);
      if (!comparison) {
        return res.status(404).json({ error: "Comparison not found" });
      }
      res.json(comparison);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch comparison" });
    }
  });

  app.post("/api/comparisons", async (req, res) => {
    try {
      const newComparison = await storage.createComparison(req.body);
      res.status(201).json(newComparison);
    } catch (error) {
      res.status(500).json({ error: "Failed to create comparison" });
    }
  });

  app.delete("/api/comparisons/:id", async (req, res) => {
    try {
      const deleted = await storage.deleteComparison(req.params.id);
      if (!deleted) {
        return res.status(404).json({ error: "Comparison not found" });
      }
      res.status(200).json({ success: true });
    } catch (error) {
      res.status(500).json({ error: "Failed to delete comparison" });
    }
  });

  // Search routes
  app.get("/api/search", async (req, res) => {
    try {
      const query = req.query.q as string;
      if (!query) {
        return res.status(400).json({ error: "Query parameter 'q' is required" });
      }
      
      const results = await storage.searchAll(query);
      res.json(results);
    } catch (error) {
      res.status(500).json({ error: "Failed to perform search" });
    }
  });

  app.get("/api/search/concepts", async (req, res) => {
    try {
      const query = req.query.q as string;
      if (!query) {
        return res.status(400).json({ error: "Query parameter 'q' is required" });
      }
      
      const concepts = await storage.searchConcepts(query);
      res.json(concepts);
    } catch (error) {
      res.status(500).json({ error: "Failed to search concepts" });
    }
  });

  // Stats endpoint for dashboard
  app.get("/api/stats", async (req, res) => {
    try {
      const [schools, models, analyticalReports, concepts, comparisons] = await Promise.all([
        storage.getAllSchools(),
        storage.getAllModels(),
        storage.getAllAnalyticalReports(),
        storage.getAllConcepts(),
        storage.getAllComparisons()
      ]);

      const stats = {
        schoolsCount: schools.length,
        modelsCount: models.length,
        analyticalReportsCount: analyticalReports.length,
        conceptsCount: concepts.length,
        comparisonsCount: comparisons.length,
        microModelsCount: models.filter(m => m.type === "micro").length,
        macroModelsCount: models.filter(m => m.type === "macro").length
      };

      res.json(stats);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch stats" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}

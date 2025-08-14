import { 
  type EconomicSchool, 
  type InsertEconomicSchool,
  type EconomicModel,
  type InsertEconomicModel,
  type Manual,
  type InsertManual,
  type Concept,
  type InsertConcept,
  type Comparison,
  type InsertComparison
} from "@shared/schema";
import { randomUUID } from "crypto";
import { 
  economicSchoolsData, 
  economicModelsData, 
  manualsData, 
  conceptsData, 
  comparisonsData 
} from "../client/src/data/authentic-economic-data";

export interface IStorage {
  // Economic Schools
  getAllSchools(): Promise<EconomicSchool[]>;
  getSchoolById(id: string): Promise<EconomicSchool | undefined>;
  getSchoolsByCategory(category: string): Promise<EconomicSchool[]>;
  
  // Economic Models
  getAllModels(): Promise<EconomicModel[]>;
  getModelById(id: string): Promise<EconomicModel | undefined>;
  getModelsByType(type: "micro" | "macro"): Promise<EconomicModel[]>;
  
  // Manuals
  getAllManuals(): Promise<Manual[]>;
  getManualById(id: string): Promise<Manual | undefined>;
  
  // Concepts
  getAllConcepts(): Promise<Concept[]>;
  getConceptById(id: string): Promise<Concept | undefined>;
  getConceptsByCategory(category: string): Promise<Concept[]>;
  searchConcepts(query: string): Promise<Concept[]>;
  
  // Comparisons
  getAllComparisons(): Promise<Comparison[]>;
  getComparisonById(id: string): Promise<Comparison | undefined>;
  createComparison(comparison: InsertComparison): Promise<Comparison>;
  deleteComparison(id: string): Promise<boolean>;
  
  // Search functionality
  searchAll(query: string): Promise<{
    schools: EconomicSchool[];
    models: EconomicModel[];
    manuals: Manual[];
    concepts: Concept[];
  }>;
}

export class MemStorage implements IStorage {
  private schools: Map<string, EconomicSchool>;
  private models: Map<string, EconomicModel>;
  private manuals: Map<string, Manual>;
  private concepts: Map<string, Concept>;
  private comparisons: Map<string, Comparison>;

  constructor() {
    this.schools = new Map();
    this.models = new Map();
    this.manuals = new Map();
    this.concepts = new Map();
    this.comparisons = new Map();
    
    this.initializeData();
  }

  private initializeData() {
    // Initialize schools
    economicSchoolsData.forEach(schoolData => {
      const id = randomUUID();
      const school: EconomicSchool = { 
        id,
        name: schoolData.name,
        description: schoolData.description,
        keyPrinciples: schoolData.keyPrinciples,
        economists: schoolData.economists,
        examples: Array.isArray(schoolData.examples) ? schoolData.examples.join('\n\n') : schoolData.examples || null,
        category: schoolData.category
      };
      this.schools.set(id, school);
    });

    // Initialize models
    economicModelsData.forEach(modelData => {
      const id = randomUUID();
      const model: EconomicModel = { 
        id,
        name: modelData.name,
        description: modelData.description,
        type: modelData.type,
        keyConcepts: modelData.keyConcepts,
        applications: modelData.applications,
        schoolId: modelData.schoolId
      };
      this.models.set(id, model);
    });

    // Initialize manuals
    manualsData.forEach(manualData => {
      const id = randomUUID();
      const manual: Manual = { 
        id,
        title: manualData.title,
        authors: manualData.authors,
        author: manualData.author || null,
        characteristics: manualData.characteristics || null,
        school: manualData.school,
        models: manualData.models || null,
        shortLongPeriod: manualData.shortLongPeriod || null,
        growth: manualData.growth || null,
        strengths: manualData.strengths,
        weaknesses: manualData.weaknesses,
        targetAudience: manualData.targetAudience
      };
      this.manuals.set(id, manual);
    });

    // Initialize concepts
    conceptsData.forEach(conceptData => {
      const id = randomUUID();
      const concept: Concept = { 
        id,
        name: conceptData.name,
        definition: conceptData.definition,
        category: conceptData.category,
        relatedTerms: conceptData.relatedTerms,
        examples: null
      };
      this.concepts.set(id, concept);
    });

    // Initialize comparisons with proper data transformation
    try {
      if (Array.isArray(comparisonsData) && comparisonsData.length > 0) {
        comparisonsData.forEach(comparisonData => {
          const id = randomUUID();
          
          // Transform items from old format to new format
          const transformedItems: { type: "school" | "model" | "manual" | "concept"; id: string; name: string; }[] = 
            comparisonData.items?.map((item: any, itemIndex: number) => ({
              type: "concept" as const, // default type since old format doesn't specify
              id: `item-${itemIndex}`,
              name: item.name || `Item ${itemIndex + 1}`
            })) || [];
          
          // Transform aspects from old format to new format
          const transformedAspects = comparisonData.aspects?.map((aspectName: string, aspectIndex: number) => {
            // Generate aspect comparisons based on available items
            const aspectComparisons = transformedItems.map((item, itemIndex) => {
              // Use characteristics from old format if available
              const originalItem = comparisonData.items?.[itemIndex];
              const characteristics = originalItem?.characteristics || [];
              const relevantCharacteristic = characteristics.find((char: string) => 
                char.toLowerCase().includes(aspectName.toLowerCase().split(' ')[0])
              ) || characteristics[aspectIndex % characteristics.length] || `Analisi per ${aspectName}`;
              
              return {
                itemId: item.id,
                value: relevantCharacteristic
              };
            });
            
            return {
              name: aspectName,
              comparisons: aspectComparisons
            };
          }) || [];

          const comparison: Comparison = { 
            id,
            title: comparisonData.title,
            description: comparisonData.description || "Confronto dettagliato",
            items: transformedItems,
            aspects: transformedAspects,
            createdAt: new Date().toISOString(),
            isCustom: null
          };
          this.comparisons.set(id, comparison);
        });
      }
    } catch (error) {
      console.log("Comparisons data not loaded - using empty set");
    }
  }

  async getAllSchools(): Promise<EconomicSchool[]> {
    return Array.from(this.schools.values());
  }

  async getSchoolById(id: string): Promise<EconomicSchool | undefined> {
    return this.schools.get(id);
  }

  async getSchoolsByCategory(category: string): Promise<EconomicSchool[]> {
    return Array.from(this.schools.values()).filter(school => school.category === category);
  }

  async getAllModels(): Promise<EconomicModel[]> {
    return Array.from(this.models.values());
  }

  async getModelById(id: string): Promise<EconomicModel | undefined> {
    return this.models.get(id);
  }

  async getModelsByType(type: "micro" | "macro"): Promise<EconomicModel[]> {
    return Array.from(this.models.values()).filter(model => model.type === type);
  }

  async getAllManuals(): Promise<Manual[]> {
    return Array.from(this.manuals.values());
  }

  async getManualById(id: string): Promise<Manual | undefined> {
    return this.manuals.get(id);
  }

  async getAllConcepts(): Promise<Concept[]> {
    return Array.from(this.concepts.values());
  }

  async getConceptById(id: string): Promise<Concept | undefined> {
    return this.concepts.get(id);
  }

  async getConceptsByCategory(category: string): Promise<Concept[]> {
    return Array.from(this.concepts.values()).filter(concept => concept.category === category);
  }

  async searchConcepts(query: string): Promise<Concept[]> {
    const lowercaseQuery = query.toLowerCase();
    return Array.from(this.concepts.values()).filter(concept =>
      concept.name.toLowerCase().includes(lowercaseQuery) ||
      concept.definition.toLowerCase().includes(lowercaseQuery) ||
      concept.relatedTerms.some(term => term.toLowerCase().includes(lowercaseQuery))
    );
  }

  async getAllComparisons(): Promise<Comparison[]> {
    return Array.from(this.comparisons.values());
  }

  async getComparisonById(id: string): Promise<Comparison | undefined> {
    return this.comparisons.get(id);
  }

  async createComparison(comparison: InsertComparison): Promise<Comparison> {
    const id = randomUUID();
    const newComparison: Comparison = {
      id,
      title: comparison.title,
      description: comparison.description,
      items: comparison.items,
      aspects: comparison.aspects,
      createdAt: comparison.createdAt || new Date().toISOString(),
      isCustom: comparison.isCustom || "true"
    };
    this.comparisons.set(id, newComparison);
    return newComparison;
  }

  async deleteComparison(id: string): Promise<boolean> {
    return this.comparisons.delete(id);
  }

  async searchAll(query: string): Promise<{
    schools: EconomicSchool[];
    models: EconomicModel[];
    manuals: Manual[];
    concepts: Concept[];
  }> {
    const lowercaseQuery = query.toLowerCase();
    
    const schools = Array.from(this.schools.values()).filter(school =>
      school.name.toLowerCase().includes(lowercaseQuery) ||
      school.description.toLowerCase().includes(lowercaseQuery) ||
      school.economists.some(economist => economist.toLowerCase().includes(lowercaseQuery))
    );

    const models = Array.from(this.models.values()).filter(model =>
      model.name.toLowerCase().includes(lowercaseQuery) ||
      model.description.toLowerCase().includes(lowercaseQuery) ||
      model.keyConcepts.some(concept => concept.toLowerCase().includes(lowercaseQuery))
    );

    const manuals = Array.from(this.manuals.values()).filter(manual =>
      manual.title.toLowerCase().includes(lowercaseQuery) ||
      manual.authors.some(author => author.toLowerCase().includes(lowercaseQuery)) ||
      manual.school.toLowerCase().includes(lowercaseQuery)
    );

    const concepts = await this.searchConcepts(query);

    return { schools, models, manuals, concepts };
  }
}

export const storage = new MemStorage();

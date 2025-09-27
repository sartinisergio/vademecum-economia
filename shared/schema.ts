import { sql } from "drizzle-orm";
import { pgTable, text, varchar, jsonb } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const economicSchools = pgTable("economic_schools", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  description: text("description").notNull(),
  keyPrinciples: jsonb("key_principles").$type<string[]>().notNull(),
  economists: jsonb("economists").$type<string[]>().notNull(),
  examples: text("examples"),
  category: text("category").notNull(), // "neoclassical", "post-keynesian", etc.
});

export const economicModels = pgTable("economic_models", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  description: text("description").notNull(),
  type: text("type").notNull(), // "micro" or "macro"
  keyConcepts: jsonb("key_concepts").$type<string[]>().notNull(),
  applications: jsonb("applications").$type<string[]>().notNull(),
  schoolId: varchar("school_id").references(() => economicSchools.id),
});

export const analyticalReports = pgTable("analytical_reports", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  title: text("title").notNull(),
  authors: jsonb("authors").$type<string[]>().notNull(),
  publisher: text("publisher").notNull(), // "Zanichelli" or "Competitor"
  generalOverview: text("general_overview").notNull(),
  schoolsOfThought: text("schools_of_thought").notNull(),
  microMacroModels: text("micro_macro_models").notNull(),
  growthModels: text("growth_models").notNull(),
  timeFrameAnalysis: text("time_frame_analysis").notNull(),
  nonStandardTopics: text("non_standard_topics").notNull(),
  category: text("category").notNull(), // "Zanichelli" or "Competitor"
});

export const concepts = pgTable("concepts", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  definition: text("definition").notNull(),
  category: text("category").notNull(),
  relatedTerms: jsonb("related_terms").$type<string[]>().notNull(),
  examples: text("examples"),
});

export const comparisons = pgTable("comparisons", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  title: text("title").notNull(),
  description: text("description").notNull(),
  items: jsonb("items").$type<{type: 'school' | 'model' | 'analyticalReport' | 'concept', id: string, name: string}[]>().notNull(),
  aspects: jsonb("aspects").$type<{name: string, comparisons: {itemId: string, value: string}[]}[]>().notNull(),
  createdAt: text("created_at").default(sql`CURRENT_TIMESTAMP`),
  isCustom: text("is_custom").default("false"), // "true" for user-created comparisons
});

export const insertEconomicSchoolSchema = createInsertSchema(economicSchools).omit({
  id: true,
});

export const insertEconomicModelSchema = createInsertSchema(economicModels).omit({
  id: true,
});

export const insertAnalyticalReportSchema = createInsertSchema(analyticalReports).omit({
  id: true,
});

export const insertConceptSchema = createInsertSchema(concepts).omit({
  id: true,
});

export const insertComparisonSchema = createInsertSchema(comparisons).omit({
  id: true,
});

export type InsertEconomicSchool = z.infer<typeof insertEconomicSchoolSchema>;
export type InsertEconomicModel = z.infer<typeof insertEconomicModelSchema>;
export type InsertAnalyticalReport = z.infer<typeof insertAnalyticalReportSchema>;
export type InsertConcept = z.infer<typeof insertConceptSchema>;
export type InsertComparison = z.infer<typeof insertComparisonSchema>;

export type EconomicSchool = typeof economicSchools.$inferSelect;
export type EconomicModel = typeof economicModels.$inferSelect;
export type AnalyticalReport = typeof analyticalReports.$inferSelect;
export type Concept = typeof concepts.$inferSelect;
export type Comparison = typeof comparisons.$inferSelect;

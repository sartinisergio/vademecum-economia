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

export const manuals = pgTable("manuals", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  title: text("title").notNull(),
  authors: jsonb("authors").$type<string[]>().notNull(),
  school: text("school").notNull(),
  characteristics: text("characteristics").notNull(),
  strengths: jsonb("strengths").$type<string[]>().notNull(),
  weaknesses: jsonb("weaknesses").$type<string[]>().notNull(),
  targetAudience: text("target_audience").notNull(),
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
  schools: jsonb("schools").$type<string[]>().notNull(),
  keyDifferences: jsonb("key_differences").$type<{aspect: string, differences: string[]}[]>().notNull(),
});

export const insertEconomicSchoolSchema = createInsertSchema(economicSchools).omit({
  id: true,
});

export const insertEconomicModelSchema = createInsertSchema(economicModels).omit({
  id: true,
});

export const insertManualSchema = createInsertSchema(manuals).omit({
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
export type InsertManual = z.infer<typeof insertManualSchema>;
export type InsertConcept = z.infer<typeof insertConceptSchema>;
export type InsertComparison = z.infer<typeof insertComparisonSchema>;

export type EconomicSchool = typeof economicSchools.$inferSelect;
export type EconomicModel = typeof economicModels.$inferSelect;
export type Manual = typeof manuals.$inferSelect;
export type Concept = typeof concepts.$inferSelect;
export type Comparison = typeof comparisons.$inferSelect;

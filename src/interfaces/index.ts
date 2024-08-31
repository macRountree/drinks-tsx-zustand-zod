import {z} from 'zod';
import {
  CategoriesAPISchema,
  RecipeSchema,
  RecipesSchema,
  SearchFilterSchema,
  RecipeDetailSchema,
} from '../Schemas/recipes-schema';

export type Categories = z.infer<typeof CategoriesAPISchema>;
export type SearchFilter = z.infer<typeof SearchFilterSchema>;
export type Recipe = z.infer<typeof RecipeSchema>;
export type Recipes = z.infer<typeof RecipesSchema>;
export type RecipeDetail = z.infer<typeof RecipeDetailSchema>;

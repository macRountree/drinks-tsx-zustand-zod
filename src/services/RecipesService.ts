import axios from 'axios';
import {
  CategoriesAPISchema,
  RecipeDetailSchema,
  RecipesSchema,
} from '../Schemas/recipes-schema';
import {Recipe, SearchFilter} from '../interfaces';

const baseUrl = 'https://www.thecocktaildb.com/api/json/v1/1';

export async function getCategories() {
  const url = `${baseUrl}/list.php?c=list`;
  const {data} = await axios(url);
  const categoriesResult = CategoriesAPISchema.safeParse(data);

  if (categoriesResult.success) {
    return categoriesResult.data;
  }
}

export async function getRecipesByCategory(filters: SearchFilter) {
  const url = `${baseUrl}/filter.php?c=${filters.category}&i=${filters.ingredient}`;
  const {data} = await axios(url);
  //   console.log(data);
  const recipesResult = RecipesSchema.safeParse(data);
  if (recipesResult.success) {
    return recipesResult.data;
  }
}

export async function getRecipeById(id: Recipe['idDrink']) {
  console.log(id);
  const url = `${baseUrl}/lookup.php?i=${id}`;
  const {data} = await axios(url);
  const recipeDetailResult = RecipeDetailSchema.safeParse(data.drinks[0]);

  if (recipeDetailResult.success) {
    return recipeDetailResult.data;
  }
}

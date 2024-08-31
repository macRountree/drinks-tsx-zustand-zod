import axios from 'axios';
import {CategoriesAPISchema, RecipeSchema} from '../Schemas/recipes-schema';
import {SearchFilter} from '../interfaces';

export async function getCategories() {
  const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
  const {data} = await axios(url);
  const categoriesResult = CategoriesAPISchema.safeParse(data);

  if (categoriesResult.success) {
    return categoriesResult.data;
  }
}

export async function getRecipesByCategory(filters: SearchFilter) {
  const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${filters.category}&i=${filters.ingredient}`;
  const {data} = await axios(url);
  console.log(data);
  const recipesResult = RecipeSchema.safeParse(data);
  if (recipesResult.success) {
    return recipesResult.data;
  }
}

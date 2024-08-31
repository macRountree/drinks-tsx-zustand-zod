import {StateCreator} from 'zustand';
import {getCategories, getRecipesByCategory} from '../services/RecipesService';
import {Categories, Recipes, SearchFilter} from '../interfaces';

export interface RecipesSliceProps {
  categories: Categories;
  recipes: Recipes;
  fetchCategories: () => Promise<void>;
  searchRecipes: (searchFilter: SearchFilter) => Promise<void>;
}

export const createRecipesSlice: StateCreator<RecipesSliceProps> = set => ({
  categories: {
    drinks: [],
  },
  recipes: {
    drinks: [],
  },
  fetchCategories: async () => {
    const categories = await getCategories();
    set({categories});
  },
  searchRecipes: async filters => {
    // console.log('from recipeSlice');
    // console.log(filters);
    const recipes = await getRecipesByCategory(filters);
    set({recipes});
  },
});

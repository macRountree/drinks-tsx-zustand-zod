import {StateCreator} from 'zustand';
import {
  getCategories,
  getRecipeById,
  getRecipesByCategory,
} from '../services/RecipesService';
import {
  Categories,
  Recipe,
  Recipes,
  SearchFilter,
  RecipeDetail,
} from '../interfaces';

export interface RecipesSliceProps {
  categories: Categories;
  recipes: Recipes;
  selectedRecipe: RecipeDetail;
  modal: boolean;
  fetchCategories: () => Promise<void>;
  searchRecipes: (searchFilter: SearchFilter) => Promise<void>;
  selectRecipe: (id: Recipe['idDrink']) => Promise<void>;
  closeModal: () => void;
}

export const createRecipesSlice: StateCreator<RecipesSliceProps> = set => ({
  categories: {
    drinks: [],
  },
  recipes: {
    drinks: [],
  },
  modal: false,

  selectedRecipe: {} as RecipeDetail,
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
  selectRecipe: async id => {
    const selectedRecipe = await getRecipeById(id);
    set({selectedRecipe, modal: true});
  },
  closeModal: () => {
    set({modal: false, selectedRecipe: {} as RecipeDetail});
  },
});

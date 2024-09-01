import {create} from 'zustand';
import {createRecipesSlice, RecipesSliceProps} from './recipeSlice';
import {devtools} from 'zustand/middleware';
import {createFavoritesSlice, FavoritesSliceProps} from './favoritesSlice';
//*Needs generic type to be passed to create (RecipesSliceProps) in this case
export const useGlobalStore = create<RecipesSliceProps & FavoritesSliceProps>()(
  devtools((...a) => ({
    ...createRecipesSlice(...a),
    ...createFavoritesSlice(...a),
  }))
);

//* Global Store

import {create} from 'zustand';
import {createRecipesSlice, RecipesSliceProps} from './recipeSlice';
import {devtools} from 'zustand/middleware';
//*Needs generic type to be passed to create (RecipesSliceProps) in this case
export const useGlobalStore = create<RecipesSliceProps>()(
  devtools((...a) => ({
    ...createRecipesSlice(...a),
  }))
);

//* Global Store

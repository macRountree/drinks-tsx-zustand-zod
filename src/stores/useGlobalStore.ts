import {create} from 'zustand';
import {createRecipesSlice, RecipesSliceProps} from './recipeSlice';
import {devtools} from 'zustand/middleware';
import {createFavoritesSlice, FavoritesSliceProps} from './favoritesSlice';
import {createNotifiesSlice, NotifiesSliceProps} from './notifiesSlice';
//*Needs generic type to be passed to create (RecipesSliceProps) in this case
export const useGlobalStore = create<
  RecipesSliceProps & FavoritesSliceProps & NotifiesSliceProps
>()(
  devtools((...a) => ({
    ...createRecipesSlice(...a),
    ...createFavoritesSlice(...a),
    ...createNotifiesSlice(...a),
  }))
);

//* Global Store

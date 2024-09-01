import {StateCreator} from 'zustand';
import {RecipeDetail} from '../interfaces';
import {createNotifiesSlice, NotifiesSliceProps} from './notifiesSlice';
import {RecipesSliceProps} from './recipeSlice';

export interface FavoritesSliceProps {
  favorites: RecipeDetail[];
  handleClickFavorite: (recipe: RecipeDetail) => void;
  favoriteExist: (id: RecipeDetail['idDrink']) => boolean;
  loadFromStorage: () => void;
}
export const createFavoritesSlice: StateCreator<
  FavoritesSliceProps & RecipesSliceProps & NotifiesSliceProps,
  [],
  [],
  FavoritesSliceProps
> = (set, get, api) => ({
  favorites: [],
  handleClickFavorite: recipe => {
    // console.log(recipe, 'from favoritesSlice');
    if (get().favoriteExist(recipe.idDrink)) {
      set(state => ({
        favorites: state.favorites.filter(
          fav => fav.idDrink !== recipe.idDrink
        ),
      }));
      createNotifiesSlice(set, get, api).showNotification({
        text: 'Removed from favorites',
        error: false,
      });
    } else {
      set(state => ({
        favorites: [...state.favorites, recipe],
      }));
      createNotifiesSlice(set, get, api).showNotification({
        text: 'Removed from favorites',
        error: false,
      });
      createNotifiesSlice(set, get, api).showNotification({
        text: 'Added to favorites',
        error: false,
      });
    }
    localStorage.setItem('fav', JSON.stringify(get().favorites));
  },
  favoriteExist: id => {
    return get().favorites.some(fav => fav.idDrink === id);
  },
  loadFromStorage: () => {
    const storedFav = localStorage.getItem('fav');
    if (storedFav) {
      set({favorites: JSON.parse(storedFav)});
    }
  },
});

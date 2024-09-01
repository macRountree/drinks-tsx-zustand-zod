import {StateCreator} from 'zustand';
import {RecipeDetail} from '../interfaces';

export interface FavoritesSliceProps {
  favorites: RecipeDetail[];
  handleClickFavorite: (recipe: RecipeDetail) => void;
  favoriteExist: (id: RecipeDetail['idDrink']) => boolean;
  loadFromStorage: () => void;
}
export const createFavoritesSlice: StateCreator<FavoritesSliceProps> = (
  set,
  get
) => ({
  favorites: [],
  handleClickFavorite: recipe => {
    // console.log(recipe, 'from favoritesSlice');
    if (get().favoriteExist(recipe.idDrink)) {
      set(state => ({
        favorites: state.favorites.filter(
          fav => fav.idDrink !== recipe.idDrink
        ),
      }));
    } else {
      set(state => ({
        favorites: [...state.favorites, recipe],
      }));
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

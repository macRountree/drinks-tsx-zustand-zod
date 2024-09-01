import {useGlobalStore} from '../stores/useGlobalStore';
import {RecipesCard} from '../components/RecipesCard';
import {useMemo} from 'react';

const FavoritesPage = () => {
  const favorites = useGlobalStore(state => state.favorites);
  const hasFavs = useMemo(() => favorites.length, [favorites]);
  return (
    <>
      <h1 className="text-center text-8xl font-extrabold">
        {' '}
        Favorites Recipes{' '}
      </h1>
      {hasFavs ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-10 gap-10">
          {favorites.map(fav => (
            <RecipesCard key={fav.idDrink} recipe={fav} />
          ))}
        </div>
      ) : (
        <p className="text-4xl text-center bg-rose-600 p-2 rounded-md text-white font-extrabold mt-6">
          {' '}
          Not Favorites Recipes.{' '}
        </p>
      )}
    </>
  );
};

export default FavoritesPage;

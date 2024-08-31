import {useMemo} from 'react';
import {useGlobalStore} from '../stores/useGlobalStore';
import {RecipesCard} from '../components/RecipesCard';

export const IndexPage = () => {
  const recipe = useGlobalStore(state => state.recipes);

  const hasRecipes = useMemo(() => recipe.drinks.length, [recipe]);

  return (
    <>
      <h1 className="text-center text-8xl font-extrabold"> Recipes </h1>

      {hasRecipes ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-10 gap-10">
          {recipe.drinks.map(recipe => (
            <RecipesCard key={recipe.idDrink} recipe={recipe} />
          ))}
        </div>
      ) : (
        <p className="text-4xl text-center bg-rose-600 p-2 rounded-md text-white font-extrabold mt-6">
          {' '}
          Not Recipes Found. Please try again typing a different ingredient or
          category{' '}
        </p>
      )}
    </>
  );
};

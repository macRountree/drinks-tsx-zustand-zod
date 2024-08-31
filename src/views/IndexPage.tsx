import {useMemo} from 'react';
import {useGlobalStore} from '../stores/useGlobalStore';

export const IndexPage = () => {
  const recipesList = useGlobalStore(state => state.recipes);

  const hasRecipes = useMemo(() => recipesList.drinks.length, [recipesList]);

  return (
    <>
      <h1 className="text-center text-8xl font-extrabold"> Recipes </h1>
      {hasRecipes ? (
        <div>
          {recipesList.drinks.map(recipe => (
            <div key={recipe.idDrink}>
              <img src={recipe.strDrinkThumb} alt="" />
              <h3> {recipe.strDrink} </h3>
            </div>
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

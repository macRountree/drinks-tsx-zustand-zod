import {useGlobalStore} from '../stores/useGlobalStore';

export const IndexPage = () => {
  const recipesList = useGlobalStore(state => state.recipes);
  console.log(recipesList);
  return (
    <>
      <div>
        <div>
          {recipesList.drinks.map(recipe => (
            <div key={recipe.idDrink}>
              <img src={recipe.strDrinkThumb} alt="" />
              <h3> {recipe.strDrink} </h3>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

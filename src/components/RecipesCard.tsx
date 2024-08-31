import {Recipe} from '../interfaces';
type RecipesCardProps = {
  recipe: Recipe;
};

export const RecipesCard = ({recipe}: RecipesCardProps) => {
  return (
    <div className=" border shadow-lg rounded-lg ">
      <div className=" flex justify-center p-1  overflow-hidden">
        <img
          src={recipe.strDrinkThumb}
          alt={`${recipe.strDrink} Image`}
          className="w-52 rounded-lg hover:scale-125 hover:rotate-2  transition-transform duration-500 ease-in-out"
        />
      </div>
      <div className="p-5">
        <h3 className="text-rose-800 text-4xl truncate font-black text-center">
          {' '}
          {recipe.strDrink}{' '}
        </h3>
        <button
          type="button"
          className="cursor-pointer text-white bg-rose-800 hover:bg-rose-900 hover:text-white w-full p-2 rounded-lg text-3xl font-bold  "
        >
          Add to Favorites
        </button>
      </div>
    </div>
  );
};

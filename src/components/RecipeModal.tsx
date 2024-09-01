import {Dialog, Transition} from '@headlessui/react';
import {Fragment} from 'react';
import {useGlobalStore} from '../stores/useGlobalStore';
import {RecipeDetail} from '../interfaces/index';

export default function RecipeModal() {
  //   const [modal, useModal] = useState(false);
  const modal = useGlobalStore(state => state.modal);
  const closeModal = useGlobalStore(state => state.closeModal);
  const selectedRecipe = useGlobalStore(state => state.selectedRecipe);

  const renderIngredients = () => {
    const ingredients: JSX.Element[] = [];

    for (let i = 1; i <= 6; i++) {
      const ingredient =
        selectedRecipe[`strIngredient${i}` as keyof RecipeDetail];
      const measure = selectedRecipe[`strMeasure${i}` as keyof RecipeDetail];

      if (ingredient && measure) {
        ingredients.push(
          <li key={i} className="text-2xl font-normal text-rose-900 ">
            {ingredient} - {measure}
          </li>
        );
      }
    }
    return ingredients;
  };
  return (
    <>
      <Transition appear show={modal} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-70" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-2xl sm:p-6">
                  <Dialog.Title
                    as="h3"
                    className="text-rose-900 text-4xl font-extrabold my-5 text-center"
                  >
                    {selectedRecipe.strDrink}
                  </Dialog.Title>
                  <img
                    src={selectedRecipe.strDrinkThumb}
                    alt={selectedRecipe.strDrink}
                    className="mx-auto w-96"
                  />
                  <Dialog.Title
                    as="h3"
                    className="text-rose-900 text-4xl font-extrabold my-5"
                  >
                    Ingredients and Quantities
                  </Dialog.Title>
                  {renderIngredients()}
                  <Dialog.Title
                    as="h3"
                    className="text-rose-900 text-4xl font-extrabold my-5"
                  >
                    Steps
                  </Dialog.Title>
                  <p className="text-2xl text-rose-900">
                    {' '}
                    {selectedRecipe.strInstructions}{' '}
                  </p>
                  <div className="mt-5 flex justify-between gap-3">
                    <button
                      type="button"
                      className="w-full bg-gray-600 text-white p-3 rounded-lg font-bold text-3xl  uppercase shadow hover:bg-gray-500"
                      onClick={closeModal}
                    >
                      Close
                    </button>
                    <button
                      type="button"
                      className="w-full bg-rose-600 text-white p-3 rounded-lg font-bold text-3xl  uppercase shadow hover:bg-rose-500"
                      onClick={closeModal}
                    >
                      {/* Event add favorite needs to be callback, needs to know if the recipe is in the fav view already */}
                      Add to Favorites
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

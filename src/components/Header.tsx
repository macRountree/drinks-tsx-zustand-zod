import {ChangeEvent, FormEvent, useEffect, useMemo, useState} from 'react';
import {NavLink, useLocation} from 'react-router-dom';
import {useGlobalStore} from '../stores/useGlobalStore';

export const Header = () => {
  //*Local State

  const [searchFilters, setSearcFilters] = useState({
    ingredient: '',
    category: '',
  });

  const {pathname} = useLocation();
  //   console.log(pathname);

  const isHome = useMemo(() => pathname === '/', [pathname]);

  //*Global State
  const fetchCategories = useGlobalStore(state => state.fetchCategories);
  const categories = useGlobalStore(state => state.categories);
  const searchRecipes = useGlobalStore(state => state.searchRecipes);
  // console.log(categories);
  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>
  ) => {
    setSearcFilters({
      ...searchFilters,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (Object.values(searchFilters).includes('')) {
      console.log('Please fill in all fields');
      throw new Error('Please fill in all fields');
      return;
    }
    //!Notification

    //*Query the recipe API
    searchRecipes(searchFilters);
  };
  return (
    <header
      className={isHome ? 'bg-header bg-center bg-cover' : 'bg-slate-700'}
    >
      <div className="mx-auto container px-5 py-16">
        {' '}
        <div className="flex justify-between items-center">
          <div>
            {' '}
            <img className="w-32" src="/logo.svg" alt="logo" />{' '}
          </div>
          <nav className="flex gap-4 items-center">
            <NavLink
              to="/"
              className={({isActive}) =>
                isActive
                  ? 'text-rose-600   text-4xl  uppercase font-extrabold'
                  : 'text-white uppercase font-extrabold text-4xl  '
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/favorites"
              className={({isActive}) =>
                isActive
                  ? 'text-rose-600   text-4xl  uppercase font-bold'
                  : 'text-white uppercase font-bold text-4xl  '
              }
            >
              Favorites
            </NavLink>
          </nav>
        </div>{' '}
        {isHome && (
          <form
            action=""
            className="md:w-1/2 2xl:w-1/3 bg-rose-400 my-16 p-10 rounded-lg shadow space-y-6"
            onSubmit={handleSubmit}
          >
            <div>
              <label
                htmlFor="ingredient"
                className="block text-white uppercase font-extrabold text-lg"
              >
                Ingredients
              </label>

              <input
                type="text"
                id="ingredient"
                name="ingredient"
                className="p-3 w-full rounded-lg focus:outline-none text-2xl "
                placeholder="Enter name or ingredients"
                onChange={handleChange}
                value={searchFilters.ingredient}
              />
            </div>
            <div>
              <label
                htmlFor="ingredient"
                className="block text-white uppercase font-extrabold text-lg"
              >
                Categtory
              </label>

              <select
                name="category"
                id="category"
                className="p-3 w-full rounded-lg focus:outline-none text-2xl"
                onChange={handleChange}
                value={searchFilters.category}
              >
                <option>--Select Category --</option>
                {categories.drinks.map(categories => (
                  <option
                    key={categories.strCategory}
                    value={categories.strCategory}
                  >
                    {' '}
                    {categories.strCategory}{' '}
                  </option>
                ))}
              </select>
            </div>
            <input
              type="submit"
              value="Search Recipe"
              className="cursor-pointer text-white bg-rose-800 hover:bg-rose-900 hover:text-white w-full p-2 rounded-lg text-3xl font-bold"
            />
          </form>
        )}
      </div>
    </header>
  );
};

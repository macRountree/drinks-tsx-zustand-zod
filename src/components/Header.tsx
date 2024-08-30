import {useMemo} from 'react';
import {NavLink, useLocation} from 'react-router-dom';

export const Header = () => {
  const {pathname} = useLocation();
  //   console.log(pathname);

  const isHome = useMemo(() => pathname === '/', [pathname]);
  return (
    <header className="bg-slate-800 ">
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
                  ? 'text-rose-400   text-lg  uppercase font-bold'
                  : 'text-white uppercase font-bold  '
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/favorites"
              className={({isActive}) =>
                isActive
                  ? 'text-rose-400   text-lg  uppercase font-bold'
                  : 'text-white uppercase font-bold  '
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
                value=""
              >
                <option>--Select Category --</option>
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

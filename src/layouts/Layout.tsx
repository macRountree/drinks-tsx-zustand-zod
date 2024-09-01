import {Outlet} from 'react-router-dom';
import {Header} from '../components/Header';
import RecipeModal from '../components/RecipeModal';

export const Layout = () => {
  return (
    <>
      <Header />
      <main className="container mx-auto py-16">
        <Outlet />
      </main>
      <RecipeModal />
    </>
  );
};

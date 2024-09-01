import {Outlet} from 'react-router-dom';
import {Header} from '../components/Header';
import RecipeModal from '../components/RecipeModal';
import {useEffect} from 'react';
import {useGlobalStore} from '../stores/useGlobalStore';
import Notification from '../components/Notification';

export const Layout = () => {
  const loadFromStorage = useGlobalStore(state => state.loadFromStorage);
  useEffect(() => {
    loadFromStorage();
  }, [loadFromStorage]);
  return (
    <>
      <Header />
      <main className="container mx-auto py-16">
        <Outlet />
      </main>
      <RecipeModal />
      <Notification />
    </>
  );
};

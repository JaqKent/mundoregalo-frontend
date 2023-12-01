import { useEffect, useState } from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import Footer from '~components/Footer';
import NavigationBar from '~components/NavigationBar';
import NavigationMenu from '~components/NavigationMenu';
import ProductProvider from '~context/ProductContext';
import { UserProvider } from '~context/UserContext/UserContext';

import 'react-toastify/dist/ReactToastify.css';

import { ROUTES } from './constants';
import NotFound from './NotFound';

function App() {
  const [showNavbar, setShowNavbar] = useState(false);

  const toggleNavbar = () => {
    setShowNavbar((prevState) => !prevState);
  };

  useEffect(() => {
    const handleCloseWindow = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && !!showNavbar) {
        toggleNavbar();
      }
    };
    window.addEventListener('keydown', handleCloseWindow);

    return () => {
      window.removeEventListener('keydown', handleCloseWindow);
    };
  }, [showNavbar]);

  return (
    <UserProvider>
      <ProductProvider>
        <ToastContainer />
        <HashRouter basename='/'>
          <NavigationBar toggleNavbar={toggleNavbar} />
          <NavigationMenu showNavbar={showNavbar} toggleNavbar={toggleNavbar} />
          <Routes>
            {ROUTES.map((route) => (
              <Route path={route.path} key={route.id} element={route.element} />
            ))}
            <Route path='*' element={<NotFound />} />
          </Routes>
          <Footer />
        </HashRouter>
      </ProductProvider>
    </UserProvider>
  );
}

export default App;

// FIXME:Usando React-Router-Dom v6, hay una forma mucho mejor de armar rutas: https://reactrouter.com/en/main/start/tutorial#adding-a-router
// FIXME:Toda la logica del navbar puede ser migrada a un componente separado. No tiene porqué estar en App

import Footer from 'components/Footer';
import NavigationBar from 'components/NavigationBar';
import NavigationMenu from 'components/NavigationMenu';
import { UserProvider } from 'context/User/UserContext';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { ROUTES } from './constants';

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
      <Router>
        <NavigationBar toggleNavbar={toggleNavbar} />
        <NavigationMenu showNavbar={showNavbar} toggleNavbar={toggleNavbar} />
        <Routes>
          {ROUTES.map((path) => (
            <Route key={path.id} path={path.path} element={path.element} />
          ))}
        </Routes>
        <Footer />
      </Router>
    </UserProvider>
  );
}

export default App;

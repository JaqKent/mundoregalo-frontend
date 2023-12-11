import { useEffect, useState } from 'react';

import NavigationBar from './components/NavigationBar';
import NavigationMenu from './components/NavigationMenu';

function NavigationSection() {
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
    <>
      <NavigationBar toggleNavbar={toggleNavbar} />
      <NavigationMenu showNavbar={showNavbar} toggleNavbar={toggleNavbar} />
    </>
  );
}

export default NavigationSection;

import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import NavigationMenu from '~components/NavigationMenu';
import Footer from '~components/Footer';
import NavigationBar from '~components/NavigationBar';
import { UserProvider } from '~context/UserContext/UserContext';

import { ROUTES } from './constants';
import NotFound from './NotFound';
import 'react-toastify/dist/ReactToastify.css';
import ProductProvider from '~context/ProductContext';

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
            <ToastContainer />
            <Router>
                <ProductProvider>
                    <NavigationBar toggleNavbar={toggleNavbar} />
                    <NavigationMenu
                        showNavbar={showNavbar}
                        toggleNavbar={toggleNavbar}
                    />
                    <Routes>
                        {ROUTES.map((route) => (
                            <Route
                                path={route.path}
                                key={route.id}
                                element={route.element}
                            />
                        ))}
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </ProductProvider>
                <Footer />
            </Router>
        </UserProvider>
    );
}

export default App;

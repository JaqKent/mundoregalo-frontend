import ProductPage from '~components/ProductPage';
import ProductSearchScreen from '~components/ProductPage/components/ProductSearchScreen';
import HomePage from '~screens/Home';
import Survey from '~screens/Survey';

export const ROUTES = [
    {
        id: 1,
        path: '/',
        element: <HomePage />,
    },
    {
        id: 2,
        path: '/survey',
        element: <Survey />,
    },
    {
        id: 3,
        path: '/productpage',
        element: <ProductPage />,
    },
    {
        id: 4,
        path: '/productsearch/:searchTerm',
        element: <ProductSearchScreen />,
    },
];

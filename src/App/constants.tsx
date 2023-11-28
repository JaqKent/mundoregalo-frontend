import ProductSearchScreen from '~components/ProductPage/components/ProductSearchScreen';
import ProductScreen from '~components/ProductPage/ProductScreen';
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
        path: '/productPage/:id',
        element: <ProductScreen />,
    },
    {
        id: 4,
        path: '/productSearch/:searchTerm',
        element: <ProductSearchScreen />,
    },
];

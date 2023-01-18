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
];

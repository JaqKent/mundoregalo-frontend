import ProductSearchScreen from '~components/ProductPage/components/ProductSearchScreen';
import ProductScreen from '~components/ProductPage/ProductScreen';

import App from '../App/App';
import NotFound from '../App/NotFound';

export const ROUTES = [
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
  },
  {
    path: '/productPage/:id',
    element: <ProductScreen />,
  },
  {
    path: '/productSearch/:searchTerm',
    element: <ProductSearchScreen />,
  },
];

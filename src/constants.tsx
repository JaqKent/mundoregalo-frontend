import { createBrowserRouter } from 'react-router-dom';

import ProductSearchScreen from '~components/ProductPage/components/ProductSearchScreen';
import ProductScreen from '~components/ProductPage/ProductScreen';
import HomePage from '~screens/Home';

import NotFound from './App/NotFound';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
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
]);

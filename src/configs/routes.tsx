import ProductSearchScreen from '~components/ProductPage/components/ProductSearchScreen';
import ProductScreen from '~components/ProductPage/ProductScreen';
import DeliveryPage from '~components/SupportCenter/DeliveryPage';
import SupportPage from '~components/SupportCenter/MainPage';

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
  {
    path: '/supportCenter',
    element: <SupportPage />,
  },
  {
    path: '/supportCenter/envios',
    element: <DeliveryPage />,
  },
];

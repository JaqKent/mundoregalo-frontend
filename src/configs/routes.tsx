import ProductSearchScreen from '~components/ProductPage/components/ProductSearchScreen';
import ProductScreen from '~components/ProductPage/ProductScreen';
import AboutUs from '~components/SupportCenter/AboutUs';
import { AboutUsQuestions } from '~components/SupportCenter/AboutUs/constants';
import DeliveryPage from '~components/SupportCenter/DeliveryPage';
import { DeliveryQuestions } from '~components/SupportCenter/DeliveryPage/constants';
import InfoSection from '~components/SupportCenter/InfoSection';
import SupportPage from '~components/SupportCenter/MainPage';
import Orders from '~components/SupportCenter/Orders';
import { OrdersQuestions } from '~components/SupportCenter/Orders/constants';
import Payments from '~components/SupportCenter/Payments';
import { PaymentsQuestions } from '~components/SupportCenter/Payments/constants';
import Products from '~components/SupportCenter/Products';
import { ProductsQuestions } from '~components/SupportCenter/Products/constants';

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
  {
    path: '/supportCenter/sobreNosotros',
    element: <AboutUs />,
  },
  {
    path: '/supportCenter/pagos',
    element: <Payments />,
  },
  {
    path: '/supportCenter/productos',
    element: <Products />,
  },
  {
    path: '/supportCenter/pedidos',
    element: <Orders />,
  },
];

export const deliveryQuestionRoutes = DeliveryQuestions.map((question) => ({
  path: question.url,
  element: (
    <InfoSection
      respuesta={question.respuesta}
      text={question.text}
      handleback={question.handleback}
    />
  ),
}));

export const aboutUsQuestionRoutes = AboutUsQuestions.map((question) => ({
  path: question.url,
  element: (
    <InfoSection
      respuesta={question.respuesta}
      text={question.text}
      handleback={question.handleback}
      contact={question.contact}
    />
  ),
}));

export const pagosQuestionRoutes = PaymentsQuestions.map((question) => ({
  path: question.url,
  element: (
    <InfoSection
      respuesta={question.respuesta}
      text={question.text}
      handleback={question.handleback}
    />
  ),
}));

export const productsQuestionRoutes = ProductsQuestions.map((question) => ({
  path: question.url,
  element: (
    <InfoSection
      respuesta={question.respuesta}
      text={question.text}
      handleback={question.handleback}
    />
  ),
}));

export const OrderQuestionRoutes = OrdersQuestions.map((question) => ({
  path: question.url,
  element: (
    <InfoSection
      respuesta={question.respuesta}
      text={question.text}
      handleback={question.handleback}
    />
  ),
}));

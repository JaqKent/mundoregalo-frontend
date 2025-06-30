import React from 'react';
import ReactDOM from 'react-dom/client';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import * as firebase from 'firebase/app';

import Footer from '~components/Footer';
import NavigationSection from '~components/NavigationSection';
import { firebaseConfig } from '~configs/firebaseConfig';
import {
  aboutUsQuestionRoutes,
  deliveryQuestionRoutes,
  OrderQuestionRoutes,
  pagosQuestionRoutes,
  productsQuestionRoutes,
  ROUTES,
} from '~configs/routes';
import DepartmentProvider from '~context/DepartamentContext';
import ProductProvider from '~context/ProductContext';
import { UserProvider } from '~context/UserContext/UserContext';

import '~scss/main.scss';
import 'react-toastify/dist/ReactToastify.css';

const router = createHashRouter([
  {
    path: '/',
    element: (
      <UserProvider>
        <ProductProvider>
          <DepartmentProvider>
            <ToastContainer />
            <NavigationSection />
          </DepartmentProvider>
        </ProductProvider>
        <Footer />
      </UserProvider>
    ),
    children: [
      ...ROUTES,
      {
        path: '/supportCenter/envios',
        children: deliveryQuestionRoutes,
      },
      {
        path: '/supportCenter/sobreNosotros',
        children: aboutUsQuestionRoutes,
      },
      {
        path: '/supportCenter/pagos',
        children: pagosQuestionRoutes,
      },
      {
        path: '/supportCenter/productos',
        children: productsQuestionRoutes,
      },
      {
        path: '/supportCenter/pedidos',
        children: OrderQuestionRoutes,
      },
    ],
  },
]);

firebase.initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

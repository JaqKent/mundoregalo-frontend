import React from 'react';
import ReactDOM from 'react-dom/client';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import * as firebase from 'firebase/app';

import Footer from '~components/Footer';
import NavigationSection from '~components/NavigationSection';
import { firebaseConfig } from '~configs/firebaseConfig';
import { ROUTES } from '~configs/routes';
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
          <ToastContainer />
          <NavigationSection />
        </ProductProvider>
        <Footer />
      </UserProvider>
    ),
    children: ROUTES.map(({ path, element }) => ({ path, element })),
  },
]);

firebase.initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

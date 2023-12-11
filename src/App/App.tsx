import { RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import Footer from '~components/Footer';
import ProductProvider from '~context/ProductContext';
import { UserProvider } from '~context/UserContext/UserContext';

import 'react-toastify/dist/ReactToastify.css';

import { router } from './constant';

function App() {
  return (
    <UserProvider>
      <ProductProvider>
        <ToastContainer />
        <RouterProvider router={router} />
        <Footer />
      </ProductProvider>
    </UserProvider>
  );
}

export default App;

// FIXME:Usando React-Router-Dom v6, hay una forma mucho mejor de armar rutas: https://reactrouter.com/en/main/start/tutorial#adding-a-router
// FIXME:Toda la logica del navbar puede ser migrada a un componente separado. No tiene porqué estar en App

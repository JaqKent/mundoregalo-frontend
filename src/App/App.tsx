import Footer from 'components/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from '../components/NavBar';
import { ROUTES } from './constants';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {ROUTES.map((path) => (
          <Route key={path.id} path={path.path} element={path.element} />
        ))}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from 'screens/Home';
import Survey from 'screens/Survey';
import Navbar from './components/NavBar';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/survey" element={<Survey />} />
      </Routes>

    </Router>
  );
}

export default App;

/* import Slider from 'components/Slider'; */
import Slider from 'components/Slider';
import { ITEMS } from 'constants/constants';
import Navbar from './components/NavBar';

function App() {
  return (
    <div>
      <Navbar />
      <Slider slides={ITEMS} />
      <h1>mundo regalo</h1>
    </div>
  );
}

export default App;

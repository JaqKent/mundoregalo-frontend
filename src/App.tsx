import Slider from 'components/Slider';
import { ITEMS } from 'constants/constants';
import Navbar from './components/NavBar';

import styles from './styles.module.scss';

function App() {
  return (
    <>
      <Navbar />
      <Slider auto slides={ITEMS} className={styles.image} />
      <h1>mundo regalo</h1>
    </>
  );
}

export default App;

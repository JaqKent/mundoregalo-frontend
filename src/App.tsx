import Slider from 'components/Slider';
import { ITEMS } from 'constants/constants';
import { useState } from 'react';
import Navbar from './components/NavBar';

import styles from './styles.module.scss';

function App() {
  const [auto, setAuto] = useState(false);

  return (
    <>
      <Navbar />
      <Slider auto={auto} setAuto={setAuto} slides={ITEMS} className={styles.image} />
      <h1>mundo regalo</h1>
    </>
  );
}

export default App;

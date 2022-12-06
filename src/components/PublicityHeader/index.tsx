import { useState } from 'react';
import Slider from 'components/Slider';
import { ITEMS } from 'constants/constants';

import styles from './styles.module.scss';

function PublicityHeader() {
  const [auto, setAuto] = useState(false);
  return (
    <div style={{ width: '100%' }}>
      <Slider hide auto={auto} setAuto={setAuto} slides={ITEMS} className={styles.image} />

    </div>
  );
}

export default PublicityHeader;

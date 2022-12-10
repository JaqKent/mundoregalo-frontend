import { useState } from 'react';
import Slider from 'components/Slider';
import { ITEMS } from 'constants/constants';
import { BANNER, SERVICES } from './constants';

import styles from './styles.module.scss';
import InsideInfo from './components';

function PublicityHeader() {
  const [auto, setAuto] = useState(false);
  return (
    <div className={styles.container}>
      <div>
        <Slider hide auto={auto} setAuto={setAuto} slides={ITEMS} className={styles.image} />
      </div>
      <div className={styles.services}>
        {SERVICES.map((service) => (
          <InsideInfo image={service.image} text1={service.text1} text2={service.text2} />
        ))}

      </div>
      <div className={styles.bannerContainer}>
        {BANNER.map((header) => (
          <img className={styles.bannerImage} src={header.image} alt="publicidad" />
        ))}
      </div>

    </div>
  );
}

export default PublicityHeader;

import { useState } from 'react';

import Slider from '~components/Slider';
import { ITEMS } from '~constants/constants';

import styles from './styles.module.scss';

import InsideInfo from './components';
import { BANNER, SERVICES } from './constants';

function PublicityHeader() {
  const [auto, setAuto] = useState(true);
  return (
    <div className={styles.container}>
      <div className={styles.slider}>
        <Slider
          hide
          auto={auto}
          setAuto={setAuto}
          slides={ITEMS.map((item) => item.img)}
          className={styles.image}
          minClassName={styles.miniatures}
          mini={styles.mini}
          miniActive={styles.miniActive}
          slide={styles.slide}
          slideActive={styles.slideActive}
        />
      </div>
      <div className={styles.services}>
        {SERVICES.map((service) => (
          <InsideInfo
            key={service.id}
            image={service.image}
            text1={service.text1}
          />
        ))}
      </div>
      <div className={styles.bannerContainer}>
        {BANNER.map((header) => (
          <img
            className={styles.bannerImage}
            key={header.id}
            src={header.image}
            alt='publicidad'
          />
        ))}
      </div>
    </div>
  );
}

export default PublicityHeader;

import { useState } from 'react';
import Slider from 'components/Slider';
import { ITEMS } from 'constants/constants';
import { BANNER, SERVICES } from './constants';

import styles from './styles.module.scss';

function PublicityHeader() {
  const [auto, setAuto] = useState(false);
  return (
    <>
      <div>
        <Slider hide auto={auto} setAuto={setAuto} slides={ITEMS} className={styles.image} />
      </div>
      <div className={styles.services}>
        {SERVICES.map((service) => (
          <div className={styles.iconsSection}>
            <img className={styles.icon} src={service.image} alt="" />
            <div className={styles.text}>
              <h2>{service.text1}</h2>
              <p>{service.text2}</p>
            </div>
          </div>
        ))}

      </div>
      <div className={styles.bannerContainer}>
        {BANNER.map((header) => (
          <img className={styles.bannerImage} src={header.image} alt="publicidad" />
        ))}
      </div>

    </>
  );
}

export default PublicityHeader;

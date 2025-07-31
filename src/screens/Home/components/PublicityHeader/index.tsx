import { useContext, useState } from 'react';

import Slider from '~components/Slider';
import { BannerContext } from '~context/BannerContext';

import styles from './styles.module.scss';

import InsideInfo from './components';
import { SERVICES } from './constants';

function PublicityHeader() {
  const [auto, setAuto] = useState(true);
  const { slider, header, isLoading } = useContext(BannerContext);

  if (isLoading) return null;

  return (
    <div className={styles.container}>
      <div className={styles.upperSection}>
        <div className={styles.slider}>
          <Slider
            hide
            auto={auto}
            setAuto={setAuto}
            slides={slider}
            className={styles.image}
            minClassName={styles.miniatures}
            mini={styles.mini}
            miniActive={styles.miniActive}
            slide={styles.slide}
            slideActive={styles.slideActive}
          />
        </div>

        <div className={styles.bannerContainer}>
          {header.map((src, index) => (
            <img
              className={styles.bannerImage}
              key={src.url}
              src={src.url}
              alt={`header-${index}`}
            />
          ))}
        </div>
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
    </div>
  );
}

export default PublicityHeader;

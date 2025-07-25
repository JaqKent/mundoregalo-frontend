import { useContext } from 'react';

import { BannerContext } from '~context/BannerContext';

import styles from './styles.module.scss';

function BannerSection() {
  const { banners, isLoading } = useContext(BannerContext);

  if (isLoading) return null;

  const mid1 = banners.find((b) => b.id === 'mid1');
  const mid2 = banners.find((b) => b.id === 'mid2');
  const bottom = banners.find((b) => b.id === 'bottom');

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.banner1}>
          {mid1?.images[0] && (
            <img
              className={styles.imgBanner1}
              src={mid1.images[0]}
              alt='mid1'
            />
          )}
        </div>
        <div className={styles.banner2}>
          {mid2?.images
            .slice(0, 2)
            .map((img, i) => (
              <img
                key={img}
                className={styles.imgBanner2}
                src={img}
                alt={`mid2-${i}`}
              />
            ))}
        </div>
      </div>
      <div className={styles.banner3}>
        {bottom?.images[0] && (
          <img
            className={styles.imgBanner3}
            src={bottom.images[0]}
            alt='bottom'
          />
        )}
      </div>
    </div>
  );
}

export default BannerSection;

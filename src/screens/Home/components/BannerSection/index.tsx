import { useContext } from 'react';

import { BannerContext } from '~context/BannerContext';

import styles from './styles.module.scss';

function BannerSection() {
  const { mid1, mid2, bottom, isLoading } = useContext(BannerContext);

  if (isLoading) return null;

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.banner1}>
          {mid1[0] && (
            <img className={styles.imgBanner1} src={mid1[0].url} alt='mid1' />
          )}
        </div>
        <div className={styles.banner2}>
          {mid2.slice(0, 2).map((img, i) => (
            <img
              key={img.url}
              className={styles.imgBanner2}
              src={img.url}
              alt={`mid2-${i}`}
            />
          ))}
        </div>
      </div>
      <div className={styles.banner3}>
        {bottom[0] && (
          <img className={styles.imgBanner3} src={bottom[0].url} alt='bottom' />
        )}
      </div>
    </div>
  );
}

export default BannerSection;

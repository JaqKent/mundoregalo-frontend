import banner3 from '~assets/banner.cuaderno.png';
import banner1 from '~assets/banner.mochila.webp';
import banner2 from '~assets/banner.potosi.png';
import banner4 from '~assets/banner.utiles.webp';

import styles from './styles.module.scss';

function BannerSection() {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.banner1}>
          <img className={styles.imgBanner1} src={banner1} alt='mochilas' />
        </div>
        <div className={styles.banner2}>
          <img
            className={styles.imgBanner2}
            src={banner2}
            alt='cuadernos-tapa-dura'
          />
          <img
            className={styles.imgBanner2}
            src={banner3}
            alt='cuadernos-oficio'
          />
        </div>
      </div>
      <div className={styles.banner3}>
        <img className={styles.imgBanner3} src={banner4} alt='utiles' />
      </div>
    </div>
  );
}

export default BannerSection;

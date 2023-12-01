import left from '~assets/bottomBanner.png';

import styles from './styles.module.scss';

function PublicityFooter() {
  return (
    <div className={styles.container}>
      <img className={styles.img} src={left} alt='escritorio de oficina' />
    </div>
  );
}

export default PublicityFooter;

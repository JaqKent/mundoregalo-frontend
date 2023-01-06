import left from 'assets/officeDesktop.jpg';
import right from 'assets/2Oficina.jpg';

import styles from './styles.module.scss';

function PublicityFooter() {
  return (
    <div className={styles.container}>
      <img className={styles.img} src={left} alt="escritorio de oficina" />
      <div className={styles.text}><p>Renovar tu espacio</p></div>
      <img className={styles.img} src={right} alt="escritorio de oficina" />
    </div>
  );
}

export default PublicityFooter;

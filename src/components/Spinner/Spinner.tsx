import spinner from '~assets/spinner.gif';

import styles from './styles.module.scss';

function Spinner() {
  return (
    <div className={styles.spinner}>
      <img src={spinner} alt='spinner' />
    </div>
  );
}

export default Spinner;

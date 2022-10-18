import lupa from 'assets/lupa.svg';

import styles from './styles.module.scss';

function SearchBar() {
  return (
    <div className={styles.container}>
      <input className={styles.input} type="text" placeholder="BUSCAR" />
      <div className={styles.lupaContainer}>
        <img className={styles.lupa} src={lupa} alt="buscar" />
      </div>
    </div>
  );
}

export default SearchBar;

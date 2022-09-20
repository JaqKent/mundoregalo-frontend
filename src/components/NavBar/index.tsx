import SearchBar from './SearchBar';

import menu from 'assets/menu.svg';
import logo from 'assets/logoBlanco.png';
import cart from 'assets/carro.svg';

import styles from './styles.module.scss';

function Navbar() {
  return (
    <div className={styles.container}>
      <div className={styles.topItems}>
        <div>
          <img className={styles.menu} src={menu} alt='menu' />
        </div>
        <div>
          <img className={styles.logo} src={logo} alt='logo-mundo-regalo' />
        </div>
        <div>
          <img className={styles.cart} src={cart} alt='carrito' />
        </div>
      </div>
      <div className={styles.lowItems}>
        <SearchBar />
      </div>
    </div>
  );
}

export default Navbar;

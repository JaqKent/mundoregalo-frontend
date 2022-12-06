/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { animated, useTransition } from 'react-spring';
import menu from 'assets/menu.svg';
import logo from 'assets/logoBlanco.png';
import cart from 'assets/carro.svg';
import close from 'assets/x.svg';
import SearchBar from './SearchBar';
import DropsdownMenu from './DropdownMenu';
import { ANIMATION_CONFIG } from './constants';

import styles from './styles.module.scss';

function Navbar() {
  const [open, setOpen] = useState(false);
  const transition = useTransition(open, ANIMATION_CONFIG);
  const navigate = useNavigate();

  const handleOpen = () => { setOpen((prevState) => !prevState); };
  const handleHome = () => { navigate('/'); };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.topItems}>
          <div onClick={handleOpen}>
            <img className={styles.menu} src={`${open ? close : menu}`} alt="menu" />
          </div>
          <div>
            <img className={styles.logo} src={logo} alt="logo-mundo-regalo" onClick={handleHome} />
          </div>
          <div>
            <img className={styles.cart} src={cart} alt="carrito" />
          </div>
        </div>
        <div className={styles.lowItems}>
          <SearchBar />
        </div>
      </div>
      <div>
        {transition((style, item) => (item && (
        <animated.div style={style}>
          <DropsdownMenu />
        </animated.div>
        )))}
      </div>
    </>
  );
}

export default Navbar;

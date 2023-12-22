import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { faBars, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './styles.module.scss';

import Logo from '../../../../../../assets/logoBlanco.png';
import UserContext from '../../../../../../context/UserContext/UserContext';

interface Props {
  toggleNavbar: () => void;
}

function MainBar({ toggleNavbar }: Props) {
  const SIZE = 28;
  const navigate = useNavigate();

  const { isLoggedIn } = useContext(UserContext);
  const handleHome = () => navigate('/');

  return (
    <div className={styles.container}>
      <button
        type='button'
        onClick={toggleNavbar}
        className={styles.button}
        aria-label='abrir barra'
      >
        <FontAwesomeIcon
          icon={faBars}
          width={SIZE}
          height={SIZE}
          className={styles.icon}
        />
      </button>
      <button onClick={handleHome} type='button' className={styles.button}>
        <img src={Logo} alt='Mundo Regalo' className={styles.logoIcon} />
      </button>
      <div>
        {isLoggedIn && (
          <img
            src='https://source.unsplash.com/random/?Person&1'
            alt='Usuario'
            className={styles.img}
          />
        )}
        <FontAwesomeIcon
          icon={faShoppingCart}
          width={SIZE}
          height={SIZE}
          className={styles.icon}
        />
      </div>
    </div>
  );
}
export default MainBar;

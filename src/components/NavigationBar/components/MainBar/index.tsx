import { useContext } from 'react';
import { faBars, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './styles.module.scss';

import Logo from '~assets/logoBlanco.png';
import UserContext from '~context/UserContext/UserContext';

interface Props {
    toggleNavbar: () => void;
}

function MainBar({ toggleNavbar }: Props) {
    const SIZE = 28;

    const { isLoggedIn } = useContext(UserContext);

    return (
        <div className={styles.container}>
            <button
                type="button"
                onClick={toggleNavbar}
                className={styles.button}
            >
                <FontAwesomeIcon
                    icon={faBars}
                    width={SIZE}
                    height={SIZE}
                    className={styles.icon}
                />
            </button>
            <img src={Logo} alt="Mundo Regalo" className={styles.logoIcon} />
            <div>
                {isLoggedIn && (
                    <img
                        src="https://source.unsplash.com/random/?Person&1"
                        alt="Usuario"
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

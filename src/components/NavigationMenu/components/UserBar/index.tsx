import UserContext from '~context/User/UserContext';
import { useContext } from 'react';
import styles from './styles.module.scss';

function UserBar() {
    const { isLoggedIn, setIsLoggedIn } = useContext(UserContext);

    const toggleLogIn = () => {
        setIsLoggedIn((prevState) => !prevState);
    };

    return (
        <div className={styles.container}>
            <div className={styles.usernameContainer}>
                {isLoggedIn ? (
                    <>
                        <img
                            src="https://source.unsplash.com/random/?Person&1"
                            alt="Usuario"
                            className={styles.img}
                        />
                        <p className={styles.username}>Pierre Bernel</p>
                    </>
                ) : (
                    <>
                        <p className={styles.username}>Bienvenido!</p>
                    </>
                )}
            </div>
            <button
                onClick={toggleLogIn}
                type="button"
                className={
                    isLoggedIn
                        ? styles.buttonWithSession
                        : styles.buttonWithoutSession
                }
            >
                {isLoggedIn ? 'Cerrar sesión' : 'Inicia sesión'}
            </button>
        </div>
    );
}
export default UserBar;

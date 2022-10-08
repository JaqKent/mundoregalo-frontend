import NavItem from '../NavItem';
import { DROPDOWN } from './constants';
import styles from './styles.module.scss';

function DropsdownMenu() {
  const handleLink = () => {
    console.log('links');
  };
  const handleLogin = () => {
    console.log('login');
  };

  return (
    <div className={styles.container}>
      <div className={styles.topMenu}>
        <div>
          <h2 onClick={handleLogin}>Iniciar Sesión</h2>
          <hr />
        </div>
        <div>

          {DROPDOWN.map((sort) => (
            <div>
              <NavItem onClick={handleLink} label={sort.name} />
              <hr />

            </div>
          ))}
        </div>

      </div>

    </div>
  );
}

export default DropsdownMenu;

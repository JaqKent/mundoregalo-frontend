import NavItem from '../NavItem';
import { CATEGORIES, SERVICES } from './constants';
import styles from './styles.module.scss';

function DropsdownMenu() {
  const handleLink = () => {
    console.log('links');
  };
  const handleLogin = () => {
    console.log('login');
  };
  const handleCategory = () => {
    console.log('category');
  };
  const handleAbout = () => {
    console.log('about');
  };
  const handleContact = () => {
    console.log('contact');
  };

  return (
    <div className={styles.container}>
      <div className={styles.topMenu}>
        <div>
          <h2 onClick={handleLogin}>Iniciar Sesión</h2>
          <hr />
        </div>
        <div>
          <div>
            <h2>Servicios</h2>
            <hr />
          </div>
          {SERVICES.map((sort) => (
            <div>
              <NavItem onClick={handleLink} label={sort.name} />

            </div>
          ))}
        </div>
        <hr />
      </div>
      <div className={styles.midMenu}>
        <div>
          <h2>Categorias</h2>
          <hr />
        </div>
        {CATEGORIES.map((sort) => (
          <div>
            <NavItem onClick={handleCategory} label={sort.name} />

          </div>
        ))}
        <hr />
      </div>
      <div>
        <h2 onClick={handleContact}>Contacto</h2>
        <hr />
      </div>
      <div>
        <h2 onClick={handleAbout}>Sobre Nosotros</h2>
      </div>
    </div>
  );
}

export default DropsdownMenu;

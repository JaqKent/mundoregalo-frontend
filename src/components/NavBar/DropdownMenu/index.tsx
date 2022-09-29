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
          <h4 onClick={handleLogin}>Iniciar Sesión</h4>
          <div className={styles.line}></div>
        </div>
        <div>
          <div>
            <h4>Servicios</h4>
            <div className={styles.line}></div>
          </div>
          {SERVICES.map((sort) => (
            <div>
              <NavItem onClick={handleLink} label={sort.name} />{' '}
            </div>
          ))}
        </div>
        <div className={styles.line}></div>
      </div>
      <div className={styles.midMenu}>
        <div>
          <h4>Categorias</h4>
          <div className={styles.line}></div>
        </div>
        {CATEGORIES.map((sort) => (
          <div>
            <NavItem onClick={handleCategory} label={sort.name} />{' '}
          </div>
        ))}
      </div>
      <div className={styles.line}></div>
      <div onClick={handleContact}>
        <h4>Contacto</h4>
        <div className={styles.line}></div>
      </div>
      <div onClick={handleAbout}>
        <h4>Sobre Nosotros</h4>
      </div>
    </div>
  );
}

export default DropsdownMenu;

import { useState } from 'react';
import CustomButton from 'components/CustomButton';
import profilePic from 'assets/profilepic.jpg';
import LoggedIn from './LogedinFront';
import NavItem from '../NavItem';
import { DROPDOWN } from './constants';
import styles from './styles.module.scss';

function DropdownMenu() {
  const [logged, setLogged] = useState(false);

  const handleLink = () => {
    console.log('links');
  };
  const handleLogin = () => {
    setLogged(true);
  };
  const handleLogOut = () => {
    setLogged(false);
  };
  const handleSignin = () => {
    console.log('signin');
  };

  return (
    <div className={styles.container}>
      <div>
        {logged ? (
          <div>
            <LoggedIn show={logged} image={profilePic} label="Pierre Bernal" />
          </div>
        ) : (
          <div className={styles.button}>
            <CustomButton small label="Iniciar Sesión" onClick={handleLogin} />
            <CustomButton small label="Crear Cuenta" onClick={handleSignin} secondary />
          </div>
        )}

        <hr />
        <div>
          {DROPDOWN.map((menu) => (

            <div key={menu.id}>
              {
              (((logged && menu.requiresLoggedInUser) || !menu.requiresLoggedInUser) && (
                <>
                  <div className={styles.links}>
                    <NavItem
                      items={menu}
                      onClick={handleLink}
                      label={menu.name}

                    />
                  </div>
                  <hr className={styles.bottomLine} />
                </>
              ))
}

            </div>

          ))}
        </div>
        { logged
          ? <div className={styles.logOut}><CustomButton small label="Cerrar Sesión" onClick={handleLogOut} /></div> : ''}
      </div>

    </div>
  );
}

export default DropdownMenu;

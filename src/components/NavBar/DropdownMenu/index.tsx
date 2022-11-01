import { useState } from 'react';
import CustomButton from 'components/CustomButton';
import profilePic from 'assets/profilepic.jpg';
import LogInModal from 'components/LogInModal';
import LoggedIn from './LogedinFront';
import NavItem from '../NavItem';
import { DROPDOWN } from './constants';
import styles from './styles.module.scss';

function DropdownMenu() {
  const [logged, setLogged] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [sign, setSign] = useState(false);

  const handleLink = () => {
    console.log('links');
  };

  const openLogin = () => {
    setShowModal(true);
    setSign(true);
  };
  const handleLogin = () => {
    setLogged(true);
  };
  const handleSignin = () => {
    console.log('logged');
  };
  const handleLogOut = () => {
    setLogged(false);
  };
  const handleClose = () => {
    setShowModal(false);
  };

  const openSignin = () => {
    setSign(false);
    setShowModal(true);
  };

  const handleOnClick = () => {
    if (logged) {
      handleSignin();
    } else {
      handleLogin();
    }
    handleClose();
  };

  return (
    <div className={styles.container}>
      <div>
        <div className={styles.modal}>
          <LogInModal
            link={sign ? openSignin : openLogin}
            show={showModal}
            onClick={handleOnClick}
            onClose={handleClose}
            signIn={sign}
          />

        </div>
        {logged ? (
          <div>
            <LoggedIn show={logged} image={profilePic} label="Pierre Bernal" />
          </div>
        ) : (
          <div className={styles.button}>
            <CustomButton small label="Iniciar Sesión" onClick={openLogin} />
            <CustomButton small label="Crear Cuenta" onClick={openSignin} secondary />
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

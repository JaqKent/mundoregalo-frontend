/* eslint-disable jsx-a11y/no-static-element-interactions */
import CustomButton from 'components/CustomButton';

import facebook from 'assets/facebook-color.png';
import google from 'assets/google-color.png';
import linkedin from 'assets/linkedin-color.png';
import styles from './styles.module.scss';

interface Props {
    signIn?: boolean;
    show?: boolean;
    onClick:() => void;
    link:() => void;
    onClose:() => void;
}

function LogInModal({
  signIn, onClick, show, link, onClose,
} : Props) {
  return (
    show ? (
      <div className={styles.container}>
        <p className={styles.close} onClick={onClose}>x</p>
        <div>
          {signIn
            ? <h2>Iniciar sesión</h2> : <h2>Crear Cuenta</h2>}
        </div>
        <div className={styles.input}>
          <p>Email</p>
          <input type="email" />
          <p>Contraseña</p>
          <input type="password" required />
        </div>
        <div className={styles.button}>
          <CustomButton label={signIn ? 'Iniciar sesión' : 'Crear Cuenta'} onClick={onClick} />
        </div>
        <div className={styles.downData}>
          <div className={styles.logo}>
            <img className={styles.img} src={google} alt="google" />
            <img className={styles.img} src={facebook} alt="facebook" />
            <img className={styles.img} src={linkedin} alt="linkedin" />
          </div>
          <div className={styles.log}>
            {signIn
              ? (
                <p>
                  Aun no tienes cuenta?
                  {' '}
                  <span className={styles.link} onClick={link}>Crear Cuenta</span>
                </p>
              )
              : (
                <p>
                  ¿Ya tienes una cuenta?
                  {' '}
                  <span className={styles.link} onClick={link}>Iniciar sesión</span>
                </p>
              )}

          </div>
        </div>

      </div>
    ) : <></>
  );
}

export default LogInModal;

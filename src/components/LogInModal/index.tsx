import facebook from 'assets/facebook-color.png';
import google from 'assets/google-color.png';
import linkedin from 'assets/linkedin-color.png';
import CustomButton from 'components/CustomButton';

import styles from './styles.module.scss';

interface Props {
  signIn?: boolean;
  show?: boolean;
  onClick: () => void;
  link: () => void;
  onClose: () => void;
}

function LogInModal({ signIn, onClick, show, link, onClose }: Props) {
  return show ? (
    <div className={styles.container}>
      <button
        type='button'
        className={styles.close}
        onClick={onClose}
        onKeyDown={onClose}
      >
        x
      </button>
      <div>
        <h2>{signIn ? 'Iniciar sesión' : 'Crear Cuenta'}</h2>
      </div>
      <div className={styles.input}>
        <p>Email</p>
        <input type='email' />
        <p>Contraseña</p>
        <input type='password' required />
      </div>
      <div className={styles.button}>
        <CustomButton
          label={signIn ? 'Iniciar sesión' : 'Crear Cuenta'}
          onClick={onClick}
        />
      </div>
      <div className={styles.downData}>
        <div className={styles.logo}>
          <img className={styles.img} src={google} alt='google' />
          <img className={styles.img} src={facebook} alt='facebook' />
          <img className={styles.img} src={linkedin} alt='linkedin' />
        </div>
        <div className={styles.log}>
          {signIn ? (
            <p>
              Aun no tienes cuenta?{' '}
              <span
                role='button'
                tabIndex={0}
                className={styles.link}
                onClick={link}
                onKeyDown={link}
              >
                Crear Cuenta
              </span>
            </p>
          ) : (
            <p>
              ¿Ya tienes una cuenta?{' '}
              <span
                role='button'
                tabIndex={0}
                className={styles.link}
                onClick={link}
                onKeyDown={link}
              >
                Iniciar sesión
              </span>
            </p>
          )}
        </div>
      </div>
    </div>
  ) : null;
}

export default LogInModal;

LogInModal.defaultProps = {
  signIn: false,
  show: false,
};

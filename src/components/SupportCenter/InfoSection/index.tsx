import { useNavigate } from 'react-router-dom';

import back from '~assets/backArrow.svg';
import envelope from '~assets/envelope.svg';
import whatsappVector from '~assets/whatsappVector.svg';
import CustomButton from '~components/CustomButton';

import styles from './styles.module.scss';

interface Props {
  text: string;
  respuesta: string;
  handleback: string;
  contact?: boolean;
}

function InfoSection({ text, respuesta, handleback, contact }: Props) {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(handleback);
  };

  return contact ? (
    <div className={styles.container}>
      <div className={styles.back}>
        <button
          onClick={handleBack}
          className={styles.arrowButton}
          type='button'
        >
          <img src={back} alt='Volver' />
        </button>
        <p className={styles.text}>Volver</p>
      </div>
      <div className={styles.contactSection}>
        <div className={styles.contact}>
          <h3>Contactanos</h3>
          <div className={styles.adress}>
            <div className={styles.data}>
              <img className={styles.img} src={envelope} alt='carta' />
              <div className={styles.contactInfo}>
                <h4>Email</h4>
                <p>mrtienda.adm1@gmail.com</p>
              </div>
            </div>
            <div className={styles.data}>
              <img className={styles.img} src={whatsappVector} alt='' />
              <div className={styles.contactInfo}>
                <h4>WhatsApp</h4>
                <p>+5493813159319</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.consult}>
          <h3>Dejanos tu consulta</h3>
          <form className={styles.form}>
            <div>
              <input
                className={styles.input}
                type='text'
                name='nombre'
                id='nombre'
                placeholder=' Nombre y Apellido'
              />
              <input
                className={styles.input}
                type='text'
                name='telefono'
                id='telefono'
                placeholder='Teléfono'
              />
              <input
                className={styles.input}
                type='email'
                name='email'
                id='email'
                placeholder='Email'
              />
              <input
                className={styles.area}
                type='textarea'
                name='mensaje'
                id='mensaje'
                placeholder='Mensaje'
              />
            </div>
            <div className={styles.buttonSection}>
              <CustomButton
                label='Enviar'
                isSubmit
                className={styles.buttonSubmit}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  ) : (
    <div className={styles.container}>
      <div className={styles.back}>
        <button
          onClick={handleBack}
          className={styles.arrowButton}
          type='button'
        >
          <img src={back} alt='Volver' />
        </button>
        <p className={styles.text}>Volver</p>
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.content}>
          <h3>{text}</h3>
          <p dangerouslySetInnerHTML={{ __html: respuesta }} />
        </div>
      </div>
      <div className={styles.infoSection}>
        <div className={styles.info}>
          <p>¿Esta información es útil?</p>
          <div className={styles.buttonSection}>
            <button className={styles.button} type='button'>
              Sí
            </button>
            <button className={styles.button} type='button'>
              No
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoSection;

InfoSection.defaultProps = {
  contact: false,
};

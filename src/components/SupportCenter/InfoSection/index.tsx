import { useNavigate } from 'react-router-dom';

import back from '~assets/backArrow.svg';

import styles from './styles.module.scss';

interface Props {
  text: string;
  respuesta: string;
  handleback: string;
}

function InfoSection({ text, respuesta, handleback }: Props) {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(handleback);
  };

  return (
    <div className={styles.container}>
      <div className={styles.back}>
        <button
          onClick={handleBack}
          className={styles.arrowButton}
          type='button'
        >
          <img src={back} alt='volver' />
        </button>
        <p className={styles.text}>Volver</p>
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.content}>
          <h3> {text}</h3>
          <p dangerouslySetInnerHTML={{ __html: respuesta }} />
        </div>
      </div>
      <div className={styles.infoSection}>
        <div className={styles.info}>
          <p>¿Esta informacion es útil?</p>
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

import { useNavigate } from 'react-router-dom';

import back from '~assets/backArrow.svg';
import banner from '~assets/envios 2.png';
import front from '~assets/frontArrow.svg';
import { toBeImplemented } from '~utils/logicNotImplemented';

import styles from './styles.module.scss';

import { QUESTIONS } from './constants';

function DeliveryPage() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/supportCenter');
  };

  const handleQuestion = toBeImplemented;

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
      <div className={styles.bannerSection}>
        <img className={styles.bannerImg} src={banner} alt='envios' />
      </div>
      {QUESTIONS.map((question) => (
        <button
          key={question.id}
          onClick={handleQuestion}
          className={styles.questionButton}
          type='button'
        >
          <p>{question.text}</p>
          <img src={front} alt='selecionar pregunta' />
        </button>
      ))}
    </div>
  );
}

export default DeliveryPage;

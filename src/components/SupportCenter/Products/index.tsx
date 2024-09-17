import { useNavigate } from 'react-router-dom';

import back from '~assets/backArrow.svg';
import banner from '~assets/envios 2.png';

import styles from './styles.module.scss';

import QuestionSection from '../QuestionSection';
import { ProductsQuestions } from './constants';

function Products() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/supportCenter');
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
      <div className={styles.bannerSection}>
        <img className={styles.bannerImg} src={banner} alt='envios' />
      </div>

      <QuestionSection questions={ProductsQuestions} />
    </div>
  );
}

export default Products;

import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import trending from '~assets/tendencias.svg';

import styles from './styles.module.scss';

import CardsContainer from './components/CardsContainer';
import useTrending from './components/CardsContainer/index.hooks';

interface Props {
  hide?: boolean;
}

function Trending({ hide }: Props) {
  const { allProducts, slideLength, current, nextSlide, prevSlide, setAuto } =
    useTrending();

  if (!Array.isArray(allProducts) || allProducts.length <= 0) {
    return null;
  }

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        Tendencias <img src={trending} alt='tendencias' />
      </div>
      <div
        className={styles.slider}
        onMouseEnter={() => {
          setAuto(false);
        }}
        onMouseLeave={() => {
          setAuto(true);
        }}
      >
        {!hide && slideLength >= 2 && (
          <FontAwesomeIcon
            icon={faChevronLeft}
            className={styles.arrow}
            onClick={prevSlide}
          />
        )}
        <CardsContainer
          currentSlide={current}
          products={allProducts}
          slideLength={slideLength}
        />
        {!hide && slideLength >= 2 && (
          <FontAwesomeIcon
            icon={faChevronRight}
            className={styles.arrow}
            onClick={nextSlide}
          />
        )}
      </div>
    </div>
  );
}

Trending.defaultProps = {
  hide: false,
};

export default Trending;

import { useEffect, useState } from 'react';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import trending from '~assets/Mask group.png';

import styles from './styles.module.scss';

import CardsContainer from '../Trending/components/CardsContainer';
import useTrending from '../Trending/components/CardsContainer/index.hooks';

interface Props {
  hide?: boolean;
}

function BestSellers({ hide }: Props) {
  const { slideLength, allProducts, itemsPerSlide } = useTrending();
  const [current, setCurrent] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = () => {
    setCurrent((prevState) => (prevState + 1) % slideLength);
  };

  const prevSlide = () => {
    setCurrent((prevState) => (prevState - 1 + slideLength) % slideLength);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEndX(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStartX - touchEndX > 50) {
      nextSlide();
    } else if (touchEndX - touchStartX > 50) {
      prevSlide();
    }
  };

  if (!Array.isArray(allProducts) || allProducts.length <= 0) {
    return null;
  }

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        Mas Vendidos <img src={trending} alt='Mas Vendidos' />
      </div>
      <div
        className={styles.slider}
        onTouchStart={isMobile ? handleTouchStart : undefined}
        onTouchMove={isMobile ? handleTouchMove : undefined}
        onTouchEnd={isMobile ? handleTouchEnd : undefined}
      >
        {!hide && slideLength >= 2 && !isMobile && (
          <FontAwesomeIcon
            icon={faChevronLeft}
            className={styles.arrow}
            onClick={prevSlide}
          />
        )}

        <CardsContainer
          slideLength={slideLength}
          currentSlide={current}
          products={allProducts}
          itemsPerSlide={itemsPerSlide}
        />

        {!hide && slideLength >= 2 && !isMobile && (
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

BestSellers.defaultProps = {
  hide: false,
};

export default BestSellers;

/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState } from 'react';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import trending from '~assets/Mask group.png';
import { useMediaQuery } from '~hooks/useBreakpoint';

import styles from './styles.module.scss';

import CardsContainer from './components/CardsContainer';
import useTrending from './components/CardsContainer/index.hooks';

interface Props {
  hide?: boolean;
}

function Trending({ hide }: Props) {
  const { slideLength, allProducts, itemsPerSlide } = useTrending();
  const isMobile = useMediaQuery('(max-width: 768px)');
  const [current, setCurrent] = useState(0);

  const touchStartXRef = useRef(0);
  const touchEndXRef = useRef(0);

  useEffect(() => {
    if (current >= slideLength) {
      setCurrent(0);
    }
  }, [slideLength]);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slideLength);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slideLength) % slideLength);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartXRef.current - touchEndXRef.current;
    if (diff > 50) nextSlide();
    else if (diff < -50) prevSlide();
  };

  if (!Array.isArray(allProducts) || allProducts.length === 0) {
    return null;
  }

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        Tendencias <img src={trending} alt='tendencias' />
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

Trending.defaultProps = {
  hide: false,
};

export default Trending;

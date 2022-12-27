import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';

import { PRODUCTS } from 'components/OnSaleSection/constants';
import CustomCard from 'components/CustomCard';
import styles from './styles.module.scss';

interface Props {

  hide?:boolean
}

function Trending({
  hide,
} : Props) {
  const [current, setCurrent] = useState(0);
  const [auto, setAuto] = useState(false);

  const slideLength = PRODUCTS.length;

  useEffect(() => {
    const timeOut = auto ? setTimeout(() => {
      nextSlide();
    }, 2500) : undefined;

    return () => {
      clearTimeout(timeOut);
    };
  });

  const nextSlide = () => {
    setCurrent((prevState) => (prevState === slideLength - 1 ? 0 : current + 1));
  };

  const prevSlide = () => {
    setCurrent((prevState) => (prevState === 0 ? slideLength - 1 : current - 1));
  };

  if (!Array.isArray(PRODUCTS) || PRODUCTS.length <= 0) {
    return null;
  }

  return (
    <div className={styles.container}>
      <div
        className={styles.slider}
        onMouseEnter={() => { setAuto(false); }}
        onMouseLeave={() => { setAuto(true); }}
      >
        {(!hide && slideLength >= 2) && (
          <FontAwesomeIcon
            icon={faChevronLeft}
            className={styles.arrow}
            onClick={prevSlide}
          />
        )}
        {PRODUCTS.map((slide, index) => (

          <div
            className={index === current ? styles.slideActive : styles.slide}
            key={slide.id}
          >
            {index === current && (
              <CustomCard small image={slide.image} name={slide.description} price={slide.price} />
            )}
          </div>
        ))}
        {(!hide && slideLength >= 2) && (
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

export default Trending;

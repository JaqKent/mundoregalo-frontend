/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/no-array-index-key */
import { useEffect, useState } from 'react';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import imgDefault from '~assets/imgDefault.jpg';

import styles from './styles.module.scss';

interface Props {
  slides: string[];
  className: string;
  minClassName: string;
  arrowClassLeft?: string;
  arrowClassRight?: string;
  auto?: boolean;
  hide?: boolean;
  miniActive: string;
  mini: string;
  setAuto?: (auto: boolean) => void;
  slideActive: string;
  slide: string;
}

function Carousel({
  slides,
  slide,
  slideActive,
  className,
  auto,
  setAuto,
  hide,
  minClassName,
  miniActive,
  mini,
  arrowClassLeft,
  arrowClassRight,
}: Props) {
  const [current, setCurrent] = useState(0);

  const finalSlides = slides.length > 0 ? slides : [imgDefault];
  const slideLength = finalSlides.length;

  const nextSlide = () => {
    setCurrent((prevState) =>
      prevState === slideLength - 1 ? 0 : prevState + 1
    );
  };

  const prevSlide = () => {
    setCurrent((prevState) =>
      prevState === 0 ? slideLength - 1 : prevState - 1
    );
  };

  useEffect(() => {
    const timeOut = auto
      ? setTimeout(() => {
          nextSlide();
        }, 2500)
      : undefined;

    return () => {
      clearTimeout(timeOut);
    };
  });

  return (
    <div className={styles.container}>
      <div
        className={styles.slider}
        onMouseEnter={() => {
          if (setAuto) setAuto(false);
        }}
        onMouseLeave={() => {
          if (setAuto) setAuto(true);
        }}
      >
        {!hide && slideLength >= 2 && (
          <FontAwesomeIcon
            icon={faChevronLeft}
            className={arrowClassLeft}
            onClick={prevSlide}
          />
        )}
        {finalSlides.map((slider, index) => (
          <div key={index} className={index === current ? slideActive : slide}>
            {index === current && (
              <div
                className={className}
                style={{
                  backgroundImage: `url(${slider})`,
                }}
              />
            )}
          </div>
        ))}
        {!hide && slideLength >= 2 && (
          <FontAwesomeIcon
            icon={faChevronRight}
            className={arrowClassRight}
            onClick={nextSlide}
          />
        )}
        {slideLength >= 2 && (
          <div className={minClassName}>
            <ul>
              {finalSlides.map((_, index) => (
                <li
                  key={index}
                  className={index === current ? miniActive : mini}
                  onClick={() => setCurrent(index)}
                  onKeyDown={() => setCurrent(index)}
                />
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Carousel;

Carousel.defaultProps = {
  arrowClassLeft: '',
  arrowClassRight: '',
  auto: false,
  hide: false,
  setAuto: false,
};

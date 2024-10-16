import { useEffect, useState } from 'react';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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

  const slideLength = slides.length;

  const nextSlide = () => {
    setCurrent((prevState) =>
      prevState === slideLength - 1 ? 0 : current + 1
    );
  };

  const prevSlide = () => {
    setCurrent((prevState) =>
      prevState === 0 ? slideLength - 1 : current - 1
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

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

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
        {slides.map((slider, index) => (
          <div
            key={index - 1}
            className={index === current ? slideActive : slide}
          >
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
        {slides.length >= 2 && (
          <div className={minClassName}>
            <ul>
              {slides.map((slider, index) => (
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
  hide: false,
  arrowClassRight: '',
  auto: false,
  setAuto: false,
};

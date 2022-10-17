/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';

import styles from './styles.module.scss';

interface Props {
  slides: any;
  className?:string;
}

function Carousel({ slides, className }: Props) {
  const [current, setCurrent] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  const slideLength = slides.length;

  useEffect(() => {
    let timeOut = null;
    timeOut = autoPlay && setTimeout(() => {
      nextSlide();
      return () => {
        timeOut = false;
      };
    }, 2500);
    console.log(current);
  });

  const nextSlide = () => {
    setCurrent((prevState) => (prevState === slideLength - 1 ? 0 : current + 1));
  };

  const prevSlide = () => {
    setCurrent((prevState) => (prevState === 0 ? slideLength - 1 : current - 1));
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <>
      <div
        className={styles.slider}
        onMouseEnter={() => { setAutoPlay(false); }}
        onMouseLeave={() => { setAutoPlay(true); }}
      >
        {slideLength >= 2 && (
          <FontAwesomeIcon
            icon={faChevronLeft}
            className={styles.arrow}
            onClick={prevSlide}
          />
        )}
        {slides.map((slide, index) => (
          <div
            className={index === current ? styles.slideActive : styles.slide}
            key={slide}
          >
            {index === current && (
              <img src={slide.img} className={className} alt={slide} />
            )}
          </div>
        ))}
        {slideLength >= 2 && (
          <FontAwesomeIcon
            icon={faChevronRight}
            className={styles.arrow}
            onClick={nextSlide}
          />
        )}
      </div>
      <div>
        {slides.length >= 2 && (
        <div className={styles.miniatures}>
          <ul>
            {slides.map((slide, index) => (

              <li
                tabIndex={-1}
                key={slide}
                className={index === current ? styles.miniActive : styles.mini}
                onClick={() => setCurrent(index)}
              />

            ))}

          </ul>
        </div>
        )}

      </div>
    </>
  );
}

export default Carousel;

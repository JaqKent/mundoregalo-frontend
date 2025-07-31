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

interface BannerItem {
  url: string;
  tag?: string;
}

type SlideType = string | BannerItem;

interface Props {
  slides: SlideType[];
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

  const normalizedSlides: BannerItem[] = (
    slides.length > 0 ? slides : [imgDefault]
  ).map((item) =>
    typeof item === 'string'
      ? { url: item }
      : { url: item.url ?? imgDefault, tag: item.tag ?? '' }
  );

  const slideLength = normalizedSlides.length;

  const nextSlide = () => {
    setCurrent((prev) => (prev === slideLength - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slideLength - 1 : prev - 1));
  };

  useEffect(() => {
    const timeOut = auto
      ? setTimeout(() => {
          nextSlide();
        }, 4000)
      : undefined;

    return () => {
      clearTimeout(timeOut);
    };
  });

  return (
    <div className={styles.container}>
      <div
        className={styles.slider}
        onMouseEnter={() => setAuto?.(false)}
        onMouseLeave={() => setAuto?.(true)}
      >
        {!hide && slideLength >= 2 && (
          <FontAwesomeIcon
            icon={faChevronLeft}
            className={arrowClassLeft}
            onClick={prevSlide}
          />
        )}

        {normalizedSlides.map((item, index) => (
          <div
            key={`slide-${index}-${item.url}`}
            className={index === current ? slideActive : slide}
          >
            {index === current && (
              <div
                className={className}
                style={{
                  backgroundImage: `url(${item.url})`,
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
              {normalizedSlides.map((item, index) => (
                <li
                  key={`mini-${index}-${item.url}`}
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
  setAuto: undefined,
};

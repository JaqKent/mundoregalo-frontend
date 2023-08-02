/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { useEffect, useState } from 'react';
import {
    faChevronLeft,
    faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './styles.module.scss';

type Slides = { id: number; img: string };

interface Props {
    slides: Slides[];
    className: string;
    minClassName: string;
    arrowClassLeft: string;
    arrowClassRight: string;
    auto?: boolean;
    hide?: boolean;
    miniActive: string;
    mini: string;
    setAuto?: (auto: boolean) => void;
}

function Carousel({
    slides,
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
                {slides.map((slide, index) => (
                    <div
                        className={
                            index === current
                                ? styles.slideActive
                                : styles.slide
                        }
                        key={slide.id}
                    >
                        {index === current && (
                            <div
                                className={className}
                                style={{
                                    backgroundImage: `url(${slide.img})`,
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
                            {slides.map((slide, index) => (
                                <li
                                    tabIndex={slide.id - 1}
                                    key={slide.id}
                                    className={
                                        index === current ? miniActive : mini
                                    }
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

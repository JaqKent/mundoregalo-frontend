import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faChevronLeft,
    faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import CustomCard from '~components/CustomCard';
import { PRODUCTS } from '~components/OnSaleSection/constants';

import trending from '~assets/tendencias.svg';

import styles from './styles.module.scss';

interface Props {
    hide?: boolean;
}

function Trending({ hide }: Props) {
    const [current, setCurrent] = useState(0);
    const [auto, setAuto] = useState(false);

    const slideLength = PRODUCTS.length;

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
    const slideshowSlides = [];
    const nextSlide = () => {
        setCurrent((prevState) =>
            prevState === slideshowSlides.length - 1 ? 0 : current + 1
        );
    };

    const prevSlide = () => {
        setCurrent((prevState) =>
            prevState === 0 ? slideshowSlides.length - 1 : current - 1
        );
    };

    if (!Array.isArray(PRODUCTS) || PRODUCTS.length <= 0) {
        return null;
    }

    for (let i = 0; i < slideLength; i += 2) {
        slideshowSlides.push(
            <div className={styles.card}>
                <CustomCard
                    small
                    image={PRODUCTS[i].image}
                    name={PRODUCTS[i].description}
                    price={PRODUCTS[i].price}
                />
                {PRODUCTS[i + 1] && (
                    <CustomCard
                        small
                        image={PRODUCTS[i + 1].image}
                        name={PRODUCTS[i + 1].description}
                        price={PRODUCTS[i + 1].price}
                    />
                )}
            </div>
        );
    }

    return (
        <div className={styles.container}>
            <div className={styles.title}>
                Tendencias <img src={trending} alt="tendencias" />
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
                {slideshowSlides.map((i, index) => (
                    <div
                        className={
                            index === current
                                ? styles.slideActive
                                : styles.slide
                        }
                    >
                        {i}
                    </div>
                ))}

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

export default Trending;

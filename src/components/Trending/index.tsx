import { useContext, useEffect, useState } from 'react';
import {
    faChevronLeft,
    faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './styles.module.scss';

import trending from '~assets/tendencias.svg';
import CustomCard from '~components/CustomCard';
import { ProductContext } from '~context/ProductContext';

interface Props {
    hide?: boolean;
}

function Trending({ hide }: Props) {
    const [current, setCurrent] = useState(0);
    const [auto, setAuto] = useState(false);
    const { allProducts } = useContext(ProductContext);

    const slideLength = allProducts.length;

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

    if (!Array.isArray(allProducts) || allProducts.length <= 0) {
        return null;
    }

    for (let i = 0; i < slideLength; i += 2) {
        slideshowSlides.push(
            <div className={styles.card}>
                <CustomCard
                    small
                    image={allProducts[i].imageURL}
                    name={allProducts[i].description}
                    price={allProducts[i].prices.web.value}
                    onSale={allProducts[i].onSale || undefined}
                    moreSold={allProducts[i].moreSold || undefined}
                    delivery={allProducts[i].delivery || undefined}
                    discountPrice={allProducts[i].discountPrice || undefined}
                    key={allProducts[i].id}
                    _id={allProducts[i].id}
                    stock={allProducts[i].stock}
                />
                {allProducts[i + 1] && (
                    <CustomCard
                        small
                        image={allProducts[i + 1].imageURL}
                        name={allProducts[i + 1].description}
                        price={allProducts[i + 1].prices.web.value}
                        key={allProducts[i + 1].id}
                        onSale={allProducts[i + 1].onSale || undefined}
                        moreSold={allProducts[i + 1].moreSold || undefined}
                        delivery={allProducts[i + 1].delivery || undefined}
                        discountPrice={
                            allProducts[i + 1].discountPrice || undefined
                        }
                        _id={allProducts[i].id}
                        stock={allProducts[i].stock}
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
                        key={index}
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

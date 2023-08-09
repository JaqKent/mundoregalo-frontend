import { useEffect, useState } from 'react';
import {
    faChevronLeft,
    faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './styles.module.scss';

import CustomCard from '~components/CustomCard';
import { PRODUCTS } from '~components/OnSaleSection/constants';

interface Props {
    hide?: boolean;
}

function RelatedProducts({ hide }: Props) {
    const [current, setCurrent] = useState(0);

    const slideLength = PRODUCTS.length;

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
                    onSale={PRODUCTS[i].onSale || undefined}
                    moreSold={PRODUCTS[i].moreSold || undefined}
                    delivery={PRODUCTS[i].delivery || undefined}
                    discountPrice={PRODUCTS[i].discountPrice || undefined}
                    key={PRODUCTS[i].id}
                />
                {PRODUCTS[i + 1] && (
                    <CustomCard
                        small
                        image={PRODUCTS[i + 1].image}
                        name={PRODUCTS[i + 1].description}
                        price={PRODUCTS[i + 1].price}
                        key={PRODUCTS[i + 1].id}
                        onSale={PRODUCTS[i + 1].onSale || undefined}
                        moreSold={PRODUCTS[i + 1].moreSold || undefined}
                        delivery={PRODUCTS[i + 1].delivery || undefined}
                        discountPrice={
                            PRODUCTS[i + 1].discountPrice || undefined
                        }
                    />
                )}
            </div>
        );
    }

    return (
        <div className={styles.container}>
            <div className={styles.title}>Tambien te puede interesar </div>
            <div className={styles.slider}>
                {hide && slideLength >= 2 && (
                    <FontAwesomeIcon
                        icon={faChevronLeft}
                        className={styles.arrowLeft}
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

                {hide && slideLength >= 2 && (
                    <FontAwesomeIcon
                        icon={faChevronRight}
                        className={styles.arrowRight}
                        onClick={nextSlide}
                    />
                )}
            </div>
        </div>
    );
}

export default RelatedProducts;
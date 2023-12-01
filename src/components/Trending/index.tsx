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
    const [auto, setAuto] = useState(false);
    const { allProducts } = useContext(ProductContext);

    const slideLength = allProducts.length;

    const [current, setCurrent] = useState(0);

    useEffect(() => {
        let timeoutId: number;

        if (auto) {
            timeoutId = window.setTimeout(() => {
                nextSlide();
            }, 3000);
        }

        return () => {
            clearTimeout(timeoutId);
        };
    }, [current, auto]);

    const nextSlide = () => {
        setCurrent((prevIndex) =>
            prevIndex === Math.floor(slideLength / 2) - 1 ? 0 : prevIndex + 1
        );
    };

    const prevSlide = () => {
        setCurrent((prevIndex) =>
            prevIndex === 0 ? Math.floor(slideLength / 2) - 1 : prevIndex - 1
        );
    };

    if (!Array.isArray(allProducts) || allProducts.length <= 0) {
        return null;
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
                {Array.from({ length: Math.floor(slideLength / 2) }).map(
                    (_, index) => (
                        <div
                            key={index}
                            className={
                                index === current
                                    ? styles.slideActive
                                    : styles.slide
                            }
                        >
                            <div className={styles.card}>
                                <CustomCard
                                    small
                                    image={allProducts[index * 2].imageURL}
                                    name={allProducts[index * 2].description}
                                    price={
                                        allProducts[index * 2].prices.web.value
                                    }
                                    onSale={
                                        allProducts[index * 2].onSale ||
                                        undefined
                                    }
                                    moreSold={
                                        allProducts[index * 2].moreSold ||
                                        undefined
                                    }
                                    delivery={
                                        allProducts[index * 2].delivery ||
                                        undefined
                                    }
                                    discountPrice={
                                        allProducts[index * 2].discountPrice ||
                                        undefined
                                    }
                                    key={allProducts[index * 2].id}
                                    _id={allProducts[index * 2].id}
                                    stock={allProducts[index * 2].stock}
                                />
                                {allProducts[index * 2 + 1] && (
                                    <CustomCard
                                        small
                                        image={
                                            allProducts[index * 2 + 1].imageURL
                                        }
                                        name={
                                            allProducts[index * 2 + 1]
                                                .description
                                        }
                                        price={
                                            allProducts[index * 2 + 1].prices
                                                .web.value
                                        }
                                        key={allProducts[index * 2 + 1].id}
                                        onSale={
                                            allProducts[index * 2 + 1].onSale ||
                                            undefined
                                        }
                                        moreSold={
                                            allProducts[index * 2 + 1]
                                                .moreSold || undefined
                                        }
                                        delivery={
                                            allProducts[index * 2 + 1]
                                                .delivery || undefined
                                        }
                                        discountPrice={
                                            allProducts[index * 2 + 1]
                                                .discountPrice || undefined
                                        }
                                        _id={allProducts[index * 2 + 1].id}
                                        stock={allProducts[index * 2 + 1].stock}
                                    />
                                )}
                            </div>
                        </div>
                    )
                )}
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

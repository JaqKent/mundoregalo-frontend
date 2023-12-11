// FIXME:This component is way too similar to trending

import { useContext, useState } from 'react';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import CustomCard from '~components/CustomCard';
import { ProductContext } from '~context/ProductContext';

import styles from './styles.module.scss';

function RelatedProducts() {
  const { allProducts } = useContext(ProductContext);

  const slideLength = allProducts.length;

  const [current, setCurrent] = useState(0);

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
      <div className={styles.title}>Tambien te puede interesar </div>
      <div className={styles.slider}>
        {slideLength >= 2 && (
          <FontAwesomeIcon
            icon={faChevronLeft}
            className={styles.arrowLeft}
            onClick={prevSlide}
          />
        )}
        {Array.from({ length: Math.floor(slideLength / 2) }).map((_, index) => (
          <div
            key={allProducts[index].id}
            className={index === current ? styles.slideActive : styles.slide}
          >
            {' '}
            <div className={styles.card}>
              <CustomCard
                small
                product={allProducts[index * 2]}
                key={allProducts[index * 2].id}
              />
              {allProducts[index * 2 + 1] && (
                <CustomCard
                  small
                  product={allProducts[index * 2 + 1]}
                  key={allProducts[index * 2 + 1].id}
                />
              )}
            </div>
          </div>
        ))}
        {slideLength >= 2 && (
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

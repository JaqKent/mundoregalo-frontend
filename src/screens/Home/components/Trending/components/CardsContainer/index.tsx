import CustomCard from '~components/CustomCard';
import { Product } from '~interfaces/Products';

import styles from './styles.module.scss';

interface Props {
  slideLength: number;
  currentSlide: number;
  products: Product[];
}

function CardsContainer({ slideLength, currentSlide, products }: Props) {
  return Array.from({ length: Math.floor(slideLength / 2) }).map((_, index) => {
    const firstItem = products[index * 2];
    const secondItem = products[index * 2 + 1];

    return (
      <div
        key={secondItem.id}
        className={index === currentSlide ? styles.slideActive : styles.slide}
      >
        <div className={styles.card}>
          <CustomCard small product={firstItem} key={firstItem.id} />
          {secondItem && (
            <CustomCard small product={secondItem} key={secondItem.id} />
          )}
        </div>
      </div>
    );
  });
}

export default CardsContainer;

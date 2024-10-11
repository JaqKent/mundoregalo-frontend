import CustomCard from '~components/CustomCard';
import { Product } from '~interfaces/Products';

import styles from './styles.module.scss';

interface Props {
  slideLength: number;
  currentSlide: number;
  products: Product[];
  itemsPerSlide: number;
}

function CardsContainer({
  slideLength,
  currentSlide,
  products,
  itemsPerSlide,
}: Props) {
  const visibleItems = products.slice(
    currentSlide,
    currentSlide + itemsPerSlide
  );

  if (visibleItems.length < itemsPerSlide) {
    visibleItems.push(
      ...products.slice(0, itemsPerSlide - visibleItems.length)
    );
  }

  return (
    <div className={styles.slideActive}>
      <div className={styles.card}>
        {visibleItems.map((item) => (
          <CustomCard small product={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}

export default CardsContainer;

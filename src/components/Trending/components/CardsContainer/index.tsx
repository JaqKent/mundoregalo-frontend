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
          <CustomCard
            small
            image={firstItem.imageURL}
            name={firstItem.description}
            price={firstItem.prices.web.value}
            onSale={firstItem.onSale || undefined}
            moreSold={firstItem.moreSold || undefined}
            delivery={firstItem.delivery || undefined}
            discountPrice={firstItem.discountPrice || undefined}
            key={firstItem.id}
            _id={firstItem.id}
            stock={firstItem.stock}
          />
          {secondItem && (
            <CustomCard
              small
              image={secondItem.imageURL}
              name={secondItem.description}
              price={secondItem.prices.web.value}
              key={secondItem.id}
              onSale={secondItem.onSale || undefined}
              moreSold={secondItem.moreSold || undefined}
              delivery={secondItem.delivery || undefined}
              discountPrice={secondItem.discountPrice || undefined}
              _id={secondItem.id}
              stock={secondItem.stock}
            />
          )}
        </div>
      </div>
    );
  });
}

export default CardsContainer;

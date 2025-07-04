import styles from './styles.module.scss';

interface Props {
  discountPrice: number;
  prices: number;
  onSale: string;
}

function Prices({ discountPrice, prices, onSale }: Props) {
  return (
    <>
      <div>
        <span className={styles.price}>${prices}</span>
      </div>
      <div>
        {onSale ? (
          <span className={styles.discountPrice}>${discountPrice}</span>
        ) : (
          ''
        )}
      </div>
    </>
  );
}

export default Prices;

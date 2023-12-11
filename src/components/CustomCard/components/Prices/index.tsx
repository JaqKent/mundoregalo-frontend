import { faDollarSign } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from '../../styles.module.scss';

interface Props {
  discountPrice: number;
  prices: number;
  onSale: string;
}

function Prices({ discountPrice, prices, onSale }: Props) {
  return (
    <>
      <div>
        <span className={styles.smallPrice}>
          <FontAwesomeIcon icon={faDollarSign} />
          {prices}
        </span>
      </div>
      <div>
        {onSale ? (
          <span className={styles.discountPrice}>
            <FontAwesomeIcon icon={faDollarSign} />
            {discountPrice}
          </span>
        ) : (
          ''
        )}
      </div>
    </>
  );
}

export default Prices;

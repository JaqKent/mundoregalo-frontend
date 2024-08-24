import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import StarRating from '~components/ProductPage/components/StarRating';
import { Product } from '~interfaces/Products';

import styles from './styles.module.scss';

import Prices from './components/Prices';
import Tags from './components/Tags';

interface Props {
  product: Product;
  small?: boolean;
}

function CustomCard({ product, small }: Props) {
  const {
    imageURL = [],
    name,
    prices,
    onSale,
    stock,
    delivery,
    moreSold,
    discountPrice,
    id,
  } = product;
  const navigate = useNavigate();

  const handleViewProduct = () => {
    navigate(`/productPage/${id}`);
  };

  const handleNoStock = () => toast.error('Sin Stock');

  const dynamicStyles = (style: string) =>
    `${style} ${small ? styles.small : styles.large}`;

  return (
    <button
      className={dynamicStyles(styles.container)}
      onClick={stock <= 0 ? handleNoStock : handleViewProduct}
      onKeyDown={handleViewProduct}
      type='button'
    >
      <div>
        <img
          className={dynamicStyles(styles.img)}
          src={imageURL[0]}
          alt={name}
        />
      </div>
      <div className={dynamicStyles(styles.section)}>
        <div>
          <div className={dynamicStyles(styles.title)}>
            <span>{name}</span>
          </div>
        </div>
        <div className={dynamicStyles(styles.data)}>
          <div className={styles.price}>
            <div>
              <span>
                <StarRating initialValue={4} readonly size={15.34} />
              </span>{' '}
            </div>
            <Prices
              discountPrice={discountPrice}
              prices={prices?.online.value}
              onSale={onSale}
            />
          </div>
          <Tags delivery={delivery} moreSold={moreSold} onSale={onSale} />
        </div>
      </div>
    </button>
  );
}

export default CustomCard;

CustomCard.defaultProps = {
  small: false,
};

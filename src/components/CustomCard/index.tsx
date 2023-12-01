import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { faDollarSign } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import StarRating from '~components/ProductPage/components/StarRating';

import styles from './styles.module.scss';

interface Props {
  image: string[];
  name: string;
  price: number;
  small?: boolean;
  onSale?: string;
  delivery?: string;
  moreSold?: string;
  discountPrice?: number;
  _id: string;
  stock: number;
}

function CustomCard({
  image,
  name,
  price,
  small,
  onSale,
  stock,
  delivery,
  moreSold,
  discountPrice,
  _id,
}: Props) {
  const navigate = useNavigate();

  const handleViewProduct = () => {
    navigate(`/productPage/${_id}`);
  };

  const handleNoStock = () => toast.error('Sin Stock');
  return (
    <div
      className={small ? styles.containerSmall : styles.containerLarge}
      onClick={stock <= 0 ? handleNoStock : handleViewProduct}
      onKeyDown={handleViewProduct}
      role='button'
      tabIndex={0}
    >
      <div>
        <img
          className={small ? styles.imgSmall : styles.imgLarge}
          src={image[0]}
          alt={name}
        />
      </div>
      <div className={small ? styles.smallSection : styles.largeSection}>
        <div>
          <div className={small ? styles.titleSmall : styles.titleLarge}>
            <span>{name}</span>
          </div>
        </div>
        <div className={small ? styles.dataSmall : styles.dataLarge}>
          <div className={styles.price}>
            <div>
              <span className={small ? styles.smallRating : styles.largeRating}>
                <StarRating initialValue={4} readonly size={15.34} />
              </span>{' '}
            </div>
            <div>
              <span className={styles.smallPrice}>
                <FontAwesomeIcon icon={faDollarSign} />
                {price}
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
          </div>
          <div className={styles.info}>
            {delivery && <span className={styles.delivery}>{delivery}</span>}
            {moreSold && <span className={styles.moreSold}>{moreSold}</span>}
            {onSale && <span className={styles.onSale}>{onSale}</span>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomCard;

CustomCard.defaultProps = {
  delivery: '',
  small: false,
  onSale: '',
  moreSold: '',
  discountPrice: '',
};

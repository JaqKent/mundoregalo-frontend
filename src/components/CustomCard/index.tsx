import { faDollarSign } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './styles.module.scss';

import star from '~assets/star.svg';
import StarRating from '~components/ProductPage/components/StarRating';

interface Props {
    image: string;
    name: string;
    price: number;
    small?: boolean;
    onSale?: string;
    delivery?: string;
    moreSold?: string;
    discountPrice?: number;
    discount?: boolean;
}

function CustomCard({
    image,
    name,
    price,
    small,
    onSale,
    delivery,
    moreSold,
    discountPrice,
    discount,
}: Props) {
    return (
        <div className={small ? styles.containerSmall : styles.containerLarge}>
            <div>
                <img
                    className={small ? styles.imgSmall : styles.imgLarge}
                    src={image}
                    alt={name}
                />
            </div>
            <div className={small ? styles.smallSection : styles.largeSection}>
                <div>
                    <div
                        className={
                            small ? styles.titleSmall : styles.titleLarge
                        }
                    >
                        <span>{name}</span>
                    </div>
                </div>
                <div className={small ? styles.dataSmall : styles.dataLarge}>
                    <div className={styles.price}>
                        <div>
                            <span
                                className={
                                    small
                                        ? styles.smallRating
                                        : styles.largeRating
                                }
                            >
                                <StarRating
                                    initialValue={4}
                                    readonly
                                    size={15.34}
                                />
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
                        {delivery && (
                            <span className={styles.delivery}>{delivery}</span>
                        )}
                        {moreSold && (
                            <span className={styles.moreSold}>{moreSold}</span>
                        )}
                        {onSale && (
                            <span className={styles.onSale}>{onSale}</span>
                        )}
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
    discount: false,
};

import { faDollarSign, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './styles.module.scss';

interface Props {
    image: string;
    name: string;
    price: number;
    small?: boolean;
    stars: number;
    votes: number;
    onSale?: string;
    delivery?: string;
    info?: boolean;
}

function CustomCard({
    image,
    name,
    price,
    small,
    stars,
    votes,
    onSale,
    delivery,
    info,
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
            <div className={styles.description}>
                <div className={small ? '' : styles.largeSection}>
                    <div
                        className={
                            small ? styles.titleSmall : styles.titleLarge
                        }
                    >
                        <span>{name}</span>
                    </div>
                    <div className={styles.info}>
                        {info && (
                            <div className={styles.info}>
                                <span>{onSale}</span>
                                <span>{delivery}</span>
                            </div>
                        )}
                    </div>
                </div>
                <div className={small ? styles.dataSmall : styles.dataLarge}>
                    <div className={styles.info}>
                        <div>
                            <span
                                className={
                                    small
                                        ? styles.smallRating
                                        : styles.largeRating
                                }
                            >
                                <FontAwesomeIcon icon={faStar} />
                                {stars}
                            </span>
                            <span
                                className={
                                    small
                                        ? styles.smallVotes
                                        : styles.largeVotes
                                }
                            >
                                ({votes})
                            </span>
                        </div>
                        <span
                            className={
                                small ? styles.smallPrice : styles.largePrice
                            }
                        >
                            <FontAwesomeIcon icon={faDollarSign} />
                            {price}
                        </span>
                    </div>
                    {small && (
                        <div className={styles.info}>
                            <span>{onSale}</span>
                            <span>{delivery}</span>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default CustomCard;

CustomCard.defaultProps = {
    info: false,
    delivery: '',
    small: false,
    onSale: '',
};

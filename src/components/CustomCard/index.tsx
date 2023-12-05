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

// FIXME:En vez de poner un prop por cada item de product, pedi unicamente Product como prop y lo destructuras acá dentro, es menos codigo y mas legible :)
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

  /* FIXME:Hay mucho codigo repetido aca para manejar la logica de small y large. 
  Podrias en un archivo constants.ts, importar todos los styles (que tengan nombres consistentes... por favor)
  al estilo:

  export const customStyles = {
    large: {
      container: styles.containerLarge,
      img: styles.imgLarge
    },
    small: {
      container: styles.containerSmall,
      img: styles.imgSmall
    }
  }

  de ahi acá haces otra constante que utilice uno u otro dependiendo de 'small'

  const dynamicStyles = customStyles[small ? 'small' : 'large']

  y reemplazar cada styles abajo por el que corresponda de dynamicStyles 

  ejemplo: styles.containerSmall => dynamicStyles.container
*/

  return (
    <div
      className={small ? styles.containerSmall : styles.containerLarge}
      onClick={stock <= 0 ? handleNoStock : handleViewProduct}
      onKeyDown={handleViewProduct}
      role='button' // Si tiene que tener un rol de boton... pone un boton, no un div.
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
            {/* Estos dos siguientes divs son iguales, pueden ser su propio componente */}
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
          {/* Delivery, moreSold y onsale es EL MISMO COMPONENTE pero con colores distintos... de estos tres, lo haces uno solo. */}
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

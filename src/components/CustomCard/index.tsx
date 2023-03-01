import { faDollarSign, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './styles.module.scss';

interface Props {
    image: string;
    name:string;
    price:number;
    small?:boolean;
    stars:number,
    votes:number,
    info?:boolean,

}

function CustomCard({
  image, name, price, small,stars,votes,info
} : Props) {
  return (
    <div className={small ? styles.containerSmall : styles.containerLarge}>
      <div>
        <img className={small ? styles.imgSmall : styles.imgLarge} src={image} alt={name} />
      </div>
      <div className={styles.description}>
        <div className={small ? styles.titleSmall : styles.titleLarge}>
          <span>
            {name}
          </span>
        </div>
        <div className={`${small ? styles.priceSmall : styles.priceLarge}`}>
          <div className={styles.info}><span className={styles.rating}><FontAwesomeIcon icon={faStar}/>{stars}({votes}) </span>
          <span><FontAwesomeIcon icon={faDollarSign}/>{price}</span></div>
          <div className={styles.info}><span className={ info ? styles.block : ""}>Onsale</span>
          <span className={info ? styles.block : ""}>delivery</span></div>
          
        </div>
      </div>
    </div>
  );
}

export default CustomCard;

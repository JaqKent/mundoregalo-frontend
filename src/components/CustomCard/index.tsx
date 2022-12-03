import styles from './styles.module.scss';

interface Props {
    image: string;
    name:string;
    price:string;
    small?:boolean;

}

function CustomCard({
  image, name, price, small,
} : Props) {
  return (
    <div className={`${small ? styles.containerSmall : styles.containerLarge}`}>
      <div>
        <img className={`${small ? styles.imgSmall : styles.imgLarge}`} src={image} alt={name} />
      </div>
      <div className={styles.description}>
        <div className={`${small ? styles.titleSmall : styles.titleLarge}`}>
          <h3>
            {name}
          </h3>
        </div>
        <div className={`${small ? styles.priceSmall : styles.priceLarge}`}>
          <p>{price}</p>
        </div>
      </div>
    </div>
  );
}

export default CustomCard;

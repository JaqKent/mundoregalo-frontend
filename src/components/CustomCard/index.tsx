import styles from './styles.module.scss';

interface Props {
    image: string;
    name:string;
    price:number;
    small?:boolean;

}

function CustomCard({
  image, name, price, small,
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
          <span>4.8(15999)</span>
          <span>
            $
            {price}
          </span>
        </div>
      </div>
    </div>
  );
}

export default CustomCard;

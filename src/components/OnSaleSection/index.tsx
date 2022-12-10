import CustomCard from 'components/CustomCard';
import { PRODUCTS } from './constants';
import styles from './styles.module.scss';

function OnSaleSection() {
  return (
    <div className={styles.container}>
      <h2>Oferta Del Dia</h2>
      <div className={styles.product}>
        {
          PRODUCTS.map((product) => (
            <CustomCard image={product.image} name={product.description} price={product.price} />
          ))
        }
      </div>
    </div>
  );
}

export default OnSaleSection;

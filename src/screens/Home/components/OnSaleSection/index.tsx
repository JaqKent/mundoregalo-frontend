import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import sale from '~assets/etiqueta.svg';
import CustomCard from '~components/CustomCard';
import { ProductContext } from '~context/ProductContext';

import styles from './styles.module.scss';

function OnSaleSection() {
  const { allProducts } = useContext(ProductContext);
  const [viewMore, setViewMore] = useState(false);
  const navigate = useNavigate();

  const handleView = () => {
    setViewMore((prevState) => !prevState);
  };
  const slicedData = allProducts.slice(0, viewMore ? 8 : 4);
  const handleOfert = () => {
    navigate('/');
  };

  return (
    <div className={styles.container}>
      <p className={styles.onSale}>
        Ofertas
        <img className={styles.icon} src={sale} alt='ofertas-icon' />
      </p>
      <div className={styles.product}>
        {slicedData.map((product) => (
          <CustomCard product={product} key={product.id} />
        ))}
      </div>
      <div
        className={styles.button}
        onKeyDown={viewMore ? handleOfert : handleView}
        role='button'
        tabIndex={0}
        onClick={viewMore ? handleOfert : handleView}
      >
        {viewMore ? <span>Ir a Ofertas</span> : <span>Ver Mas</span>}
      </div>
    </div>
  );
}

export default OnSaleSection;

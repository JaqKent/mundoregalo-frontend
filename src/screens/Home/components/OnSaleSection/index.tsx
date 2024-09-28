import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import sale from '~assets/oferta2.svg';
import CustomCard from '~components/CustomCard';
import { ProductContext } from '~context/ProductContext';

import styles from './styles.module.scss';

function OnSaleSection() {
  const { allProducts } = useContext(ProductContext);
  const [viewMore, setViewMore] = useState(false);
  const [isSmall, setIsSmall] = useState(false);
  const [maxItems, setMaxItems] = useState({ initial: 4, full: 8 });
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      setIsSmall(window.innerWidth >= 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth >= 1366;

      setMaxItems(
        isMobile ? { initial: 6, full: 12 } : { initial: 4, full: 8 }
      );
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleView = () => {
    setViewMore((prevState) => !prevState);
  };

  const slicedData = allProducts.slice(
    0,
    viewMore ? maxItems.full : maxItems.initial
  );

  const handleOfert = () => {
    navigate('/');
  };

  return (
    <div className={styles.container}>
      <div className={styles.onSale}>
        <p>
          Ofertas <img className={styles.icon} src={sale} alt='ofertas-icon' />
        </p>

        <span
          className={styles.buttonTop}
          onKeyDown={viewMore ? handleOfert : handleView}
          role='button'
          tabIndex={0}
          onClick={viewMore ? handleOfert : handleView}
        >
          {viewMore ? <span>Ir a Ofertas</span> : <span>Ver Mas</span>}
        </span>
      </div>
      <div className={styles.product}>
        {slicedData.map((product) => (
          <CustomCard product={product} small={isSmall} key={product.id} />
        ))}
      </div>
      <div
        className={styles.buttonBottom}
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

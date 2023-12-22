import { useContext } from 'react';
import { useParams } from 'react-router-dom';

import CustomCard from '~components/CustomCard';
import { ProductContext } from '~context/ProductContext';

import styles from './styles.module.scss';

function ProductSearchScreen() {
  const { allProducts } = useContext(ProductContext);
  const { searchTerm } = useParams();

  if (searchTerm === undefined) {
    return <div>No se ha especificado un término de búsqueda.</div>;
  }

  const filteredProducts = allProducts.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={styles.container}>
      {filteredProducts.map((product) => (
        <div className={styles.card} key={product.id}>
          <CustomCard product={product} key={product.id} />
        </div>
      ))}
    </div>
  );
}

export default ProductSearchScreen;

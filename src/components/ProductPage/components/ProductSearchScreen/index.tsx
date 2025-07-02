import { useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import CustomCard from '~components/CustomCard';
import { filterProducts } from '~constants/utils';
import { DepartmentContext } from '~context/DepartamentContext';
import { ProductContext } from '~context/ProductContext';

import styles from './styles.module.scss';

function ProductSearchScreen() {
  const { allProducts } = useContext(ProductContext);
  const { departments } = useContext(DepartmentContext);
  const { searchTerm } = useParams();

  const navigate = useNavigate();

  if (!searchTerm) {
    return (
      <div className={styles.emptyState}>
        No se ha especificado un término de búsqueda.
      </div>
    );
  }

  const filteredProducts = filterProducts(allProducts, searchTerm, departments);

  const handleHome = () => {
    navigate('/');
  };

  if (filteredProducts.length === 0) {
    return (
      <div className={styles.emptyStateComponent}>
        <div className={styles.emptyState}>
          El producto o departamento buscado no se encuentra disponible.
          <br />
          Intente con otra búsqueda.
        </div>
        <div>
          <button className={styles.button} type='button' onClick={handleHome}>
            home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      {filteredProducts.map((product) => (
        <div className={styles.card} key={product.id}>
          <CustomCard product={product} />
        </div>
      ))}
    </div>
  );
}

export default ProductSearchScreen;

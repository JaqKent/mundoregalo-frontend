import { useParams } from 'react-router-dom';

import styles from './styles.module.scss';

import CustomCard from '~components/CustomCard';
import { PRODUCTS } from '~components/OnSaleSection/constants';

function ProductSearchScreen() {
    const { searchTerm } = useParams();

    if (searchTerm === undefined) {
        return <div>No se ha especificado un término de búsqueda.</div>;
    }

    const filteredProducts = PRODUCTS.filter((item) =>
        item.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className={styles.container}>
            {filteredProducts.map((product) => (
                <div className={styles.card} key={product.id}>
                    <CustomCard
                        image={product.image}
                        name={product.description}
                        price={product.price}
                        onSale={product.onSale}
                        moreSold={product.moreSold}
                        delivery={product.delivery}
                        discountPrice={product.discountPrice}
                    />
                </div>
            ))}
        </div>
    );
}

export default ProductSearchScreen;

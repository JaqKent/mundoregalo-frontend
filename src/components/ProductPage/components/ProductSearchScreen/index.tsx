import { useContext } from 'react';
import { useParams } from 'react-router-dom';

import styles from './styles.module.scss';

import CustomCard from '~components/CustomCard';
import { ProductContext } from '~context/ProductContext';

function ProductSearchScreen() {
    const { allProducts } = useContext(ProductContext);
    const { searchTerm } = useParams();

    if (searchTerm === undefined) {
        return <div>No se ha especificado un término de búsqueda.</div>;
    }

    const filteredProducts = allProducts.filter((item) =>
        item.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className={styles.container}>
            {filteredProducts.map((product) => (
                <div className={styles.card} key={product.id}>
                    <CustomCard
                        image={product.imageURL}
                        name={product.description}
                        price={product.prices.web.value}
                        onSale={product.onSale}
                        moreSold={product.moreSold}
                        delivery={product.delivery}
                        discountPrice={product.discountPrice}
                        key={product.id}
                        _id={product.id}
                        stock={product.stock}
                    />
                </div>
            ))}
        </div>
    );
}

export default ProductSearchScreen;

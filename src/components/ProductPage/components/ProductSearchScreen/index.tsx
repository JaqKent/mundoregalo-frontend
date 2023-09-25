import { useParams } from 'react-router-dom';

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
        <div>
            {filteredProducts.map((product) => (
                <CustomCard
                    image={product.image}
                    name={product.description}
                    price={product.price}
                    onSale={product.onSale || undefined}
                    moreSold={product.moreSold || undefined}
                    delivery={product.delivery || undefined}
                    discountPrice={product.discountPrice || undefined}
                    key={product.id}
                />
            ))}
        </div>
    );
}

export default ProductSearchScreen;

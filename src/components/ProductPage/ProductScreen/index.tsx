import { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import ProductPage from '..';

import { ProductContext } from '~context/ProductContext';

function ProductScreen() {
    const { id } = useParams<string>();
    const { gatherSingleProduct, singleProduct } = useContext(ProductContext);

    useEffect(() => {
        window.scrollTo(0, 0);
        if (id) {
            gatherSingleProduct(id);
        }
    }, [gatherSingleProduct, id]);
    return (
        <div>
            <ProductPage product={singleProduct} />
        </div>
    );
}

export default ProductScreen;

import { useState } from 'react';

import ProductComments from './components/ProductComments';
import QuantitySelector from './components/QuantitySelector';
import RelatedProducts from './components/RelatedProducts';
import SelectDropdown from './components/SelectDropdown';
import Specifications from './components/specifications';
import StarRating from './components/StarRating';

import styles from './styles.module.scss';

import CustomButton from '~components/CustomButton';
import Slider from '~components/Slider';
import { ITEMS } from '~constants/constants';

function ProductPage() {
    const [auto, setAuto] = useState(true);

    const handleAddToCart = () => console.log('cart');
    const handleBuyNow = () => console.log('buy now');

    return (
        <>
            <div className={styles.container}>
                <div className={styles.title}>
                    <div className={styles.text}>
                        Text wieght 400 align left poppin Text wieght 400 align
                        left poppinText
                    </div>
                    <div className={styles.stars}>
                        <StarRating initialValue={3} readonly size={11.38} />
                        <span className={styles.rating}>51.215</span>
                    </div>
                </div>
                <div className={styles.slider}>
                    <Slider
                        hide
                        auto={auto}
                        setAuto={setAuto}
                        slides={ITEMS}
                        className={styles.image}
                        minClassName={styles.miniatures}
                        mini={styles.mini}
                        miniActive={styles.miniActive}
                    />
                </div>

                <div>
                    <SelectDropdown />
                </div>
                <div className={styles.price}>
                    <div className={styles.priceNumber}>
                        <h4>Precio:</h4>
                        <h3>$56.094</h3>
                    </div>
                    <div className={styles.delivery}>
                        <h4>Envio: </h4>
                        <p>Gratis</p>
                    </div>
                </div>
                <div>
                    <QuantitySelector />
                </div>
                <div className={styles.buttons}>
                    <div>
                        <CustomButton
                            className={styles.buttonCart}
                            label="Agregar al Carrito"
                            onClick={handleAddToCart}
                        />
                    </div>
                    <div>
                        <CustomButton
                            className={styles.buttonNow}
                            label="Comprar ahora"
                            secondary
                            onClick={handleBuyNow}
                        />
                    </div>
                </div>
            </div>
            <div className={styles.specifications}>
                <Specifications />
            </div>
            <div>
                <RelatedProducts />
            </div>
            <div>
                <ProductComments />
            </div>
        </>
    );
}

export default ProductPage;

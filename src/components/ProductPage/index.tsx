/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable consistent-return */
import { useEffect, useState } from 'react';

import CustomButton from '~components/CustomButton';
import Slider from '~components/Slider';
import Spinner from '~components/Spinner/Spinner';
import { Product } from '~interfaces/Products';
import { toBeImplemented } from '~utils/logicNotImplemented';
import { calculateOnlinePrice } from '~utils/logicPrice';

import styles from './styles.module.scss';

import ProductComments from './components/ProductComments';
import QuantitySelector from './components/quantitySelector';
import RelatedProducts from './components/RelatedProducts';
import SelectDropdown from './components/SelectDropdown';
import Specification from './components/specifications';
import StarRating from './components/StarRating';

interface Props {
  product: Product;
}

function ProductPage({ product }: Props) {
  const [renderedProduct, setRenderedProduct] = useState<Product | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    if (!renderedProduct || renderedProduct.id !== product.id) {
      setIsTransitioning(true);
      const timeout = setTimeout(() => {
        setRenderedProduct(product);
        setIsTransitioning(false);
      }, 300);
      return () => clearTimeout(timeout);
    }
  }, [product]);

  if (isTransitioning || !renderedProduct) {
    return <Spinner />;
  }

  const handleAddToCart = toBeImplemented;
  const handleBuyNow = toBeImplemented;

  const stockPrice = renderedProduct.prices?.cost?.value || 0;
  const onlinePercent = renderedProduct.prices?.online?.value || 0;
  const onlinePrice = calculateOnlinePrice(stockPrice, onlinePercent);

  return (
    <div className={styles.container}>
      <div className={styles.containerSlider}>
        <div className={styles.title}>
          <div className={styles.text}>{renderedProduct.name}</div>
          <div className={styles.stars}>
            <StarRating
              initialValue={renderedProduct.stars}
              readonly
              size={11.38}
            />
            <span className={styles.rating}>{renderedProduct.votes}</span>
          </div>
        </div>
        <div className={styles.slider}>
          <Slider
            slides={renderedProduct.imageURL}
            className={styles.image}
            minClassName={styles.miniatures}
            mini={styles.mini}
            miniActive={styles.miniActive}
            arrowClassLeft={styles.arrowLeft}
            arrowClassRight={styles.arrowRight}
            slide={styles.slide}
            slideActive={styles.slideActive}
          />
        </div>

        <div className={styles.dropdown}>
          <SelectDropdown variant={renderedProduct.variants} />
        </div>
        <div className={styles.price}>
          <div className={styles.priceNumber}>
            <h4>Precio:</h4>
            <h3>${onlinePrice || 'Precio no disponible'}</h3>
          </div>
          <div className={styles.delivery}>
            <h4>Envio: </h4>
            <p>Gratis</p>
          </div>
        </div>
        <div className={styles.selector}>
          <QuantitySelector QUANTITY={renderedProduct.stock} />
        </div>
        <div className={styles.buttons}>
          <CustomButton
            className={styles.buttonCart}
            label='Agregar al Carrito'
            onClick={handleAddToCart}
          />
          <CustomButton
            className={styles.buttonNow}
            label='Comprar ahora'
            secondary
            onClick={handleBuyNow}
          />
        </div>
      </div>
      <div className={styles.specifications}>
        <Specification
          specs={renderedProduct.specifications}
          description={renderedProduct.description}
        />
      </div>
      <div className={styles.RelatedProducts}>
        <RelatedProducts />
      </div>
      <div className={styles.ProductComments}>
        <ProductComments />
      </div>
    </div>
  );
}

export default ProductPage;

import CustomButton from '~components/CustomButton';
import Slider from '~components/Slider';
import { Product } from '~interfaces/Products';
import { toBeImplemented } from '~utils/logicNotImplemented';

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
  const handleAddToCart = toBeImplemented;
  const handleBuyNow = toBeImplemented;

  return (
    <div className={styles.container}>
      <div className={styles.containerSlider}>
        <div className={styles.title}>
          <div className={styles.text}>{product.name}</div>
          <div className={styles.stars}>
            <StarRating initialValue={product.stars} readonly size={11.38} />
            <span className={styles.rating}>{product.votes}</span>
          </div>
        </div>
        <div className={styles.slider}>
          <Slider
            slides={product.imageURL}
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

        <div>
          <SelectDropdown variant={product.variants} />
        </div>
        <div className={styles.price}>
          <div className={styles.priceNumber}>
            <h4>Precio:</h4>
            <h3>{product.prices.web.value || 'Precio no disponible'}</h3>
          </div>
          <div className={styles.delivery}>
            <h4>Envio: </h4>
            <p>Gratis</p>
          </div>
        </div>
        <div>
          <QuantitySelector QUANTITY={product.stock} />
        </div>
        <div className={styles.buttons}>
          <div>
            <CustomButton
              className={styles.buttonCart}
              label='Agregar al Carrito'
              onClick={handleAddToCart}
            />
          </div>
          <div>
            <CustomButton
              className={styles.buttonNow}
              label='Comprar ahora'
              secondary
              onClick={handleBuyNow}
            />
          </div>
        </div>
      </div>
      <div className={styles.specifications}>
        <Specification
          specs={product.specifications}
          description={product.description}
        />
      </div>
      <div>
        <RelatedProducts />
      </div>
      <div>
        <ProductComments />
      </div>
    </div>
  );
}

export default ProductPage;

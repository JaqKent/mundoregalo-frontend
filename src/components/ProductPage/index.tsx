import { useState } from 'react';

import SelectDropdown from './components/SelectDropdown';
import StarRating from './components/StarRating';

import styles from './styles.module.scss';

import Carousel from '~components/Slider';
import { ITEMS } from '~constants/constants';

function ProductPage() {
    const [auto, setAuto] = useState(true);

    return (
        <div>
            <div className={styles.title}>
                <div>
                    Text wieght 400 align left poppin Text wieght 400 align left
                    poppinText
                </div>
                <div>
                    <StarRating
                        initialValue={3}
                        onClick={() => console.log('stars')}
                        readonly
                    />
                    51.215
                </div>
            </div>
            <div className={styles.slider}>
                <Carousel auto={auto} setAuto={setAuto} slides={ITEMS} />
            </div>
            <div>
                <SelectDropdown />
            </div>
            <div>price/send</div>
            <div>(stock)cantidad</div>
            <div>comprar</div>
        </div>
    );
}

export default ProductPage;

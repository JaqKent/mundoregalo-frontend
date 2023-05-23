import { useState } from 'react';

import styles from './styles.module.scss';

import { getFormattedQuantity } from '~constants/utils';

function QuantitySelector() {
    const [quantity, setQuantity] = useState(0);
    const add = () => {
        setQuantity(quantity + 1);
    };
    const subtract = () => {
        setQuantity(quantity - 1);
    };

    return (
        <div className={styles.container}>
            <div className={styles.stock}>
                Cantidad
                <span className={styles.spanStock}>(993 disponibles)</span>
            </div>
            <div className={styles.selector}>
                <button type="button" onClick={add} className={styles.button}>
                    +
                </button>
                <p>{getFormattedQuantity(quantity)}</p>

                <button
                    type="button"
                    onClick={subtract}
                    className={styles.button}
                >
                    -
                </button>
            </div>
        </div>
    );
}

export default QuantitySelector;

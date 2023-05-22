import { useState } from 'react';

import styles from './styles.module.scss';

function QuantitySelector() {
    const [quantity, setQuantity] = useState(0);
    const add = () => {
        setQuantity(quantity + 1);
    };
    const subtract = () => {
        setQuantity(quantity - 1);
    };
    const getFormattedQuantity = () => {
        return quantity.toString().padStart(2, '0');
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
                <p>{getFormattedQuantity()}</p>

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

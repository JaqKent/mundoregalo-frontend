import { useState } from 'react';

import styles from './styles.module.scss';

import { getFormattedQuantity } from '~constants/utils';

function QuantitySelector() {
    const [quantity, setQuantity] = useState(0);

    const updateQuantity = (operation: boolean) => {
        setQuantity((prevQuantity) =>
            operation ? prevQuantity + 1 : prevQuantity - 1
        );
    };

    const QUANTITY = '993 disponibles';

    return (
        <div className={styles.container}>
            <div className={styles.stock}>
                Cantidad
                <span className={styles.spanStock}>({QUANTITY})</span>
            </div>
            <div className={styles.selector}>
                <button
                    type="button"
                    onClick={() => updateQuantity(true)}
                    className={styles.button}
                >
                    +
                </button>
                <p>{getFormattedQuantity(quantity)}</p>

                <button
                    type="button"
                    onClick={() => updateQuantity(false)}
                    className={styles.button}
                >
                    -
                </button>
            </div>
        </div>
    );
}

export default QuantitySelector;

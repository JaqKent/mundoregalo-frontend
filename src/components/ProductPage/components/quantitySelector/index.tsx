import { ChangeEvent, useRef, useState } from 'react';

import styles from './styles.module.scss';

import { getFormattedQuantity } from '~constants/utils';
import { Product } from '~interfaces/Products';

interface Props {
    QUANTITY: number;
}

function QuantitySelector({ QUANTITY }: Props) {
    const [quantity, setQuantity] = useState(1);
    const [customQuantity, setCustomQuantity] = useState(quantity.toString());
    const inputRef = useRef<HTMLInputElement>(null);

    const updateQuantity = (operation: boolean, value?: string) => {
        if (value) {
            const newValue = parseInt(value, 10);
            if (!Number.isNaN(newValue)) {
                const newQuantity = Math.min(newValue, QUANTITY);
                setQuantity(newQuantity);
                setCustomQuantity(newValue.toString());
            }
        } else {
            setQuantity((prevQuantity) =>
                operation && prevQuantity < QUANTITY
                    ? prevQuantity + 1
                    : prevQuantity - 1
            );
            setCustomQuantity((prevQuantity) =>
                operation && parseInt(prevQuantity, 10) < QUANTITY
                    ? (parseInt(prevQuantity, 10) + 1).toString()
                    : (parseInt(prevQuantity, 10) - 1).toString()
            );
        }
    };

    const handleCustomQuantityChange = (
        event: ChangeEvent<HTMLInputElement>
    ) => {
        const { value } = event.target;
        if (/^[0-9]*$/.test(value)) {
            const newQuantity = Math.min(parseInt(value, 10), QUANTITY);
            setCustomQuantity(newQuantity.toString());
        }
    };

    const handleCustomQuantityBlur = () => {
        if (customQuantity.trim() === '') {
            setCustomQuantity(quantity.toString());
        } else {
            updateQuantity(false, customQuantity);
        }
    };
    const handleInputFocus = () => {
        if (inputRef.current) {
            inputRef.current.select();
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.stock}>
                Cantidad
                <span className={styles.spanStock}>
                    ({QUANTITY} disponibles)
                </span>
            </div>
            <div className={styles.selector}>
                <button
                    disabled={quantity <= 1}
                    type="button"
                    onClick={() => updateQuantity(false)}
                    className={styles.button}
                >
                    -
                </button>
                <input
                    ref={inputRef}
                    type="text"
                    value={getFormattedQuantity(customQuantity)}
                    onChange={handleCustomQuantityChange}
                    onBlur={handleCustomQuantityBlur}
                    className={styles.input}
                    onFocus={handleInputFocus}
                />
                <button
                    type="button"
                    onClick={() => updateQuantity(true)}
                    className={styles.button}
                >
                    +
                </button>
            </div>
        </div>
    );
}

export default QuantitySelector;

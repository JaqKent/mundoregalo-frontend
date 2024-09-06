import { ChangeEvent, useRef, useState } from 'react';

import { getFormattedQuantity } from '~constants/utils';

import styles from './styles.module.scss';

interface Stock {
  current?: number;
  minStock: number;
  maxStock: number;
  noPhysicalStock: boolean;
}

interface Props {
  stock?: Stock;
  QUANTITY?: number;
}

function QuantitySelector({ stock }: Props) {
  const availableQuantity = stock?.current ?? 0;
  const [quantity, setQuantity] = useState(1);
  const [customQuantity, setCustomQuantity] = useState(quantity.toString());
  const inputRef = useRef<HTMLInputElement>(null);

  const updateQuantity = (operation: boolean, value?: string) => {
    if (value) {
      const newValue = parseInt(value, 10);
      if (!Number.isNaN(newValue)) {
        const newQuantity = Math.min(newValue, availableQuantity);
        setQuantity(newQuantity);
        setCustomQuantity(newQuantity.toString());
      }
    } else {
      setQuantity((prevQuantity) =>
        operation && prevQuantity < availableQuantity
          ? prevQuantity + 1
          : Math.max(1, prevQuantity - 1)
      );
      setCustomQuantity((prevQuantity) =>
        operation && parseInt(prevQuantity, 10) < availableQuantity
          ? (parseInt(prevQuantity, 10) + 1).toString()
          : Math.max(1, parseInt(prevQuantity, 10) - 1).toString()
      );
    }
  };

  const handleCustomQuantityChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    if (/^[0-9]*$/.test(value)) {
      const newQuantity = Math.min(parseInt(value, 10), availableQuantity);
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
        {availableQuantity > 0 ? (
          <span className={styles.spanStock}>
            ({availableQuantity} disponibles)
          </span>
        ) : (
          <span className={styles.spanStock}>(0 disponibles)</span>
        )}
      </div>
      <div className={styles.selector}>
        <button
          disabled={quantity <= 1}
          type='button'
          onClick={() => updateQuantity(false)}
          className={styles.button}
        >
          -
        </button>
        <input
          ref={inputRef}
          type='text'
          value={getFormattedQuantity(customQuantity)}
          onChange={handleCustomQuantityChange}
          onBlur={handleCustomQuantityBlur}
          className={styles.input}
          onFocus={handleInputFocus}
        />
        <button
          type='button'
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

QuantitySelector.defaultProps = {
  stock: false,
  QUANTITY: 0,
};

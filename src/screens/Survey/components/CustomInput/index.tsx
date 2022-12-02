import { ChangeEventHandler } from 'react';
import styles from './styles.module.scss';

interface Props {
   currentValue:string;
   id:string;
   value:string;
   label:string;
   type:string
   onChange:ChangeEventHandler<HTMLInputElement>;
}

function CustomInput({
  currentValue,
  label,
  value,
  onChange,
  id,
  type,
} : Props) {
  return (
    <div className={styles.input}>
      <label htmlFor="inputId" className={styles.label}>
        <input
          id={id}
          checked={value === currentValue}
          onChange={onChange}
          type={type}
          value={value}
        />
        <span>
          {label}
        </span>
      </label>

    </div>
  );
}

export default CustomInput;

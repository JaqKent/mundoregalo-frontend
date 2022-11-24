import { Input } from 'interfaces/interfaces';
import { ChangeEventHandler } from 'react';
import styles from './styles.module.scss';

interface Props {
   inValue:Input[]
   isRadio?:boolean
   currentValue:string;
   id:string;
   value:string;
   label:string;
   onChange:ChangeEventHandler<HTMLInputElement>;
}

function CustomInput({
  currentValue,
  label,
  value,
  onChange,
  id,
  inValue, isRadio,
} : Props) {
  return (
    <div className={styles.input}>
      {inValue.map((form) => (
        <label htmlFor="inputId" className={`${isRadio ? styles.label : ''}`}>
          <input id={id} checked={value === currentValue} onChange={onChange} className={`${isRadio ? '' : styles.textArea}`} id="inputId" placeholder={isRadio ? '' : form.placeholder} type={form.type} value={form.value} name={form.name} />
          <span>
            {label}
          </span>
        </label>
      ))}
    </div>
  );
}

export default CustomInput;

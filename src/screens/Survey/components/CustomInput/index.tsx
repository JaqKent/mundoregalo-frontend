import { Input } from 'interfaces/interfaces';
import styles from './styles.module.scss';

interface Props {
   inValue:Input[]
   isRadio?:boolean
}

function CustomInput({
  inValue, isRadio,
} : Props) {
  return (
    <div className={styles.input}>
      {inValue.map((form) => (
        <label htmlFor="inputId" className={`${isRadio ? styles.label : ''}`}>
          <input className={`${isRadio ? '' : styles.textArea}`} id="inputId" placeholder={isRadio ? '' : form.placeholder} type={form.type} value={form.value} name={form.name} />
          <span>
            {form.label}
          </span>
        </label>
      ))}
    </div>
  );
}

export default CustomInput;

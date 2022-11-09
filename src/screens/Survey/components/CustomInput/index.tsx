/* eslint-disable jsx-a11y/label-has-associated-control */
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
        <label className={`${isRadio ? styles.label : ''}`}>
          <input type={form.type} value={form.value} name={form.name} />
          <span>
            {form.label}
          </span>

        </label>
      ))}
    </div>
  );
}

export default CustomInput;

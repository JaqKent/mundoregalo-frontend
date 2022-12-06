import { SetStateAction, useState } from 'react';
import CustomButton from 'components/CustomButton';
import logo from 'assets/logoNegro.png';
import CustomInput from './components/CustomInput';
import { SURVEY1, SURVEY2 } from './constants';

import styles from './styles.module.scss';

function Survey() {
  const [currentStatus, setCurrentStatus] = useState('1');
  const [currentRadioStatus, setCurrentRadioStatus] = useState('yes');
  const [currentText, setCurrentText] = useState('');
  const handleChange = (e: { target: {
     value: SetStateAction<string>; }; }) => setCurrentText(e.target.value);

  return (
    <>
      <div className={styles.container}>
        <div>
          <img className={styles.img} src={logo} alt="logo mundo-regalo" />
        </div>
        <form className={styles.formContainer}>
          <div className={styles.topSection}>
            <div className={styles.title}>
              <h2>Por favor califique la calidad de nuestro servicio en una escala del 1-5.</h2>
            </div>
            <div className={styles.inputRadio}>
              {SURVEY1.map((form) => (
                <CustomInput
                  id={String(form.id)}
                  label={form.label}
                  key={form.id}
                  currentValue={currentStatus}
                  value={form.value}
                  onChange={() => setCurrentStatus(form.value)}
                  type={form.type}
                />
              ))}
            </div>
          </div>
          <div className={styles.topSection}>
            <div className={styles.title}>
              <h2>¿Volveria a comprar con nosotros?</h2>
            </div>
            <div className={styles.inputRadio}>
              {SURVEY2.map((form) => (
                <CustomInput
                  id={String(form.id)}
                  label={form.label}
                  key={form.id}
                  currentValue={currentRadioStatus}
                  value={form.value}
                  onChange={() => setCurrentRadioStatus(form.value)}
                  type={form.type}
                />
              ))}
            </div>
          </div>
          <div className={styles.topSection}>
            <div className={styles.title}>
              <h2>Sugerencias</h2>
            </div>
            <textarea className={styles.textArea} value={currentText} onChange={handleChange} placeholder="Sugerencia" />
          </div>
          <CustomButton className={styles.button} label="Enviar" isSubmit />
        </form>
      </div>

    </>

  );
}

export default Survey;

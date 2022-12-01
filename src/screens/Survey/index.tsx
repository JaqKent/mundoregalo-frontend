import CustomButton from 'components/CustomButton';
import { useState } from 'react';
import CustomInput from './components/CustomInput';
import { SURVEY1, SURVEY2 } from './constants';
import styles from './styles.module.scss';

function Survey() {
  const [currentStatus, setCurrentStatus] = useState('1');
  const [currentRadioStatus, setCurrentRadioStatus] = useState('yes');
  const [currentText, setCurrentText] = useState('');
  const handleChange = (e:any) => setCurrentText(e.target.value);
  console.log(currentStatus, currentRadioStatus, currentText);

  return (
    <>
      <div className={styles.container}>
        <form className={styles.formContainer}>
          <div className={styles.topSection}>
            <h2>Por favor califique la calidad de nuestro servicio en una escala del 1-5.</h2>
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
          <div className={styles.topSection}>
            <h2>¿Volveria a comprar con nosotros?</h2>
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
          <div className={styles.topSection}>
            <h2>Sugerencias</h2>
            <textarea value={currentText} onChange={handleChange} placeholder="Sugerencia" />
          </div>
          <CustomButton small label="Enviar" isSubmit />
        </form>
      </div>

    </>

  );
}

export default Survey;

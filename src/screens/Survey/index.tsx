import CustomButton from 'components/CustomButton';
import CustomInput from './components/CustomInput';
import { SURVEY } from './constants';
import styles from './styles.module.scss';

function Survey() {
  return (
    <>
      <div className={styles.container}>
        <form className={styles.formContainer}>
          {SURVEY.map((form) => (
            <div>
              <div className={styles.topSection}>
                <h2>{form.question}</h2>
                <CustomInput inValue={form.inValue} isRadio={form.radio} />
              </div>
            </div>
          ))}
          <CustomButton small label="Enviar" isSubmit />
        </form>
      </div>

    </>

  );
}

export default Survey;

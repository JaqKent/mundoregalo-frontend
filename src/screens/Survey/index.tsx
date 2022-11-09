import CustomButton from 'components/CustomButton';
import CustomInput from './components/CustomInput';
import { SURVEY } from './constants';
import styles from './styles.module.scss';

function Survey() {
  return (
    <>
      <div className={styles.container}>
        {SURVEY.map((form) => (
          <form>
            <div className={styles.topSection}>
              <h2>{form.question}</h2>
              <CustomInput inValue={form.inValue} isRadio={form.radio} />
            </div>
          </form>
        ))}
        <CustomButton small label="Enviar" isSubmit />
      </div>

    </>

  );
}

export default Survey;

import styles from './styles.module.scss';

function Survey() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.topSection}>
          <h2>Por favor califique la calidad de nuestro servicio en una escala del 1-5</h2>
          <div className={styles.radio}>
            <input className={styles.input} type="radio" value="1" defaultChecked name="points" />
            1
            <input type="radio" value="2" name="points" />
            2
            <input type="radio" value="3" name="points" />
            3
            <input type="radio" value="4" name="points" />
            4
            <input type="radio" value="5" name="points" />
            5
          </div>
        </div>
      </div>
      <div className={styles.midSection}>as</div>
      <div className={styles.lowSection}>as</div>

    </>

  );
}

export default Survey;

import styles from './styles.module.scss';

interface Props {
    image: string;
    label:string;
    show: boolean;
}

function LogedIn({ image, label, show }:Props) {
  return show ? (
    <div className={styles.container}>

      <img className={styles.img} src={image} alt="Foto de perfil" />
      <h3>{label}</h3>

    </div>
  ) : <></>;
}

export default LogedIn;

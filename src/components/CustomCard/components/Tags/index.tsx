import styles from '../../styles.module.scss';

interface Props {
  delivery: string;
  moreSold: string;
  onSale: string;
}
function Tags({ delivery, moreSold, onSale }: Props) {
  return (
    <div className={styles.info}>
      {delivery && <span className={styles.delivery}>{delivery}</span>}
      {moreSold && <span className={styles.moreSold}>{moreSold}</span>}
      {onSale && <span className={styles.onSale}>{onSale}</span>}
    </div>
  );
}

export default Tags;

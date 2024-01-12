import styles from '../../styles.module.scss';

interface Props {
  delivery: string;
  moreSold: string;
  onSale: string;
}

function Tags({ delivery, moreSold, onSale }: Props) {
  return (
    <div className={styles.info}>
      {delivery && (
        <span className={`$${styles.badge} ${styles.success}`}>{delivery}</span>
      )}
      {moreSold && (
        <span className={`$${styles.badge} ${styles.warning}`}>{moreSold}</span>
      )}
      {onSale && (
        <span className={`$${styles.badge} ${styles.danger}`}>{onSale}</span>
      )}
    </div>
  );
}

export default Tags;

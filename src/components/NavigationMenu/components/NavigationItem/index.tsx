import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import styles from './styles.module.scss';

interface Props {
    name: string;
    url?: string;
  icon: IconProp,
  onClick?: () => void;
}

function NavigationItem({
  name, url, icon, onClick,
}: Props) {
  return url ? (
    <Link to={url} className={styles.link}>
      <div className={styles.container}>
        <p className={styles.text}>
          <FontAwesomeIcon icon={icon} className={styles.icon} width={16} height={16} />
          {name}
        </p>
      </div>
    </Link>
  ) : (
    <div className={styles.container} onClick={onClick} role="button" tabIndex={0}>
      <p className={styles.text}>
        <FontAwesomeIcon icon={icon} className={styles.icon} width={16} height={16} />
        {name}
      </p>
    </div>
  );
}
export default NavigationItem;

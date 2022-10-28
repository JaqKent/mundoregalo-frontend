import { useState } from 'react';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Items } from 'interfaces/interfaces';
import SubDrop from '../components/SubDrop';
import styles from './styles.module.scss';

interface Props {
  label?: string;
  onClick: () => void;
  isActive?: boolean;
  items?:Items;

}
function NavItem({
  onClick, label, isActive, items,
}: Props) {
  const [dropdown, setDropdown] = useState(false);
  const activation = () => {
    if (isActive) {
      return;
    }
    onClick();
  };
  return (
    <div title="item" onClick={activation} role="alert">

      {items?.submenu ? (
        <>
          <p
            className={`${isActive ? styles.active : ''} ${styles.label}`}
            aria-haspopup="menu"
            onClick={() => setDropdown((prevState:boolean) => !prevState)}
          >
            {items.name}
            {
            dropdown
              ? <span className={styles.arrow}><FontAwesomeIcon icon={faChevronUp} /></span>
              : <span className={styles.arrow}><FontAwesomeIcon icon={faChevronDown} /></span>
}
          </p>
          <SubDrop
            submenu={items.submenu}
            dropdown={dropdown}
          />
        </>
      ) : label && (
      <p className={`${isActive ? styles.active : ''} ${styles.label}`}>
        {label}
      </p>
      )}
    </div>
  );
}

export default NavItem;

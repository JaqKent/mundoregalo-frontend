import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import SubDrop from '../components/SubDrop';
import styles from './styles.module.scss';

interface Props {
  label?: string;
  onClick: () => void;
  isActive?: boolean;
  items?:any;

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
            className={`${isActive ? styles.active : ''}${styles.label}`}
            aria-haspopup="menu"
            onClick={() => setDropdown((prevState:boolean) => !prevState)}
          >
            {items.name}
            {
            dropdown
              ? <span><FontAwesomeIcon icon={faChevronUp} /></span>
              : <span><FontAwesomeIcon icon={faChevronDown} /></span>
}
          </p>
          <SubDrop
            submenus={items.submenu}
            dropdown={dropdown}
          />
        </>
      ) : label && (
      <p className={`${isActive ? styles.active : ''}${styles.label}`}>
        {label}
      </p>
      )}
    </div>
  );
}

export default NavItem;

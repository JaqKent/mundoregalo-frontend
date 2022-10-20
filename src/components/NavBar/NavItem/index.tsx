import { useState } from 'react';
import SubDrop from '../components/SubDrop';
import styles from './styles.module.scss';

interface Props {
  label?: string;
  onClick: () => void;
  isActive?: boolean;
  items?:any;
  depthLevel:number;
}
function NavItem({
  onClick, label, isActive, items, depthLevel,
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
            aria-expanded={dropdown ? 'true' : 'false'}
            onClick={() => setDropdown((prevState:boolean) => !prevState)}
          >
            {items.name}
            {depthLevel > 0 ? <span>&raquo;</span> : <span />}
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

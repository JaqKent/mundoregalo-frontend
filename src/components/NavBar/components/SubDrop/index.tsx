import { Submenu } from 'interfaces/interfaces';
import styles from './styles.module.scss';

interface Props{
dropdown:boolean;
submenu: Submenu[];
}

function SubDrop({ submenu, dropdown }: Props) {
  return (
    <ul className={`${dropdown ? styles.show : styles.dropdown}`}>
      {submenu.map((submenus) => (
        <div>
          <li className={styles.menuItems}>
            <a href={submenus.url}>{submenus.name}</a>
          </li>
        </div>
      ))}
    </ul>
  );
}

export default SubDrop;

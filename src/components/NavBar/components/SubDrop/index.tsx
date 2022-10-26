/* eslint-disable react/no-array-index-key */
import styles from './styles.module.scss';

interface Props{
submenus:string[];
dropdown:boolean;}

function SubDrop({ submenus, dropdown }: Props) {
  return (
    <ul className={`${dropdown ? styles.show : styles.dropdown}`}>
      {submenus.map((submenu:any, index) => (
        <>
          <li key={index} className={styles.menuItems}>
            <a href={submenu.url}>{submenu.name}</a>
          </li>
        </>
      ))}
    </ul>
  );
}

export default SubDrop;
import styles from './styles.module.scss';

import MainBar from './components/MainBar';

interface Props {
  toggleNavbar: () => void;
}

function NavigationBar({ toggleNavbar }: Props) {
  return (
    <div className={styles.container}>
      <MainBar toggleNavbar={toggleNavbar} />
    </div>
  );
}
export default NavigationBar;

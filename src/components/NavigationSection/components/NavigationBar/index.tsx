import React from 'react';

import styles from './styles.module.scss';

import MainBar from './components/MainBar';
import SearchBar from './components/SearchBar';

interface Props {
  toggleNavbar: () => void;
}

function NavigationBar({ toggleNavbar }: Props) {
  return (
    <div className={styles.container}>
      <MainBar toggleNavbar={toggleNavbar} />
      <SearchBar />
    </div>
  );
}
export default NavigationBar;

import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ChangeEvent, useState } from 'react';
import styles from './styles.module.scss';

function SearchBar() {
  const [search, setSearch] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <div className={styles.container}>
      <input placeholder="Buscar" type="text" name="search" value={search} onChange={handleChange} className={styles.input} />
      <button type="button" aria-label="Search" className={styles.button}><FontAwesomeIcon icon={faSearch} /></button>
    </div>
  );
}
export default SearchBar;

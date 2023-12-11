import { ChangeEvent, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { filterProducts } from '~constants/utils';
import { ProductContext } from '~context/ProductContext';

import styles from './styles.module.scss';

function SearchBar() {
  const { allProducts } = useContext(ProductContext);
  const [search, setSearch] = useState('');
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const filteredProducts = filterProducts(allProducts, search);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearch(value);
    setIsDropdownOpen(!!value);
  };

  const handleSearch = () => {
    setIsDropdownOpen(false);
    navigate(`/productSearch/${search}`);
  };

  const handleDropdownItemClick = (selectedItem: string) => {
    setIsDropdownOpen(false);
    navigate(`/productSearch/${selectedItem}`);
  };

  return (
    <>
      <div className={styles.container}>
        <input
          placeholder='Buscar'
          type='text'
          name='search'
          value={search}
          onChange={handleChange}
          className={styles.input}
        />
        <button
          type='button'
          aria-label='Search'
          className={styles.button}
          onClick={handleSearch}
        >
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>
      {isDropdownOpen && (
        <div className={styles.dropdown}>
          {filteredProducts.map((item) => (
            <button
              type='button'
              onClick={() => handleDropdownItemClick(item.name)}
              className={styles.dropdownRow}
              onKeyDown={handleSearch}
              key={item.id}
            >
              {item.name}
            </button>
          ))}
        </div>
      )}
    </>
  );
}
export default SearchBar;

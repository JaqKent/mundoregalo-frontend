/* eslint-disable jsx-a11y/no-static-element-interactions */
import { ChangeEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { PRODUCTS } from '../../../OnSaleSection/constants';

import styles from './styles.module.scss';

function SearchBar() {
    const [search, setSearch] = useState('');
    const navigate = useNavigate();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setSearch(value);
        setIsDropdownOpen(!!value); // Abre el dropdown si hay texto
    };

    const handleSearch = (searchItem: string) => {
        setSearch(searchItem);
        setIsDropdownOpen(false); // Cierra el dropdown después de hacer clic en un elemento
        navigate(`/productsearch/${searchItem}`);
    };

    const filteredProducts = PRODUCTS.filter((item) => {
        const searchItem = search.toLowerCase();
        const name = item.description.toLowerCase();
        return searchItem && name.includes(searchItem);
    }).slice(0, 10);

    return (
        <>
            <div className={styles.container}>
                <input
                    placeholder="Buscar"
                    type="text"
                    name="search"
                    value={search}
                    onChange={handleChange}
                    className={styles.input}
                />
                <button
                    type="button"
                    aria-label="Search"
                    className={styles.button}
                    onClick={() => handleSearch(search)}
                >
                    <FontAwesomeIcon icon={faSearch} />
                </button>
            </div>
            {isDropdownOpen && (
                <div className={styles.dropdown}>
                    {filteredProducts.map((item) => (
                        <div
                            onClick={() => handleSearch(item.description)}
                            className={styles.dropdownRow}
                            onKeyDown={() => handleSearch(item.description)}
                            key={item.id}
                        >
                            {item.description}
                        </div>
                    ))}
                </div>
            )}
        </>
    );
}
export default SearchBar;

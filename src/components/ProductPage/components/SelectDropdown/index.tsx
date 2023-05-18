import React, { useState } from 'react';

import styles from './styles.module.scss';

function SelectDropdown() {
    const [selectedOption, setSelectedOption] = useState<string>();

    const selectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const { value } = event.target;
        setSelectedOption(value);
    };
    return (
        <div className={styles.container}>
            <select onChange={selectChange} className={styles.select}>
                <option selected disabled>
                    Color:
                </option>
                <option value="blue">
                    <div>
                        <div>Color:</div>
                        <div>Blue</div>
                    </div>
                </option>
                <option value="red">Red</option>
                <option value="green">Green</option>
                <option value="yellow">Yellow</option>
                <option value="kindacode.com">Kindacode.com</option>
            </select>
            {selectedOption && (
                <h2 className={styles.result}>{selectedOption}</h2>
            )}
        </div>
    );
}

export default SelectDropdown;

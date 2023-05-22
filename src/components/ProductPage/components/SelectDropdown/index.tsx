/* eslint-disable no-param-reassign */
import React, { useState } from 'react';

import { OPTIONS } from '../constants';

import styles from './styles.module.scss';

function SelectDropdown() {
    const [selectedOption, setSelectedOption] = useState<string>();

    const selectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const { value } = event.target;
        setSelectedOption(value);
    };
    return (
        <div className={styles.container}>
            <span className={styles.colorText}>Color:</span>
            <select onChange={selectChange} className={styles.select}>
                {OPTIONS.map((item) => (
                    <option key={item.id} value={item.value}>
                        {item.text}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default SelectDropdown;

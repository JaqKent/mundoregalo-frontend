import { ChangeEvent, useState } from 'react';

import styles from './styles.module.scss';

import { Variants } from '~interfaces/Products';

interface Props {
    variant: Variants[];
}

function SelectDropdown({ variant }: Props) {
    const [selectedOption, setSelectedOption] = useState<string | null>(null);

    const selectChange = (event: ChangeEvent<HTMLSelectElement>) => {
        const { value } = event.target;
        setSelectedOption(value);
    };
    const renderOptions = () => {
        if (!variant || variant.length === 0) {
            return (
                <option key="unique" value="unique">
                    Único color disponible
                </option>
            );
        }

        return variant.map((item) => (
            <option key={item.barCode} value={item.color}>
                {item.color}
            </option>
        ));
    };

    return (
        <div className={styles.container}>
            <span className={styles.colorText}>Color:</span>
            <select onChange={selectChange} className={styles.select}>
                {renderOptions()}
            </select>
        </div>
    );
}

export default SelectDropdown;

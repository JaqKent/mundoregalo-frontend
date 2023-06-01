import { useState } from 'react';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { DATA } from './constants';

import styles from './styles.module.scss';

function Specifications() {
    const [data, setData] = useState(DATA);
    const [viewMore, setViewMore] = useState(false);

    const handleView = () => {
        setViewMore((prevState) => !prevState);
    };

    const output = viewMore ? data : data.slice(0, 7);

    return (
        <div className={styles.specifications}>
            <div className={styles.specsTitle}>
                <h3>Especificaciones</h3>
            </div>
            <div>
                {output.map((item) => (
                    <div className={styles.specsData} key={item.id}>
                        <div className={styles.specsItem}>
                            <p>{item.key}</p>
                        </div>
                        <div className={styles.specsText} key={item.id}>
                            <p>{item.value}</p>
                        </div>
                    </div>
                ))}
                <div
                    className={styles.button}
                    onKeyDown={handleView}
                    role="button"
                    tabIndex={0}
                    onClick={handleView}
                >
                    {viewMore ? (
                        <>
                            <span>Ver Menos</span>
                            <FontAwesomeIcon icon={faChevronUp} />
                        </>
                    ) : (
                        <>
                            <span>Ver Más</span>
                            <FontAwesomeIcon icon={faChevronDown} />
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Specifications;

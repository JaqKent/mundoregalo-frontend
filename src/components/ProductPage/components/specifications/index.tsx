import { useState } from 'react';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { DATA, DESCRIPTION } from './constants';

import styles from './styles.module.scss';

function Specifications() {
    const [data, setData] = useState(DATA);
    const [viewMore, setViewMore] = useState(false);
    const [more, setMore] = useState(false);

    const handleView = () => {
        setViewMore((prevState) => !prevState);
    };

    const handleText = () => {
        setMore((prevState) => !prevState);
    };

    const output = viewMore ? data : data.slice(0, 7);

    return (
        <div className={styles.container}>
            <hr className={styles.borderLine} />
            <div className={styles.specifications}>
                <div className={styles.specsTitle}>
                    <h3>Especificaciones</h3>
                </div>
                <div className={styles.specsContainer}>
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
            <hr className={styles.borderLine} />
            <div className={styles.description}>
                <div className={styles.specsTitle}>
                    <h3>Descripción</h3>
                </div>
                <div>
                    {DESCRIPTION.map((text) => (
                        <p
                            className={more ? styles.text : styles.hide}
                            key={text.id}
                        >
                            {text.description}
                        </p>
                    ))}
                </div>
                <div
                    onClick={handleText}
                    onKeyDown={handleText}
                    role="button"
                    tabIndex={0}
                    className={styles.button}
                >
                    {more ? (
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
            <hr className={styles.borderLine} />
        </div>
    );
}

export default Specifications;

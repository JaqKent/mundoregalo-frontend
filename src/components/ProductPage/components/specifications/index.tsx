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

    const INFO = data.slice(0, viewMore ? 10 : 7);
    return (
        <div className={styles.specifications}>
            <div className={styles.specsTitle}>
                <h3>Especificaciones</h3>
            </div>
            <div>
                {INFO.map((item) => (
                    <div className={styles.specsData} key={item.id}>
                        <div className={styles.specsItem}>
                            <p>{item.data1}</p>
                            <p>{item.data2}</p>
                            <p>{item.data3}</p>
                            <p>{item.data4}</p>
                            <p>{item.data5}</p>
                            <p>{item.data6}</p>
                            <p>{item.data7}</p>
                            {viewMore ? (
                                <>
                                    <p>{item.data8}</p>
                                    <p>{item.data9}</p>
                                    <p>{item.data10}</p>
                                </>
                            ) : null}
                        </div>
                        <div className={styles.specsText} key={item.id}>
                            <p>{item.text1}</p>
                            <p>{item.text2}</p>
                            <p>{item.text3}</p>
                            <p>{item.text4}</p>
                            <p>{item.text5}</p>
                            <p>{item.text6}</p>
                            <p>{item.text7}</p>
                            {viewMore ? (
                                <>
                                    <p>{item.text8}</p>
                                    <p>{item.text9}</p>
                                    <p>{item.text10}</p>
                                </>
                            ) : null}
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

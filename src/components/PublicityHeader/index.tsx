import { useState } from 'react';

import InsideInfo from './components';
import { BANNER, SERVICES } from './constants';

import styles from './styles.module.scss';

import Slider from '~components/Slider';
import { ITEMS } from '~constants/constants';

function PublicityHeader() {
    const [auto, setAuto] = useState(true);
    return (
        <div className={styles.container}>
            <div>
                <Slider
                    hide
                    auto={auto}
                    setAuto={setAuto}
                    slides={ITEMS}
                    className={styles.image}
                    minClassName={styles.miniatures}
                    mini={styles.mini}
                    miniActive={styles.miniActive}
                />
            </div>
            <div className={styles.services}>
                {SERVICES.map((service) => (
                    <InsideInfo
                        key={service.id}
                        image={service.image}
                        text1={service.text1}
                    />
                ))}
            </div>
            <div className={styles.bannerContainer}>
                {BANNER.map((header) => (
                    <img
                        className={styles.bannerImage}
                        key={header.id}
                        src={header.image}
                        alt="publicidad"
                    />
                ))}
            </div>
        </div>
    );
}

export default PublicityHeader;

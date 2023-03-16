import styles from './styles.module.scss';

import left from '~assets/bottomBanner.png';

function PublicityFooter() {
    return (
        <div className={styles.container}>
            <img
                className={styles.img}
                src={left}
                alt="escritorio de oficina"
            />
        </div>
    );
}

export default PublicityFooter;

import { LIST, REDES } from './constants';

import styles from './styles.module.scss';

function Footer() {
    return (
        <div className={styles.container}>
            <div>
                <ul className={styles.links}>
                    {LIST.map((item) => (
                        <li key={item.id}>{item.name}</li>
                    ))}
                </ul>
            </div>
            <div className={styles.down}>
                <ul>
                    <li>Fundacion Abuelitos</li>
                </ul>
            </div>
            <div className={styles.imgSection}>
                {REDES.map((logo) => (
                    <img
                        className={styles.image}
                        src={logo.image}
                        alt={logo.name}
                        key={logo.id}
                    />
                ))}
            </div>
        </div>
    );
}

export default Footer;

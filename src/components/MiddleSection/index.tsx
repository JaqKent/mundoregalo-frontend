import CategorySection from '~components/Category';
import OnSaleSection from '~components/OnSaleSection';
import Trending from '~components/Trending';

import styles from './styles.module.scss';

function MiddleSection() {
    return (
        <div className={styles.container}>
            <div className={styles.onSale}>
                <OnSaleSection />
            </div>
            <div className={styles.trending}>
                <Trending hide />
                <CategorySection />
            </div>
        </div>
    );
}

export default MiddleSection;

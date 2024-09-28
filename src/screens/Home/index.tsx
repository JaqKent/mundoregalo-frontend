import styles from './styles.module.scss';

import BannerSection from './components/BannerSection';
import CategorySection from './components/Category';
import OnSaleSection from './components/OnSaleSection';
import PublicityFooter from './components/PublicityFooter';
import PublicityHeader from './components/PublicityHeader';
import Trending from './components/Trending';

function HomePage() {
  return (
    <div className={styles.container}>
      <PublicityHeader />
      <OnSaleSection />
      <BannerSection />
      <Trending hide />
      <CategorySection />
      <PublicityFooter />
    </div>
  );
}

export default HomePage;

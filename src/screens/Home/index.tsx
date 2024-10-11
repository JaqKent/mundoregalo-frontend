import styles from './styles.module.scss';

import BannerSection from './components/BannerSection';
import BestSellers from './components/BestSellers';
import CategorySection from './components/Category';
import OnSaleSection from './components/OnSaleSection';
import PublicityHeader from './components/PublicityHeader';
import Trending from './components/Trending';

function HomePage() {
  return (
    <div className={styles.container}>
      <PublicityHeader />
      <OnSaleSection />
      <BannerSection />
      <Trending />
      <CategorySection />
      <BestSellers />
    </div>
  );
}

export default HomePage;

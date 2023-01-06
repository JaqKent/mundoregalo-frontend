import CategorySection from 'components/Category';
import OnSaleSection from 'components/OnSaleSection';
import PublicityHeader from 'components/PublicityHeader';
import Trending from 'components/Trending';

function HomePage() {
  return (
    <>
      <PublicityHeader />
      <OnSaleSection />
      <Trending hide />
      <CategorySection />
    </>
  );
}

export default HomePage;

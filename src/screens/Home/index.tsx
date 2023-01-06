import CategorySection from 'components/Category';
import OnSaleSection from 'components/OnSaleSection';
import PublicityFooter from 'components/PublicityFooter';
import PublicityHeader from 'components/PublicityHeader';
import Trending from 'components/Trending';

function HomePage() {
  return (
    <>
      <PublicityHeader />
      <OnSaleSection />
      <Trending hide />
      <CategorySection />
      <PublicityFooter />
    </>
  );
}

export default HomePage;

import OnSaleSection from 'components/OnSaleSection';
import PublicityHeader from 'components/PublicityHeader';
import Trending from 'components/Trending';

function HomePage() {
  return (
    <>
      <PublicityHeader />
      <OnSaleSection />
      <Trending hide />
    </>
  );
}

export default HomePage;

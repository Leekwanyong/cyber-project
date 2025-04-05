import MainBanner from './MainBanner';
import MainProductShowcase from './MainProductShowcase';
import MainPromo from './MainPromo';
import HomeProductList from '../../components/common/Card/HomeProductList';
import FloatingButton from '../../components/common/Button/FloatingButton';

const HOME_QUERY_MAX_LENGTH = [8, 4];

function Home() {
  return (
    <div>
      <MainBanner />
      <MainProductShowcase />
      {HOME_QUERY_MAX_LENGTH.map((product, index) => (
        <HomeProductList
          key={product}
          category="mobile-accessories"
          limit={product}
          isLastSection={index === HOME_QUERY_MAX_LENGTH.length - 1}
        />
      ))}
      <MainPromo />
      <FloatingButton />
    </div>
  );
}

export default Home;

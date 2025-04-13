import MainBanner from './MainBanner';
import MainProductShowcase from './MainProductShowcase';
import MainPromo from './MainPromo';
import HomeProductList from '../../components/common/Card/HomeProductList';
import FloatingButton from '../../components/common/Button/FloatingButton';
import SeoMetaTag from '../../util/SEOMetaTag';
import Iphone15 from '../../assets/Iphone.png';

const HOME_QUERY_MAX_LENGTH: [number, number] = [8, 4];

function Home() {
  return (
    <div>
      <SeoMetaTag title="Cyber Store" description="e-commerce Store" url={Iphone15} />
      <MainBanner />
      <MainProductShowcase />
      {HOME_QUERY_MAX_LENGTH.map((product, index) => (
        <HomeProductList key={`product-${index}`} category="mobile-accessories" limit={product} />
      ))}
      <MainPromo />
      <FloatingButton />
    </div>
  );
}

export default Home;

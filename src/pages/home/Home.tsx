import Layout from '../../components/common/Layouts/Layout';
import MainBanner from './MainBanner';
import MainProductShowcase from './MainProductShowcase';
import ProductList from '../../components/common/Card/ProductList';
import MainPromo from './MainPromo';

function Home() {
  return (
    <Layout>
      <MainBanner />
      <MainProductShowcase />
      <ProductList category="mobile-accessories" limit={8} />
      <ProductList category="mobile-accessories" limit={4} />
      <MainPromo />
    </Layout>
  );
}

export default Home;

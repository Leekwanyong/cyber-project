import Layout from '../../components/common/Layouts/Layout';
import MainBanner from './MainBanner';
import MainProductShowcase from './MainProductShowcase';

function Home() {
  return (
    <Layout>
      <MainBanner />
      <MainProductShowcase />
    </Layout>
  );
}

export default Home;

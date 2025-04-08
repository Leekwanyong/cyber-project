import { Route, Routes } from 'react-router-dom';
import './index.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Provider } from 'react-redux';
import Product from './pages/product/Product';
import Home from './pages/home/Home';
import StoredWishlist from './components/common/Cart/StoredWishlist';
import { store } from './redux/store';
import Layout from './components/common/Layouts/Layout';
import ProductDetailInfo from './components/common/Product/ProductDetailInfo';

const query = new QueryClient();

function App() {
  return (
    <Provider store={store}>
      <QueryClientProvider client={query}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/product" element={<Product />} />
            <Route path="/wishlist" element={<StoredWishlist />} />
            <Route path="/product/:id" element={<ProductDetailInfo />} />
          </Route>
        </Routes>
      </QueryClientProvider>
    </Provider>
  );
}

export default App;

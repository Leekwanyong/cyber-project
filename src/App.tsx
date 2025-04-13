import { Route, Routes } from 'react-router-dom';
import './index.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Provider } from 'react-redux';
import { lazy, Suspense } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import Home from './pages/home/Home';
import { store } from './redux/store';
import Layout from './components/common/Layouts/Layout';

const Product = lazy(() => import('./pages/product/Product'));
const StoredWishlist = lazy(() => import('./components/common/Cart/StoredWishlist'));
const ProductDetailInfo = lazy(() => import('./components/common/Product/ProductDetailInfo'));
const NotFound = lazy(() => import('./pages/notFound/NotFound'));

const query = new QueryClient();

function App() {
  return (
    <Provider store={store}>
      <QueryClientProvider client={query}>
        <HelmetProvider>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="/product" element={<Product />} />
                <Route path="/wishlist" element={<StoredWishlist />} />
                <Route path="/product/:id" element={<ProductDetailInfo />} />
                <Route path="*" element={<NotFound />} />
              </Route>
            </Routes>
          </Suspense>
        </HelmetProvider>
      </QueryClientProvider>
    </Provider>
  );
}

export default App;

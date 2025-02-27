import { Global } from '@emotion/react';
import { Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import globalStyles from './styles/globalStyles';
import Product from './pages/product/Product';
import Home from './pages/home/Home';
import StoredWishlist from './components/common/Cart/StoredWishlist';

const query = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={query}>
      <Global styles={globalStyles} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/wishlist" element={<StoredWishlist />} />
      </Routes>
    </QueryClientProvider>
  );
}

export default App;

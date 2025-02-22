import { Global } from '@emotion/react';
import { Route, Routes } from 'react-router-dom';
import globalStyles from './styles/globalStyles';
import Product from './pages/product/Product';
import Home from './pages/home/Home';

function App() {
  return (
    <>
      <Global styles={globalStyles} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
      </Routes>
    </>
  );
}

export default App;

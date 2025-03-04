import { useMemo, useState } from 'react';
import { Product } from '../types/card';

function UseFilterProduct(product: Product[], filteredBrands: string[]) {
  const [sortBy, setSortBy] = useState<string>('asc');

  const filteredProducts = useMemo(
    () =>
      !filteredBrands || filteredBrands?.length === 0
        ? product
        : product.filter((item) => filteredBrands.includes(item.brand)),
    [filteredBrands, product]
  );

  const sortOrderData = useMemo(
    () =>
      [...(filteredProducts ?? [])].sort((a, b) =>
        sortBy === 'asc' ? a.price - b.price : b.price - a.price
      ),
    [filteredProducts, sortBy]
  );

  return { setSortBy, sortOrderData };
}

export default UseFilterProduct;

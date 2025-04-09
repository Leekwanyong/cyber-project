import { useMemo, useState } from 'react';
import { Product } from '../types/card';

function useFilterProduct(
  product: Product[],
  filteredBrands: string[],
  searchKeyword: string | undefined
) {
  const [sortBy, setSortBy] = useState<string>('asc');

  const filteredProducts = useMemo(
    () =>
      !filteredBrands || filteredBrands?.length === 0
        ? product
        : product.filter((item) => filteredBrands.includes(item.brand)),
    [filteredBrands, product]
  );

  const filteredSearchKeyword = useMemo(() => {
    if (!searchKeyword) return filteredProducts;
    return filteredProducts.filter((item) => {
      return (
        item.title.toLowerCase().includes(searchKeyword) ||
        item.description.toLowerCase().includes(searchKeyword)
      );
    });
  }, [filteredProducts, searchKeyword]);

  const sortOrderData = useMemo(
    () =>
      [...(filteredSearchKeyword ?? [])].sort((a, b) =>
        sortBy === 'asc' ? a.price - b.price : b.price - a.price
      ),
    [filteredSearchKeyword, sortBy]
  );

  return { setSortBy, sortOrderData };
}

export default useFilterProduct;

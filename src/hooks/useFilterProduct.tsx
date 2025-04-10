import { useMemo } from 'react';
import { Product } from '../types/card';

function useFilterProduct(
  product: Product[],
  filteredBrands: string[],
  searchKeyword: string | undefined
) {
  const normalizedKeyword = searchKeyword?.trim().toLowerCase();
  const filteredProducts = useMemo(
    () =>
      !filteredBrands || filteredBrands?.length === 0
        ? product
        : product.filter((item) => filteredBrands.includes(item.brand)),
    [filteredBrands, product]
  );

  if (!normalizedKeyword) return filteredProducts;

  return filteredProducts.filter((item) => {
    return (
      item.title.toLowerCase().includes(normalizedKeyword) ||
      item.description.toLowerCase().includes(normalizedKeyword)
    );
  });
}

export default useFilterProduct;

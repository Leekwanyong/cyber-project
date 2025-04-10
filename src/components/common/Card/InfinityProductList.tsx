import { useMemo, useState } from 'react';
import { InfinityProductListProps } from '../../../types/card';
import useIntersectionObserver from '../../../hooks/useIntersectionObserver';
import useFilterProduct from '../../../hooks/useFilterProduct';
import useInfiniteProductList from '../../../hooks/useInfiniteProductList';
import SortButtons from '../Product/SortButtons';
import ProductGrid from '../Product/ProductGrid';

function InfinityProductList({ limit, filteredBrands, searchKeyword }: InfinityProductListProps) {
  const { data, hasNextPage, fetchNextPage, isFetchingNextPage, isLoading } =
    useInfiniteProductList(limit);
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc' | null>(null);
  const observerRef = useIntersectionObserver(hasNextPage, fetchNextPage);
  const filterProduct = useFilterProduct(data, filteredBrands, searchKeyword);

  const filteredSortData = useMemo(() => {
    const result = filterProduct;

    if (sortOrder) {
      return [...result].sort((a, b) =>
        sortOrder === 'asc' ? a.price - b.price : b.price - a.price
      );
    }

    return result;
  }, [filterProduct, sortOrder]);

  const handleSort = (order: 'asc' | 'desc') => {
    setSortOrder(order);
  };

  return (
    <div className="mt-10">
      <SortButtons currentSort={sortOrder} onSort={handleSort} />
      <ProductGrid
        products={filteredSortData}
        isLoading={isLoading}
        isFetchingNextPage={isFetchingNextPage}
      />
      {hasNextPage && <div ref={observerRef} className="mt-10 h-8" />}
    </div>
  );
}

export default InfinityProductList;

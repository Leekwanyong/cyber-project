import React from 'react';
import Skeleton from '../Card/Skeleton';
import ProductItem from '../Card/ProductItem';
import type { Product } from '../../../types/card';

interface ProductGridProps {
  products: Product[];
  isLoading: boolean;
  isFetchingNextPage: boolean;
}

const LENGTH = 12;
function ProductGrid({ products, isLoading, isFetchingNextPage }: ProductGridProps) {
  const productToRender = () => {
    if (isLoading && isFetchingNextPage) {
      return <Skeleton count={LENGTH} mode="multiple" />;
    }

    if (!products || products.length === 0) {
      return <div>검색 결과가 없습니다.</div>;
    }

    return products.map((order) => (
      <ProductItem key={order.id} isInFirstViewport={false} item={order} />
    ));
  };

  return (
    <ul className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {productToRender()}
    </ul>
  );
}

export default React.memo(ProductGrid);

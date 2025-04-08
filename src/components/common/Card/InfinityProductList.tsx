import { InfinityProductListProps } from '../../../types/card';
import useIntersectionObserver from '../../../hooks/useIntersectionObserver';
import useFilterProduct from '../../../hooks/useFilterProduct';
import Skeleton from './Skeleton';
import ProductItem from './ProductItem';
import useInfiniteProductList from '../../../hooks/useInfiniteProductList';

const LENGTH = 12;
function InfinityProductList({ limit, filteredBrands }: InfinityProductListProps) {
  const { data, hasNextPage, fetchNextPage, isFetchingNextPage, isLoading } =
    useInfiniteProductList(limit);
  const observerRef = useIntersectionObserver(hasNextPage, fetchNextPage);

  const { sortOrderData, setSortBy } = useFilterProduct(data, filteredBrands);

  return (
    <div className="mt-10">
      <div className="flex items-center  gap-4 mb-6">
        <button
          type="button"
          onClick={() => setSortBy('desc')}
          className="px-4 py-2 border rounded hover:bg-gray-100"
        >
          가격 높은 순
        </button>
        <button
          type="button"
          onClick={() => setSortBy('asc')}
          className="px-4 py-2 border rounded hover:bg-gray-100"
        >
          가격 낮은 순
        </button>
      </div>

      <ul className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {isFetchingNextPage && isLoading
          ? Array.from({ length: LENGTH }).map((_, i) => <Skeleton key={`infinity-${i}`} />)
          : sortOrderData.map((order) => (
              <ProductItem key={order.id} isInFirstViewport={false} item={order} />
            ))}
      </ul>

      {hasNextPage && <div ref={observerRef} className="mt-10 h-8" />}
    </div>
  );
}

export default InfinityProductList;

import { v4 as uuidv4 } from 'uuid';
import { InfinityProductListProps } from '../../../types/card';
import useIntersectionObserver from '../../../hooks/useIntersectionObserver';
import useFilterProduct from '../../../hooks/useFilterProduct';
import Skeleton from './Skeleton';
import ProductItem from './ProductItem';
import useInfiniteProductList from '../../../hooks/useInfiniteProductList';

function InfinityProductList({ limit, filteredBrands }: InfinityProductListProps) {
  const { data, hasNextPage, fetchNextPage, isFetchingNextPage, isLoading } =
    useInfiniteProductList(limit);
  const observerRef = useIntersectionObserver(hasNextPage, fetchNextPage);

  const { sortOrderData, setSortBy } = useFilterProduct(data, filteredBrands);

  return (
    <div>
      <div>
        <button type="button" onClick={() => setSortBy('desc')}>
          가격 높은 순
        </button>
        <button type="button" onClick={() => setSortBy('asc')}>
          가격 낮은 순
        </button>
      </div>
      <ul>
        {isFetchingNextPage && isLoading
          ? Array.from({ length: limit }).map(() => <Skeleton key={uuidv4()} />)
          : sortOrderData.map((order) => (
              <ProductItem key={order.id} item={order} isInFirstViewport />
            ))}
      </ul>

      {hasNextPage && <div ref={observerRef} style={{ marginTop: '15%' }} />}
    </div>
  );
}

export default InfinityProductList;

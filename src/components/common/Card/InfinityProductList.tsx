/** @jsxImportSource @emotion/react */
import { v4 as uuidv4 } from 'uuid';
import { css } from '@emotion/react';
import { InfinityProductListProps } from '../../../types/card';
import useIntersectionObserver from '../../../hooks/useIntersectionObserver';
import useFilterProduct from '../../../hooks/useFilterProduct';
import Skeleton from './Skeleton';
import ProductItem from './ProductItem';
import useInfiniteProductList from '../../../hooks/useInfiniteProductList';

function InfinityProductList({
  isInfinity,
  limit,
  filteredBrands,
  isLastSection,
}: InfinityProductListProps) {
  const { data, hasNextPage, fetchNextPage, isFetchingNextPage, isLoading } =
    useInfiniteProductList(isInfinity, limit);
  const observer = useIntersectionObserver(hasNextPage, fetchNextPage);

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
      <ul
        css={css`
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          justify-content: space-between;
        `}
      >
        {isFetchingNextPage && isLoading
          ? Array.from({ length: limit }).map(() => <Skeleton key={uuidv4()} />)
          : sortOrderData.map((order, index) => (
              <ProductItem
                key={order.id}
                index={index}
                item={order}
                isLastSection={isLastSection}
              />
            ))}
      </ul>
      {isInfinity && <div ref={observer} />}
    </div>
  );
}

export default InfinityProductList;

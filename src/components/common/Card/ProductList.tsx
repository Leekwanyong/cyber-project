import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import styled from '@emotion/styled';
import { useCallback, useEffect, useMemo, useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { getStoreAllListApi, getStoreApi } from '../../../api/getStoreApi';
import ProductItem from './ProductItem';
import { Product, ProductListProps } from '../../../types/card';
import Skeleton from './Skeleton';

const WrapperUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 10rem;
  gap: 1rem;
  padding: 0;
`;

const WrapperDivRef = styled.div`
  height: 200px;
`;

function ProductList({ category, limit, filteredBrands, sortOrder }: ProductListProps) {
  const observerRef = useRef<HTMLDivElement>(null);
  const homeQuery = useQuery<Product[]>({
    queryKey: ['category', category, limit],
    queryFn: async () => getStoreApi({ category, limit }),
    enabled: limit <= 8,
  });

  const infiniteQuery = useInfiniteQuery({
    queryKey: ['infinity'],
    queryFn: ({ pageParam = 0 }) => getStoreAllListApi({ limit: 12, pageParam }),
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.length > 0 ? allPages.length * 12 : undefined;
    },
    enabled: limit > 8,
  });

  const { hasNextPage, fetchNextPage } = infiniteQuery;

  const callback = useCallback(() => {
    return new IntersectionObserver(
      (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && hasNextPage) {
            fetchNextPage();
          }
        });
      },
      { threshold: 0 }
    );
  }, [hasNextPage, fetchNextPage]);

  useEffect(() => {
    if (!observerRef.current) {
      return undefined;
    }
    const observer = callback();
    observer.observe(observerRef.current);
    return () => {
      observer.disconnect();
    };
  }, [observerRef, callback]);

  const allProducts = useMemo(
    () => (limit <= 8 ? homeQuery.data || [] : infiniteQuery.data?.pages.flat() || []),
    [limit, homeQuery.data, infiniteQuery.data]
  );

  const filteredProducts = useMemo(
    () =>
      !filteredBrands || filteredBrands?.length === 0
        ? allProducts
        : allProducts.filter((item) => filteredBrands.includes(item.brand)),
    [filteredBrands, allProducts]
  );

  const sortOrderData = useMemo(
    () =>
      [...(filteredProducts ?? [])].sort((a, b) =>
        sortOrder === 'asc' ? a.price - b.price : b.price - a.price
      ),
    [filteredProducts, sortOrder]
  );

  return (
    <section>
      <WrapperUl>
        {homeQuery.isLoading
          ? Array.from({ length: limit }).map(() => <Skeleton key={uuidv4()} />)
          : sortOrderData?.map((item, index) => (
              <ProductItem key={item.id} item={item} index={index} limit={limit > 4} />
            ))}
        {infiniteQuery.isFetchingNextPage &&
          Array.from({ length: 12 }).map(() => <Skeleton key={uuidv4()} />)}

        {limit > 8 && <WrapperDivRef ref={observerRef} />}
      </WrapperUl>
    </section>
  );
}

export default ProductList;

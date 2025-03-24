import { useInfiniteQuery } from '@tanstack/react-query';
import { getStoreAllListApi } from '../api/getStoreApi';

const useInfiniteProductList = (limit: number) => {
  const infiniteQuery = useInfiniteQuery({
    queryKey: ['infinity'],
    queryFn: ({ pageParam = 0 }) => getStoreAllListApi({ limit, pageParam }),
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.length > 0 ? allPages.length * limit : undefined;
    },
  });
  return {
    isLoading: infiniteQuery.isLoading ?? false,
    isFetchingNextPage: infiniteQuery.isLoading ?? false,
    hasNextPage: infiniteQuery.hasNextPage ?? false,
    fetchNextPage: infiniteQuery.fetchNextPage ?? (() => {}),
    data: infiniteQuery.data?.pages.flat() ?? [],
  };
};

export default useInfiniteProductList;

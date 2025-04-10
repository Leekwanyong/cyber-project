import { useQuery } from '@tanstack/react-query';
import { Product } from '../types/card';
import { getStoreApi } from '../api/getStoreApi';

function useHomeProductList(category: string, limit: number) {
  const homeQuery = useQuery<Product[]>({
    queryKey: ['HomeProductQuery', category, limit],
    queryFn: async () => getStoreApi({ category, limit }),
  });
  return {
    isLoading: homeQuery.isLoading,
    isError: homeQuery.isError,
    data: homeQuery.data ?? [],
  };
}

export default useHomeProductList;

import { useQuery } from '@tanstack/react-query';
import { Product } from '../types/card';
import { getStoreApi } from '../api/getStoreApi';

function useHomeProductList(category: string, limit: number, isInfinity: boolean) {
  const homeQuery = useQuery<Product[]>({
    queryKey: ['HomeProductQuery', category, limit],
    queryFn: async () => getStoreApi({ category, limit }),
    enabled: !isInfinity,
  });
  return {
    isLoading: homeQuery.isLoading,
    data: homeQuery.data ?? [],
  };
}

export default useHomeProductList;

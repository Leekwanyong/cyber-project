import { useQuery } from '@tanstack/react-query';
import { getStoreDetail, getStoreDetailApi } from '../api/getStoreApi';

const LIMIT = 5;
function useProductDetailWithSimilar(id: string | undefined) {
  const productDetailQuery = useQuery({
    queryKey: ['productDetail', id],
    queryFn: () => {
      return getStoreDetailApi(id!);
    },
    enabled: Boolean(id),
  });

  const category = productDetailQuery.data?.category;

  const similarProductsQuery = useQuery({
    queryKey: ['similarProducts', category ?? 'unknown'],
    queryFn: () => {
      return getStoreDetail(category!, LIMIT);
    },
    enabled: Boolean(category),
  });

  return {
    detail: {
      data: productDetailQuery.data,
      isLoading: productDetailQuery.isLoading,
      isError: productDetailQuery.isError,
    },
    related: {
      data: similarProductsQuery.data,
      isLoading: similarProductsQuery.isLoading,
      isError: similarProductsQuery.isError,
    },
  };
}

export default useProductDetailWithSimilar;

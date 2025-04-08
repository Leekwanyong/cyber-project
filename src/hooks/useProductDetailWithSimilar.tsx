import { useQuery } from '@tanstack/react-query';
import { getStoreDetail, getStoreDetailApi } from '../api/getStoreApi';

function useProductDetailWithSimilar(id: string | undefined) {
  const productDetailQuery = useQuery({
    queryKey: ['productDetail', id],
    queryFn: () => getStoreDetailApi(id!),
    enabled: !!id,
  });

  const category = productDetailQuery.data?.category;

  const similarProductsQuery = useQuery({
    queryKey: ['similarProducts', category ?? 'unknown'],
    queryFn: () => getStoreDetail(category!),
    enabled: !!category,
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

import { useMemo } from 'react';
import useHomeProductList from '../../../hooks/useHomeProductList';
import Skeleton from '../Skeleton/Skeleton';
import ProductItem from './ProductItem';
import { HomeProductQuery } from '../../../types/card';

const LENGTH = 4;
function HomeProductList({ category, limit }: HomeProductQuery) {
  const { data, isLoading, isError } = useHomeProductList(category, limit);
  const productList = useMemo(() => {
    if (isLoading) {
      return <Skeleton count={LENGTH} mode="inline" />;
    }

    if (isError) {
      return <div>데이터를 불러오는 데 문제가 발생했습니다.</div>;
    }

    return data.map((product) => (
      <ProductItem key={product.id} item={product} isInFirstViewport={false} />
    ));
  }, [data, isLoading, isError]);

  return useMemo(
    () => (
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-center justify-between mt-24 mb-24">
        {productList}
      </section>
    ),
    [productList]
  );
}

export default HomeProductList;

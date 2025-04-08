import useHomeProductList from '../../../hooks/useHomeProductList';
import Skeleton from './Skeleton';
import ProductItem from './ProductItem';
import { HomeProductQuery } from '../../../types/card';

const LENGTH = 4;
function HomeProductList({ category, limit }: HomeProductQuery) {
  const { data, isLoading } = useHomeProductList(category, limit);

  return (
    <section className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-center justify-between mt-24 mb-24">
      {isLoading ? (
        <Skeleton count={LENGTH} />
      ) : (
        data.map((product) => (
          <ProductItem key={product.id} item={product} isInFirstViewport={false} />
        ))
      )}
    </section>
  );
}

export default HomeProductList;

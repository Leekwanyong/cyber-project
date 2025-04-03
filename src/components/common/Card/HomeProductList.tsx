import { v4 as uuidv4 } from 'uuid';
import useHomeProductList from '../../../hooks/useHomeProductList';
import Skeleton from './Skeleton';
import ProductItem from './ProductItem';
import { HomeProductQuery } from '../../../types/card';

function HomeProductList({ category, limit, isLastSection }: HomeProductQuery) {
  const { isLoading, data } = useHomeProductList(category, limit);

  return (
    <section style={{ display: 'flex' }}>
      {isLoading
        ? Array.from({ length: limit }).map(() => <Skeleton key={uuidv4()} />)
        : data.map((product, index) => (
            <ProductItem
              key={product.id}
              index={index}
              item={product}
              isLastSection={isLastSection}
              isInFirstViewport
            />
          ))}
    </section>
  );
}

export default HomeProductList;

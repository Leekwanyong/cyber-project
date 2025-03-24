import { v4 as uuidv4 } from 'uuid';
import styled from '@emotion/styled';
import useHomeProductList from '../../../hooks/useHomeProductList';
import Skeleton from './Skeleton';
import ProductItem from './ProductItem';
import { HomeProductQuery } from '../../../types/card';

const WrapperUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 10rem;
  gap: 1rem;
  padding: 0;
`;

function HomeProductList({ category, limit, isLastSection }: HomeProductQuery) {
  const { isLoading, data } = useHomeProductList(category, limit);

  return (
    <WrapperUl style={{ display: 'flex' }}>
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
    </WrapperUl>
  );
}

export default HomeProductList;

import { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { Product } from '../../../types/card';
import Layout from '../Layouts/Layout';

interface Props {
  localStorageItem: Product[];
}

const WrapperUl = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
  align-items: center;
  padding: 1rem;
`;

const Card = styled.li`
  background-color: #f8f9fa;
  border-radius: 12px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  display: flex;
  align-items: center;
  transition: all 0.3s ease-in-out;
  width: 100%;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.15);
  }
`;

const DescriptionWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 1.5rem;
`;

const ImageWrapper = styled.img`
  width: 180px;
  height: 180px;
  object-fit: cover;
  border-radius: 10px;
  border: 1px solid #ddd;
`;

const TextContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const BrandText = styled.p`
  font-size: 1.3rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 0.5rem;
`;

const TitleText = styled.p`
  font-size: 1.3rem;
  color: #555;
  margin-bottom: 0.5rem;
`;

const DescriptionText = styled.p`
  font-size: 1rem;
  color: #777;
  line-height: 1.4;
  margin-bottom: 0.5rem;
`;

const PriceText = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
  color: #222;
`;

const RemoveButton = styled.button`
  background-color: #ff4d4d;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  font-weight: bold;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #e63946;
  }
`;

function StoredWishlist({ localStorageItem }: Props) {
  const [products, setProducts] = useState<Product[]>([]);

  const handleRemove = (id: number) => {
    const data = JSON.parse(localStorage.getItem('item') || '[]');
    const isArray = Array.isArray(data) ? data.filter((v) => v.id !== id) : [];
    localStorage.setItem('item', JSON.stringify(isArray));
    setProducts(isArray);
  };

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('item') || '[]');
    setProducts(data);
  }, [localStorageItem]);

  return (
    <Layout>
      <WrapperUl>
        {products.map((product) => (
          <Card key={product.id}>
            <DescriptionWrapper>
              <ImageWrapper src={product.thumbnail} alt={product.title} />
              <TextContent>
                <BrandText>{product.brand}</BrandText>
                <TitleText>{product.title}</TitleText>
                <DescriptionText>{product.description}</DescriptionText>
                <PriceText>${product.price}</PriceText>
              </TextContent>
              <RemoveButton onClick={() => handleRemove(product.id)}>X</RemoveButton>
            </DescriptionWrapper>
          </Card>
        ))}
      </WrapperUl>
    </Layout>
  );
}

export default StoredWishlist;

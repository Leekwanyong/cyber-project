/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import { useDispatch } from 'react-redux';
import { css } from '@emotion/react';
import { CategoryListProps } from '../../../types/card';
import { HeartIcon } from '../Icon/index';
import Button from '../Button/Button';
import StoredWishlist from '../Cart/StoredWishlist';
import { AppDispatch } from '../../../redux/store';
import { toggleWishlist } from '../../../redux/slice/wishlistSlice';
import imageFallbackHandler from '../../../utils/image';
import DefaultImg from '../../../assets/defaultImg.png';

const ProductItemWrapper = styled.li`
  width: calc(24%);

  @media (max-width: 1024px) {
    width: calc(50% - 1rem);
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const ProductListDescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  gap: 0.5rem;
`;

const ProductImg = styled.img`
  width: 100%;
  object-fit: cover;
`;

const Description = styled.p`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  max-width: 100%;
`;

const ProductPrice = styled.span`
  display: block;
  font-weight: bold;
  color: #333;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const ProductIconWrapper = styled.div`
  text-align: right;
  padding: 0.5rem;
  cursor: pointer;

  svg {
    transition: fill 0.2s ease-in-out;
  }

  svg:hover {
    fill: hotpink;
  }
`;

const HiddenWrapper = styled.div`
  display: none;
`;

const background = ['#fff', '#F9F9F9', '#EAEAEA', '#2C2C2C'];

function ProductItem({ item, index, isLastSection, isInFirstViewport }: CategoryListProps) {
  const dispatch = useDispatch<AppDispatch>();

  const handleOnToggleClick = () => {
    dispatch(toggleWishlist(item));
  };

  return (
    <ProductItemWrapper
      css={css`
        ${isLastSection &&
        `
      background-color: ${background[index]};
    `}
      `}
    >
      <ProductIconWrapper onClick={handleOnToggleClick}>
        <HeartIcon />
      </ProductIconWrapper>
      <div>
        <ProductImg
          src={item.thumbnail}
          alt={item.title}
          onError={imageFallbackHandler(DefaultImg, item.thumbnail)}
          loading={isInFirstViewport ? 'eager' : 'lazy'}
        />
      </div>
      <ProductListDescriptionWrapper>
        <Description>{item.description}</Description>
        <ProductPrice>${item.price}</ProductPrice>
        <Button size="primary" color="primary">
          Buy Now
        </Button>
      </ProductListDescriptionWrapper>
      <HiddenWrapper>
        <StoredWishlist />
      </HiddenWrapper>
    </ProductItemWrapper>
  );
}

export default ProductItem;

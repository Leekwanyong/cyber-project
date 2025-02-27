/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { useDispatch, useSelector } from 'react-redux';
import { CategoryListProps } from '../../../types/card';
import { HeartIcon } from '../Icon/index';
import Button from '../Button/Button';
import StoredWishlist from '../Cart/StoredWishlist';
import { AppDispatch, RootState } from '../../../redux/store';
import { toggleWishlist } from '../../../redux/slice/wishlistSlice';

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

function ProductItem({ item, index, limit }: CategoryListProps) {
  const dispatch = useDispatch<AppDispatch>();
  const wishlist = useSelector((state: RootState) => state.wishlist.items);

  const handleOnToggleClick = () => {
    dispatch(toggleWishlist(item));
  };

  return (
    <ProductItemWrapper
      css={css`
        background-color: ${limit ? '#F6F6F6' : background[index]};
      `}
    >
      <ProductIconWrapper onClick={handleOnToggleClick}>
        <HeartIcon />
      </ProductIconWrapper>
      <div>
        <ProductImg src={item.thumbnail} alt={item.title} />
      </div>
      <ProductListDescriptionWrapper>
        <Description>{item.description}</Description>
        <ProductPrice>${item.price}</ProductPrice>
        {limit ? (
          <Button size="primary" color="primary">
            Buy Now
          </Button>
        ) : (
          <Button size="primary" color={index === 3 ? 'mediumWhite' : 'mediumBlack'}>
            Buy Now
          </Button>
        )}
      </ProductListDescriptionWrapper>
      <HiddenWrapper>
        <StoredWishlist localStorageItem={wishlist} />
      </HiddenWrapper>
    </ProductItemWrapper>
  );
}

export default ProductItem;

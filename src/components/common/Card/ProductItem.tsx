import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import React from 'react';
import { CategoryListProps } from '../../../types/card';
import { HeartIcon } from '../Icon/index';
import Button from '../Button/Button';
import { AppDispatch } from '../../../redux/store';
import { toggleWishlist } from '../../../redux/slice/wishlistSlice';
import imageFallbackHandler from '../../../util/imageErrorHandler';
import UseOptimizedImage from '../../../hooks/useOptimizedImage';
import useLazyImage from '../../../hooks/useLazyImg';

function ProductItem({ item, isInFirstViewport }: CategoryListProps) {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const lazyImage = useLazyImage();
  const optimizedImage = UseOptimizedImage({ url: item.thumbnail || '', isWebp: true, width: 300 });
  const handleOnToggleClick = () => {
    dispatch(toggleWishlist(item));
  };

  const handleOnLink = () => {
    navigate(`/product/${item.id}`);
  };

  return (
    <section className="text-center mb-4">
      <div className="flex items-center justify-end">
        <button type="button" className="group" onClick={handleOnToggleClick}>
          <HeartIcon />
        </button>
      </div>

      <div className="flex items-center justify-center">
        <picture>
          <source type="image/webp" srcSet={optimizedImage} />
          <img
            src={item.thumbnail}
            alt={item.title}
            ref={lazyImage}
            width={300}
            height={400}
            onError={imageFallbackHandler}
            loading={isInFirstViewport ? 'eager' : 'lazy'}
          />
        </picture>
      </div>

      <div className="flex flex-col items-center justify-center gap-2 mt-4">
        <p className="truncate max-w-[200px] w-full text-center">{item.description}</p>
        <p className="text-base font-semibold">${item.price}</p>
        <Button size="primary" color="primary" onClick={handleOnLink}>
          Buy Now
        </Button>
      </div>
    </section>
  );
}

export default React.memo(ProductItem);

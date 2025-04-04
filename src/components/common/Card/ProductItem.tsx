import { useDispatch } from 'react-redux';
import { CategoryListProps } from '../../../types/card';
import { HeartIcon } from '../Icon/index';
import Button from '../Button/Button';
import { AppDispatch } from '../../../redux/store';
import { toggleWishlist } from '../../../redux/slice/wishlistSlice';
import imageFallbackHandler from '../../../utils/image';
import DefaultImg from '../../../assets/defaultImg.png';

function ProductItem({ item, isInFirstViewport }: CategoryListProps) {
  const dispatch = useDispatch<AppDispatch>();

  const handleOnToggleClick = () => {
    dispatch(toggleWishlist(item));
  };

  return (
    <section className="text-center mb-4">
      <div className="flex items-center justify-end">
        <button type="button" className="group" onClick={handleOnToggleClick}>
          <HeartIcon />
        </button>
      </div>

      <div className="flex items-center justify-center">
        <img
          src={item.thumbnail}
          alt={item.title}
          onError={imageFallbackHandler(DefaultImg, item.thumbnail)}
          loading={isInFirstViewport ? 'eager' : 'lazy'}
        />
      </div>

      <div className="flex flex-col items-center justify-center gap-2 mt-4">
        <p className="truncate max-w-[200px] w-full text-center">{item.description}</p>
        <p className="text-base font-semibold">${item.price}</p>
        <Button size="primary" color="primary">
          Buy Now
        </Button>
      </div>
    </section>
  );
}

export default ProductItem;

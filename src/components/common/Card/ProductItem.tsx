import { useDispatch } from 'react-redux';
import { CategoryListProps } from '../../../types/card';
import { HeartIcon } from '../Icon/index';
import Button from '../Button/Button';
import StoredWishlist from '../Cart/StoredWishlist';
import { AppDispatch } from '../../../redux/store';
import { toggleWishlist } from '../../../redux/slice/wishlistSlice';
import imageFallbackHandler from '../../../utils/image';
import DefaultImg from '../../../assets/defaultImg.png';

// const background = ['#fff', '#F9F9F9', '#EAEAEA', '#2C2C2C'];

function ProductItem({ item, isInFirstViewport }: CategoryListProps) {
  const dispatch = useDispatch<AppDispatch>();

  const handleOnToggleClick = () => {
    dispatch(toggleWishlist(item));
  };

  return (
    <section>
      <button type="button" onClick={handleOnToggleClick}>
        <HeartIcon />
      </button>
      <div>
        <img
          src={item.thumbnail}
          alt={item.title}
          onError={imageFallbackHandler(DefaultImg, item.thumbnail)}
          loading={isInFirstViewport ? 'eager' : 'lazy'}
        />
      </div>
      <div>
        <p>{item.description}</p>
        <p>${item.price}</p>
        <Button size="primary" color="primary">
          Buy Now
        </Button>
      </div>
      <div>
        <StoredWishlist />
      </div>
    </section>
  );
}

export default ProductItem;

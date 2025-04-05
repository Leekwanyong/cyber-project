import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../redux/store';
import { removeWishlist } from '../../../redux/slice/wishlistSlice';
import FloatingButton from '../Button/FloatingButton';

function StoredWishlist() {
  const dispatch = useDispatch<AppDispatch>();
  const wishlist = useSelector((state: RootState) => state.wishlist.items);

  return (
    <section className="mt-24 mb-24 flex flex-col  gap-6">
      {wishlist.map((product) => (
        <div
          key={product.id}
          className="flex flex-col md:flex-row items-center bg-white border rounded-xl shadow-md p-4 gap-4 hover:shadow-lg transition-all duration-300"
        >
          <img
            src={product.thumbnail}
            alt={product.title}
            className="w-full md:w-[150px] h-auto object-cover rounded-md"
          />
          <div className="flex flex-col gap-1 text-sm md:text-base">
            <p className="font-semibold">{product.brand}</p>
            <p className="text-gray-800">{product.title}</p>
            <p className="text-gray-500 line-clamp-2">{product.description}</p>
            <div className="flex items-center gap-4 mt-2">
              <span className="text-lg font-bold text-red-600">${product.price}</span>
              <button
                type="button"
                onClick={() => dispatch(removeWishlist(product.id))}
                className="rounded-md bg-gray-200 hover:bg-gray-300 text-sm px-6 py-1"
              >
                X
              </button>
            </div>
          </div>
        </div>
      ))}

      <FloatingButton />
    </section>
  );
}

export default StoredWishlist;

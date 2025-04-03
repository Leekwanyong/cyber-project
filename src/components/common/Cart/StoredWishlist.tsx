import { useDispatch, useSelector } from 'react-redux';
import Layout from '../Layouts/Layout';
import { AppDispatch, RootState } from '../../../redux/store';
import { removeWishlist } from '../../../redux/slice/wishlistSlice';

function StoredWishlist() {
  const dispatch = useDispatch<AppDispatch>();
  const wishlist = useSelector((state: RootState) => state.wishlist.items);

  return (
    <Layout>
      <section>
        {wishlist.map((product) => (
          <div key={product.id}>
            <div>
              <img src={product.thumbnail} alt={product.title} />
              <div>
                <p>{product.brand}</p>
                <p>{product.title}</p>
                <p>{product.description}</p>
                <p>${product.price}</p>
              </div>
              <button type="button" onClick={() => dispatch(removeWishlist(product.id))}>
                X
              </button>
            </div>
          </div>
        ))}
      </section>
    </Layout>
  );
}

export default StoredWishlist;

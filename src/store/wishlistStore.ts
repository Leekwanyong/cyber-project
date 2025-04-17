import { persist } from 'zustand/middleware';
import { create } from 'zustand';
import { Product } from '../types/card';

interface WishlistState {
  items: Product[];
  toggleWishlist: (product: Product) => void;
  removeWishlist: (id: number) => void;
}

const useWishlistStore = create<WishlistState>()(
  persist(
    (set) => ({
      items: [],
      toggleWishlist: (product) =>
        set((state) => {
          const exists = state.items.some((item) => item.id === product.id);
          const newItems = exists
            ? state.items.filter((item) => item.id !== product.id)
            : [...state.items, product];

          return { items: newItems };
        }),
      removeWishlist: (id) =>
        set((state) => ({
          items: state.items.filter((item) => item.id !== id),
        })),
    }),
    {
      name: 'wishlist-storage',
    }
  )
);

export default useWishlistStore;

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '../../types/card';

interface WishlistSliceProps {
  items: Product[];
}

const initialState: WishlistSliceProps = {
  items: JSON.parse(localStorage.getItem('item') || '[]'),
};

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    toggleWishlist(state, action: PayloadAction<Product>) {
      const exists = state.items.some((item) => item.id === action.payload.id);
      state.items = exists
        ? state.items.filter((item) => item.id !== action.payload.id)
        : [...state.items, action.payload];

      localStorage.setItem('item', JSON.stringify(state.items));
    },
    removeWishlist(state, action: PayloadAction<number>) {
      state.items = state.items.filter((item) => item.id !== action.payload);
      localStorage.setItem('item', JSON.stringify(state.items));
    },
  },
});

export const { toggleWishlist, removeWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;

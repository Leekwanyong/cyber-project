import { configureStore } from '@reduxjs/toolkit';
import asideReducer from './slice/asideSlice';
import wishlistReducer from './slice/wishlistSlice';

export const store = configureStore({
  reducer: { asideSlice: asideReducer, wishlist: wishlistReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

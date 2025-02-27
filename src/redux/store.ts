import { configureStore } from '@reduxjs/toolkit';
import asideReducer from './slice/asideSlice';

export const store = configureStore({
  reducer: { asideSlice: asideReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

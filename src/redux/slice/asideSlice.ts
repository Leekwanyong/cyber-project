import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ASIDE_DATA } from '../../constants/aside';

interface AsideSliceProps {
  asideData: Record<
    string,
    { id: number; name: string; checked: boolean; brand: string; category: string }[]
  >;
  open: Record<string, boolean>;
  sortOrder: string;
}

const initialState: AsideSliceProps = {
  asideData: ASIDE_DATA ?? {},
  open: {},
  sortOrder: 'asc',
};

const asideSlice = createSlice({
  name: 'aside',
  initialState,
  reducers: {
    onToggleChecked: (state, action: PayloadAction<{ id: number; value: string }>) => {
      const { id, value } = action.payload;
      state.asideData[value] = state.asideData[value].map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      );
    },
    onOpen: (state, action: PayloadAction<{ value: string }>) => {
      const { value } = action.payload;
      state.open[value] = !state.open[value];
    },
    sortOrderData: (state) => {
      state.sortOrder = state.sortOrder === 'asc' ? 'desc' : 'asc';
    },
  },
});

export const { onToggleChecked, onOpen, sortOrderData } = asideSlice.actions;
export default asideSlice.reducer;

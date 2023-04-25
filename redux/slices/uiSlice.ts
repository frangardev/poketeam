import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
    loading: boolean,
}

const initialState: CounterState = {
    loading: false,
}

export const uiSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
        state.loading = action.payload
      },
  },
});

export const { setLoading } = uiSlice.actions;

export default uiSlice.reducer;
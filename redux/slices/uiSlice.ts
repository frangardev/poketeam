import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
    loading: boolean,
    loadingTypes: boolean,
}

const initialState: CounterState = {
    loading: false,
    loadingTypes: false
}

export const uiSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
        state.loading = action.payload
      },
    setLoadingTypes: (state, action: PayloadAction<boolean>) => {
        state.loadingTypes = action.payload
      },
  },
});

export const { setLoading, setLoadingTypes } = uiSlice.actions;

export default uiSlice.reducer;
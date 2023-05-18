import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
    loading: boolean,
    loadingTypes: boolean,
    openModalSearch: boolean,
    openModalSearchNav: boolean,
}

const initialState: CounterState = {
    loading: false,
    loadingTypes: false,
    openModalSearch: false,
    openModalSearchNav: false
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
    setOpenModalSearch: (state, action: PayloadAction<boolean>) => {
        state.openModalSearch = action.payload
      },
    setOpenModalSearchNav: (state, action: PayloadAction<boolean>) => {
        state.openModalSearchNav = action.payload
      },
  },
});

export const { setLoading, setLoadingTypes, setOpenModalSearch, setOpenModalSearchNav } = uiSlice.actions;

export default uiSlice.reducer;
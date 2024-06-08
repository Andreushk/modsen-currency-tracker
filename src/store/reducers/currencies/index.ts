import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ICurrenciesFetchResult, ICurrenciesState } from './types';

const initialState: ICurrenciesState = {
  currencies: [],
  lastUpdated: null,
  isLoading: false,
  error: null,
};

const currenciesSlice = createSlice({
  name: 'Currencies Slice',
  initialState,
  reducers: {
    currenciesFetching(state) {
      state.isLoading = true;
    },
    currenciesFetchingSuccess(state, action: PayloadAction<ICurrenciesFetchResult>) {
      state.isLoading = false;
      state.error = null;
      state.lastUpdated = action.payload.lastUpdated;
      state.currencies = action.payload.currencies;
    },
    currenciesFetchingError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { currenciesFetching, currenciesFetchingSuccess, currenciesFetchingError } =
  currenciesSlice.actions;

export default currenciesSlice.reducer;

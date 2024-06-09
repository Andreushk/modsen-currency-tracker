import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ICurrenciesFetchResult, ICurrenciesState } from './types';

const initialState: ICurrenciesState = {
  currencies: [
    {
      code: 'USD',
      value: 1,
    },
    {
      code: 'ARS',
      value: 893.0018206962,
    },
    {
      code: 'AUD',
      value: 1.5025501737,
    },
    {
      code: 'BTC',
      value: 0.0000144016,
    },
    {
      code: 'CAD',
      value: 1.363190157,
    },
    {
      code: 'CNY',
      value: 7.2417307983,
    },
    {
      code: 'EUR',
      value: 0.9207701108,
    },
    {
      code: 'JPY',
      value: 156.8780944961,
    },
    {
      code: 'LRD',
      value: 192.9516431981,
    },
  ],
  lastUpdated: '2024-05-27T23:59:59Z',
  isLoading: false,
  error: null,
};

// const initialState: ICurrenciesState = {
//   currencies: [],
//   lastUpdated: null,
//   isLoading: false,
//   error: null,
// };

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

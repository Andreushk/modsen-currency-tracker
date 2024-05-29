import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ICurrencyExchangeData } from '@/types/api/currencyApi/currencies';

export interface ICurrenciesState {
  currencies: ICurrencyExchangeData[];
  lastUpdated: string | null;
}

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
};

// const initialState: ICurrenciesState = {
//   currencies: [],
//   lastUpdated: null,
// };

const currenciesSlice = createSlice({
  name: 'currencies',
  initialState,
  reducers: {
    addCurrencies: (state: ICurrenciesState, action: PayloadAction<ICurrenciesState>) => {
      state.lastUpdated = action.payload.lastUpdated;
      state.currencies = action.payload.currencies;
    },
  },
});

export const { addCurrencies } = currenciesSlice.actions;

export default currenciesSlice.reducer;

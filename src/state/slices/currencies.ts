import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ICurrencyExchangeData } from '@/types/api/currencies';

export interface ICurrenciesState {
  currencies: ICurrencyExchangeData[];
  lastUpdated: string | null;
}

const initialState: ICurrenciesState = {
  currencies: [],
  lastUpdated: null,
};

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

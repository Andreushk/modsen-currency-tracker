import { configureStore } from '@reduxjs/toolkit';

import currenciesSlice from './slices/currencies';
import themeSlice from './slices/theme';

export const store = configureStore({
  reducer: {
    theme: themeSlice,
    currencies: currenciesSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

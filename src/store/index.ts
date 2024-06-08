import { combineReducers, configureStore } from '@reduxjs/toolkit';

import currenciesSlice from './reducers/currencies';
import themeSlice from './reducers/theme';

const rootReducer = combineReducers({
  theme: themeSlice,
  currencies: currenciesSlice,
});

export const setupStore = () => configureStore({ reducer: rootReducer });

export type RootSate = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];

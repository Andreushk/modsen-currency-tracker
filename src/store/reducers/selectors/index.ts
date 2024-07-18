import { RootSate } from '@/store';

export const darkModeSelector = (state: RootSate) => state.theme.isDarkMode;

export const currenciesSelector = (state: RootSate) => state.currencies;

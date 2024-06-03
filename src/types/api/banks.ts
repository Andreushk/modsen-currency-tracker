import { AppCurrencyCodesType } from './currencies';

export interface IBankData {
  name: string;
  address: string;
  currencies: AppCurrencyCodesType[];
  coordinates: [number, number];
}

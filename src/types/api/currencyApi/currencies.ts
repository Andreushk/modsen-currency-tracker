export interface ICurrencyData {
  symbol: string;
  name: string;
  symbol_native: string;
  decimal_digits: number;
  rounding: number;
  code: string;
  name_plural: string;
  type: string;
  countries: string[];
}

export interface ICurrencyExchangeData {
  code: AppCurrencyCodesType | AppStocksType;
  value: number;
}

export type AppCurrencyCodesType =
  | 'USD'
  | 'ARS'
  | 'CAD'
  | 'JPY'
  | 'AUD'
  | 'CNY'
  | 'EUR'
  | 'BTC'
  | 'LRD';

export type AppStocksType = 'BVSP' | 'IFIX';

import { ICurrencyExchangeData } from '@/types/api/currencies';

export interface ICurrenciesState {
  currencies: ICurrencyExchangeData[];
  lastUpdated: string | null;
  isLoading: boolean;
  error: string | null;
}

export interface ICurrenciesFetchResult {
  lastUpdated: string;
  currencies: ICurrencyExchangeData[];
}

import { ICurrencyExchangeData } from './currencies';

interface ICurrenciesWithExchangeRatesResponse {
  meta: {
    last_updated_at: string;
  };
  data: ICurrencyExchangeData[];
}

export default ICurrenciesWithExchangeRatesResponse;

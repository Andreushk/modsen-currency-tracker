import axios, { AxiosResponse } from 'axios';

import { BASE_CURRENCY, currencies } from '@/constants/currencies';
import { ICurrenciesState } from '@/state/slices/currencies';
import ICurrenciesWithExchangeRatesResponse from '@/types/api/currencyApi/responses';

const EXCHANGES_URL = '/latest';

async function getCurrenciesWithExchangeRates(): Promise<ICurrenciesState> {
  const response: AxiosResponse<ICurrenciesWithExchangeRatesResponse> = await axios.get(
    `${process.env.REACT_APP_CURRENCY_API_BASE_URL + EXCHANGES_URL}`,
    {
      params: {
        apikey: process.env.REACT_APP_CURRENCY_AP,
        base_currency: BASE_CURRENCY,
        currencies: currencies.join(','),
      },
    },
  );

  const result: ICurrenciesState = {
    lastUpdated: response.data.meta.last_updated_at,
    currencies: Object.values(response.data.data),
  };

  return result;
}

export default getCurrenciesWithExchangeRates;

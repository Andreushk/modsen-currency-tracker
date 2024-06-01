import { BASE_CURRENCY, currencies } from '@/constants/currencies';
import { ICurrenciesState } from '@/state/slices/currencies';
import ICurrencyApiResponse from '@/types/api/response';

import makeApiRequest from './makeApiRequest';

async function getCurrenciesWithExchangeRates(): Promise<ICurrenciesState> {
  const response: ICurrencyApiResponse = await makeApiRequest(BASE_CURRENCY, currencies);

  const result: ICurrenciesState = {
    lastUpdated: response.meta.last_updated_at,
    currencies: Object.values(response.data),
  };

  return result;
}

export default getCurrenciesWithExchangeRates;

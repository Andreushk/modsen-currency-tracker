import axios, { AxiosResponse } from 'axios';

import { AppCurrencyCodesType } from '@/types/api/currencies';
import { ICurrencyApiResponse } from '@/types/api/response';

const ENV_ERROR = 'Unable to query: no environment variables available.';

async function makeApiRequest(
  baseCurrency: AppCurrencyCodesType,
  interestingCurrencies: readonly AppCurrencyCodesType[],
): Promise<ICurrencyApiResponse> {
  const requestURL = process.env.REACT_APP_CURRENCY_API_URL;

  if (!requestURL) {
    throw new Error(ENV_ERROR);
  }

  const response: AxiosResponse<ICurrencyApiResponse> = await axios.get(requestURL, {
    params: {
      apikey: process.env.REACT_APP_CURRENCY_API,
      base_currency: baseCurrency,
      currencies: interestingCurrencies.join(','),
    },
  });

  return response.data;
}

export default makeApiRequest;

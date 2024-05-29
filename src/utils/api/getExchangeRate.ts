import { AppCurrencyCodesType } from '@/types/api/currencies';

import makeApiRequest from './makeApiRequest';

const ERROR_MESSAGE = 'Failed to retrieve the currency information.';

async function getExchangeRate(
  baseCurrency: AppCurrencyCodesType,
  selectedCurrency: AppCurrencyCodesType,
): Promise<number> {
  const response = await makeApiRequest(baseCurrency, [selectedCurrency]);

  if (response.data.length === 0) {
    throw new Error(ERROR_MESSAGE);
  }

  const result: number = Object.values(response.data)[0].value;
  return result;
}

export default getExchangeRate;

import { IBankData } from '@/types/api/banks';
import { IBankApiInformation } from '@/types/api/response';

import getRandomCurrencyCodes from './getRandomCurrencyCodes';

function transformBanksApiResponse(banks: IBankApiInformation[]) {
  const result: IBankData[] = [];

  banks.forEach((data: IBankApiInformation) => {
    const { name, full_address: address } = data.properties;
    const { coordinates } = data.geometry;
    const bank: IBankData = { name, address, coordinates, currencies: getRandomCurrencyCodes() };
    result.push(bank);
  });

  return result;
}

export default transformBanksApiResponse;

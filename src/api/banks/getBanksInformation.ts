import { IBankData } from '@/types/api/banks';
import { IBankApiInformation, ISuggestion } from '@/types/api/response';
import getRandomCurrencyCodes from '@/utils/helpers/getRandomCurrencyCodes';

import fetchBanks from './fetchBanks';
import fetchSuggestions from './fetchSuggestions';

async function getBanksInformation(lng: number, lat: number): Promise<IBankData[] | null> {
  try {
    const suggestions: ISuggestion[] = await fetchSuggestions(lng, lat);

    let banksMapboxId: string = '';
    for (let i = 0; i < suggestions.length; ) {
      if (suggestions[i].feature_type === 'category' && suggestions[i].name === 'Bank') {
        banksMapboxId = suggestions[i].mapbox_id;
        break;
      }
      i += 1;
    }

    const banks: IBankApiInformation[] = await fetchBanks(banksMapboxId);

    const result: IBankData[] = [];

    banks.forEach((data: IBankApiInformation) => {
      const { name, full_address: address } = data.properties;
      const { coordinates } = data.geometry;
      const bank: IBankData = { name, address, coordinates, currencies: getRandomCurrencyCodes() };
      result.push(bank);
    });

    return result;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export default getBanksInformation;

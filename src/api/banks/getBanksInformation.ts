import { IBankData } from '@/types/api/banks';
import { IBankApiInformation, ISuggestion } from '@/types/api/response';
import getBanksMapboxId from '@/utils/helpers/getBanksMapboxId';
import transformBanksApiResponse from '@/utils/helpers/transformBanksApiResponse';

import fetchBanks from './fetchBanks';
import fetchSuggestions from './fetchSuggestions';

async function getBanksInformation(lng: number, lat: number): Promise<IBankData[] | null> {
  try {
    const suggestions: ISuggestion[] = await fetchSuggestions(lng, lat);
    const banks: IBankApiInformation[] = await fetchBanks(getBanksMapboxId(suggestions));
    return transformBanksApiResponse(banks);
  } catch (error) {
    console.error(error);
    return null;
  }
}

export default getBanksInformation;

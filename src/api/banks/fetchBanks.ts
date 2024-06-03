import axios, { AxiosResponse } from 'axios';

import { IBankApiInformation, IBanksRetrieveApiResponse } from '@/types/api/response';

const RETRIEVE_URL = '/retrieve';

async function fetchBanks(mapboxId: string): Promise<IBankApiInformation[]> {
  const params = `session_token=08e202e0-ef50-4151-88fe-25b67d504583&access_token=${process.env.REACT_APP_MAPBOX_API_KEY}`;
  const REQUEST_URL = `${process.env.REACT_APP_MAPBOX_API_URL}${RETRIEVE_URL}/${mapboxId}?${params}`;

  const response: AxiosResponse<IBanksRetrieveApiResponse> = await axios.get(REQUEST_URL);
  const data: IBankApiInformation[] = response.data.features;
  return data;
}

export default fetchBanks;

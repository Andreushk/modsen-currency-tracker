import axios, { AxiosResponse } from 'axios';

import { IBanksSuggestionsApiResponse, ISuggestion } from '@/types/api/response';

const SUGGESTIONS_PATH = '/suggest';

async function fetchSuggestions(lng: number, lat: number): Promise<ISuggestion[]> {
  const parameters = `q=Bank&language=en&limit=10&poi_category=bank&proximity=${lng},${lat}&session_token=08e202e0-ef50-4151-88fe-25b67d504583&access_token=${process.env.REACT_APP_MAPBOX_API_KEY}`;
  const SUGGESTIONS_URL = `${process.env.REACT_APP_MAPBOX_API_URL}${SUGGESTIONS_PATH}?${parameters}`;

  const response: AxiosResponse<IBanksSuggestionsApiResponse> = await axios.get(SUGGESTIONS_URL);
  const data: ISuggestion[] = response.data.suggestions;
  return data;
}

export default fetchSuggestions;

import { ICurrencyExchangeData } from './currencies';

export interface ISuggestion {
  name: string;
  mapbox_id: string;
  feature_type: string;
}

export interface IBankApiInformation {
  geometry: {
    coordinates: [number, number];
  };
  properties: {
    name: string;
    full_address: string;
  };
}

export interface ICurrencyApiResponse {
  meta: {
    last_updated_at: string;
  };
  data: ICurrencyExchangeData[];
}

export interface IBanksSuggestionsApiResponse {
  suggestions: ISuggestion[];
}

export interface IBanksRetrieveApiResponse {
  type: string;
  features: IBankApiInformation[];
}

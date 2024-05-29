import { ICurrencyExchangeData } from './currencies';

interface ICurrencyApiResponse {
  meta: {
    last_updated_at: string;
  };
  data: ICurrencyExchangeData[];
}

export default ICurrencyApiResponse;

import axios, { AxiosError } from 'axios';

import { BASE_CURRENCY, currencies } from '@/constants/currencies';
import ENV_ERROR from '@/constants/envErrorMessage';
import { AppDispatch } from '@/store';
import { ICurrencyApiResponse } from '@/types/api/response';

import { currenciesFetching, currenciesFetchingError, currenciesFetchingSuccess } from '.';
import { ICurrenciesFetchResult } from './types';

const fetchCurrenciesWithRates = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(currenciesFetching());

    const requestURL = process.env.REACT_APP_CURRENCY_API_URL;
    if (!requestURL) throw new Error(ENV_ERROR);

    const response = await axios.get<ICurrencyApiResponse>(requestURL, {
      params: {
        apikey: process.env.REACT_APP_CURRENCY_API,
        base_currency: BASE_CURRENCY,
        currencies: currencies.join(','),
      },
    });

    const result: ICurrenciesFetchResult = {
      lastUpdated: response.data.meta.last_updated_at,
      currencies: Object.values(response.data.data),
    };

    dispatch(currenciesFetchingSuccess(result));
  } catch (e) {
    const error = e as AxiosError;
    dispatch(currenciesFetchingError(error.message));
  }
};

export default fetchCurrenciesWithRates;

import { AxiosError } from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import getExchangeRates from '@/api/currencies/getExchangeRates';
import { BASE_CURRENCY, currencies } from '@/constants/currencies';
import { addCurrencies } from '@/state/slices/currencies';
import { RootState } from '@/state/store';

const useCurrenciesExchangeRates = () => {
  const currenciesRates = useSelector((state: RootState) => state.currencies);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const dispatch = useDispatch();

  useEffect((): void => {
    if (currenciesRates.currencies.length > 0) {
      return;
    }

    const getRates = async () => {
      try {
        setIsLoading(true);

        const response = await getExchangeRates(BASE_CURRENCY, currencies);
        const result = {
          lastUpdated: response.meta.last_updated_at,
          currencies: Object.values(response.data),
        };

        setIsLoading(false);
        dispatch(addCurrencies(result));
      } catch (e) {
        const error = e as AxiosError;
        console.error(error.message);
        setError(error.message);
        setIsLoading(false);
      }
    };

    getRates();
  }, [currenciesRates, dispatch]);

  return { currenciesRates, isLoading, error };
};

export default useCurrenciesExchangeRates;

import { AxiosError } from 'axios';
import { useEffect, useState } from 'react';

import getExchangeRates from '@/api/currencies/getExchangeRates';
import { AppCurrencyCodesType } from '@/types/api/currencies';

const ERROR_MESSAGE = 'Failed to retrieve the currency information.';

const useCurrencyExchangeRate = (
  baseCurrency: AppCurrencyCodesType,
  currencyCode: AppCurrencyCodesType,
) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [rate, setRate] = useState<number | null>(null);

  useEffect((): void => {
    const getRate = async () => {
      try {
        setIsLoading(true);

        const response = await getExchangeRates(baseCurrency, [currencyCode]);
        if (response.data.length === 0) throw new Error(ERROR_MESSAGE);
        const result: number = Object.values(response.data)[0].value;

        setIsLoading(false);
        setRate(result);
      } catch (e) {
        const error = e as AxiosError;
        console.error(error.message);
        setError(error.message);
        setIsLoading(false);
      }
    };

    getRate();
  }, [baseCurrency, currencyCode]);

  return { rate, isLoading, error };
};

export default useCurrencyExchangeRate;

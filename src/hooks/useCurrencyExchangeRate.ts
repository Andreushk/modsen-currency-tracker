import { AxiosError } from 'axios';
import { useEffect, useState } from 'react';

import getExchangeRate from '@/api/getExchangeRate';
import { AppCurrencyCodesType } from '@/types/api/currencies';

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
        const response: number = await getExchangeRate(baseCurrency, currencyCode);
        setIsLoading(false);
        setRate(response);
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

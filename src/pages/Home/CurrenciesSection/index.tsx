import { AxiosError } from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { CurrenciesGrid, Currency, LastUpdated, LoadingCurrency, SectionError } from '@/components';
import { currencies as CURRENCIES_ARRAY } from '@/constants/currencies';
import { addCurrencies, ICurrenciesState } from '@/state/slices/currencies';
import { RootState } from '@/state/store';
import getCurrenciesWithExchangeRates from '@/utils/api/getCurrenciesWithExchangeRates';

import STOCKS_OPTIONS from './options';
import StyledSection from './styled';

const STOCKS_TITLE = 'Stocks';
const QUOTES_TITLE = 'Quotes';

const CurrenciesSection: React.FC = () => {
  const currencies = useSelector((state: RootState) => state.currencies);
  const [isLoading, setIsLoading] = useState<boolean>(currencies.currencies.length === 0);
  const [error, setError] = useState<string | null>(null);

  const dispatch = useDispatch();

  useEffect(() => {
    if (currencies.currencies.length > 0) {
      return;
    }

    const fetchData = async () => {
      try {
        const response: ICurrenciesState = await getCurrenciesWithExchangeRates();
        dispatch(addCurrencies(response));
        setIsLoading(false);
      } catch (e) {
        const errorObject = e as AxiosError;
        console.error(errorObject.code);
        setError(errorObject.message);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [currencies, dispatch]);

  if (error) {
    return <SectionError message={error} />;
  }

  if (isLoading) {
    return (
      <StyledSection>
        <LastUpdated isLoading={isLoading} lastUpdated={currencies.lastUpdated} />
        <CurrenciesGrid title={STOCKS_TITLE}>
          {STOCKS_OPTIONS.map(({ code }) => (
            <LoadingCurrency key={code} />
          ))}
        </CurrenciesGrid>
        <CurrenciesGrid title={QUOTES_TITLE}>
          {CURRENCIES_ARRAY.map((code) => (
            <LoadingCurrency key={code} />
          ))}
        </CurrenciesGrid>
      </StyledSection>
    );
  }

  return (
    <StyledSection>
      <LastUpdated isLoading={isLoading} lastUpdated={currencies.lastUpdated} />
      <CurrenciesGrid title={STOCKS_TITLE}>
        {STOCKS_OPTIONS.map(({ title, value, code }) => (
          <Currency key={code} title={title} value={value} code={code} />
        ))}
      </CurrenciesGrid>
      <CurrenciesGrid title={QUOTES_TITLE}>
        {currencies.currencies.map(({ value, code }) => (
          <Currency key={code} title={code} value={String(value)} code={code} $isClickable />
        ))}
      </CurrenciesGrid>
    </StyledSection>
  );
};

export default CurrenciesSection;

import { AxiosError } from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { LastUpdated, SectionError } from '@/components';
import useDisableBodyScroll from '@/hooks/useDisableBodyScroll';
import { addCurrencies, ICurrenciesState } from '@/state/slices/currencies';
import { RootState } from '@/state/store';
import { AppCurrencyCodesType } from '@/types/api/currencies';
import getCurrenciesWithExchangeRates from '@/utils/api/getCurrenciesWithExchangeRates';

import Currencies from './Currencies';
import Loading from './Loading';
import Modal from './Modal';
import StyledSection from './styled';

const CurrenciesSection: React.FC = () => {
  const currenciesData = useSelector((state: RootState) => state.currencies);
  const [isLoading, setIsLoading] = useState<boolean>(currenciesData.currencies.length === 0);
  const [error, setError] = useState<string | null>(null);
  const [currencyCode, setCurrencyCode] = useState<AppCurrencyCodesType | null>(null);

  useDisableBodyScroll(Boolean(currencyCode));
  const dispatch = useDispatch();

  useEffect(() => {
    if (currenciesData.currencies.length > 0) {
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
  }, [currenciesData, dispatch]);

  const handleClickedCurrency = (currencyCode: AppCurrencyCodesType): void => {
    setCurrencyCode(currencyCode);
  };

  const handleModalClose = (): void => {
    setCurrencyCode(null);
  };

  if (error) {
    return <SectionError message={error} />;
  }

  return (
    <StyledSection>
      <LastUpdated isLoading={isLoading} lastUpdated={currenciesData.lastUpdated} />
      {isLoading && <Loading />}
      {!isLoading && <Currencies currenciesData={currenciesData} onClick={handleClickedCurrency} />}
      {currencyCode && <Modal selectedCurrencyCode={currencyCode} onClose={handleModalClose} />}
    </StyledSection>
  );
};

export default CurrenciesSection;

import { useEffect, useState } from 'react';

import { LastUpdated, SectionError, SectionWithPaddings } from '@/components';
import { useAppDispatch, useAppSelector, useDisableBodyScroll } from '@/hooks';
import fetchCurrenciesWithRates from '@/store/reducers/currencies/actionCreators';
import { AppCurrencyCodesType } from '@/types/api/currencies';

import Currencies from './Currencies';
import Loading from './Loading';
import Modal from './Modal';

const CurrenciesSection: React.FC = () => {
  const [currencyCode, setCurrencyCode] = useState<AppCurrencyCodesType | null>(null);
  const { currencies, isLoading, lastUpdated, error } = useAppSelector((state) => state.currencies);

  const dispatch = useAppDispatch();
  useDisableBodyScroll(Boolean(currencyCode));

  useEffect((): void => {
    dispatch(fetchCurrenciesWithRates());
  }, [dispatch]);

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
    <SectionWithPaddings>
      <LastUpdated isLoading={isLoading} lastUpdated={lastUpdated} />
      {isLoading && <Loading />}
      {!isLoading && <Currencies currenciesData={currencies} onClick={handleClickedCurrency} />}
      {currencyCode && <Modal selectedCurrencyCode={currencyCode} onClose={handleModalClose} />}
    </SectionWithPaddings>
  );
};

export default CurrenciesSection;

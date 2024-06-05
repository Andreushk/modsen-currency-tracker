import { useState } from 'react';

import { LastUpdated, SectionError, SectionWithPaddings } from '@/components';
import useCurrenciesExchangeRates from '@/hooks/useCurrenciesExchangeRates';
import useDisableBodyScroll from '@/hooks/useDisableBodyScroll';
import { AppCurrencyCodesType } from '@/types/api/currencies';

import Currencies from './Currencies';
import Loading from './Loading';
import Modal from './Modal';

const CurrenciesSection: React.FC = () => {
  const [currencyCode, setCurrencyCode] = useState<AppCurrencyCodesType | null>(null);
  const { currenciesRates, isLoading, error } = useCurrenciesExchangeRates();
  useDisableBodyScroll(Boolean(currencyCode));

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
      <LastUpdated isLoading={isLoading} lastUpdated={currenciesRates.lastUpdated} />
      {isLoading && <Loading />}
      {!isLoading && (
        <Currencies currenciesData={currenciesRates} onClick={handleClickedCurrency} />
      )}
      {currencyCode && <Modal selectedCurrencyCode={currencyCode} onClose={handleModalClose} />}
    </SectionWithPaddings>
  );
};

export default CurrenciesSection;

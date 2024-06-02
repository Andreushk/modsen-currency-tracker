import { useState } from 'react';

import { Paragraph } from '@/components';
import useCurrencyExchangeRate from '@/hooks/useCurrencyExchangeRate';
import { AppCurrencyCodesType } from '@/types/api/currencies';

import CurrencyItem from './CurrencyItem';
import Inputs from './Inputs';
import ResultBlock from './ResultBlock';
import StyledContainer from './styled';

interface IComponentProps {
  baseCurrency: AppCurrencyCodesType;
}

const Exchange: React.FC<IComponentProps> = ({ baseCurrency }) => {
  const [selectedCurrencyCode, setSelectedCurrencyCode] = useState<AppCurrencyCodesType>('USD');
  const { rate, isLoading, error } = useCurrencyExchangeRate(baseCurrency, selectedCurrencyCode);

  const handleSelect = (selectedCurrencyCode: AppCurrencyCodesType) => {
    setSelectedCurrencyCode(selectedCurrencyCode);
  };

  return (
    <>
      <StyledContainer>
        <CurrencyItem baseCurrencyCode={baseCurrency} />
        <Paragraph>To</Paragraph>
        <CurrencyItem onSelect={handleSelect} />
      </StyledContainer>
      <ResultBlock exchangeRate={rate} isLoading={isLoading} error={error} />
      <Inputs key={rate} exchangeRate={rate} isDisabled={isLoading || Boolean(error)} />
    </>
  );
};

export default Exchange;

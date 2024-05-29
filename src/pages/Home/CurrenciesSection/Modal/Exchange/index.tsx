import { AxiosError } from 'axios';
import { useState } from 'react';

import { Paragraph } from '@/components';
import { AppCurrencyCodesType } from '@/types/api/currencies';
import getExchangeRate from '@/utils/api/getExchangeRate';

import CurrencyItem from './CurrencyItem';
import ResultBlock from './ResultBlock';
import StyledContainer from './styled';

interface IComponentProps {
  baseCurrency: AppCurrencyCodesType;
}

const Exchange: React.FC<IComponentProps> = ({ baseCurrency }) => {
  const [exchangeRate, setExchangeRate] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleSelect = async (selectedCurrencyCode: AppCurrencyCodesType) => {
    try {
      setIsLoading(true);
      const response: number = await getExchangeRate(baseCurrency, selectedCurrencyCode);
      setIsLoading(false);
      setExchangeRate(response);
    } catch (e) {
      const error = e as AxiosError;
      console.error(error.message);
      setError(error.message);
      setIsLoading(false);
    }
  };

  return (
    <>
      <StyledContainer>
        <CurrencyItem baseCurrencyCode={baseCurrency} />
        <Paragraph>To</Paragraph>
        <CurrencyItem onSelect={handleSelect} />
      </StyledContainer>
      <ResultBlock exchangeRate={exchangeRate} isLoading={isLoading} error={error} />
    </>
  );
};

export default Exchange;

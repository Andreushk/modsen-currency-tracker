import React, { useState } from 'react';

import { Paragraph } from '@/components';
import exchangeCurrency, { FromCurrencyType } from '@/utils/helpers/exchangeCurrencies';
import roundExchangeRate from '@/utils/helpers/roundExchangeRate';

import StyledContainer from './styled';

const LOADING_INPUT_TEXT = 'Loading...';

interface IComponentProps {
  isDisabled: boolean;
  exchangeRate: number | null;
}

const Inputs: React.FC<IComponentProps> = ({ isDisabled, exchangeRate }) => {
  const [baseCurrency, setBaseCurrency] = useState<string>('1');
  const [secondCurrency, setSecondCurrency] = useState<string | null>(null);

  if (exchangeRate && !secondCurrency) {
    setSecondCurrency(roundExchangeRate(exchangeRate));
  }

  const makeCurrencyExchange = (value: string, fromCurrency: FromCurrencyType): void => {
    if (value === '0' || value === '00' || !value) {
      setSecondCurrency('0');
      setBaseCurrency('0');
      return;
    }

    let exchangeValue = value;

    if (value.length > 1 && value[0] === '0' && value[1] !== '0' && value[1] !== '.') {
      exchangeValue = value.charAt(1);
    }

    const { base, secondary } = exchangeCurrency(
      fromCurrency === 'base' ? exchangeValue : baseCurrency,
      fromCurrency === 'secondary' ? exchangeValue : secondCurrency!,
      exchangeRate!,
      fromCurrency,
    );

    setSecondCurrency(String(secondary));
    setBaseCurrency(String(base));
  };

  const handleBaseCurrencyChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const value = e.target.value.trim();
    makeCurrencyExchange(value, 'base');
  };

  const handleSecondaryCurrencyChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const value = e.target.value.trim();
    makeCurrencyExchange(value, 'secondary');
  };

  return (
    <StyledContainer>
      <input
        type="number"
        value={baseCurrency}
        disabled={isDisabled || !exchangeRate}
        onChange={handleBaseCurrencyChange}
      />
      <Paragraph>:</Paragraph>
      <input
        type="number"
        value={secondCurrency ?? LOADING_INPUT_TEXT}
        disabled={isDisabled || !exchangeRate}
        onChange={handleSecondaryCurrencyChange}
      />
    </StyledContainer>
  );
};

export default Inputs;

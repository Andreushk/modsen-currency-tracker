import React from 'react';

import { CurrencyIcon } from '@/components';
import { AppCurrencyCodesType, AppStocksType } from '@/types/api/currencies';

import Information from './Information';
import { IStyleProps, StyledContainer } from './styled';

interface IComponentProps extends IStyleProps {
  title: string;
  value: string;
  code: AppCurrencyCodesType | AppStocksType;
}

const Currency: React.FC<IComponentProps> = ({ title, value, code, $isClickable = false }) => (
  <StyledContainer $isClickable={$isClickable} data-currency-code={$isClickable ? code : null}>
    <CurrencyIcon code={code} />
    <Information title={title} value={value} />
  </StyledContainer>
);

export default React.memo(Currency);
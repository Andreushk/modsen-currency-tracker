import React from 'react';

import { AppCurrencyCodesType, AppStocksType } from '@/types/api/currencyApi/currencies';

import Icon from './Icon';
import Information from './Information';
import { IStyleProps, StyledContainer } from './styled';

interface IComponentProps extends IStyleProps {
  title: string;
  value: string;
  code: AppCurrencyCodesType | AppStocksType;
}

const Currency: React.FC<IComponentProps> = ({ title, value, code, $isClickable = false }) => (
  <StyledContainer $isClickable={$isClickable} data-currency-code={$isClickable ? code : null}>
    <Icon code={code} />
    <Information title={title} value={value} />
  </StyledContainer>
);

export default React.memo(Currency);

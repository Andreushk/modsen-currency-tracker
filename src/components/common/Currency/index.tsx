import React from 'react';

import { CurrencyIcon } from '@/components';
import { AppCurrencyCodesType, AppStocksType } from '@/types/api/currencies';

import Information from './Information';
import { IStyleProps, StyledContainer } from './styled';

interface IComponentProps extends IStyleProps {
  value: string;
  code: AppCurrencyCodesType | AppStocksType;
  isWithRounding?: boolean;
}

const Currency: React.FC<IComponentProps> = ({
  value,
  code,
  isWithRounding = false,
  $isClickable = false,
}) => (
  <StyledContainer $isClickable={$isClickable} data-currency-code={$isClickable ? code : null}>
    <CurrencyIcon code={code} />
    <Information code={code} value={value} isWithRounding={isWithRounding} />
  </StyledContainer>
);

export default React.memo(Currency);

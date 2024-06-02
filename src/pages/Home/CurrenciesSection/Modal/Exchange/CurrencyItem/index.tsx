import React, { useState } from 'react';

import { CurrencyIcon, Paragraph, Select } from '@/components';
import { SELECT_OPTION } from '@/constants/currencies';
import { AppCurrencyCodesType } from '@/types/api/currencies';

import { StyledContainer, StyledCurrencyCodeContainer } from './styled';

interface IComponentProps {
  baseCurrencyCode?: AppCurrencyCodesType;
  onSelect?: (code: AppCurrencyCodesType) => void;
}

const CurrencyItem: React.FC<IComponentProps> = ({ baseCurrencyCode, onSelect }) => {
  const [selectedCode, setSelectedCode] = useState<AppCurrencyCodesType>('USD');

  const handleSelectedCode = (selectedCode: string) => {
    if (onSelect) {
      setSelectedCode(selectedCode as AppCurrencyCodesType);
      onSelect(selectedCode as AppCurrencyCodesType);
    }
  };

  return (
    <StyledContainer>
      {(baseCurrencyCode || selectedCode) && (
        <CurrencyIcon code={baseCurrencyCode || selectedCode!} />
      )}
      <StyledCurrencyCodeContainer>
        {baseCurrencyCode && <Paragraph>{baseCurrencyCode}</Paragraph>}
        {!baseCurrencyCode && (
          <Select selectOptions={SELECT_OPTION} changeCB={handleSelectedCode} withDefaultValue />
        )}
      </StyledCurrencyCodeContainer>
    </StyledContainer>
  );
};

export default React.memo(CurrencyItem);

import React, { useState } from 'react';

import { CurrencyIcon, CurrencyIconPlaceholder, Paragraph, Select } from '@/components';
import { AppCurrencyCodesType } from '@/types/api/currencies';

import SELECT_OPTION from './options';
import { StyledContainer, StyledCurrencyCodeContainer } from './styled';

interface IComponentProps {
  baseCurrencyCode?: AppCurrencyCodesType;
  onSelect?: (code: AppCurrencyCodesType) => void;
}

const CurrencyItem: React.FC<IComponentProps> = ({ baseCurrencyCode, onSelect }) => {
  const [selectedCode, setSelectedCode] = useState<AppCurrencyCodesType | null>(null);

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
      {!baseCurrencyCode && !selectedCode && <CurrencyIconPlaceholder />}
      <StyledCurrencyCodeContainer>
        {baseCurrencyCode && <Paragraph>{baseCurrencyCode}</Paragraph>}
        {!baseCurrencyCode && (
          <Select selectOptions={SELECT_OPTION} changeCB={handleSelectedCode} />
        )}
      </StyledCurrencyCodeContainer>
    </StyledContainer>
  );
};

export default React.memo(CurrencyItem);

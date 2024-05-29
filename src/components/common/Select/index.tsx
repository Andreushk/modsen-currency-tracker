import React from 'react';

import { StyledContainer, StyledLabel, StyledSelect } from './styled';

export type SelectOptionType = {
  displayValue: string;
  value: string;
};

interface IComponentProps {
  selectLabel?: string;
  selectOptions: SelectOptionType[];
  changeCB: (selectedValue: string) => void;
}

const Select: React.FC<IComponentProps> = ({ selectLabel, selectOptions, changeCB }) => {
  const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    changeCB(event.target.value);
  };

  return (
    <StyledContainer>
      {selectLabel && <StyledLabel>{selectLabel}</StyledLabel>}
      <StyledSelect onChange={handleSelect} data-testid="select">
        {selectOptions.map(({ displayValue, value }) => (
          <option key={value} value={value}>
            {displayValue}
          </option>
        ))}
      </StyledSelect>
    </StyledContainer>
  );
};

export default Select;

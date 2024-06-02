import React from 'react';

import SelectIcon from '@/assets/icons/vector.svg';

import { StyledContainer, StyledSelect, StyledSelectOpenIcon } from './styled';

export type SelectOptionType = {
  displayValue: string;
  value: string;
};

interface IComponentProps {
  selectOptions: SelectOptionType[];
  changeCB: (selectedValue: string) => void;
  withDefaultValue?: boolean;
}

const Select: React.FC<IComponentProps> = ({ selectOptions, changeCB, withDefaultValue }) => {
  const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    changeCB(event.target.value);
  };

  return (
    <StyledContainer>
      <StyledSelect
        defaultValue={
          withDefaultValue ? selectOptions.find(({ value }) => value === 'USD')?.value : undefined
        }
        onChange={handleSelect}
        data-testid="select"
      >
        {selectOptions.map(({ displayValue, value }) => (
          <option key={value} value={value}>
            {displayValue}
          </option>
        ))}
      </StyledSelect>
      <StyledSelectOpenIcon>
        <SelectIcon />
      </StyledSelectOpenIcon>
    </StyledContainer>
  );
};

export default Select;

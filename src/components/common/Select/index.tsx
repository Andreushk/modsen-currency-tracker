import React from 'react';

import SelectIcon from '@/assets/icons/vector.svg';

import { StyledContainer, StyledSelect, StyledSelectOpenIcon } from './styled';

export type SelectOptionType<T = string> = {
  displayValue: string;
  value: T;
};

interface IComponentProps<T = string> {
  selectOptions: SelectOptionType<T>[];
  changeCB: (selectedValue: T) => void;
  withDefaultValue?: boolean;
}

const Select = <T extends string>({
  selectOptions,
  changeCB,
  withDefaultValue,
}: IComponentProps<T>) => {
  const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    changeCB(event.target.value as T);
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
          <option key={String(value)} value={value}>
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

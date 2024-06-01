import { PureComponent, ReactNode } from 'react';

import { Select } from '@/components';
import { SELECT_OPTION } from '@/constants/currencies';
import { AppCurrencyCodesType } from '@/types/api/currencies';

import StyledSelectContainer from './styled';

interface IComponentProps {
  onSelect: (selectedCurrencyCode: AppCurrencyCodesType) => void;
}

class SelectPart extends PureComponent<IComponentProps> {
  handleSelect = (selectedCurrencyCode: string): void => {
    this.props.onSelect(selectedCurrencyCode as AppCurrencyCodesType);
  };

  render(): ReactNode {
    return (
      <StyledSelectContainer>
        <Select selectOptions={SELECT_OPTION} changeCB={this.handleSelect} />
      </StyledSelectContainer>
    );
  }
}

export default SelectPart;

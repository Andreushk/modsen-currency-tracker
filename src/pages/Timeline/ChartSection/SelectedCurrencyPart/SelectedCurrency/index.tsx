import { Component, ReactNode } from 'react';

import { CurrencyIcon, Title } from '@/components';
import namesMap from '@/constants/currenciesNamesMap';
import { AppCurrencyCodesType } from '@/types/api/currencies';

import { StyledCode, StyledInformationContainer } from './styled';

interface IComponentProps {
  code: AppCurrencyCodesType;
}

class SelectedCurrency extends Component<IComponentProps> {
  render(): ReactNode {
    return (
      <>
        <CurrencyIcon code={this.props.code} />
        <StyledInformationContainer>
          <Title as="h4" $fontSize="M" $fontWeight="light">
            {namesMap[this.props.code]}
          </Title>
          <StyledCode>{this.props.code}</StyledCode>
        </StyledInformationContainer>
      </>
    );
  }
}

export default SelectedCurrency;

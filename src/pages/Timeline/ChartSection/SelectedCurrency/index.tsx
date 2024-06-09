import { PureComponent, ReactNode } from 'react';

import { CurrencyIcon, Title } from '@/components';
import namesMap from '@/constants/currenciesNamesMap';
import { AppCurrencyCodesType } from '@/types/api/currencies';

import { StyledCode, StyledContainer, StyledInformationContainer } from './styled';

interface IComponentProps {
  code: AppCurrencyCodesType;
}

class SelectedCurrency extends PureComponent<IComponentProps> {
  render(): ReactNode {
    return (
      <StyledContainer>
        <CurrencyIcon code={this.props.code} />
        <StyledInformationContainer>
          <Title as="h4" $fontSize="M" $fontWeight="light">
            {namesMap[this.props.code]}
          </Title>
          <StyledCode>{this.props.code}</StyledCode>
        </StyledInformationContainer>
      </StyledContainer>
    );
  }
}

export default SelectedCurrency;

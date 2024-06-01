import { PureComponent, ReactNode } from 'react';

import { AppCurrencyCodesType } from '@/types/api/currencies';

import Placeholder from './Placeholder';
import SelectedCurrency from './SelectedCurrency';
import StyledContainer from './styled';

interface IComponentProps {
  code: AppCurrencyCodesType | null;
}

class SelectedCurrencyPart extends PureComponent<IComponentProps> {
  render(): ReactNode {
    return (
      <StyledContainer>
        {this.props.code && <SelectedCurrency code={this.props.code} />}
        {!this.props.code && <Placeholder />}
      </StyledContainer>
    );
  }
}

export default SelectedCurrencyPart;

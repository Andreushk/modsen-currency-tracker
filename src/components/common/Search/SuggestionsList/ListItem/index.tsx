import { PureComponent, ReactNode } from 'react';

import { AppCurrencyCodesType } from '@/types/api/currencies';

import StyledItem from './styled';

interface IComponentProps {
  value: AppCurrencyCodesType;
}

class ListItem extends PureComponent<IComponentProps> {
  render(): ReactNode {
    return (
      <StyledItem type="button" data-currency-code={this.props.value}>
        {this.props.value}
      </StyledItem>
    );
  }
}

export default ListItem;

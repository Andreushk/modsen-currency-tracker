import { PureComponent, ReactNode } from 'react';

import { currencies } from '@/constants/currencies';
import { AppCurrencyCodesType } from '@/types/api/currencies';
import getCurrencyCodeFromParentAttribute from '@/utils/helpers/getCurrencyCodeFromParentAttribute';

import ListItem from './ListItem';
import StyledContainer from './styled';

interface IComponentProps {
  searchValue: string;
  onSelect: (selectedValue: AppCurrencyCodesType) => void;
}

class SuggestionsList extends PureComponent<IComponentProps> {
  handleSuggestionListClick = (e: React.MouseEvent<HTMLDivElement>): void => {
    const clickedElement = e.target as HTMLElement | null;

    if (clickedElement) {
      const currencyCode = getCurrencyCodeFromParentAttribute(clickedElement, 'data-currency-code');

      if (currencyCode) {
        this.props.onSelect(currencyCode);
      }
    }
  };

  render(): ReactNode {
    const options = currencies.filter((code) =>
      code.includes(this.props.searchValue.toUpperCase()),
    );

    return (
      <StyledContainer onClick={this.handleSuggestionListClick}>
        {options.map((code) => (
          <ListItem key={code} value={code} />
        ))}
      </StyledContainer>
    );
  }
}

export default SuggestionsList;

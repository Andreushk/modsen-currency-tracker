import { createRef, PureComponent, ReactNode } from 'react';

import { OutsideClickDetector } from '@/components';
import { AppCurrencyCodesType } from '@/types/api/currencies';

import Input from './Input';
import StyledContainer from './styled';
import SuggestionsList from './SuggestionsList';

interface IComponentProps {
  onSelect: (selectedCurrencyCode: AppCurrencyCodesType | null) => void;
}

interface IComponentState {
  isFocused: boolean;
  inputValue: string;
}

class Search extends PureComponent<IComponentProps, IComponentState> {
  inputRef = createRef<HTMLInputElement>();

  constructor(props: IComponentProps) {
    super(props);

    this.state = { isFocused: false, inputValue: '' };
  }

  handleSelectedCurrency = (code: AppCurrencyCodesType): void => {
    this.props.onSelect(code);
    this.setState({ isFocused: false });
  };

  handleInputFocus = (): void => {
    this.setState({ isFocused: true });
  };

  handleNewInputValue = (value: string): void => {
    if (value.trim().length === 0) {
      this.props.onSelect(null);
    }

    this.setState({ inputValue: value });
  };

  handleOutsideClick = (): void => {
    this.setState({ isFocused: false });
  };

  render(): ReactNode {
    const { inputValue, isFocused } = this.state;

    return (
      <OutsideClickDetector onOutsideClick={this.handleOutsideClick}>
        <StyledContainer>
          <Input
            value={inputValue}
            onFocus={this.handleInputFocus}
            onChange={this.handleNewInputValue}
            inputRef={this.inputRef}
          />
          {isFocused && inputValue.length > 0 && (
            <SuggestionsList searchValue={inputValue} onSelect={this.handleSelectedCurrency} />
          )}
        </StyledContainer>
      </OutsideClickDetector>
    );
  }
}

export default Search;

import { PureComponent, ReactNode, RefObject } from 'react';

import SearchIcon from '@/assets/icons/search.svg';

import { StyledButton, StyledContainer, StyledInput } from './styled';

const PLACEHOLDER = 'Currency search...';

interface IComponentProps {
  value: string;
  inputRef: RefObject<HTMLInputElement>;
  onChange: (value: string) => void;
  onFocus: () => void;
}

class Input extends PureComponent<IComponentProps> {
  handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const value: string = e.target.value.trim();
    this.props.onChange(value);
  };

  handleSearchButtonClick = (): void => {
    if (this.props.inputRef.current) {
      this.props.inputRef.current.focus();
    }
  };

  render(): ReactNode {
    return (
      <StyledContainer>
        <StyledInput
          value={this.props.value}
          onFocus={this.props.onFocus}
          onChange={this.handleChange}
          placeholder={PLACEHOLDER}
          ref={this.props.inputRef}
        />
        <StyledButton onClick={this.handleSearchButtonClick}>
          <SearchIcon />
        </StyledButton>
      </StyledContainer>
    );
  }
}

export default Input;

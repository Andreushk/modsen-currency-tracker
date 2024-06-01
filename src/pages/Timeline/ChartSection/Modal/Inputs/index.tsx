import { Component, RefObject } from 'react';

import INPUTS_OPTIONS from '../options';
import { StyledContainer, StyledInputContainer } from './styled';

interface InputListProps {
  inputRefs: RefObject<HTMLInputElement>[];
}

class InputList extends Component<InputListProps> {
  render() {
    const { inputRefs } = this.props;

    return (
      <StyledContainer>
        {INPUTS_OPTIONS.map(({ label, id }, index) => (
          <StyledInputContainer key={id}>
            <label htmlFor={id}>{label}</label>
            <input id={id} ref={inputRefs[index]} type="number" />
          </StyledInputContainer>
        ))}
      </StyledContainer>
    );
  }
}

export default InputList;

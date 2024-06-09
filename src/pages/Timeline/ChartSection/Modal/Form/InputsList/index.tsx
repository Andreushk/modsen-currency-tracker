import { Component, RefObject } from 'react';

import { ICurrencyTimeline } from '@/types/chart';

import INPUTS_OPTIONS from '../../options';
import { StyledContainer, StyledInputContainer } from './styled';

interface IComponentProps {
  dayData: ICurrencyTimeline | undefined;
  inputRefs: RefObject<HTMLInputElement>[];
}

class InputsList extends Component<IComponentProps> {
  render() {
    const { inputRefs, dayData } = this.props;

    return (
      <StyledContainer>
        {INPUTS_OPTIONS.map(({ label, id }, index) => (
          <StyledInputContainer key={id}>
            <label htmlFor={id}>{label}</label>
            <input
              id={id}
              ref={inputRefs[index]}
              type="number"
              defaultValue={dayData ? dayData[id] : ''}
            />
          </StyledInputContainer>
        ))}
      </StyledContainer>
    );
  }
}

export default InputsList;

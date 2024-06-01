import { PureComponent, ReactNode } from 'react';

import { Button } from '@/components';

import StyledContainer from './styled';

const CANCEL_BUTTON = 'Cancel';
const NEXT_DAY_BUTTON = 'Next day';
const RANDOMIZE_BUTTON = 'Randomize';

interface IComponentProps {
  onCancel: () => void;
  onNextDay: () => void;
  onRandomize: () => void;
}

class Buttons extends PureComponent<IComponentProps> {
  render(): ReactNode {
    return (
      <StyledContainer>
        <Button value={CANCEL_BUTTON} onClick={this.props.onCancel} />
        <Button value={NEXT_DAY_BUTTON} onClick={this.props.onNextDay} />
        <Button value={RANDOMIZE_BUTTON} onClick={this.props.onRandomize} />
      </StyledContainer>
    );
  }
}

export default Buttons;

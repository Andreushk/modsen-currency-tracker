import { Component, ReactNode } from 'react';

import { StyledIconContainer, StyledInformationContainer } from './styled';

class Placeholder extends Component {
  render(): ReactNode {
    return (
      <>
        <StyledIconContainer data-testid="icon-placeholder" />
        <StyledInformationContainer>
          <div />
          <div />
        </StyledInformationContainer>
      </>
    );
  }
}

export default Placeholder;

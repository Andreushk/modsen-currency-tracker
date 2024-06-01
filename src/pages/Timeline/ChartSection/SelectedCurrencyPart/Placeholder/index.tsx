import { Component, ReactNode } from 'react';

import { StyledIconContainer, StyledInformationContainer } from './styled';

class Placeholder extends Component {
  render(): ReactNode {
    return (
      <>
        <StyledIconContainer />
        <StyledInformationContainer>
          <div />
          <div />
        </StyledInformationContainer>
      </>
    );
  }
}

export default Placeholder;

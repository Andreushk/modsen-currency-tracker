import { Component, ReactNode } from 'react';

import StyledContainer from './styled';

class ChartPlaceholder extends Component {
  render(): ReactNode {
    return <StyledContainer data-testid="chart-placeholder" />;
  }
}

export default ChartPlaceholder;

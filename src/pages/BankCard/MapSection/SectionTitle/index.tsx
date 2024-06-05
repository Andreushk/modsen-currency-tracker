import { PureComponent, ReactNode } from 'react';

import { Title } from '@/components';

import StyledContainer from './styled';

const SECTION_TITLE = 'Search currency in banks';

class SectionTitle extends PureComponent {
  render(): ReactNode {
    return (
      <StyledContainer>
        <Title $fontSize="L" $fontWeight="light">
          {SECTION_TITLE}
        </Title>
      </StyledContainer>
    );
  }
}

export default SectionTitle;

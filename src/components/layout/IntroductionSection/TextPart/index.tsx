import { AccentTitle } from '@/components';

import { StyledContainer, StyledDescription, StyledTitleContainer } from './styled';

const SECTION_TITLE = 'Modsen Currency Tracker';

const SECTION_DESCRIPTION_FIRST_PART = 'Quotes for the dollar and other';
const SECTION_DESCRIPTION_SECOND_PART = 'international currencies.';

const TextPart: React.FC = () => (
  <StyledContainer data-testid="introduction">
    <StyledTitleContainer>
      <AccentTitle $variant="L">{SECTION_TITLE}</AccentTitle>
    </StyledTitleContainer>
    <StyledDescription>
      {SECTION_DESCRIPTION_FIRST_PART} <br /> {SECTION_DESCRIPTION_SECOND_PART}
    </StyledDescription>
  </StyledContainer>
);

export default TextPart;

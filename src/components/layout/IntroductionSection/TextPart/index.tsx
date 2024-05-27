import { StyledContainer, StyledDescription, StyledTitleContainer } from './styled';

const SECTION_TITLE_FIRST_PART = 'Modsen Currency';
const SECTION_TITLE_SECOND_PART = 'Tracker';

const SECTION_DESCRIPTION_FIRST_PART = 'Quotes for the dollar and other';
const SECTION_DESCRIPTION_SECOND_PART = 'international currencies.';

const TextPart: React.FC = () => (
  <StyledContainer data-testid="introduction">
    <StyledTitleContainer>
      <h1>{SECTION_TITLE_FIRST_PART}</h1>
      <h1>{SECTION_TITLE_SECOND_PART}</h1>
    </StyledTitleContainer>
    <StyledDescription>
      {SECTION_DESCRIPTION_FIRST_PART} <br /> {SECTION_DESCRIPTION_SECOND_PART}
    </StyledDescription>
  </StyledContainer>
);

export default TextPart;

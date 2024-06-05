import { Paragraph, Title } from '@/components';

import StyledContainer from './styled';

const SECTION_TITLE = 'We are here for you!';
const SECTION_DESCRIPTION =
  'Expect a quick response and feel free to contact us by provided information.';

const TextPart: React.FC = () => (
  <StyledContainer>
    <Title>{SECTION_TITLE}</Title>
    <Paragraph>{SECTION_DESCRIPTION}</Paragraph>
  </StyledContainer>
);

export default TextPart;

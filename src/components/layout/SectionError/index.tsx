import { Paragraph, Title } from '@/components';

import { StyledContainer, StyledSection } from './styled';

const ERROR_TITLE = 'Unable to display section :/';
const ERROR_REASON = 'Reason: ';
const ERROR_MESSAGE = 'Error during rendering.';

interface IComponentProps {
  message?: string;
}

const SectionError: React.FC<IComponentProps> = ({ message }) => (
  <StyledSection>
    <StyledContainer>
      <Title $fontSize="M" $fontWeight="light">
        {ERROR_TITLE}
      </Title>
      <Paragraph>{ERROR_REASON + (message ?? ERROR_MESSAGE)}</Paragraph>
    </StyledContainer>
  </StyledSection>
);

export default SectionError;

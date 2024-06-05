import InformationPart from './InformationPart';
import { StyledSection, StyledSectionContentContainer } from './styled';
import TextPart from './TextPart';

const ContactsSection: React.FC = () => (
  <StyledSection>
    <StyledSectionContentContainer>
      <TextPart />
      <InformationPart />
    </StyledSectionContentContainer>
  </StyledSection>
);

export default ContactsSection;

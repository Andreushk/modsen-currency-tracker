import { SectionWithPaddings } from '@/components';

import InformationPart from './InformationPart';
import StyledContainer from './styled';
import TextPart from './TextPart';

const ContactsSection: React.FC = () => (
  <SectionWithPaddings>
    <StyledContainer>
      <TextPart />
      <InformationPart />
    </StyledContainer>
  </SectionWithPaddings>
);

export default ContactsSection;

import { Logo } from '@/components';

import StyledSection from './styled';
import TextPart from './TextPart';

const IntroductionSection: React.FC = () => (
  <StyledSection>
    <TextPart />
    <Logo width={300} height={312} />
  </StyledSection>
);

export default IntroductionSection;

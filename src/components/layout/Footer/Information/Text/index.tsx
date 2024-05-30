import { Paragraph } from '@/components';

import StyledContainer from './styled';

const TEXT =
  "Since then, the company has grown organically to. Starsup is the world's largest trading platform, with $12 billion worth of currency trading and 500,000 tickets sold daily to tens of thousands of traders worldwide.";

const Text: React.FC = () => (
  <StyledContainer>
    <Paragraph>{TEXT}</Paragraph>
  </StyledContainer>
);

export default Text;

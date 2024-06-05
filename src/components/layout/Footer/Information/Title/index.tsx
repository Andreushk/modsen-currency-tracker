import { AccentTitle, Logo } from '@/components';

import StyledContainer from './styled';

const TITLE = 'Modsen Currency Tracker';

const Title: React.FC = () => (
  <StyledContainer>
    <Logo size={40} />
    <AccentTitle as="h3" $variant="M">
      {TITLE}
    </AccentTitle>
  </StyledContainer>
);

export default Title;

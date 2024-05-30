import { Logo } from '@/components';

import { StyledContainer, StyledTitle } from './styled';

const TITLE = 'Modsen Currency Tracker';

const Title: React.FC = () => (
  <StyledContainer>
    <Logo size={40} />
    <StyledTitle>{TITLE}</StyledTitle>
  </StyledContainer>
);

export default Title;

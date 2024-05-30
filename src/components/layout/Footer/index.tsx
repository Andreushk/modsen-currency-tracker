import Copyright from './Copyright';
import Information from './Information';
import Navigation from './Navigation';
import { StyledFooter, StyledFooterContentContainer } from './styled';

const Footer: React.FC = () => (
  <StyledFooter data-testid="footer">
    <StyledFooterContentContainer>
      <Information />
      <Navigation />
    </StyledFooterContentContainer>
    <Copyright />
  </StyledFooter>
);

export default Footer;

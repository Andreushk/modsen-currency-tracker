import Block from './Block';
import NAVIGATION_OPTIONS from './options';
import StyledContainer from './styled';

const Navigation: React.FC = () => (
  <StyledContainer>
    {NAVIGATION_OPTIONS.map(({ displayValue, links }) => (
      <Block key={displayValue} displayValue={displayValue} links={links} />
    ))}
  </StyledContainer>
);

export default Navigation;

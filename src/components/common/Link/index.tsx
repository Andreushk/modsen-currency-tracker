import StyledLink, { IStyleProps } from './styled';

interface IComponentProps extends IStyleProps {
  href: string;
  children: string;
  isBlank?: boolean;
  onClick?: () => void;
}

const Link: React.FC<IComponentProps> = ({ children, href, isBlank = false, $isDark, onClick }) => (
  <StyledLink to={href} target={isBlank ? '_blank' : undefined} onClick={onClick} $isDark={$isDark}>
    {children}
  </StyledLink>
);

export default Link;

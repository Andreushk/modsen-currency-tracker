import { RoutesType } from '@/constants/routes';

import StyledNavigationLink from './styled';

interface IComponentProps {
  displayValue: string;
  pathValue: RoutesType;
  onClick?: () => void;
}

const NavigationLink: React.FC<IComponentProps> = ({ displayValue, pathValue, onClick }) => (
  <StyledNavigationLink to={pathValue} onClick={onClick}>
    {displayValue}
  </StyledNavigationLink>
);

export default NavigationLink;

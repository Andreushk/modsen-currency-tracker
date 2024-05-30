import { RoutesType } from '@/constants/routes';

import StyledNavigationLink, { IStyleProps } from './styled';

interface IComponentProps extends IStyleProps {
  displayValue: string;
  pathValue: RoutesType;
  onClick?: () => void;
}

const NavigationLink: React.FC<IComponentProps> = ({
  displayValue,
  pathValue,
  $isDarked = false,
  onClick,
}) => (
  <StyledNavigationLink to={pathValue} $isDarked={$isDarked} onClick={onClick}>
    {displayValue}
  </StyledNavigationLink>
);

export default NavigationLink;

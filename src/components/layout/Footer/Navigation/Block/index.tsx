import { NavigationLink, Title } from '@/components';
import { RoutesType } from '@/constants/routes';

import StyledContainer from './styeled';

export interface INavigationBlockOptions {
  displayValue: string;
  links: INavigationLinkOptions[];
}

export interface INavigationLinkOptions {
  displayValue: string;
  pathValue: RoutesType;
}

const Block: React.FC<INavigationBlockOptions> = ({ displayValue, links }) => (
  <div>
    <Title>{displayValue}</Title>
    <StyledContainer>
      {links.map(({ displayValue, pathValue }) => (
        <NavigationLink
          key={pathValue}
          displayValue={displayValue}
          pathValue={pathValue}
          $isDarked
        />
      ))}
    </StyledContainer>
  </div>
);

export default Block;

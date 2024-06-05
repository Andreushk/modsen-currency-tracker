import { Link, Title } from '@/components';
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
    <Title $fontSize="M" $fontWeight="light">
      {displayValue}
    </Title>
    <StyledContainer>
      {links.map(({ displayValue, pathValue }) => (
        <Link key={pathValue} href={pathValue} $isDark>
          {displayValue}
        </Link>
      ))}
    </StyledContainer>
  </div>
);

export default Block;

import React from 'react';

import { Link } from '@/components';
import NAVIGATION_OPTIONS from '@/constants/navigation';

import StyledNavigation from './styled';

interface IComponentProps {
  onItemClick?: () => void;
}

const Navigation: React.FC<IComponentProps> = ({ onItemClick }) => (
  <StyledNavigation>
    {NAVIGATION_OPTIONS.map(({ displayValue, pathValue }) => (
      <Link key={pathValue} href={pathValue} onClick={onItemClick}>
        {displayValue}
      </Link>
    ))}
  </StyledNavigation>
);

export default React.memo(Navigation);

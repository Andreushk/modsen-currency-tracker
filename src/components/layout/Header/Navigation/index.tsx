import React from 'react';

import { Link } from '@/components';
import NAVIGATION_OPTIONS from '@/constants/navigation';

import StyledNavigation from './styled';

const Navigation: React.FC = () => (
  <StyledNavigation>
    {NAVIGATION_OPTIONS.map(({ displayValue, pathValue }) => (
      <Link key={pathValue} href={pathValue}>
        {displayValue}
      </Link>
    ))}
  </StyledNavigation>
);

export default React.memo(Navigation);

import React from 'react';

import { NavigationLink } from '@/components';
import NAVIGATION_OPTIONS from '@/constants/navigation';

import StyledNavigation from './styled';

const Navigation: React.FC = () => (
  <StyledNavigation>
    {NAVIGATION_OPTIONS.map(({ displayValue, pathValue }) => (
      <NavigationLink key={pathValue} displayValue={displayValue} pathValue={pathValue} />
    ))}
  </StyledNavigation>
);

export default React.memo(Navigation);
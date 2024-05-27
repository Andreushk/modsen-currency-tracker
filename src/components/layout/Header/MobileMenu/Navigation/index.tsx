import React from 'react';

import { NavigationLink } from '@/components';
import NAVIGATION_OPTIONS from '@/constants/navigation';

import StyledNavigation from './styled';

interface IComponentProps {
  onItemClick?: () => void;
}

const Navigation: React.FC<IComponentProps> = ({ onItemClick }) => (
  <StyledNavigation>
    {NAVIGATION_OPTIONS.map(({ displayValue, pathValue }) => (
      <NavigationLink
        key={pathValue}
        displayValue={displayValue}
        pathValue={pathValue}
        onClick={onItemClick}
      />
    ))}
  </StyledNavigation>
);

export default React.memo(Navigation);

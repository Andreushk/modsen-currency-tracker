import React from 'react';
import { useNavigate } from 'react-router-dom';

import LogoIcon from '@/assets/icons/diagram.svg';
import { Routes } from '@/constants/routes';

import StyledContainer from './styled';

interface IComponentProps {
  size: number;
  withNavigation?: boolean;
}

const Logo: React.FC<IComponentProps> = ({ size, withNavigation = false }) => {
  const navigate = useNavigate();

  const handleClick = (): void => {
    navigate(Routes.BASIC);
  };

  return (
    <StyledContainer $withPointerCursor={withNavigation} onClick={handleClick} data-testid="logo">
      <LogoIcon width={size} height={size} />
    </StyledContainer>
  );
};

export default React.memo(Logo);

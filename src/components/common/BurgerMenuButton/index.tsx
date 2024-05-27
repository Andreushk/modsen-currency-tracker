import React from 'react';

import { BurgerLine, StyledBurgerIcon } from './styled';

interface IComponentProps {
  onClick: () => void;
}

const BurgerMenuButton: React.FC<IComponentProps> = ({ onClick }) => (
  <StyledBurgerIcon onClick={onClick}>
    <BurgerLine />
    <BurgerLine />
    <BurgerLine />
  </StyledBurgerIcon>
);

export default React.memo(BurgerMenuButton);

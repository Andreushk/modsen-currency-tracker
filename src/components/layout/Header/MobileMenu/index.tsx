import { useEffect, useState } from 'react';

import { Overlay, PortalToBody } from '@/components';

import Navigation from './Navigation';
import StyledContainer from './styled';

interface IComponentProps {
  closeCB: () => void;
}

const MobileMenu: React.FC<IComponentProps> = ({ closeCB }) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect((): void => {
    setIsVisible(true);
  }, []);

  const handleClick = (e: React.MouseEvent): void => {
    e.stopPropagation();
  };

  return (
    <PortalToBody>
      <Overlay clickCB={closeCB}>
        <StyledContainer $isVisible={isVisible} onClick={handleClick}>
          <Navigation onItemClick={closeCB} />
        </StyledContainer>
      </Overlay>
    </PortalToBody>
  );
};

export default MobileMenu;

import { useEffect, useState } from 'react';

import StyledOverlay from './styled';

interface IComponentProps {
  children: React.ReactNode;
  clickCB: () => void;
}

const Overlay: React.FC<IComponentProps> = ({ children, clickCB }) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect((): void => {
    setIsVisible(true);
  }, []);

  return (
    <StyledOverlay $isVisible={isVisible} onClick={clickCB} data-testid="overlay">
      {children}
    </StyledOverlay>
  );
};

export default Overlay;

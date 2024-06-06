import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Overlay, PortalToBody, Switch } from '@/components';
import { toggle } from '@/state/slices/theme';
import { RootState } from '@/state/store';

import Navigation from './Navigation';
import StyledContainer from './styled';

interface IComponentProps {
  closeCB: () => void;
}

const MobileMenu: React.FC<IComponentProps> = ({ closeCB }) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const isDarkTheme = useSelector((state: RootState) => state.theme.isDarkMode);

  const dispatch = useDispatch();

  useEffect((): void => {
    setIsVisible(true);
  }, []);

  const handleClick = (e: React.MouseEvent): void => {
    e.stopPropagation();
  };

  const handleThemeSwitchClick = (): void => {
    dispatch(toggle());
  };

  return (
    <PortalToBody>
      <Overlay clickCB={closeCB}>
        <StyledContainer $isVisible={isVisible} onClick={handleClick}>
          <Navigation onItemClick={closeCB} />
          <Switch isOn={!isDarkTheme} onClick={handleThemeSwitchClick} />
        </StyledContainer>
      </Overlay>
    </PortalToBody>
  );
};

export default MobileMenu;

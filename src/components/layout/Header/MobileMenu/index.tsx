import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { Overlay, PortalToBody, Switch } from '@/components';
import { useAppSelector } from '@/hooks';
import { darkModeSelector } from '@/store/reducers/selectors';
import { toggle } from '@/store/reducers/theme';

import Navigation from './Navigation';
import StyledContainer from './styled';

interface IComponentProps {
  closeCB: () => void;
}

const MobileMenu: React.FC<IComponentProps> = ({ closeCB }) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const isDarkTheme = useAppSelector(darkModeSelector);

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

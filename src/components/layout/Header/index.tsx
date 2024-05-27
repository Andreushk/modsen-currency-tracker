import { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { BurgerMenuButton, Logo, Switch } from '@/components';
import useDisableBodyScroll from '@/hooks/useDisableBodyScroll';
import useScreenWidth from '@/hooks/useScreenWidth';
import { toggle } from '@/state/slices/theme';
import { RootState } from '@/state/store';
import { darkTheme } from '@/styles/theme';

import MobileMenu from './MobileMenu';
import Navigation from './Navigation';
import { StyledHeader, StyledHeaderContentContainer } from './styled';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  const theme = useSelector((state: RootState) => state.theme);
  const dispatch = useDispatch();

  const isWideScreen: boolean = useScreenWidth(parseInt(darkTheme.breakpoints.tabletS));
  useDisableBodyScroll(isMobileMenuOpen);

  const handleToggleMobileMenu = useCallback((): void => {
    setIsMobileMenuOpen((prevStatus) => !prevStatus);
  }, []);

  const handleThemeSwitchClick = (): void => {
    dispatch(toggle());
  };

  return (
    <StyledHeader>
      <StyledHeaderContentContainer>
        <Logo size={40} withNavigation />
        {isWideScreen && !isMobileMenuOpen && <Navigation />}
        {isWideScreen && !isMobileMenuOpen && (
          <Switch isOn={!theme.isDarkMode} onClick={handleThemeSwitchClick} />
        )}
        {(!isWideScreen || isMobileMenuOpen) && (
          <BurgerMenuButton onClick={handleToggleMobileMenu} />
        )}
        {isMobileMenuOpen && <MobileMenu closeCB={handleToggleMobileMenu} />}
      </StyledHeaderContentContainer>
    </StyledHeader>
  );
};

export default Header;

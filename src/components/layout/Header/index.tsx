import { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';

import { BurgerMenuButton, Logo, Switch } from '@/components';
import { useAppSelector, useDisableBodyScroll, useScreenWidth } from '@/hooks';
import { toggle } from '@/store/reducers/theme';
import { darkTheme } from '@/styles/theme';

import MobileMenu from './MobileMenu';
import Navigation from './Navigation';
import { StyledHeader, StyledHeaderContentContainer } from './styled';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  const isDarkMode = useAppSelector((state) => state.theme.isDarkMode);
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
    <StyledHeader data-testid="header">
      <StyledHeaderContentContainer>
        <Logo size={40} withNavigation />
        {isWideScreen && !isMobileMenuOpen && <Navigation />}
        {isWideScreen && !isMobileMenuOpen && (
          <Switch isOn={!isDarkMode} onClick={handleThemeSwitchClick} />
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

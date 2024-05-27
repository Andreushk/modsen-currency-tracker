import { useCallback, useState } from 'react';

import { BurgerMenuButton, Logo, Switch } from '@/components';
import useDisableBodyScroll from '@/hooks/useDisableBodyScroll';
import useScreenWidth from '@/hooks/useScreenWidth';
import { darkTheme } from '@/styles/theme';

import MobileMenu from './MobileMenu';
import Navigation from './Navigation';
import { StyledHeader, StyledHeaderContentContainer } from './styled';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const isWideScreen: boolean = useScreenWidth(parseInt(darkTheme.breakpoints.tabletS));
  useDisableBodyScroll(isMobileMenuOpen);

  const handleToggleMobileMenu = useCallback((): void => {
    setIsMobileMenuOpen((prevStatus) => !prevStatus);
  }, []);

  return (
    <StyledHeader>
      <StyledHeaderContentContainer>
        <Logo size={40} withNavigation />
        {isWideScreen && !isMobileMenuOpen && <Navigation />}
        {isWideScreen && !isMobileMenuOpen && <Switch />}
        {(!isWideScreen || isMobileMenuOpen) && (
          <BurgerMenuButton onClick={handleToggleMobileMenu} />
        )}
        {isMobileMenuOpen && <MobileMenu closeCB={handleToggleMobileMenu} />}
      </StyledHeaderContentContainer>
    </StyledHeader>
  );
};

export default Header;

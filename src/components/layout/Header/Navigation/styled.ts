import styled from 'styled-components';

import gerMediaQuery from '@/utils/media/gerMediaQuery';

const StyledNavigation = styled.nav`
  display: flex;
  gap: ${({ theme }) => theme.spaces[16]};

  @media ${gerMediaQuery('desktopM')} {
    gap: ${({ theme }) => theme.spaces[12]};
  }

  @media ${gerMediaQuery('laptopS')} {
    gap: ${({ theme }) => theme.spaces[8]};
  }
`;

export default StyledNavigation;

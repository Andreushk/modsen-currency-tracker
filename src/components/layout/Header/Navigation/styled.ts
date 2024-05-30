import styled from 'styled-components';

import getMediaQuery from '@/utils/media/getMediaQuery';

const StyledNavigation = styled.nav`
  display: flex;
  gap: ${({ theme }) => theme.spaces[16]};

  @media ${getMediaQuery('desktopM')} {
    gap: ${({ theme }) => theme.spaces[12]};
  }

  @media ${getMediaQuery('laptopS')} {
    gap: ${({ theme }) => theme.spaces[8]};
  }
`;

export default StyledNavigation;

import styled from 'styled-components';

import getMediaQuery from '@/utils/helpers/getMediaQuery';

export const StyledFooter = styled.footer`
  padding: 105px 96px 40px 96px;
  background-color: ${({ theme }) => theme.colors.bg.main};

  @media ${getMediaQuery('laptopM')} {
    padding-right: ${({ theme }) => theme.spaces[12]};
    padding-left: ${({ theme }) => theme.spaces[12]};
  }

  @media ${getMediaQuery('laptopS')} {
    padding-right: ${({ theme }) => theme.spaces[11]};
    padding-left: ${({ theme }) => theme.spaces[11]};
  }

  @media ${getMediaQuery('tabletS')} {
    padding-right: ${({ theme }) => theme.spaces[7]};
    padding-left: ${({ theme }) => theme.spaces[7]};
  }
`;

export const StyledFooterContentContainer = styled.div`
  max-width: ${({ theme }) => theme.widths[10]};
  margin: 0 auto;
  display: flex;
  gap: ${({ theme }) => theme.spaces[15]};

  @media ${getMediaQuery('desktopM')} {
    gap: unset;
    justify-content: space-between;
  }

  @media ${getMediaQuery('desktopS')} {
    flex-direction: column;
    gap: ${({ theme }) => theme.spaces[9]};
  }
`;

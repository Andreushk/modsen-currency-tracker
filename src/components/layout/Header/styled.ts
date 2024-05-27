import styled from 'styled-components';

import gerMediaQuery from '@/utils/media/gerMediaQuery';

export const StyledHeader = styled.header`
  padding-right: ${({ theme }) => theme.spaces[15]};
  padding-left: ${({ theme }) => theme.spaces[15]};
  background-color: ${({ theme }) => theme.colors.bg.main};

  @media ${gerMediaQuery('laptopM')} {
    padding-right: ${({ theme }) => theme.spaces[12]};
    padding-left: ${({ theme }) => theme.spaces[12]};
  }

  @media ${gerMediaQuery('laptopS')} {
    padding-right: ${({ theme }) => theme.spaces[11]};
    padding-left: ${({ theme }) => theme.spaces[11]};
  }

  @media ${gerMediaQuery('tabletS')} {
    padding-right: ${({ theme }) => theme.spaces[7]};
    padding-left: ${({ theme }) => theme.spaces[7]};
  }
`;

export const StyledHeaderContentContainer = styled.div`
  max-width: ${({ theme }) => theme.widths[10]};
  height: ${({ theme }) => theme.heights[6]};
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
`;

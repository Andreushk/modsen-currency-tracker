import styled from 'styled-components';

import getMediaQuery from '@/utils/helpers/getMediaQuery';

export const StyledHeader = styled.header`
  padding-right: ${({ theme }) => theme.spaces[15]};
  padding-left: ${({ theme }) => theme.spaces[15]};
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

export const StyledHeaderContentContainer = styled.div`
  max-width: ${({ theme }) => theme.widths[10]};
  height: ${({ theme }) => theme.heights[6]};
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
`;

import styled from 'styled-components';

import getMediaQuery from '@/utils/helpers/getMediaQuery';

export const StyledIconContainer = styled.div`
  flex: 0 0 ${({ theme }) => theme.widths[6]};
  width: ${({ theme }) => theme.widths[6]};
  height: ${({ theme }) => theme.widths[6]};
  background-color: ${({ theme }) => theme.colors.bg.blocks};
  border-radius: ${({ theme }) => theme.widths[2]};

  @media ${getMediaQuery('tabletS')} {
    flex: 0 0 ${({ theme }) => theme.widths[5]};
    width: ${({ theme }) => theme.widths[5]};
    height: ${({ theme }) => theme.widths[5]};
  }
`;

export const StyledInformationContainer = styled.div`
  & div:first-of-type {
    height: ${({ theme }) => theme.fontSizes[9]};
    width: 260px;
    background-color: ${({ theme }) => theme.colors.bg.blocks};
    margin-bottom: ${({ theme }) => theme.spaces[2]};
  }

  & div:last-of-type {
    height: ${({ theme }) => theme.fontSizes[1]};
    width: ${({ theme }) => theme.widths[5]};
    background-color: ${({ theme }) => theme.colors.bg.blocks};
  }

  @media ${getMediaQuery('tabletS')} {
    & div:first-of-type {
      margin-bottom: ${({ theme }) => theme.spaces[0]};
      height: ${({ theme }) => theme.fontSizes[9]};
      max-width: 160px;
      width: 100%;
    }
  }
`;

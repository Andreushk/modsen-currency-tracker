import styled from 'styled-components';

import getMediaQuery from '@/utils/media/getMediaQuery';

export const StyledContainer = styled.div`
  max-width: ${({ theme }) => theme.widths[10]};
  margin: 0 auto;
  margin-top: ${({ theme }) => theme.spaces[12]};
`;

export const StyledDivider = styled.div`
  margin-top: ${({ theme }) => theme.spaces[5]};
  margin-bottom: ${({ theme }) => theme.spaces[9]};
  width: 41.67%;
  height: ${({ theme }) => theme.heights[0]};
  background-color: #474747;

  @media ${getMediaQuery('desktopS')} {
    width: 46%;
    margin-bottom: ${({ theme }) => theme.spaces[8]};
  }

  @media ${getMediaQuery('tabletS')} {
    width: 48%;
    margin-bottom: ${({ theme }) => theme.spaces[7]};
  }

  @media ${getMediaQuery('mobileL')} {
    width: 70%;
    margin-bottom: ${({ theme }) => theme.spaces[6]};
  }
`;

export const StyledGridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 41.67%);
  grid-column-gap: 16.66%;
  grid-row-gap: ${({ theme }) => theme.spaces[10]};

  @media ${getMediaQuery('desktopS')} {
    grid-template-columns: repeat(auto-fit, 46%);
    grid-column-gap: 8%;
    grid-row-gap: ${({ theme }) => theme.spaces[8]};
  }

  @media ${getMediaQuery('tabletS')} {
    grid-template-columns: repeat(auto-fit, 48%);
    grid-column-gap: 4%;
    grid-row-gap: ${({ theme }) => theme.spaces[6]};
  }

  @media ${getMediaQuery('mobileL')} {
    grid-template-columns: repeat(auto-fit, 100%);
    grid-column-gap: 0;
    grid-row-gap: ${({ theme }) => theme.spaces[5]};
  }
`;

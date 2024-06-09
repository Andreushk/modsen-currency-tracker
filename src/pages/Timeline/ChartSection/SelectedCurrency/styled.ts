import styled from 'styled-components';

import getMediaQuery from '@/utils/helpers/getMediaQuery';

export const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.widths[5]};
  margin-top: ${({ theme }) => theme.spaces[17]};

  @media ${getMediaQuery('desktopM')} {
    gap: ${({ theme }) => theme.spaces[3]};
    margin-top: ${({ theme }) => theme.spaces[8]};
  }

  @media ${getMediaQuery('tabletS')} {
    width: 100%;

    & > div:last-of-type {
      width: 100%;
    }
  }
`;

export const StyledInformationContainer = styled.div`
  & h2 {
    margin-bottom: ${({ theme }) => theme.widths[2]};
  }

  @media ${getMediaQuery('tabletS')} {
    & h2 {
      margin-bottom: 0;
    }
  }
`;

export const StyledCode = styled.span`
  font-size: ${({ theme }) => theme.fontSizes[1]};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  line-height: ${({ theme }) => theme.lineHeights[1]};
`;

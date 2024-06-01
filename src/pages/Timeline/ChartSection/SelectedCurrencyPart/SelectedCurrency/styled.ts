import styled from 'styled-components';

import getMediaQuery from '@/utils/media/getMediaQuery';

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

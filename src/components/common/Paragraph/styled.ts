import styled from 'styled-components';

import getMediaQuery from '@/utils/media/getMediaQuery';

const StyledParagraph = styled.p`
  font-size: ${({ theme }) => theme.fontSizes[4]};
  font-weight: ${({ theme }) => theme.fontWeights.light};
  line-height: ${({ theme }) => theme.lineHeights[3]};

  @media ${getMediaQuery('laptopM')} {
    font-size: ${({ theme }) => theme.fontSizes[2]};
    line-height: ${({ theme }) => theme.lineHeights[1]};
  }

  @media ${getMediaQuery('mobileL')} {
    font-size: ${({ theme }) => theme.fontSizes[1]};
    line-height: ${({ theme }) => theme.lineHeights[1]};
  }
`;

export default StyledParagraph;

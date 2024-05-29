import styled from 'styled-components';

import gerMediaQuery from '@/utils/media/gerMediaQuery';

const StyledParagraph = styled.p`
  font-size: ${({ theme }) => theme.fontSizes[4]};
  font-weight: ${({ theme }) => theme.fontWeights.light};
  line-height: ${({ theme }) => theme.lineHeights[3]};

  @media ${gerMediaQuery('laptopM')} {
    font-size: ${({ theme }) => theme.fontSizes[2]};
    line-height: ${({ theme }) => theme.lineHeights[1]};
  }

  @media ${gerMediaQuery('mobileL')} {
    font-size: ${({ theme }) => theme.fontSizes[1]};
    line-height: ${({ theme }) => theme.lineHeights[0]};
  }
`;

export default StyledParagraph;

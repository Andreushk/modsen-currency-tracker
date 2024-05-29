import styled from 'styled-components';

import gerMediaQuery from '@/utils/media/gerMediaQuery';

const StyledTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes[9]};
  font-weight: ${({ theme }) => theme.fontWeights.light};
  line-height: ${({ theme }) => theme.lineHeights[5]};
  color: ${({ theme }) => theme.colors.text.primary};

  @media ${gerMediaQuery('laptopM')} {
    font-size: ${({ theme }) => theme.fontSizes[5]};
    line-height: ${({ theme }) => theme.lineHeights[3]};
  }

  @media ${gerMediaQuery('mobileL')} {
    font-size: ${({ theme }) => theme.fontSizes[3]};
    line-height: ${({ theme }) => theme.lineHeights[2]};
  }
`;

export default StyledTitle;

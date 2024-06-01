import styled from 'styled-components';

import getMediaQuery from '@/utils/helpers/getMediaQuery';

const StyledTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes[9]};
  font-weight: ${({ theme }) => theme.fontWeights.light};
  line-height: ${({ theme }) => theme.lineHeights[5]};
  color: ${({ theme }) => theme.colors.text.primary};

  @media ${getMediaQuery('laptopM')} {
    font-size: ${({ theme }) => theme.fontSizes[5]};
    line-height: ${({ theme }) => theme.lineHeights[3]};
  }

  @media ${getMediaQuery('mobileL')} {
    font-size: ${({ theme }) => theme.fontSizes[3]};
    line-height: ${({ theme }) => theme.lineHeights[2]};
  }
`;

export default StyledTitle;

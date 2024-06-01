import styled from 'styled-components';

import getMediaQuery from '@/utils/helpers/getMediaQuery';

export const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spaces[3]};

  @media ${getMediaQuery('mobileL')} {
    margin: 0 auto;
    width: fit-content;
  }

  @media ${getMediaQuery('mobileL')} {
    & svg {
      width: 30px;
      height: 30px;
      gap: ${({ theme }) => theme.spaces[2]};
    }
  }
`;

export const StyledTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes[6]};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  line-height: ${({ theme }) => theme.lineHeights[4]};
  background: linear-gradient(90.18deg, #00ce2c 0.18%, #aedf23 49.3%, #a3dc00 99.88%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media ${getMediaQuery('mobileL')} {
    font-size: ${({ theme }) => theme.fontSizes[3]};
    line-height: ${({ theme }) => theme.lineHeights[1]};
  }
`;

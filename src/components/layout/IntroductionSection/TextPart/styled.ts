import styled from 'styled-components';

import getMediaQuery from '@/utils/helpers/getMediaQuery';

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spaces[2]};

  @media ${getMediaQuery('mobileL')} {
    gap: ${({ theme }) => theme.spaces[5]};
    margin-bottom: ${({ theme }) => theme.spaces[3]};
  }
`;

export const StyledTitleContainer = styled.div`
  margin-right: ${({ theme }) => theme.spaces[13]};

  & h1 {
    font-weight: ${({ theme }) => theme.fontWeights.semiBold};
    text-align: right;
    background: linear-gradient(90.18deg, #00ce2c 0.18%, #aedf23 49.3%, #a3dc00 99.88%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  & h1:first-of-type {
    font-size: ${({ theme }) => theme.fontSizes[12]};
    line-height: ${({ theme }) => theme.lineHeights[10]};
  }

  & h1:last-of-type {
    font-size: ${({ theme }) => theme.fontSizes[13]};
    line-height: ${({ theme }) => theme.lineHeights[11]};
    margin-top: -${({ theme }) => theme.spaces[4]};
  }

  @media ${getMediaQuery('desktopM')} {
    & h1:first-of-type,
    h1:last-of-type {
      font-size: ${({ theme }) => theme.fontSizes[11]};
      line-height: ${({ theme }) => theme.lineHeights[7]};
      margin-top: 0;
    }
  }

  @media ${getMediaQuery('tabletS')} {
    margin-right: 0;
  }

  @media ${getMediaQuery('mobileL')} {
    & h1:first-of-type,
    h1:last-of-type {
      font-size: ${({ theme }) => theme.fontSizes[7]};
      line-height: ${({ theme }) => theme.lineHeights[3]};
      text-align: center;
    }
  }
`;

export const StyledDescription = styled.p`
  font-size: ${({ theme }) => theme.fontSizes[5]};
  font-weight: ${({ theme }) => theme.fontWeights.light};
  line-height: ${({ theme }) => theme.lineHeights[8]};
  color: ${({ theme }) => theme.colors.text.secondary};
  text-align: center;
  margin-left: auto;
  margin-right: ${({ theme }) => theme.spaces[2]};

  @media ${getMediaQuery('desktopM')} {
    font-size: ${({ theme }) => theme.fontSizes[2]};
    line-height: ${({ theme }) => theme.lineHeights[1]};
  }

  @media ${getMediaQuery('tabletS')} {
    margin-right: 0;
    text-align: right;
  }

  @media ${getMediaQuery('mobileL')} {
    font-size: ${({ theme }) => theme.fontSizes[1]};
    line-height: ${({ theme }) => theme.lineHeights[0]};
    text-align: center;
  }
`;

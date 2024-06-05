import styled, { css } from 'styled-components';

import getMediaQuery from '@/utils/helpers/getMediaQuery';

export interface IStyleProps {
  $variant: 'S' | 'M' | 'L';
}

const StyledTitle = styled.h1<IStyleProps>`
  background: linear-gradient(90.18deg, #00ce2c 0.18%, #aedf23 49.3%, #a3dc00 99.88%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  ${({ $variant }) =>
    $variant === 'S' &&
    css`
      font-size: ${({ theme }) => theme.fontSizes[3]};
      line-height: ${({ theme }) => theme.lineHeights[2]};

      @media ${getMediaQuery('mobileL')} {
        font-size: ${({ theme }) => theme.fontSizes[2]};
        line-height: ${({ theme }) => theme.lineHeights[1]};
      }
    `}

  ${({ $variant }) =>
    $variant === 'M' &&
    css`
      font-size: ${({ theme }) => theme.fontSizes[6]};
      line-height: ${({ theme }) => theme.lineHeights[4]};

      @media ${getMediaQuery('mobileL')} {
        font-size: ${({ theme }) => theme.fontSizes[3]};
        line-height: ${({ theme }) => theme.lineHeights[1]};
      }
    `}

  ${({ $variant }) =>
    $variant === 'L' &&
    css`
      font-size: ${({ theme }) => theme.fontSizes[12]};
      line-height: ${({ theme }) => theme.lineHeights[10]};

      @media ${getMediaQuery('desktopM')} {
        font-size: ${({ theme }) => theme.fontSizes[11]};
        line-height: ${({ theme }) => theme.lineHeights[7]};
      }

      @media ${getMediaQuery('mobileL')} {
        font-size: ${({ theme }) => theme.fontSizes[7]};
        line-height: ${({ theme }) => theme.lineHeights[3]};
      }
    `}
`;

export default StyledTitle;

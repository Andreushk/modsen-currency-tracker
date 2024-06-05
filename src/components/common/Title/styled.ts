import styled, { css } from 'styled-components';

import getMediaQuery from '@/utils/helpers/getMediaQuery';

type FontSizesType = 'M' | 'L';
type FontWeightsTypes = 'light' | 'regular' | 'semiBold';

export interface IStyleProps {
  $fontSize: FontSizesType;
  $fontWeight: FontWeightsTypes;
}

const StyledTitle = styled.div<IStyleProps>`
  color: ${({ theme }) => theme.colors.text.primary};

  ${({ $fontSize }) =>
    $fontSize === 'M' &&
    css`
      font-size: ${({ theme }) => theme.fontSizes[9]};
      line-height: ${({ theme }) => theme.lineHeights[5]};

      @media ${getMediaQuery('laptopM')} {
        font-size: ${({ theme }) => theme.fontSizes[5]};
        line-height: ${({ theme }) => theme.lineHeights[3]};
      }

      @media ${getMediaQuery('mobileL')} {
        font-size: ${({ theme }) => theme.fontSizes[3]};
        line-height: ${({ theme }) => theme.lineHeights[2]};
      }
    `}

  ${({ $fontSize }) =>
    $fontSize === 'L' &&
    css`
      font-size: ${({ theme }) => theme.fontSizes[12]};
      line-height: ${({ theme }) => theme.lineHeights[10]};

      @media ${getMediaQuery('laptopM')} {
        font-size: ${({ theme }) => theme.fontSizes[11]};
        line-height: ${({ theme }) => theme.lineHeights[9]};
      }

      @media ${getMediaQuery('mobileL')} {
        font-size: ${({ theme }) => theme.fontSizes[5]};
        line-height: ${({ theme }) => theme.lineHeights[5]};
      }
    `}

  ${({ $fontWeight }) =>
    $fontWeight === 'light' &&
    css`
      font-weight: ${({ theme }) => theme.fontWeights.light};
    `}

    ${({ $fontWeight }) =>
    $fontWeight === 'regular' &&
    css`
      font-weight: ${({ theme }) => theme.fontWeights.regular};
    `}

    ${({ $fontWeight }) =>
    $fontWeight === 'semiBold' &&
    css`
      font-weight: ${({ theme }) => theme.fontWeights.semiBold};
    `}
`;

export default StyledTitle;

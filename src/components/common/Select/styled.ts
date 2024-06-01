import { styled } from 'styled-components';

import getMediaQuery from '@/utils/helpers/getMediaQuery';

export const StyledContainer = styled.div`
  position: relative;
  width: 100%;
`;

export const StyledSelect = styled.select`
  display: block;
  font-size: ${({ theme }) => theme.fontSizes[0]};
  width: 100%;
  font-size: ${({ theme }) => theme.fontSizes[4]};
  font-weight: ${({ theme }) => theme.fontWeights.light};
  line-height: ${({ theme }) => theme.lineHeights[3]};
  color: ${({ theme }) => theme.colors.text.primary};
  padding-top: ${({ theme }) => theme.spaces[2]};
  padding-bottom: ${({ theme }) => theme.spaces[2]};
  padding-right: ${({ theme }) => theme.spaces[7]};
  padding-left: ${({ theme }) => theme.spaces[3]};
  border: none;
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  background-color: inherit;

  & option:first-child {
    display: none;
  }

  @media ${getMediaQuery('laptopM')} {
    font-size: ${({ theme }) => theme.fontSizes[2]};
    line-height: ${({ theme }) => theme.lineHeights[1]};
  }

  @media ${getMediaQuery('mobileL')} {
    font-size: ${({ theme }) => theme.fontSizes[1]};
    line-height: ${({ theme }) => theme.lineHeights[1]};
  }
`;

export const StyledSelectOpenIcon = styled.div`
  height: 16px;
  position: absolute;
  top: 50%;
  right: 8px;
  margin-top: -2px;
  transform: translateY(-50%);
`;

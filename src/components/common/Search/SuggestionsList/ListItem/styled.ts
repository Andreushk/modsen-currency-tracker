import styled from 'styled-components';

import getMediaQuery from '@/utils/helpers/getMediaQuery';

const StyledItem = styled.button`
  cursor: pointer;
  padding: ${({ theme }) => theme.spaces[2]} ${({ theme }) => theme.spaces[3]};
  text-align: center;
  background-color: transparent;
  border: ${({ theme }) => theme.borderWidths[0]} solid transparent;
  font-size: ${({ theme }) => theme.fontSizes[4]};
  font-weight: ${({ theme }) => theme.fontWeights.light};
  line-height: ${({ theme }) => theme.lineHeights[3]};
  color: ${({ theme }) => theme.colors.text.primary};

  &:hover {
    background-color: ${({ theme }) => theme.colors.bg.main};
  }

  &:focus,
  &:hover {
    border: ${({ theme }) => theme.borderWidths[0]} solid ${({ theme }) => theme.colors.text.accent};
  }

  &:first-of-type {
    border-top-right-radius: ${({ theme }) => theme.borderRadiuses[0]};
    border-top-left-radius: ${({ theme }) => theme.borderRadiuses[0]};
  }

  &:last-of-type {
    border-bottom-right-radius: ${({ theme }) => theme.borderRadiuses[0]};
    border-bottom-left-radius: ${({ theme }) => theme.borderRadiuses[0]};
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

export default StyledItem;

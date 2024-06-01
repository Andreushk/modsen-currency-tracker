import styled from 'styled-components';

import getMediaQuery from '@/utils/media/getMediaQuery';

export interface IStyleProps {
  $colorVariant?: 'primary' | 'secondary';
}

const StyledButton = styled.button<IStyleProps>`
  cursor: pointer;
  font-size: ${({ theme }) => theme.fontSizes[2]};
  font-weight: ${({ theme }) => theme.fontWeights.light};
  line-height: ${({ theme }) => theme.lineHeights[1]};
  padding: ${({ theme }) => theme.spaces[2]} ${({ theme }) => theme.spaces[3]};
  border-radius: ${({ theme }) => theme.borderRadiuses[0]};
  color: ${({ theme }) => theme.colors.text.secondary};
  border: ${({ theme }) => theme.spaces[0]} solid ${({ theme }) => theme.colors.borders};
  background-color: transparent;

  &:hover {
    background-color: transparent;
  }

  @media ${getMediaQuery('laptopM')} {
    font-size: ${({ theme }) => theme.fontSizes[1]};
    line-height: ${({ theme }) => theme.lineHeights[0]};
  }
`;

export default StyledButton;

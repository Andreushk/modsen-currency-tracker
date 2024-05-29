import styled from 'styled-components';

import gerMediaQuery from '@/utils/media/gerMediaQuery';

export interface IStyleProps {
  $isClickable?: boolean;
}

export const StyledContainer = styled.div<IStyleProps>`
  cursor: ${({ $isClickable }) => ($isClickable ? 'pointer' : 'default')};
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spaces[6]};
  min-height: ${({ theme }) => theme.heights[8]};
  padding: ${({ theme }) => theme.spaces[5]} ${({ theme }) => theme.spaces[7]};
  border: 1px solid ${({ theme }) => theme.colors.borders};
  border-radius: ${({ theme }) => theme.borderRadiuses[0]};
  background: ${({ theme }) => theme.colors.bg.blocks};

  @media ${gerMediaQuery('laptopM')} {
    gap: ${({ theme }) => theme.spaces[3]};
    min-height: fit-content;
    padding: ${({ theme }) => theme.spaces[5]};
  }
`;

import styled from 'styled-components';

import gerMediaQuery from '@/utils/media/gerMediaQuery';

export const StyledContainer = styled.div`
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

export const StyledIconContainer = styled.div`
  flex: 0 0 ${({ theme }) => theme.widths[6]};
  width: ${({ theme }) => theme.widths[6]};
  height: ${({ theme }) => theme.widths[6]};

  @media ${gerMediaQuery('tabletS')} {
    flex: 0 0 ${({ theme }) => theme.widths[5]};
    width: ${({ theme }) => theme.widths[5]};
    height: ${({ theme }) => theme.widths[5]};
  }
`;

export const StyledInfoContainer = styled.div`
  flex: 1 1 100%;
  width: 100%;
`;

export const StyledCurrencyTitle = styled.h3`
  height: ${({ theme }) => theme.fontSizes[11]};
  width: 20%;

  @media ${gerMediaQuery('laptopM')} {
    width: 40%;
    height: ${({ theme }) => theme.fontSizes[7]};
  }

  @media ${gerMediaQuery('tabletS')} {
    height: ${({ theme }) => theme.fontSizes[4]};
  }
`;

export const StyledCurrencyValue = styled.div`
  width: 100%;
  height: ${({ theme }) => theme.fontSizes[9]};
  margin-top: ${({ theme }) => theme.spaces[2]};

  @media ${gerMediaQuery('laptopM')} {
    height: ${({ theme }) => theme.fontSizes[3]};
  }

  @media ${gerMediaQuery('tabletS')} {
    height: ${({ theme }) => theme.fontSizes[2]};
  }
`;

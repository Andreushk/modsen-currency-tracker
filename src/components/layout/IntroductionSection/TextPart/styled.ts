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
  text-align: right;
  max-width: 690px;
  margin-right: ${({ theme }) => theme.spaces[13]};

  @media ${getMediaQuery('desktopM')} {
    max-width: auto;
    margin-right: 0;
  }

  @media ${getMediaQuery('mobileL')} {
    text-align: center;
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
    margin-right: 0;
    text-align: right;
  }

  @media ${getMediaQuery('mobileL')} {
    font-size: ${({ theme }) => theme.fontSizes[1]};
    line-height: ${({ theme }) => theme.lineHeights[0]};
    text-align: center;
    margin-left: unset;
  }
`;

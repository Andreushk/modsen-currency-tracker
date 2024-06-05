import styled from 'styled-components';

import getMediaQuery from '@/utils/helpers/getMediaQuery';

export const StyledSection = styled.div`
  padding-right: ${({ theme }) => theme.spaces[15]};
  padding-left: ${({ theme }) => theme.spaces[15]};

  @media ${getMediaQuery('laptopM')} {
    padding-right: ${({ theme }) => theme.spaces[12]};
    padding-left: ${({ theme }) => theme.spaces[12]};
  }

  @media ${getMediaQuery('tabletS')} {
    padding-right: ${({ theme }) => theme.spaces[7]};
    padding-left: ${({ theme }) => theme.spaces[7]};
  }
`;

export const StyledSectionContentContainer = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spaces[12]};

  @media ${getMediaQuery('mobileL')} {
    flex-direction: column;
    gap: ${({ theme }) => theme.spaces[8]};
  }
`;

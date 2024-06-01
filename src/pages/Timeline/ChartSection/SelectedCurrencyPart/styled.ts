import styled from 'styled-components';

import getMediaQuery from '@/utils/helpers/getMediaQuery';

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.widths[5]};
  margin-top: ${({ theme }) => theme.widths[17]};

  @media ${getMediaQuery('desktopM')} {
    gap: ${({ theme }) => theme.spaces[3]};
    margin-top: ${({ theme }) => theme.spaces[8]};
  }

  @media ${getMediaQuery('tabletS')} {
    width: 100%;

    & > div:last-of-type {
      width: 100%;
    }
  }
`;

export default StyledContainer;

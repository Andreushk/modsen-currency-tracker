import styled from 'styled-components';

import getMediaQuery from '@/utils/helpers/getMediaQuery';

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spaces[4]};
  width: fit-content;
  margin: 0 auto;

  @media ${getMediaQuery('laptopM')} {
    gap: ${({ theme }) => theme.spaces[3]};
  }

  @media ${getMediaQuery('mobileL')} {
    gap: ${({ theme }) => theme.spaces[2]};
  }
`;

export default StyledContainer;

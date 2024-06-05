import styled from 'styled-components';

import getMediaQuery from '@/utils/helpers/getMediaQuery';

const StyledContainer = styled.div`
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

export default StyledContainer;

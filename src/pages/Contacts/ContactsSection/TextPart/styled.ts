import styled from 'styled-components';

import getMediaQuery from '@/utils/helpers/getMediaQuery';

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spaces[5]};
  flex: 1 1 100%;

  @media ${getMediaQuery('mobileL')} {
    text-align: center;
  }
`;

export default StyledContainer;

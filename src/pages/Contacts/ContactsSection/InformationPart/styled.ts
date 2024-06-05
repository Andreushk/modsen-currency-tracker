import styled from 'styled-components';

import getMediaQuery from '@/utils/helpers/getMediaQuery';

const StyledContainer = styled.div`
  flex-shrink: 0;
  width: fit-content;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spaces[9]};

  @media ${getMediaQuery('tabletS')} {
    gap: ${({ theme }) => theme.spaces[7]};
  }
`;

export default StyledContainer;

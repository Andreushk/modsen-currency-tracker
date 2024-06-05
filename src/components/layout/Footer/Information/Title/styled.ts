import styled from 'styled-components';

import getMediaQuery from '@/utils/helpers/getMediaQuery';

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spaces[3]};

  @media ${getMediaQuery('mobileL')} {
    margin: 0 auto;
    width: fit-content;
  }

  @media ${getMediaQuery('mobileL')} {
    & svg {
      width: 30px;
      height: 30px;
      gap: ${({ theme }) => theme.spaces[2]};
    }
  }
`;

export default StyledContainer;

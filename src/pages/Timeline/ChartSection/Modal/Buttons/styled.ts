import styled from 'styled-components';

import getMediaQuery from '@/utils/helpers/getMediaQuery';

const StyledContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: ${({ theme }) => theme.spaces[7]};

  @media ${getMediaQuery('mobileM')} {
    flex-direction: column;
    gap: ${({ theme }) => theme.spaces[2]};
  }
`;

export default StyledContainer;

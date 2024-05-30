import styled from 'styled-components';

import getMediaQuery from '@/utils/media/getMediaQuery';

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spaces[3]};
  margin-top: ${({ theme }) => theme.spaces[8]};

  @media ${getMediaQuery('desktopS')} {
    gap: ${({ theme }) => theme.spaces[2]};
    margin-top: ${({ theme }) => theme.spaces[4]};
  }
`;

export default StyledContainer;

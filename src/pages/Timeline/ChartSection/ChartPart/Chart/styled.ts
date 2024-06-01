import styled from 'styled-components';

import getMediaQuery from '@/utils/media/getMediaQuery';

const StyledContainer = styled.div`
  position: relative;
  height: ${({ theme }) => theme.heights[10]};
  margin-top: ${({ theme }) => theme.spaces[14]};
  background-color: ${({ theme }) => theme.colors.bg.main};

  @media ${getMediaQuery('desktopM')} {
    margin-top: ${({ theme }) => theme.spaces[8]};
  }
`;

export default StyledContainer;

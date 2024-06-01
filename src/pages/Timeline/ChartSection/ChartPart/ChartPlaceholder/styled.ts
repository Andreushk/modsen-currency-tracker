import styled from 'styled-components';

import getMediaQuery from '@/utils/helpers/getMediaQuery';

const StyledContainer = styled.div`
  width: 100%;
  height: ${({ theme }) => theme.heights[10]};
  margin-top: ${({ theme }) => theme.spaces[14]};
  background-color: ${({ theme }) => theme.colors.bg.blocks};
  border-radius: ${({ theme }) => theme.borderRadiuses[0]};

  @media ${getMediaQuery('desktopM')} {
    margin-top: ${({ theme }) => theme.spaces[8]};
  }
`;

export default StyledContainer;

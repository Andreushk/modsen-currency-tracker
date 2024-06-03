import styled from 'styled-components';

import getMediaQuery from '@/utils/helpers/getMediaQuery';

const StyledContainer = styled.div`
  position: relative;
  width: ${({ theme }) => theme.widths[7]};
  margin: ${({ theme }) => theme.spaces[3]} auto 0 auto;

  @media ${getMediaQuery('mobileL')} {
    width: 80%;
  }
`;

export default StyledContainer;

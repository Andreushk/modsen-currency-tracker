import styled from 'styled-components';

import getMediaQuery from '@/utils/media/getMediaQuery';

const StyledContainer = styled.div`
  flex: 0 0 ${({ theme }) => theme.widths[8]};

  @media ${getMediaQuery('desktopM')} {
    flex: 0 0 40%;
  }

  @media ${getMediaQuery('mobileL')} {
    text-align: center;
  }
`;

export default StyledContainer;

import styled from 'styled-components';

import getMediaQuery from '@/utils/helpers/getMediaQuery';

const StyledContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex: 1 1 100%;

  @media ${getMediaQuery('desktopM')} {
    flex: 0 0 50%;
  }

  @media ${getMediaQuery('desktopS')} {
    flex: unset;
    width: 80%;
    margin: 0 auto;
  }

  @media ${getMediaQuery('mobileL')} {
    width: 90%;
  }

  @media ${getMediaQuery('mobileM')} {
    width: 100%;
  }
`;

export default StyledContainer;

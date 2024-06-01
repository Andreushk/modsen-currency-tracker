import styled from 'styled-components';

import getMediaQuery from '@/utils/helpers/getMediaQuery';

const StyledIconContainer = styled.div`
  flex: 0 0 ${({ theme }) => theme.widths[6]};
  width: ${({ theme }) => theme.widths[6]};
  height: ${({ theme }) => theme.widths[6]};

  & svg {
    width: 100%;
    height: 100%;
  }

  @media ${getMediaQuery('tabletS')} {
    flex: 0 0 ${({ theme }) => theme.widths[5]};
    width: ${({ theme }) => theme.widths[5]};
    height: ${({ theme }) => theme.widths[5]};

    & svg {
      width: 100%;
      height: 100%;
    }
  }
`;

export default StyledIconContainer;

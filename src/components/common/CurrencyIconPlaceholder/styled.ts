import styled from 'styled-components';

import getMediaQuery from '@/utils/helpers/getMediaQuery';

const StyledContainer = styled.div`
  flex: 0 0 ${({ theme }) => theme.widths[6]};
  width: ${({ theme }) => theme.widths[6]};
  height: ${({ theme }) => theme.widths[6]};
  border-radius: ${({ theme }) => theme.borderRadiuses[0]};
  background-color: ${({ theme }) => theme.colors.bg.main};

  @media ${getMediaQuery('tabletS')} {
    flex: 0 0 ${({ theme }) => theme.widths[5]};
    width: ${({ theme }) => theme.widths[5]};
    height: ${({ theme }) => theme.widths[5]};
  }
`;

export default StyledContainer;

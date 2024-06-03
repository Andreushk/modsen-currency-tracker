import styled from 'styled-components';

import getMediaQuery from '@/utils/helpers/getMediaQuery';

const StyledContainer = styled.div`
  text-align: center;
  padding-right: ${({ theme }) => theme.spaces[3]};
  padding-left: ${({ theme }) => theme.spaces[3]};
  margin-top: ${({ theme }) => theme.spaces[16]};

  @media ${getMediaQuery('mobileL')} {
    margin-top: ${({ theme }) => theme.spaces[12]};
  }
`;

export default StyledContainer;

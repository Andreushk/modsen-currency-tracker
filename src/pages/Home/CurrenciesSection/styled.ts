import styled from 'styled-components';

import getMediaQuery from '@/utils/helpers/getMediaQuery';

const StyledSection = styled.section`
  padding-right: ${({ theme }) => theme.spaces[15]};
  padding-left: ${({ theme }) => theme.spaces[15]};

  @media ${getMediaQuery('laptopM')} {
    padding-right: ${({ theme }) => theme.spaces[12]};
    padding-left: ${({ theme }) => theme.spaces[12]};
  }

  @media ${getMediaQuery('tabletS')} {
    padding-right: ${({ theme }) => theme.spaces[7]};
    padding-left: ${({ theme }) => theme.spaces[7]};
  }
`;

export default StyledSection;

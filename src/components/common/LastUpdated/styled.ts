import styled from 'styled-components';

import gerMediaQuery from '@/utils/media/gerMediaQuery';

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spaces[4]};
  width: fit-content;
  margin: 0 auto;

  @media ${gerMediaQuery('laptopM')} {
    gap: ${({ theme }) => theme.spaces[3]};
  }

  @media ${gerMediaQuery('mobileL')} {
    gap: ${({ theme }) => theme.spaces[2]};
  }
`;

export default StyledContainer;

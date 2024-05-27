import { Link } from 'react-router-dom';
import styled from 'styled-components';

import gerMediaQuery from '@/utils/media/gerMediaQuery';

const StyledNavigationLink = styled(Link)`
  font-size: ${({ theme }) => theme.fontSizes[3]};
  font-weight: ${({ theme }) => theme.fontWeights.light};
  line-height: ${({ theme }) => theme.lineHeights[5]};
  color: ${({ theme }) => theme.colors.text.primary};
  text-decoration: none;
  transition: color ${({ theme }) => theme.durations.animations}ms ease;

  &:focus {
    color: ${({ theme }) => theme.colors.text.accent};
  }

  @media (hover: hover) {
    &:hover {
      color: ${({ theme }) => theme.colors.text.accent};
    }
  }

  @media ${gerMediaQuery('laptopS')} {
    font-size: ${({ theme }) => theme.fontSizes[2]};
    line-height: ${({ theme }) => theme.lineHeights[2]};
  }
`;

export default StyledNavigationLink;

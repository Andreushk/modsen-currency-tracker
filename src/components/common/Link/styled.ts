import { Link } from 'react-router-dom';
import styled from 'styled-components';

import getMediaQuery from '@/utils/helpers/getMediaQuery';

export interface IStyleProps {
  $isDark?: boolean;
}

const StyledLink = styled(Link)<IStyleProps>`
  font-size: ${({ theme }) => theme.fontSizes[3]};
  font-weight: ${({ theme }) => theme.fontWeights.light};
  line-height: ${({ theme }) => theme.lineHeights[5]};
  text-decoration: none;
  transition: color ${({ theme }) => theme.durations.animations}ms ease;

  color: ${({ theme, $isDark }) => ($isDark ? theme.colors.text.links : theme.colors.text.primary)};

  &:focus {
    color: ${({ theme }) => theme.colors.text.accent};
  }

  @media (hover: hover) {
    &:hover {
      color: ${({ theme }) => theme.colors.text.accent};
    }
  }

  @media ${getMediaQuery('laptopS')} {
    font-size: ${({ theme }) => theme.fontSizes[2]};
    line-height: ${({ theme }) => theme.lineHeights[2]};
  }
`;

export default StyledLink;

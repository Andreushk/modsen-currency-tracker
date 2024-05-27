import styled from 'styled-components';

import gerMediaQuery from '@/utils/media/gerMediaQuery';

interface IStyleProps {
  $isVisible: boolean;
}

const StyledContainer = styled.div<IStyleProps>`
  position: absolute;
  right: 0;
  top: 0;
  max-width: ${({ theme }) => theme.widths[9]};
  width: 50%;
  height: 100%;
  padding: ${({ theme }) => theme.spaces[10]};
  background-color: ${({ theme }) => theme.colors.bg.blocks};
  transition: transform ${({ theme }) => theme.durations.animations}ms ease;
  transform: ${({ $isVisible }) => ($isVisible ? 'translateX(0)' : 'translateX(100%)')};
  will-change: transform;

  @media ${gerMediaQuery('mobileM')} {
    width: 65%;
    padding: ${({ theme }) => theme.spaces[8]};
  }
`;

export default StyledContainer;

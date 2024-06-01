import styled from 'styled-components';

import getMediaQuery from '@/utils/media/getMediaQuery';

interface IStyleProps {
  $isVisible: boolean;
}

const StyledContainer = styled.div<IStyleProps>`
  position: fixed;
  top: ${({ theme, $isVisible }) => ($isVisible ? theme.spaces[4] : `-${theme.spaces[16]}`)};
  left: 50%;
  transform: translateX(-50%);
  max-width: ${({ theme }) => theme.widths[9]};
  width: 80%;
  padding: ${({ theme }) => theme.spaces[4]};
  border-radius: ${({ theme }) => theme.borderRadiuses[0]};
  background-color: green;
  text-align: center;
  opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
  transition: ${({ theme }) => theme.durations.animations}ms ease;

  @media ${getMediaQuery('mobileM')} {
    width: 65%;
  }
`;

export default StyledContainer;

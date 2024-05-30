import styled, { keyframes } from 'styled-components';

import getMediaQuery from '@/utils/media/getMediaQuery';

interface IStyleProps {
  $isLoading: boolean;
}

const pulse = keyframes`
  0% {
    transform: scale(0.75);
  }
  50% {
    transform: scale(1);
  }
  100% {
    transform: scale(0.75);
  }
`;

const IndicatorContainer = styled.div<IStyleProps>`
  position: relative;
  width: ${({ theme }) => theme.widths[5]};
  height: ${({ theme }) => theme.widths[5]};
  animation: ${pulse} 3s infinite;

  & div {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: ${({ theme, $isLoading }) =>
      $isLoading ? theme.colors.text.secondary : theme.colors.text.accent};
    border-radius: 50%;
  }

  & > div:nth-of-type(3) {
    width: 100%;
    height: 100%;
    opacity: 0.15;
  }

  & > div:nth-of-type(2) {
    width: 66%;
    height: 66%;
    opacity: 0.35;
  }

  & > div:nth-of-type(1) {
    width: 32%;
    height: 32%;
  }

  @media ${getMediaQuery('laptopM')} {
    width: ${({ theme }) => theme.spaces[6]};
    height: ${({ theme }) => theme.spaces[6]};
  }

  @media ${getMediaQuery('mobileL')} {
    width: ${({ theme }) => theme.spaces[5]};
    height: ${({ theme }) => theme.spaces[5]};
  }
`;

export default IndicatorContainer;

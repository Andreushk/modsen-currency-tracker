import styled from 'styled-components';

interface IStyleProps {
  $isVisible: boolean;
}

const StyledOverlay = styled.div<IStyleProps>`
  position: fixed;
  top: 0;
  left: 0;
  z-index: ${({ theme }) => theme.zIndexes[4]};
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, ${({ $isVisible }) => ($isVisible ? 0.5 : 0.1)});
  transition: ${({ theme }) => theme.durations.animations}ms ease;
`;

export default StyledOverlay;

import styled from 'styled-components';

const StyledLoaderShimmer = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;

  background: linear-gradient(
    to right,
    ${({ theme }) => theme.colors.bg.main} 10%,
    ${({ theme }) => theme.colors.bg.input} 38%,
    ${({ theme }) => theme.colors.bg.main} 54%
  );
  background-size: 200% 200%;
  background-position: var(--position, -100%) 0;
  animation: shimmer var(--duration, 2s) infinite linear;

  @keyframes shimmer {
    to {
      background-position: var(--position, 100%) 0;
    }
  }
`;

export default StyledLoaderShimmer;

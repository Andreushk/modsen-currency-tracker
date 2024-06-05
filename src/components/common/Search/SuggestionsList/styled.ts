import styled from 'styled-components';

const StyledContainer = styled.div`
  position: absolute;
  top: ${({ theme }) => theme.spaces[13]};
  left: 0;
  z-index: ${({ theme }) => theme.zIndexes[2]};
  display: flex;
  flex-direction: column;
  width: 100%;
  height: fit-content;
  background-color: ${({ theme }) => theme.colors.bg.input};
  border-radius: ${({ theme }) => theme.borderRadiuses[0]};
  overflow: hidden;
`;

export default StyledContainer;

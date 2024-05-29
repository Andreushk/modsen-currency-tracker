import styled from 'styled-components';

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: ${({ theme }) => theme.heights[5]};
  background-color: ${({ theme }) => theme.colors.bg.main};
  border-radius: ${({ theme }) => theme.borderRadiuses[0]};
  margin-top: ${({ theme }) => theme.spaces[5]};
`;

export default StyledContainer;

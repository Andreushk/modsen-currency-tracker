import styled from 'styled-components';

const StyledContainer = styled.nav`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spaces[6]};
  margin-bottom: ${({ theme }) => theme.spaces[6]};
`;

export default StyledContainer;

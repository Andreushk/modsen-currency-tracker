import styled from 'styled-components';

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spaces[5]};
  max-width: ${({ theme }) => theme.widths[9]};
  margin: ${({ theme }) => theme.spaces[13]} auto;
  text-align: center;
`;

export default StyledContainer;

import styled from 'styled-components';

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: ${({ theme }) => theme.spaces[7]};

  & select {
    text-align: center;
  }
`;

export default StyledContainer;

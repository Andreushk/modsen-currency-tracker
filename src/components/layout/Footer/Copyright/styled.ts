import styled from 'styled-components';

const StyledContainer = styled.div`
  margin-top: ${({ theme }) => theme.spaces[10]};
  padding-right: ${({ theme }) => theme.spaces[7]};
  padding-left: ${({ theme }) => theme.spaces[7]};
  text-align: center;
  color: ${({ theme }) => theme.colors.text.links};
`;

export default StyledContainer;

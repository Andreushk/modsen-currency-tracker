import styled from 'styled-components';

const StyledContainer = styled.div`
  padding-left: ${({ theme }) => theme.spaces[2]};
  border-left: ${({ theme }) => theme.borderWidths[1]} solid #00ce2c;
`;

export default StyledContainer;

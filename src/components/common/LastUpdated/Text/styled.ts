import styled from 'styled-components';

const StyledText = styled.span`
  font-size: ${({ theme }) => theme.fontSizes[10]};
  font-weight: ${({ theme }) => theme.fontWeights.light};
  line-height: ${({ theme }) => theme.lineHeights[5]};
`;

export default StyledText;

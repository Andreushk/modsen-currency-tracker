import styled from 'styled-components';

const StyledModalWindowContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: ${({ theme }) => theme.widths[9]};
  width: 85%;
  padding: ${({ theme }) => theme.spaces[7]};
  background-color: ${({ theme }) => theme.colors.bg.blocks};
  border-radius: ${({ theme }) => theme.borderRadiuses[0]};
`;

export default StyledModalWindowContainer;

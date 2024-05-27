import styled from 'styled-components';

interface IStyleProps {
  $withPointerCursor: boolean;
}

const StyledContainer = styled.div<IStyleProps>`
  cursor: ${({ $withPointerCursor }) => ($withPointerCursor ? 'pointer' : 'default')};
`;

export default StyledContainer;

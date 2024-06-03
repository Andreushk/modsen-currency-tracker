import styled from 'styled-components';

export const StyledContainer = styled.div`
  position: relative;
  padding-right: ${({ theme }) => theme.spaces[3]};
  padding-left: ${({ theme }) => theme.spaces[3]};
  margin-top: ${({ theme }) => theme.spaces[13]};
`;

export const StyledMapContainer = styled.div`
  height: ${({ theme }) => theme.heights[9]};

  & p {
    color: #000;
  }
`;

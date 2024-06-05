import styled from 'styled-components';

export const StyledContainer = styled.div`
  width: 100%;
  position: relative;
  padding-right: ${({ theme }) => theme.spaces[3]};
  padding-left: ${({ theme }) => theme.spaces[3]};
  margin-top: ${({ theme }) => theme.spaces[13]};
`;

export const StyledMapContainer = styled.div`
  width: 100%;
  height: ${({ theme }) => theme.heights[9]};

  & p {
    color: #000;
  }
`;

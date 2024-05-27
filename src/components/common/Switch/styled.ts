import styled from 'styled-components';

export const StyledButton = styled.button`
  cursor: pointer;
  position: relative;
  width: ${({ theme }) => theme.widths[5]};
  height: ${({ theme }) => theme.heights[4]};
  border: ${({ theme }) => theme.borderWidths[0]} solid ${({ theme }) => theme.colors.text.primary};
  background-color: ${({ theme }) => theme.colors.bg.main};
  border-radius: ${({ theme }) => theme.widths[5]};
`;

export const StyledSpan = styled.span`
  position: absolute;
  top: ${({ theme }) => theme.spaces[0]};
  left: ${({ theme }) => theme.spaces[0]};
  display: block;
  width: ${({ theme }) => theme.widths[3]};
  height: ${({ theme }) => theme.widths[3]};
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.text.primary};
`;

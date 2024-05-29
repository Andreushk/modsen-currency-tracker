import { styled } from 'styled-components';

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spaces[2]};
  width: 100%;
`;

export const StyledLabel = styled.span`
  font-family: 'Poppins', sans-serif;
  font-size: ${({ theme }) => theme.fontSizes[2]};
  font-weight: ${({ theme }) => theme.fontWeights.light};
  line-height: ${({ theme }) => theme.lineHeights[1]};
  margin-right: ${({ theme }) => theme.spaces[11]};
  text-transform: capitalize;
`;

export const StyledSelect = styled.select`
  display: block;
  font-size: ${({ theme }) => theme.fontSizes[0]};
  width: 100%;
  font-family: 'Poppins', sans-serif;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  color: ${({ theme }) => theme.colors.text.primary};
  padding: ${({ theme }) => theme.spaces[2]} ${({ theme }) => theme.spaces[3]};
  border: ${({ theme }) => theme.spaces[0]} solid ${({ theme }) => theme.colors.borders};
  border-radius: ${({ theme }) => theme.borderRadiuses[0]};
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  background-color: inherit;

  & option:first-child {
    display: none;
  }
`;

import styled from 'styled-components';

export const StyledContainer = styled.div`
  margin-top: ${({ theme }) => theme.spaces[5]};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spaces[3]};
`;

export const StyledInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spaces[1]};

  & label {
    font-size: ${({ theme }) => theme.fontSizes[1]};
    font-weight: ${({ theme }) => theme.fontWeights.light};
    line-height: ${({ theme }) => theme.lineHeights[1]};
  }

  & input {
    width: 100%;
    outline: none;
    padding: ${({ theme }) => theme.spaces[2]} ${({ theme }) => theme.spaces[3]};
    border-radius: ${({ theme }) => theme.borderRadiuses[0]};
    color: ${({ theme }) => theme.colors.text.primary};
    border: ${({ theme }) => theme.spaces[0]} solid ${({ theme }) => theme.colors.borders};
    background-color: ${({ theme }) => theme.colors.bg.main};
  }
`;

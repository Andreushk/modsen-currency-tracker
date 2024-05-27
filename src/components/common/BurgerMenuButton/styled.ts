import styled from 'styled-components';

export const StyledBurgerIcon = styled.div`
  cursor: pointer;
  position: relative;
  display: inline-block;
  width: ${({ theme }) => theme.widths[4]};
  height: ${({ theme }) => theme.spaces[5]};
`;

export const BurgerLine = styled.span`
  position: absolute;
  display: block;
  width: 100%;
  height: calc(${({ theme }) => theme.widths[0]} / 2);
  background-color: ${({ theme }) => theme.colors.text.primary};

  &:nth-child(1) {
    top: 0;
  }

  &:nth-child(2) {
    top: 50%;
    transform: translateY(-50%);
  }

  &:nth-child(3) {
    bottom: 0;
  }
`;

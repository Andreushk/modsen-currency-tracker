import styled from 'styled-components';

import getMediaQuery from '@/utils/helpers/getMediaQuery';

export const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  border-radius: ${({ theme }) => theme.borderRadiuses[0]};
  background: ${({ theme }) => theme.colors.bg.input};
  width: 100%;
  height: ${({ theme }) => theme.heights[5]};
  overflow: hidden;
`;

export const StyledInput = styled.input`
  flex: 1 1 100%;
  width: 100%;
  height: 100%;
  background-color: transparent;
  border: none;
  padding-right: ${({ theme }) => theme.spaces[5]};
  padding-left: ${({ theme }) => theme.spaces[5]};
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: ${({ theme }) => theme.fontSizes[2]};
  font-weight: ${({ theme }) => theme.fontWeights.regular};

  &::placeholder {
    color: ${({ theme }) => theme.colors.text.placeholder};
    font-size: ${({ theme }) => theme.fontSizes[2]};
    font-weight: ${({ theme }) => theme.fontWeights.regular};
  }

  @media ${getMediaQuery('mobileL')} {
    padding-right: ${({ theme }) => theme.spaces[3]};
    padding-left: ${({ theme }) => theme.spaces[3]};
  }
`;

export const StyledButton = styled.button`
  cursor: pointer;
  flex: 0 0 ${({ theme }) => theme.heights[5]};
  width: ${({ theme }) => theme.heights[5]};
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: none;

  & svg {
    width: ${({ theme }) => theme.widths[4]};
    height: ${({ theme }) => theme.widths[4]};
  }

  @media ${getMediaQuery('mobileL')} {
    flex: 0 0 ${({ theme }) => theme.widths[5]};
    width: ${({ theme }) => theme.widths[5]};
  }
`;

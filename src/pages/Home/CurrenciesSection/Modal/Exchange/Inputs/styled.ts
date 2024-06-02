import styled from 'styled-components';

import getMediaQuery from '@/utils/helpers/getMediaQuery';

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spaces[3]};
  margin-top: ${({ theme }) => theme.spaces[5]};

  & input {
    flex: 1 1 100%;
    width: 100%;
    min-height: ${({ theme }) => theme.heights[5]};
    border: none;
    outline: none;
    padding-right: ${({ theme }) => theme.spaces[2]};
    padding-left: ${({ theme }) => theme.spaces[2]};
    background-color: ${({ theme }) => theme.colors.bg.main};
    border-radius: ${({ theme }) => theme.borderRadiuses[0]};
    text-align: center;

    font-size: ${({ theme }) => theme.fontSizes[2]};
    font-weight: ${({ theme }) => theme.fontWeights.light};
    line-height: ${({ theme }) => theme.lineHeights[1]};
    color: ${({ theme }) => theme.colors.text.primary};

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    &[type='number'] {
      -moz-appearance: textfield;
    }

    @media ${getMediaQuery('mobileL')} {
      & input {
        font-size: ${({ theme }) => theme.fontSizes[1]};
        line-height: ${({ theme }) => theme.lineHeights[1]};
      }
    }
  }
`;

export default StyledContainer;

import styled, { css } from 'styled-components';

import getMediaQuery from '@/utils/media/getMediaQuery';

interface IStyleProps {
  $isDarkMode: boolean;
}

const StyledSection = styled.section<IStyleProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: ${({ theme }) => theme.spaces[7]};
  padding-bottom: ${({ theme }) => theme.spaces[11]};
  padding-right: ${({ theme }) => theme.spaces[12]};
  padding-left: ${({ theme }) => theme.spaces[12]};
  margin-bottom: ${({ theme }) => theme.spaces[11]};

  ${({ $isDarkMode }) =>
    $isDarkMode &&
    css`
      background: rgb(3, 3, 4);
      background: linear-gradient(
        90deg,
        rgba(3, 3, 4, 1) 0%,
        rgba(0, 188, 79, 0.2) 51%,
        rgba(3, 3, 4, 1) 100%
      );
    `}

  ${({ $isDarkMode }) =>
    !$isDarkMode &&
    css`
      background-color: ${({ theme }) => theme.colors.bg.blocks};
    `}

  @media ${getMediaQuery('desktopM')} {
    & svg {
      width: 200px;
      height: 210px;
    }
  }

  @media ${getMediaQuery('tabletS')} {
    gap: ${({ theme }) => theme.spaces[3]};
    padding-right: ${({ theme }) => theme.spaces[7]};
    padding-left: ${({ theme }) => theme.spaces[7]};

    & svg {
      width: 150px;
      height: 160px;
    }
  }

  @media ${getMediaQuery('mobileL')} {
    flex-direction: column;
    padding: ${({ theme }) => theme.spaces[12]} ${({ theme }) => theme.spaces[7]};

    & svg {
      width: ${({ theme }) => theme.widths[6]};
      height: ${({ theme }) => theme.widths[6]};
    }
  }
`;

export default StyledSection;

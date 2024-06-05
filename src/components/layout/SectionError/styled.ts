import styled from 'styled-components';

import getMediaQuery from '@/utils/helpers/getMediaQuery';

export const StyledSection = styled.section`
  max-width: ${({ theme }) => theme.widths[10]};
  margin: ${({ theme }) => theme.spaces[6]} auto;
  padding-right: ${({ theme }) => theme.spaces[15]};
  padding-left: ${({ theme }) => theme.spaces[15]};

  @media ${getMediaQuery('laptopM')} {
    padding-right: ${({ theme }) => theme.spaces[12]};
    padding-left: ${({ theme }) => theme.spaces[12]};
  }

  @media ${getMediaQuery('tabletS')} {
    padding-right: ${({ theme }) => theme.spaces[7]};
    padding-left: ${({ theme }) => theme.spaces[7]};
  }
`;

export const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: ${({ theme }) => theme.spaces[3]};
  min-height: ${({ theme }) => theme.heights[9]};
  border: ${({ theme }) => theme.borderWidths[0]} solid ${({ theme }) => theme.colors.borders};
  border-radius: ${({ theme }) => theme.borderRadiuses[0]};
  padding: ${({ theme }) => theme.spaces[5]};
  text-align: center;

  & p {
    color: ${({ theme }) => theme.colors.text.links};
  }
`;

export default StyledSection;

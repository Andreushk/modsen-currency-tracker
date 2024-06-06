import React from 'react';

import { Paragraph } from '@/components';

import StyledContainer from './styled';

const LOADING_TEXT = 'Loading...';

interface IComponentProps {
  exchangeRate: number | null;
  isLoading: boolean;
  error: string | null;
}

const ResultBlock: React.FC<IComponentProps> = ({ exchangeRate, isLoading, error }) => (
  <StyledContainer data-testid="results">
    {exchangeRate && !isLoading && (
      <Paragraph data-testid="rate">{`1 : ${exchangeRate}`}</Paragraph>
    )}
    {isLoading && <Paragraph>{LOADING_TEXT}</Paragraph>}
    {error}
  </StyledContainer>
);

export default React.memo(ResultBlock);

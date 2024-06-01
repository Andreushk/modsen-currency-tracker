import React from 'react';

import { Paragraph } from '@/components';
import roundExchangeRate from '@/utils/helpers/roundExchangeRate';

import StyledContainer from './styled';

const LOADING_TEXT = 'Loading...';

interface IComponentProps {
  exchangeRate: number | null;
  isLoading: boolean;
  error: string | null;
}

const ResultBlock: React.FC<IComponentProps> = ({ exchangeRate, isLoading, error }) => (
  <StyledContainer>
    {exchangeRate && <Paragraph>{`1 : ${roundExchangeRate(exchangeRate)}`}</Paragraph>}
    {isLoading && <Paragraph>{LOADING_TEXT}</Paragraph>}
    {error}
  </StyledContainer>
);

export default React.memo(ResultBlock);

import roundExchangeRate from '@/utils/currency/roundExchangeRate';

import { StyledContainer, StyledCurrencyTitle, StyledCurrencyValue } from './styled';

interface IComponentProps {
  title: string;
  value: string;
  isWithRounding: boolean;
}

const Information: React.FC<IComponentProps> = ({ title, value, isWithRounding }) => (
  <StyledContainer>
    <StyledCurrencyTitle>{title}</StyledCurrencyTitle>
    <StyledCurrencyValue>
      {isWithRounding ? `R$: ${roundExchangeRate(+value)}` : value}
    </StyledCurrencyValue>
  </StyledContainer>
);

export default Information;

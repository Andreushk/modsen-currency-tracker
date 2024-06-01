import namesMap from '@/constants/currenciesNamesMap';
import { AppCurrencyCodesType, AppStocksType } from '@/types/api/currencies';
import roundExchangeRate from '@/utils/currency/roundExchangeRate';

import { StyledContainer, StyledCurrencyTitle, StyledCurrencyValue } from './styled';

interface IComponentProps {
  code: AppCurrencyCodesType | AppStocksType;
  value: string;
  isWithRounding: boolean;
}

const Information: React.FC<IComponentProps> = ({ code, value, isWithRounding }) => (
  <StyledContainer>
    <StyledCurrencyTitle>{namesMap[code]}</StyledCurrencyTitle>
    <StyledCurrencyValue>
      {isWithRounding ? `R$: ${roundExchangeRate(+value)}` : value}
    </StyledCurrencyValue>
  </StyledContainer>
);

export default Information;

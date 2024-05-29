import iconMap from '@/constants/currenciesIconsMap';
import { AppCurrencyCodesType, AppStocksType } from '@/types/api/currencies';

import StyledIconContainer from './styled';

interface IComponentProps {
  code: AppCurrencyCodesType | AppStocksType;
}

const CurrencyIcon: React.FC<IComponentProps> = ({ code }) => {
  const Icon = iconMap[code];

  return (
    <StyledIconContainer data-testid="currency-icon">
      <Icon />
    </StyledIconContainer>
  );
};

export default CurrencyIcon;

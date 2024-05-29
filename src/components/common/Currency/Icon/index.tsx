import iconMap from '@/constants/currenciesIconsMap';
import { AppCurrencyCodesType, AppStocksType } from '@/types/api/currencyApi/currencies';

import StyledIconContainer from './styled';

interface IComponentProps {
  code: AppCurrencyCodesType | AppStocksType;
}

const Icon: React.FC<IComponentProps> = ({ code }) => {
  const IconComponent = iconMap[code];

  return (
    <StyledIconContainer data-testid="currency-icon">
      <IconComponent />
    </StyledIconContainer>
  );
};

export default Icon;

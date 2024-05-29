import { SVGProps, VFC } from 'react';

import AustralianDollar from '@/assets/icons/australian-dollar-icon.svg';
import BitcoinIcon from '@/assets/icons/bitcoin-icon.svg';
import BovespaIndexIcon from '@/assets/icons/bovespa-icon.svg';
import CanadianDollarIcon from '@/assets/icons/canadian-dollar-icon.svg';
import DollarIcon from '@/assets/icons/dollar-icon.svg';
import EuroIcon from '@/assets/icons/euro-icon.svg';
import IfixIcon from '@/assets/icons/IFIX.svg';
import LibraIcon from '@/assets/icons/libra-icon.svg';
import ArgentinePesoIcon from '@/assets/icons/peso-argentino-icon.svg';
import YuanIcon from '@/assets/icons/won-icon.svg';
import YenIcon from '@/assets/icons/yen-icon.svg';
import { AppCurrencyCodesType, AppStocksType } from '@/types/api/currencyApi/currencies';

type IconMapType = {
  [key in AppCurrencyCodesType | AppStocksType]: VFC<SVGProps<SVGSVGElement>>;
};

const iconMap: IconMapType = {
  USD: DollarIcon,
  ARS: ArgentinePesoIcon,
  CAD: CanadianDollarIcon,
  JPY: YenIcon,
  AUD: AustralianDollar,
  CNY: YuanIcon,
  EUR: EuroIcon,
  BTC: BitcoinIcon,
  LRD: LibraIcon,
  BVSP: BovespaIndexIcon,
  IFIX: IfixIcon,
};

export default iconMap;

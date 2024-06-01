import { AppCurrencyCodesType, AppStocksType } from '@/types/api/currencies';

type IconMapType = {
  [key in AppCurrencyCodesType | AppStocksType]: string;
};

const namesMap: IconMapType = {
  USD: 'United States Dollar',
  ARS: 'Argentine Peso',
  CAD: 'Canadian Dollar',
  JPY: 'Yen',
  AUD: 'Australian Dollar',
  CNY: 'Yuan',
  EUR: 'Euro',
  BTC: 'Bitcoin',
  LRD: 'Libra',
  IFIX: 'IFIX',
  BVSP: 'Bovespa Index',
};

export default namesMap;

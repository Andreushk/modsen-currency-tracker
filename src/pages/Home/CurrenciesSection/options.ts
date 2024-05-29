import { AppStocksType } from '@/types/api/currencyApi/currencies';

interface IStocksOptions {
  title: string;
  value: string;
  code: AppStocksType;
}

const STOCKS_OPTIONS: IStocksOptions[] = [
  { title: 'Bovespa Index', value: '0.15%', code: 'BVSP' },
  { title: 'IFIX', value: '0.15%', code: 'IFIX' },
];

export default STOCKS_OPTIONS;

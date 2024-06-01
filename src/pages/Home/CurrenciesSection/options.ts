import { AppStocksType } from '@/types/api/currencies';

interface IStocksOptions {
  value: string;
  code: AppStocksType;
}

const STOCKS_OPTIONS: IStocksOptions[] = [
  { value: '0.15%', code: 'BVSP' },
  { value: '0.15%', code: 'IFIX' },
];

export default STOCKS_OPTIONS;

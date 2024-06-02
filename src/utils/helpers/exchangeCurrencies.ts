import roundExchangeRate from './roundExchangeRate';

export type FromCurrencyType = 'base' | 'secondary';

interface IExchangeResult {
  base: string;
  secondary: string;
}

function exchangeCurrency(base: string, secondary: string, rate: number, from: FromCurrencyType) {
  const result: IExchangeResult = { base: '0', secondary: '0' };

  if (from === 'base') {
    result.base = base;
    result.secondary = roundExchangeRate(+base * rate);
  } else {
    result.base = roundExchangeRate(+secondary / rate);
    result.secondary = secondary;
  }

  return result;
}

export default exchangeCurrency;

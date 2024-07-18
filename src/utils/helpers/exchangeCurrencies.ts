import roundExchangeRate from './roundExchangeRate';

export type FromCurrencyType = 'base' | 'secondary';

interface IExchangeResult {
  base: string;
  secondary: string;
}

function exchangeCurrency(base: string, secondary: string, rate: number, from: FromCurrencyType) {
  const result: IExchangeResult =
    from === 'base'
      ? { base, secondary: roundExchangeRate(+base * rate) }
      : { base: roundExchangeRate(+secondary / rate), secondary };

  return result;
}

export default exchangeCurrency;

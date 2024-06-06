import exchangeCurrency from '@/utils/helpers/exchangeCurrencies';

describe('Exchange currency helper', () => {
  it('Exchange correctly based on base currency', () => {
    const resultOfExchange = exchangeCurrency('100', '100', 2, 'base');
    expect(resultOfExchange.secondary).toBe('200.00');
  });

  it('Exchange correctly based on second currency', () => {
    const resultOfExchange = exchangeCurrency('100', '100', 2, 'secondary');
    expect(resultOfExchange.base).toBe('50.00');
  });
});

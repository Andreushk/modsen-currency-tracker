import roundExchangeRate from '@/utils/helpers/roundExchangeRate';

describe('roundExchangeRate function', () => {
  it('Round 1.556 correctly', () => {
    const result = roundExchangeRate(1.556);
    expect(result).toBe('1.56');
  });

  it('Round 0.556 correctly', () => {
    const result = roundExchangeRate(0.556);
    expect(result).toBe('0.56');
  });

  it('Round 0.000555 correctly', () => {
    const result = roundExchangeRate(0.000555);
    expect(result).toBe('0.00056');
  });
});

import generateCurrencyTimeline from '@/utils/chart/generateCurrencyTimeline';
import getPreviousDates from '@/utils/helpers/getPreviousDates';

describe('Generate currency timeline data chart helper', () => {
  it('Generates random currency values', () => {
    const previousDates = getPreviousDates(5);

    const data = generateCurrencyTimeline(previousDates);
    expect(data[0].timeClose).toBe(previousDates[0]);
    expect(data[0].priceHigh).not.toBe(data[2].priceHigh);
  });
});

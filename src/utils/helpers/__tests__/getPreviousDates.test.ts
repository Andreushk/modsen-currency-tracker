import getPreviousDates from '@/utils/helpers/getPreviousDates';

describe('Get previous dates helper', () => {
  beforeAll(() => {
    jest.useFakeTimers();
    jest.setSystemTime(new Date('2024-06-01T00:00:00Z'));
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  it('Must return array with previous 30 days without passing any value', () => {
    expect(getPreviousDates().length).toBe(30);
    expect(getPreviousDates()[0]).toBe('2024-05-03');
    expect(getPreviousDates()[29]).toBe('2024-06-01');
  });

  it('Must return array with previous date with passed value', () => {
    const days = 10;
    const dates = getPreviousDates(days);
    expect(dates.length).toBe(days);
    expect(dates[0]).toBe('2024-05-23');
    expect(dates[9]).toBe('2024-06-01');
  });

  it('Empty array if received zero as an argument', () => {
    expect(getPreviousDates(0).length).toBe(0);
  });

  it('Works correctly with small amount of days', () => {
    const days = 5;
    const datesArray = getPreviousDates(days);
    expect(datesArray.length).toBe(days);
    expect(datesArray[0]).toBe('2024-05-28');
    expect(datesArray[4]).toBe('2024-06-01');
  });

  it('Works correctly with incorrect amount of days', () => {
    const datesArray = getPreviousDates(-5);
    expect(datesArray.length).toBe(0);
  });
});

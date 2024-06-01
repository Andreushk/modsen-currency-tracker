import { ICurrencyTimeline } from '@/types/chart';

function generateCurrencyTimeline(dates: string[]): ICurrencyTimeline[] {
  const res: ICurrencyTimeline[] = dates.map((date: string) => ({
    timeClose: date,
    priceOpen: Math.random() * 100,
    priceClose: Math.random() * 100,
    priceHigh: Math.random() * 100,
    priceLow: Math.random() * 100,
  }));

  return res;
}

export default generateCurrencyTimeline;

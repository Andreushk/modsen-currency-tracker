import { ICurrencyTimeline } from '@/types/chart';

type ICurrencyTimelineKeysType = keyof ICurrencyTimeline;

interface IInputOptions {
  label: string;
  id: ICurrencyTimelineKeysType;
}

const INPUTS_OPTIONS: IInputOptions[] = [
  {
    label: 'Open Price',
    id: 'priceOpen',
  },
  {
    label: 'Close Price',
    id: 'priceClose',
  },
  {
    label: 'Highest Price',
    id: 'priceHigh',
  },
  {
    label: 'Lowest Price',
    id: 'priceLow',
  },
];

export default INPUTS_OPTIONS;

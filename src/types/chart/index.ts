import { ScriptableContext } from 'chart.js';
import { AnyObject } from 'chart.js/dist/types/basic';

export interface ICurrencyTimeline {
  timeClose: string;
  priceOpen: number;
  priceClose: number;
  priceHigh: number;
  priceLow: number;
}

export interface IDatasets {
  datasets: [
    {
      label: string;
      data: {
        x: string;
        o: number;
        h: number;
        l: number;
        c: number;
        s: [number, number];
      }[];
      backgroundColor:
        | string
        | ((ctx: ScriptableContext<'bar'>, options: AnyObject) => string | undefined);
      barPercentage: number;
      maxBarThickness: number;
      minBarLength: number;
      borderColor: string;
      borderWidth: number;
      borderSkipped: boolean;
    },
  ];
}

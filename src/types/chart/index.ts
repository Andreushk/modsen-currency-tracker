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
      backgroundColor: string | ((ctx: unknown) => string);
      barPercentage: number;
      maxBarThickness: number;
      minBarLength: number;
      borderColor: string;
      borderWidth: number;
      borderSkipped: boolean;
    },
  ];
}

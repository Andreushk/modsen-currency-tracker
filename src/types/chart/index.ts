export interface ICurrencyTimeline {
  timeClose: string;
  priceOpen: number;
  priceClose: number;
  priceHigh: number;
  priceLow: number;
}

export interface IChartContext {
  dataIndex: number;
  label: string;
  raw: {
    c: number;
    h: number;
    l: number;
    o: number;
    s: [number, number];
    x: string;
  };
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
      backgroundColor: string | ((context: any) => string | undefined);
      barPercentage: number;
      maxBarThickness: number;
      minBarLength: number;
      borderColor: string;
      borderWidth: number;
      borderSkipped: boolean;
    },
  ];
}

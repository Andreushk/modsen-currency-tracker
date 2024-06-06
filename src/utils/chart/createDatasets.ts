import { ICurrencyTimeline, IDatasets } from '@/types/chart';

function createDatasets(datesValues: ICurrencyTimeline[]) {
  const data: IDatasets = {
    datasets: [
      {
        label: ``,
        data: datesValues.map((date) => {
          const { timeClose, priceOpen, priceHigh, priceLow, priceClose } = date;

          return {
            x: timeClose.slice(0, 10),
            o: priceOpen,
            h: priceHigh,
            l: priceLow,
            c: priceClose,
            s: [priceOpen, priceClose],
          };
        }),
        backgroundColor: (ctx: any) => {
          const { raw } = ctx;
          return raw.o > raw.c ? 'red' : 'green';
        },
        barPercentage: 1,
        maxBarThickness: 20,
        minBarLength: 7,
        borderColor: `black`,
        borderWidth: 0,
        borderSkipped: false,
      },
    ],
  };

  return data;
}

export default createDatasets;

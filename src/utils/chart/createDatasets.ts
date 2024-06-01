import { ICurrencyTimeline, IDatasets } from '@/types/chart';

interface ICTX {
  raw: {
    o: number;
    c: number;
  };
}

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
        backgroundColor: (ctx: ICTX) => {
          const {
            raw: { o, c },
          } = ctx;

          return c >= o ? `red` : `green`;
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

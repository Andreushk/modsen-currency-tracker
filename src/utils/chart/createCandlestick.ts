import { Chart } from 'chart.js';

import { IDatasets } from '@/types/chart';

function createCandlestick(data: IDatasets) {
  const candlestick = {
    id: 'candlestick',
    beforeDatasetDraw(chart: Chart): boolean | void {
      const {
        ctx,
        scales: { y },
      } = chart;

      ctx.save();
      ctx.lineWidth = 2;
      ctx.strokeStyle = `gray`;

      data.datasets[0].data.forEach((_, index: number) => {
        ctx.beginPath();
        ctx.moveTo(chart.getDatasetMeta(0).data[index].x, chart.getDatasetMeta(0).data[index].y);
        ctx.lineTo(
          chart.getDatasetMeta(0).data[index].x,
          y.getPixelForValue(data?.datasets[0]?.data[index]?.h),
        );
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(chart.getDatasetMeta(0).data[index].x, chart.getDatasetMeta(0).data[index].y);
        ctx.lineTo(
          chart.getDatasetMeta(0).data[index].x,
          y.getPixelForValue(data?.datasets[0]?.data[index]?.l),
        );
        ctx.stroke();
      });
    },
  };

  return candlestick;
}

export default createCandlestick;

import { IChartContext } from '@/types/chart';

function createOptions() {
  const CHART_OPTIONS = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
      tooltip: {
        callbacks: {
          title: (context: any) => {
            const contextArray = context as IChartContext[];
            return `Date: ${contextArray[0].label}`;
          },
          label: (context: any) => {
            const contextArray = context as IChartContext;
            const { o, c, h, l } = contextArray.raw;

            return [
              `Open price: ${o.toFixed(2)}`,
              `Close price: ${c.toFixed(2)}`,
              `Highest price: ${h.toFixed(2)}`,
              `Lowest price: ${l.toFixed(2)}`,
            ];
          },
        },
      },
    },
    maintainAspectRatio: false,
    parsing: {
      xAxisKey: 'x',
      yAxisKey: 's',
    },
    scales: {
      x: {
        stacked: true,
        grid: {
          offset: false,
        },
      },
      y: {
        stacked: true,
        beginAtZero: false,
        grace: '80%',
        grid: {
          offset: false,
        },
      },
    },
  };

  return CHART_OPTIONS;
}

export default createOptions;

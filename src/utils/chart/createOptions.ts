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

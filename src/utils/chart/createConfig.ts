import { ICurrencyTimeline } from '@/types/chart';

import createCandlestick from './createCandlestick';
import createDatasets from './createDatasets';
import createOptions from './createOptions';

const createConfig = (datesValues: ICurrencyTimeline[]) => {
  const datasets = createDatasets(datesValues);
  const options = createOptions();
  const plugins = [createCandlestick(datasets)];

  return { datasets, options, plugins };
};

export default createConfig;

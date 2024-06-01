import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from 'chart.js';
import React, { PureComponent } from 'react';
import { Bar } from 'react-chartjs-2';

import { ChartEvents } from '@/constants/chartEvents';
import { ICurrencyTimeline } from '@/types/chart';
import createConfig from '@/utils/chart/createConfig';
import observer from '@/utils/chart/observer';

import StyledContainer from './styled';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

interface IComponentProps {
  data: ICurrencyTimeline[];
}

class Chart extends PureComponent<IComponentProps> {
  componentDidMount(): void {
    observer.event(ChartEvents.CREATION);
  }

  render(): React.ReactNode {
    const { datasets, options, plugins } = createConfig(this.props.data);

    return (
      <StyledContainer>
        <Bar data={datasets} options={options} plugins={plugins} />
      </StyledContainer>
    );
  }
}

export default Chart;

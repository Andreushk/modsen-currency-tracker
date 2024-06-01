import { PureComponent, ReactNode } from 'react';

import { ICurrencyTimeline } from '@/types/chart';

import Chart from './Chart';
import ChartPlaceholder from './ChartPlaceholder';

interface IComponentProps {
  data: ICurrencyTimeline[] | null;
}

class ChartPart extends PureComponent<IComponentProps> {
  render(): ReactNode {
    return (
      <>
        {this.props.data && <Chart data={this.props.data} />}
        {!this.props.data && <ChartPlaceholder />}
      </>
    );
  }
}

export default ChartPart;

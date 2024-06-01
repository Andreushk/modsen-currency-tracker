import { Component } from 'react';

import { IntroductionSection } from '@/components';

import ChartSection from './ChartSection';

class Timeline extends Component {
  render(): React.ReactNode {
    return (
      <main>
        <IntroductionSection />
        <ChartSection />
      </main>
    );
  }
}

export default Timeline;

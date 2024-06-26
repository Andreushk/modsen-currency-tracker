import { Component } from 'react';

import { ErrorBoundary, IntroductionSection, SectionError } from '@/components';

import ChartSection from './ChartSection';

class Timeline extends Component {
  render(): React.ReactNode {
    return (
      <main data-testid="timeline-page">
        <IntroductionSection />
        <ErrorBoundary fallback={<SectionError />}>
          <ChartSection />
        </ErrorBoundary>
      </main>
    );
  }
}

export default Timeline;

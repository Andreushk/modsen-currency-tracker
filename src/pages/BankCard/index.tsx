import { Component, ReactNode } from 'react';

import { ErrorBoundary, IntroductionSection, SectionError } from '@/components';

import MapSection from './MapSection';

class BankCard extends Component {
  render(): ReactNode {
    return (
      <main data-testid="bank-card-page">
        <IntroductionSection />
        <ErrorBoundary fallback={<SectionError />}>
          <MapSection />
        </ErrorBoundary>
      </main>
    );
  }
}

export default BankCard;

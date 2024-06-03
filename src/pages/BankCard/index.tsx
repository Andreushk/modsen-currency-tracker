import { Component, ReactNode } from 'react';

import { IntroductionSection } from '@/components';

import MapSection from './MapSection';

class BankCard extends Component {
  render(): ReactNode {
    return (
      <main>
        <IntroductionSection />
        <MapSection />
      </main>
    );
  }
}

export default BankCard;

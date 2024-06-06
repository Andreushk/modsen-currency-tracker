import { ErrorBoundary, IntroductionSection, SectionError } from '@/components';

import CurrenciesSection from './CurrenciesSection';

const Home: React.FC = () => (
  <main data-testid="home-page">
    <IntroductionSection />
    <ErrorBoundary fallback={<SectionError />}>
      <CurrenciesSection />
    </ErrorBoundary>
  </main>
);

export default Home;

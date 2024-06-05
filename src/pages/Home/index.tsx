import { ErrorBoundary, IntroductionSection, SectionError } from '@/components';

import CurrenciesSection from './CurrenciesSection';

const Home: React.FC = () => (
  <main>
    <IntroductionSection />
    <ErrorBoundary fallback={<SectionError />}>
      <CurrenciesSection />
    </ErrorBoundary>
  </main>
);

export default Home;

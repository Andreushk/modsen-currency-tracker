import { IntroductionSection } from '@/components';

import ContactsSection from './ContactsSection';

const Contacts: React.FC = () => (
  <main data-testid="contacts-page">
    <IntroductionSection />
    <ContactsSection />
  </main>
);

export default Contacts;

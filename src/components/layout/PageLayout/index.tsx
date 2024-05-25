import { Outlet } from 'react-router-dom';

import { Footer, Header } from '@/components';

const PageLayout: React.FC = () => (
  <>
    <Header />
    <Outlet />
    <Footer />
  </>
);

export default PageLayout;

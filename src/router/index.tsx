import { Route, Routes } from 'react-router-dom';

import { PageLayout } from '@/components';
import { Routes as AppRoutes } from '@/constants/routes';
import { BankCard, Contacts, Home, NotFound, Timeline } from '@/pages';

const Router: React.FC = () => (
  <Routes>
    <Route path={AppRoutes.BASIC} element={<PageLayout />}>
      <Route index element={<Home />} />
      <Route path={AppRoutes.TIMELINE} element={<Timeline />} />
      <Route path={AppRoutes.BANK_CARD} element={<BankCard />} />
      <Route path={AppRoutes.CONTACTS} element={<Contacts />} />
      <Route path={AppRoutes.NOT_FOUND} element={<NotFound />} />
    </Route>
  </Routes>
);

export default Router;

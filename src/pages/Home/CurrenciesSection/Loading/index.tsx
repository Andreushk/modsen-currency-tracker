import { CurrenciesGrid, LoadingCurrency } from '@/components';
import { currencies } from '@/constants/currencies';

import { QUOTES_TITLE, STOCKS_TITLE } from '../Currencies';
import STOCKS_OPTIONS from '../options';

const Loading: React.FC = () => (
  <>
    <CurrenciesGrid title={STOCKS_TITLE}>
      {STOCKS_OPTIONS.map(({ code }) => (
        <LoadingCurrency key={code} />
      ))}
    </CurrenciesGrid>
    <CurrenciesGrid title={QUOTES_TITLE}>
      {currencies.map((code) => (
        <LoadingCurrency key={code} />
      ))}
    </CurrenciesGrid>
  </>
);

export default Loading;

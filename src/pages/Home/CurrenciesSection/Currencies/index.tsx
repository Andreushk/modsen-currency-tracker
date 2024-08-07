import { CurrenciesGrid, Currency } from '@/components';
import { AppCurrencyCodesType, ICurrencyExchangeData } from '@/types/api/currencies';
import getCurrencyCodeFromParentAttribute from '@/utils/helpers/getCurrencyCodeFromParentAttribute';

import STOCKS_OPTIONS from '../options';

export const STOCKS_TITLE = 'Stocks';
export const QUOTES_TITLE = 'Quotes';

interface IComponentProps {
  currenciesData: ICurrencyExchangeData[];
  onClick: (currencyCode: AppCurrencyCodesType) => void;
}

const Currencies: React.FC<IComponentProps> = ({ currenciesData, onClick }) => {
  const handleGridClick = (clickedElement: HTMLElement) => {
    const currencyCode = getCurrencyCodeFromParentAttribute(clickedElement, 'data-currency-code');

    if (currencyCode) {
      onClick(currencyCode);
    }
  };

  return (
    <>
      <CurrenciesGrid title={STOCKS_TITLE}>
        {STOCKS_OPTIONS.map(({ value, code }) => (
          <Currency key={code} value={value} code={code} />
        ))}
      </CurrenciesGrid>
      <CurrenciesGrid title={QUOTES_TITLE} onClick={handleGridClick}>
        {currenciesData.map(({ value, code }) => (
          <Currency key={code} value={String(value)} code={code} isWithRounding $isClickable />
        ))}
      </CurrenciesGrid>
    </>
  );
};

export default Currencies;

import { CurrenciesGrid, Currency } from '@/components';
import { ICurrenciesState } from '@/state/slices/currencies';
import { AppCurrencyCodesType } from '@/types/api/currencies';
import getParentDataAttribute from '@/utils/dom/getParentDataAttribute';

import STOCKS_OPTIONS from '../options';

export const STOCKS_TITLE = 'Stocks';
export const QUOTES_TITLE = 'Quotes';

interface IComponentProps {
  currenciesData: ICurrenciesState;
  onClick: (currencyCode: AppCurrencyCodesType) => void;
}

const Currencies: React.FC<IComponentProps> = ({ currenciesData, onClick }) => {
  const handleGridClick = (clickedElement: HTMLElement) => {
    const currencyCode = getParentDataAttribute(clickedElement, 'data-currency-code');

    if (currencyCode) {
      onClick(currencyCode as AppCurrencyCodesType);
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
        {currenciesData.currencies.map(({ value, code }) => (
          <Currency key={code} value={String(value)} code={code} isWithRounding $isClickable />
        ))}
      </CurrenciesGrid>
    </>
  );
};

export default Currencies;

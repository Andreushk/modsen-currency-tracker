import { AppCurrencyCodesType } from '@/types/api/currencies';

function getCurrencyCodeFromParentAttribute(
  element: HTMLElement,
  dataAttribute: string,
): null | AppCurrencyCodesType {
  const clickedCurrency: Element | null = element.closest(`[${dataAttribute}]`);

  if (clickedCurrency) {
    const currencyCode: string | null = clickedCurrency.getAttribute(dataAttribute);
    return currencyCode as AppCurrencyCodesType;
  }

  return null;
}

export default getCurrencyCodeFromParentAttribute;

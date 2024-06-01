import { SelectOptionType } from '@/components/common/Select';
import { AppCurrencyCodesType } from '@/types/api/currencies';

export const BASE_CURRENCY: AppCurrencyCodesType = 'USD';

export const SELECT_OPTION: SelectOptionType[] = [
  {
    value: 'none',
    displayValue: 'Select',
  },
  {
    value: 'USD',
    displayValue: 'USD',
  },
  {
    value: 'ARS',
    displayValue: 'ARS',
  },
  {
    value: 'CAD',
    displayValue: 'CAD',
  },
  {
    value: 'JPY',
    displayValue: 'JPY',
  },
  {
    value: 'AUD',
    displayValue: 'AUD',
  },
  {
    value: 'CNY',
    displayValue: 'CNY',
  },
  {
    value: 'EUR',
    displayValue: 'EUR',
  },
  {
    value: 'BTC',
    displayValue: 'BTC',
  },
  {
    value: 'LRD',
    displayValue: 'LRD',
  },
];

export const currencies: readonly AppCurrencyCodesType[] = [
  'USD',
  'ARS',
  'CAD',
  'JPY',
  'AUD',
  'CNY',
  'EUR',
  'BTC',
  'LRD',
];

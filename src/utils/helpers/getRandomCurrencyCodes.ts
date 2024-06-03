import { AppCurrencyCodesType } from '@/types/api/currencies';

function getRandomCurrencyCodes(): AppCurrencyCodesType[] {
  const currencies: AppCurrencyCodesType[] = ['USD', 'EUR'];
  const nonUsdEurCurrencies: AppCurrencyCodesType[] = [
    'ARS',
    'CAD',
    'JPY',
    'AUD',
    'CNY',
    'BTC',
    'LRD',
  ];

  while (currencies.length < 5) {
    const randomIndex: number = Math.floor(Math.random() * nonUsdEurCurrencies.length);
    const randomCurrency: string = nonUsdEurCurrencies[randomIndex];
    if (!currencies.includes(randomCurrency as AppCurrencyCodesType)) {
      currencies.push(randomCurrency as AppCurrencyCodesType);
    }
  }

  return currencies;
}

export default getRandomCurrencyCodes;

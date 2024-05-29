import { render } from '@testing-library/react';

import { CurrencyIconPlaceholder } from '@/components';
import withTheme from '@/utils/tests/themeProvider';

const TEST_CURRENCY_ICON_PLACEHOLDER_ID = 'currency-icon-placeholder';

describe('CurrencyIconPlaceholder component', () => {
  it('Renders correctly', () => {
    const { getByTestId } = render(withTheme(<CurrencyIconPlaceholder />));

    const currencyIconPlaceholder = getByTestId(TEST_CURRENCY_ICON_PLACEHOLDER_ID);
    expect(currencyIconPlaceholder).toBeInTheDocument();
  });
});

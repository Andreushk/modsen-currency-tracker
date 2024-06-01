import { render } from '@testing-library/react';

import withTheme from '@/utils/helpers/themeProvider';

import CurrencyIcon from '.';

const CURRENCY_ICON_TESTID = 'currency-icon';

describe('CurrencyIcon component', () => {
  it('Renders correctly', () => {
    const { getByTestId } = render(withTheme(<CurrencyIcon code="USD" />));

    expect(getByTestId(CURRENCY_ICON_TESTID)).toBeInTheDocument();
  });
});

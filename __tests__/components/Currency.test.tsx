import { render } from '@testing-library/react';

import { Currency } from '@/components';
import withTheme from '@/utils/tests/themeProvider';

const TEST_TITLE = 'United States Dollar';
const TEST_VALUE = '1';
const TEST_CODE = 'USD';
const TEST_ICONID = 'currency-icon';

describe('LastUpdated component', () => {
  it('Renders correctly', () => {
    const { getByText, getByTestId } = render(
      withTheme(<Currency value={TEST_VALUE} code={TEST_CODE} />),
    );

    const icon = getByTestId(TEST_ICONID);
    const title = getByText(TEST_TITLE);
    const value = getByText(TEST_VALUE);

    expect(title).toBeInTheDocument();
    expect(value).toBeInTheDocument();
    expect(icon).toBeInTheDocument();
  });
});

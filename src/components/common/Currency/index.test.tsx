import { render } from '@testing-library/react';

import { Currency } from '@/components';
import withTheme from '@/utils/helpers/themeProvider';

const TEST_TITLE = 'United States Dollar';
const TEST_VALUE = '1';
const TEST_CODE = 'USD';
const TEST_ICONID = 'currency-icon';

describe('LastUpdated component', () => {
  it('Renders correctly', () => {
    const { getByText, getByTestId } = render(
      withTheme(<Currency value={TEST_VALUE} code={TEST_CODE} />),
    );

    expect(getByText(TEST_TITLE)).toBeInTheDocument();
    expect(getByText(TEST_VALUE)).toBeInTheDocument();
    expect(getByTestId(TEST_ICONID)).toBeInTheDocument();
  });
});

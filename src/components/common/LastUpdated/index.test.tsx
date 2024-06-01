import { render } from '@testing-library/react';

import { LastUpdated } from '@/components';
import withTheme from '@/utils/helpers/themeProvider';

const TEST_ISO = '2015-05-29T12:00:00Z';
const TEST_TIME_STRING = 'Last updated at 3:00 PM';
const INDICATOR_TESTID = 'last-updated-indicator';
const INDICATOR_LOADING_TEXT = 'Loading...';

describe('LastUpdated component', () => {
  it('Renders correctly', () => {
    const { getByText, getByTestId } = render(
      withTheme(<LastUpdated isLoading={false} lastUpdated={TEST_ISO} />),
    );

    expect(getByText(TEST_TIME_STRING)).toBeInTheDocument();
    expect(getByTestId(INDICATOR_TESTID)).toBeInTheDocument();
  });

  it('Renders in loading mode correctly', () => {
    const { getByText, getByTestId } = render(
      withTheme(<LastUpdated isLoading lastUpdated={null} />),
    );

    expect(getByText(INDICATOR_LOADING_TEXT)).toBeInTheDocument();
    expect(getByTestId(INDICATOR_TESTID)).toBeInTheDocument();
  });
});

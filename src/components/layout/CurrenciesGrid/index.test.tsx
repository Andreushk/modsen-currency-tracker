import { render } from '@testing-library/react';

import { CurrenciesGrid } from '@/components';
import withTheme from '@/utils/helpers/themeProvider';

const TEST_TITLE = 'Stocks';
const TEST_CHILD_TEXT = 'Test child text';

describe('CurrenciesGrid component', () => {
  it('Renders correctly', () => {
    const { getByText } = render(
      withTheme(
        <CurrenciesGrid title={TEST_TITLE}>
          <div>{TEST_CHILD_TEXT}</div>
        </CurrenciesGrid>,
      ),
    );

    expect(getByText(TEST_TITLE)).toBeInTheDocument();
    expect(getByText(TEST_CHILD_TEXT)).toBeInTheDocument();
  });
});

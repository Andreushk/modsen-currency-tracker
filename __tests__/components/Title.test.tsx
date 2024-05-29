import { render } from '@testing-library/react';

import { Title } from '@/components';
import withTheme from '@/utils/tests/themeProvider';

const TEST_TITLE_VALUE = 'Test value';

describe('Title component', () => {
  it('Renders correctly', () => {
    const { getByText } = render(withTheme(<Title>{TEST_TITLE_VALUE}</Title>));

    const title = getByText(TEST_TITLE_VALUE);

    expect(title).toBeInTheDocument();
  });
});

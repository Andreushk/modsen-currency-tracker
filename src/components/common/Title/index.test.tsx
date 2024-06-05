import { render } from '@testing-library/react';

import { Title } from '@/components';
import withTheme from '@/utils/helpers/themeProvider';

const TEST_TITLE_VALUE = 'Test value';

describe('Title component', () => {
  it('Renders correctly', () => {
    const { getByText } = render(
      withTheme(
        <Title $fontSize="M" $fontWeight="light">
          {TEST_TITLE_VALUE}
        </Title>,
      ),
    );

    expect(getByText(TEST_TITLE_VALUE)).toBeInTheDocument();
  });
});

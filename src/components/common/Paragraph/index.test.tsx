import { render } from '@testing-library/react';

import { Paragraph } from '@/components';
import withTheme from '@/utils/helpers/themeProvider';

const TEST_PARAGRAPH_VALUE = 'Test value';

describe('Title component', () => {
  it('Renders correctly', () => {
    const { getByText } = render(withTheme(<Paragraph>{TEST_PARAGRAPH_VALUE}</Paragraph>));

    expect(getByText(TEST_PARAGRAPH_VALUE)).toBeInTheDocument();
  });
});

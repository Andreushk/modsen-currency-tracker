import { render } from '@testing-library/react';
import React from 'react';

import { Toast } from '@/components';
import withTheme from '@/utils/helpers/themeProvider';

const TEST_MESSAGE = 'Test message';

describe('Toast component', () => {
  it('Renders correctly', () => {
    const { getByText } = render(withTheme(<Toast message={TEST_MESSAGE} />));

    expect(getByText(TEST_MESSAGE)).toBeInTheDocument();
  });
});

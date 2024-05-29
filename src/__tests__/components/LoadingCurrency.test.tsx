import { render } from '@testing-library/react';

import { LoadingCurrency } from '@/components';
import withTheme from '@/utils/tests/themeProvider';

describe('LoadingCurrency component', () => {
  it('Renders correctly', () => {
    const { getAllByTestId } = render(withTheme(<LoadingCurrency />));

    const shimmer = getAllByTestId('loading-shimmer');
    expect(shimmer).toHaveLength(3);
  });
});

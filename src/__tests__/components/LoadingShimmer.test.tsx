import { render } from '@testing-library/react';

import { LoadingShimmer } from '@/components';
import withTheme from '@/utils/tests/themeProvider';

describe('LoadingShimmer component', () => {
  it('Renders correctly', () => {
    const { getByTestId } = render(withTheme(<LoadingShimmer />));

    const shimmer = getByTestId('loading-shimmer');
    expect(shimmer).toBeInTheDocument();
  });
});
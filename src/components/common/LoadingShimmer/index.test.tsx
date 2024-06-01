import { render } from '@testing-library/react';

import { LoadingShimmer } from '@/components';
import withTheme from '@/utils/helpers/themeProvider';

describe('LoadingShimmer component', () => {
  it('Renders correctly', () => {
    const { getByTestId } = render(withTheme(<LoadingShimmer />));

    expect(getByTestId('loading-shimmer')).toBeInTheDocument();
  });
});

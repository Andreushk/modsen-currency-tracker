import { render } from '@testing-library/react';

import { LoadingCurrency } from '@/components';
import withTheme from '@/utils/helpers/themeProvider';

describe('LoadingCurrency component', () => {
  it('Renders correctly', () => {
    const { getAllByTestId } = render(withTheme(<LoadingCurrency />));

    expect(getAllByTestId('loading-shimmer')).toHaveLength(3);
  });
});

import { render } from '@testing-library/react';

import { SectionError } from '@/components';
import withTheme from '@/utils/helpers/themeProvider';

describe('SectionError', () => {
  it('Renders correctly', () => {
    const { getByText } = render(withTheme(<SectionError message="Error" />));

    expect(getByText('Unable to display section :/')).toBeInTheDocument();
    expect(getByText('Reason: Error')).toBeInTheDocument();
  });
});

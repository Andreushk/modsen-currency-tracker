import { render } from '@testing-library/react';

import { SectionError } from '@/components';
import withTheme from '@/utils/helpers/themeProvider';

describe('SectionError', () => {
  it('Renders correctly', () => {
    const { getByText } = render(withTheme(<SectionError message="Error" />));

    const title = getByText('Unable to display section :/');
    const message = getByText('Reason: Error');

    expect(title).toBeInTheDocument();
    expect(message).toBeInTheDocument();
  });
});

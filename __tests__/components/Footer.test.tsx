import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { Footer } from '@/components';
import withTheme from '@/utils/helpers/themeProvider';

const FOOTER_TESTID = 'footer';
const LOGO_TESTID = 'logo';

describe('Footer component', () => {
  it('Renders correctly', () => {
    const { getByTestId } = render(
      withTheme(
        <MemoryRouter>
          <Footer />
        </MemoryRouter>,
      ),
    );

    expect(getByTestId(FOOTER_TESTID)).toBeInTheDocument();
    expect(getByTestId(LOGO_TESTID)).toBeInTheDocument();
  });
});

import { render } from '@testing-library/react';
import React from 'react';

import { IntroductionSection } from '@/components';
import withTheme from '@/utils/tests/themeProvider';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(),
}));

describe('IntroductionSection component', () => {
  test('Renders correctly', () => {
    const { getByTestId } = render(withTheme(<IntroductionSection />));

    const logo = getByTestId('logo');
    const text = getByTestId('introduction');

    expect(logo).toBeInTheDocument();
    expect(text).toBeInTheDocument();
  });
});

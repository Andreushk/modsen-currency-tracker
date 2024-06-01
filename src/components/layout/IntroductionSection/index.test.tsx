import { render } from '@testing-library/react';
import { Provider } from 'react-redux';

import { IntroductionSection } from '@/components';
import { store } from '@/state/store';
import withTheme from '@/utils/helpers/themeProvider';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(),
}));

describe('IntroductionSection component', () => {
  test('Renders correctly', () => {
    const { getByTestId } = render(
      withTheme(
        <Provider store={store}>
          <IntroductionSection />
        </Provider>,
      ),
    );

    expect(getByTestId('logo')).toBeInTheDocument();
    expect(getByTestId('introduction')).toBeInTheDocument();
  });
});

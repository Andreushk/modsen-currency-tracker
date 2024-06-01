import { fireEvent, render } from '@testing-library/react';

import withTheme from '@/utils/helpers/themeProvider';

import Switch from '.';

const SWITCH_TESTID = 'switch';

describe('Switch component', () => {
  it('Renders correctly', () => {
    const { getByTestId } = render(withTheme(<Switch isOn={false} onClick={() => {}} />));

    expect(getByTestId(SWITCH_TESTID)).toBeInTheDocument();
  });

  it('Calls callback when clicked', () => {
    const mockFunction = jest.fn();
    const { getByTestId } = render(withTheme(<Switch isOn={false} onClick={mockFunction} />));

    fireEvent.click(getByTestId(SWITCH_TESTID));
    expect(mockFunction).toHaveBeenCalled();
  });
});

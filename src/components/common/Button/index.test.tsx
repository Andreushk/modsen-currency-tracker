import { fireEvent, render } from '@testing-library/react';

import { Button } from '@/components';
import withTheme from '@/utils/helpers/themeProvider';

const TEST_BUTTON_VALUE = 'Test button';

describe('Button component', () => {
  const mockFunction = jest.fn();

  it('Renders correctly', () => {
    const { getByText } = render(
      withTheme(<Button value={TEST_BUTTON_VALUE} onClick={mockFunction} />),
    );

    expect(getByText(TEST_BUTTON_VALUE)).toBeInTheDocument();
  });

  it('Calls callback when clicked', () => {
    const { getByText } = render(
      withTheme(<Button value={TEST_BUTTON_VALUE} onClick={mockFunction} />),
    );

    fireEvent.click(getByText(TEST_BUTTON_VALUE));
    expect(mockFunction).toHaveBeenCalled();
  });
});

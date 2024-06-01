import { fireEvent, render } from '@testing-library/react';

import { Overlay } from '@/components';
import withTheme from '@/utils/helpers/themeProvider';

const TEST_CHILDREN_TEXT = 'Test child';

const mockCB = jest.fn();

describe('Overlay component', () => {
  it('Renders and is visible', () => {
    const { getByText } = render(
      withTheme(
        <Overlay clickCB={() => {}}>
          <div>{TEST_CHILDREN_TEXT}</div>
        </Overlay>,
      ),
    );

    expect(getByText(TEST_CHILDREN_TEXT)).toBeInTheDocument();
  });

  it('Calls callback', async () => {
    const { getByTestId } = render(
      withTheme(
        <Overlay clickCB={mockCB}>
          <div>{TEST_CHILDREN_TEXT}</div>
        </Overlay>,
      ),
    );

    fireEvent.click(getByTestId('overlay'));
    expect(mockCB).toHaveBeenCalled();
  });
});

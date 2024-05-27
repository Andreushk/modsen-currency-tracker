import { fireEvent, render, waitFor } from '@testing-library/react';
import React from 'react';

import { Overlay } from '@/components';
import withTheme from '@/utils/tests/themeProvider';

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

    const children = getByText(TEST_CHILDREN_TEXT);
    expect(children).toBeInTheDocument();
  });

  it('Calls callback', async () => {
    const { getByTestId } = render(
      withTheme(
        <Overlay clickCB={mockCB}>
          <div>{TEST_CHILDREN_TEXT}</div>
        </Overlay>,
      ),
    );

    const overlay = getByTestId('overlay');
    fireEvent.click(overlay);

    await waitFor(() => {
      expect(mockCB).toHaveBeenCalled();
    });
  });
});

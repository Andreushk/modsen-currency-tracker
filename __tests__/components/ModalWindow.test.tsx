import { fireEvent, render } from '@testing-library/react';

import { ModalWindow } from '@/components';
import withTheme from '@/utils/tests/themeProvider';

const TEST_TITLE = 'Test title';
const TEST_CHILDREN = 'Test children';

describe('ModalWindow component', () => {
  it('Renders correctly', () => {
    const { getByText } = render(
      withTheme(<ModalWindow title={TEST_TITLE}>{TEST_CHILDREN}</ModalWindow>),
    );

    const title = getByText(TEST_TITLE);
    const children = getByText(TEST_CHILDREN);

    expect(title).toBeInTheDocument();
    expect(children).toBeInTheDocument();
  });

  it('Stops click propagation', () => {
    const mockOnClick = jest.fn();

    const { getByText } = render(
      withTheme(
        <button type="button" onClick={mockOnClick}>
          <ModalWindow title={TEST_TITLE}>{TEST_CHILDREN}</ModalWindow>
        </button>,
      ),
    );

    fireEvent.click(getByText(TEST_TITLE));
    expect(mockOnClick).not.toHaveBeenCalled();
  });
});

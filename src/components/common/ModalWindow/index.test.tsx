import { fireEvent, render } from '@testing-library/react';

import { ModalWindow } from '@/components';
import withTheme from '@/utils/helpers/themeProvider';

const TEST_TITLE = 'Test title';
const TEST_CHILDREN = 'Test children';

describe('ModalWindow component', () => {
  it('Renders correctly', () => {
    const { getByText } = render(
      withTheme(<ModalWindow title={TEST_TITLE}>{TEST_CHILDREN}</ModalWindow>),
    );

    expect(getByText(TEST_TITLE)).toBeInTheDocument();
    expect(getByText(TEST_CHILDREN)).toBeInTheDocument();
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

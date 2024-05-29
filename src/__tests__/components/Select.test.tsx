import { fireEvent, render } from '@testing-library/react';

import { Select } from '@/components';
import withTheme from '@/utils/tests/themeProvider';

const TEST_SELECT_OPTION = [
  { value: 'Test value', displayValue: 'Test value' },
  { value: 'Another test value', displayValue: 'Another test value' },
];

const SELECT_TESTID = 'select';

describe('Select component', () => {
  it('Renders correctly', () => {
    const { getByTestId } = render(
      withTheme(<Select selectOptions={TEST_SELECT_OPTION} changeCB={() => {}} />),
    );

    const select = getByTestId(SELECT_TESTID);
    const options = select.childNodes;

    expect(select).toBeInTheDocument();
    expect(options).toHaveLength(TEST_SELECT_OPTION.length);
  });

  it('Calls changeCB', () => {
    const mockChangeCB = jest.fn();

    const { getByTestId } = render(
      withTheme(<Select selectOptions={TEST_SELECT_OPTION} changeCB={mockChangeCB} />),
    );

    const select = getByTestId(SELECT_TESTID);
    fireEvent.change(select, { target: { value: TEST_SELECT_OPTION[0].value } });

    expect(mockChangeCB).toHaveBeenCalled();
  });
});

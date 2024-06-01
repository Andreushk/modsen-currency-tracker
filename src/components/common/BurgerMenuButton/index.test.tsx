import { fireEvent, render } from '@testing-library/react';

import { BurgerMenuButton } from '@/components';
import withTheme from '@/utils/helpers/themeProvider';

const BURGER_MENU_BUTTON_TESTID = 'burger-menu-button';

describe('BurgerMenuButton component', () => {
  it('Renders correctly', () => {
    const { getByTestId } = render(withTheme(<BurgerMenuButton onClick={() => {}} />));

    const burger = getByTestId(BURGER_MENU_BUTTON_TESTID);
    expect(burger).toBeInTheDocument();
    expect(burger.childNodes).toHaveLength(3);
  });

  it('Calls callback when clicked', () => {
    const mockFunction = jest.fn();
    const { getByTestId } = render(withTheme(<BurgerMenuButton onClick={mockFunction} />));

    fireEvent.click(getByTestId(BURGER_MENU_BUTTON_TESTID));
    expect(mockFunction).toHaveBeenCalled();
  });
});

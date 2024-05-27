import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import { NavigationLink } from '@/components';
import { Routes } from '@/constants/routes';
import withTheme from '@/utils/tests/themeProvider';

describe('NavigationLink component', () => {
  test('Renders correctly', () => {
    const { getByText } = render(
      withTheme(
        <MemoryRouter>
          <NavigationLink displayValue="Home" pathValue={Routes.BASIC} />
        </MemoryRouter>,
      ),
    );
    expect(getByText('Home')).toBeInTheDocument();
  });

  test('Calls the click callback', () => {
    const mockOnClick = jest.fn();
    const { getByText } = render(
      withTheme(
        <MemoryRouter>
          <NavigationLink
            displayValue="Contact"
            pathValue={Routes.CONTACTS}
            onClick={mockOnClick}
          />
        </MemoryRouter>,
      ),
    );
    const linkElement = getByText('Contact');
    fireEvent.click(linkElement);
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });
});

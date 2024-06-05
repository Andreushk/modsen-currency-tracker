import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import { Link } from '@/components';
import { Routes } from '@/constants/routes';
import withTheme from '@/utils/helpers/themeProvider';

describe('NavigationLink component', () => {
  test('Renders correctly', () => {
    const { getByText } = render(
      withTheme(
        <MemoryRouter>
          <Link href={Routes.BASIC}>Home</Link>
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
          <Link href={Routes.CONTACTS} onClick={mockOnClick}>
            Contact
          </Link>
        </MemoryRouter>,
      ),
    );

    fireEvent.click(getByText('Contact'));
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });
});

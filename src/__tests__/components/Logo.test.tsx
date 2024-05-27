import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import { MemoryRouter, useNavigate } from 'react-router-dom';

import { Logo } from '@/components';
import { Routes } from '@/constants/routes';
import withTheme from '@/utils/tests/themeProvider';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(),
}));

describe('Logo component', () => {
  test('Navigates when clicked', () => {
    const mockNavigate = jest.fn();
    (useNavigate as jest.Mock).mockReturnValue(mockNavigate);
    const { getByTestId } = render(
      withTheme(
        <MemoryRouter>
          <Logo size={24} withNavigation />
        </MemoryRouter>,
      ),
    );
    const logoContainer = getByTestId('logo');
    fireEvent.click(logoContainer);
    expect(mockNavigate).toHaveBeenCalledWith(Routes.BASIC);
  });
});

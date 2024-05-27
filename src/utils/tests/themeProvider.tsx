import React from 'react';
import { ThemeProvider } from 'styled-components';

import { darkTheme } from '@/styles/theme';

const withTheme = (children: React.ReactNode) => (
  <ThemeProvider theme={darkTheme}>{children}</ThemeProvider>
);

export default withTheme;

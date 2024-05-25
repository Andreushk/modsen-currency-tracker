import { ThemeProvider } from 'styled-components';

import Router from '@/router';
import GlobalStyles from '@/styles/global';
import { darkTheme } from '@/styles/theme';

const App: React.FC = () => (
  <ThemeProvider theme={darkTheme}>
    <Router />
    <GlobalStyles />
  </ThemeProvider>
);

export default App;

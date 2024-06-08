import { ThemeProvider } from 'styled-components';

import { useAppSelector } from '@/hooks';
import Router from '@/router';
import GlobalStyles from '@/styles/global';
import { darkTheme, lightTheme } from '@/styles/theme';

const App: React.FC = () => {
  const isDarkMode = useAppSelector((state) => state.theme.isDarkMode);

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <Router />
      <GlobalStyles />
    </ThemeProvider>
  );
};

export default App;

import { ThemeProvider } from 'styled-components';

import { useAppSelector } from '@/hooks';
import Router from '@/router';
import GlobalStyles from '@/styles/global';
import { darkTheme, lightTheme } from '@/styles/theme';

import { darkModeSelector } from './store/reducers/selectors';

const App: React.FC = () => {
  const isDarkMode = useAppSelector(darkModeSelector);

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <Router />
      <GlobalStyles />
    </ThemeProvider>
  );
};

export default App;

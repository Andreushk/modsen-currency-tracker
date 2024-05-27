import { useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import Router from '@/router';
import GlobalStyles from '@/styles/global';
import { darkTheme, lightTheme } from '@/styles/theme';

import { RootState } from './state/store';

const App: React.FC = () => {
  const theme = useSelector((state: RootState) => state.theme);

  return (
    <ThemeProvider theme={theme.isDarkMode ? darkTheme : lightTheme}>
      <Router />
      <GlobalStyles />
    </ThemeProvider>
  );
};

export default App;

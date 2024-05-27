import { darkTheme } from '@/styles/theme';
import { IBreakpoints } from '@/types/styles';

function gerMediaQuery(breakpoint: keyof IBreakpoints): string {
  return `(max-width: ${darkTheme.breakpoints[breakpoint]})`;
}

export default gerMediaQuery;

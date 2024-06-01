import { darkTheme } from '@/styles/theme';
import { IBreakpoints } from '@/types/styles';

function getMediaQuery(breakpoint: keyof IBreakpoints): string {
  return `(max-width: ${darkTheme.breakpoints[breakpoint]})`;
}

export default getMediaQuery;

import { IBreakpoints, IDurations, IFontWeights, IPalette, ITheme } from '@/types/styles';

const darkColors: IPalette = {
  bg: {
    main: '#030304',
    blocks: '#202025',
    input: '#1B2028',
  },
  text: {
    primary: '#fff',
    secondary: '#D9D9D9',
    context: '#A7B2C3',
    links: '#898989',
  },
  borders: '#474747',
  icons: '#9E9E9E',
};

const lightColors: IPalette = {
  bg: {
    main: '#F5F5F5',
    blocks: '#FDFDFD',
    input: '#E0E0E0',
  },
  text: {
    primary: '#1A1A1A',
    secondary: '#616161',
    context: '#8E8E8E',
    links: '#2196F3',
  },
  borders: '#CBCBCB',
  icons: '#5C5C5C',
};

const breakpoints: IBreakpoints = {
  mobileS: '380px',
  mobileM: '450px',
  mobileL: '650px',
  tabletS: '768px',
  tabletM: '885px',
  laptopS: '1000px',
  laptopM: '1200px',
  desktopS: '1400px',
  desktopM: '1600px',
  desktopL: '1800px',
};

const widths: string[] = [
  '4px', // 4px
  '8px', // 8px
  '16px', // 16px
  '50px', // 50px
  '80px', // 80px
  '450px', // 450px
  '482px', // 482px
  '520px', // 520px
  '1440px', // 1440px
];

const heights: string[] = [
  '2px', // 2px
  '4px', // 4px
  '8px', // 8px
  '16px', // 16px
  '65px', // 65px
  '114px', // 114px
  '153px', // 153px
  '460px', // 460px
  '490px', // 490px
];

const spaces: string[] = [
  '4px', // 4px
  '8px', // 8px
  '16px', // 16px
  '18px', // 18px
  '24px', // 24px
  '30px', // 30px
  '32px', // 32px
  '40px', // 40px
  '50px', // 50px
  '56px', // 56px
  '58px', // 58px
  '64px', // 64px
  '80px', // 80px
  '86px', // 86px
  '96px', // 96px
  '115px', // 115px
  '155px', // 155px
  '184px', // 184px
];

const borderRadiuses: string[] = ['8px'];

const fontSizes: string[] = [
  '12px', // 0 12px
  '16px', // 1 16px
  '18px', // 2 18px
  '20px', // 3 20px
  '24px', // 4 24px
  '25px', // 5 25px
  '26px', // 6 26px
  '28px', // 7 28px
  '30px', // 8 30px
  '32px', // 9 32px
  '32.91px', // 10 32.91px
  '35px', // 11 35px
  '76px', // 12 76px
];

const lineHeights: string[] = [
  '18px', // 0 18px
  '24px', // 1 24px
  '27px', // 2 27px
  '36px', // 3 36px
  '39px', // 4 39px
  '41.14px', // 5 41.14px
  '42px', // 6 42px
  '45px', // 7 45px
  '46.77px', // 8 46.77px
  '49.37px', // 9 49.37px
  '114px', // 10 114px
];

const fontWeights: IFontWeights = {
  light: 300,
  regular: 400,
  medium: 500,
  semiBold: 600,
};

const durations: IDurations = {
  animations: 250,
  shimmer: 1000,
};

const zIndexes: string[] = ['1', '2', '3', '4', '5'];

export const darkTheme: ITheme = {
  colors: darkColors,
  breakpoints,
  widths,
  heights,
  spaces,
  fontSizes,
  lineHeights,
  fontWeights,
  borderRadiuses,
  zIndexes,
  durations,
};

export const lightTheme: ITheme = {
  ...darkTheme,
  colors: {
    ...lightColors,
  },
};

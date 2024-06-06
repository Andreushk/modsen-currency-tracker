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
    accent: '#00bc4f',
    links: '#898989',
    placeholder: '#9E9E9E',
  },
  borders: '#474747',
  icons: '#9E9E9E',
};

const lightColors: IPalette = {
  bg: {
    main: '#F5F5F5',
    blocks: '#e9ecef',
    input: '#E0E0E0',
  },
  text: {
    primary: '#1A1A1A',
    secondary: '#616161',
    context: '#8E8E8E',
    accent: '#00bc4f',
    links: '#adb5bd',
    placeholder: '#9E9E9E',
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
  laptopM: '1100px',
  desktopS: '1200px',
  desktopM: '1300px',
  desktopL: '1400px',
};

const widths: string[] = [
  '0.25rem', // 4px 0
  '0.5rem', // 8px 1
  '1rem', // 16px 2
  '1.063rem', // 17px 3
  '1.5rem', // 24px 4
  '3.125rem', // 50px 5
  '5rem', // 80px 6
  '28.125rem', // 450px 7
  '30.125rem', // 482px 8
  '32.5rem', // 520px 9
  '90rem', // 1440px 10
];

const heights: string[] = [
  '0.125rem', // 2px 0
  '0.25rem', // 4px 1
  '0.5rem', // 8px 2
  '1rem', // 16px 3
  '1.563rem', // 25px 4
  '4.063rem', // 65px 5
  '6.438rem', // 103px 6
  '7.125rem', // 114px 7
  '9.563rem', // 153px 8
  '28.75rem', // 460px 9
  '30.625rem', // 490px 10
];

const spaces: string[] = [
  '0.125rem', // 2px 0
  '0.25rem', // 4px 1
  '0.5rem', // 8px 2
  '1rem', // 16px 3
  '1.125rem', // 18px 4
  '1.5rem', // 24px 5
  '1.875rem', // 30px 6
  '2rem', // 32px 7
  '2.5rem', // 40px 8
  '3.125rem', // 50px 9
  '3.5rem', // 56px 10
  '3.625rem', // 58px 11
  '4rem', // 64px 12
  '5rem', // 80px 13
  '5.375rem', // 86px 14
  '6rem', // 96px 15
  '7.188rem', // 115px 16
  '9.688rem', // 155px 17
  '11.5rem', // 184px 18
];

const borderWidths = ['0.125rem', '0.25rem'];

const borderRadiuses: string[] = ['0.5rem'];

const fontSizes: string[] = [
  '0.75rem', // 12px 0
  '1rem', // 16px 1
  '1.125rem', // 18px 2
  '1.25rem', // 20px 3
  '1.5rem', // 24px 4
  '1.563rem', // 25px 5
  '1.625rem', // 26px 6
  '1.75rem', // 28px 7
  '1.875rem', // 30px 8
  '2rem', // 32px 9
  '2.057rem', // 32.91px 10
  '2.188rem', // 35px 11
  '2.375rem', // 38px 12
  '4.75rem', // 76px 13
  '5.648rem', // 90.36px 14
];

const lineHeights: string[] = [
  '1.125rem', // 18px 0
  '1.5rem', // 24px 1
  '1.688rem', // 27px 2
  '2.25rem', // 36px 3
  '2.438rem', // 39px 4
  '2.571rem', // 41.14px 5
  '2.625rem', // 42px 6
  '2.813rem', // 45px 7
  '2.923rem', // 46.77px 8
  '3.086rem', // 49.37px 9
  '3.563rem', // 57px 10
  '7.125rem', // 114px 11
  '8.472rem', // 135.55px 12
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
  borderWidths,
  zIndexes,
  durations,
};

export const lightTheme: ITheme = {
  ...darkTheme,
  colors: {
    ...lightColors,
  },
};

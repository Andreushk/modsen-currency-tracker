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
  '4px', // 4px 0
  '8px', // 8px 1
  '16px', // 16px 2
  '17px', // 17px 3
  '24px', // 24px 4
  '50px', // 50px 5
  '80px', // 80px 6
  '450px', // 450px 7
  '482px', // 482px 8
  '520px', // 520px 9
  '1440px', // 1440px 10
];

const heights: string[] = [
  '2px', // 2px 0
  '4px', // 4px 1
  '8px', // 8px 2
  '16px', // 16px 3
  '25px', // 25px 4
  '65px', // 65px 5
  '103px', // 103px 6
  '114px', // 114px 7
  '153px', // 153px 8
  '460px', // 460px 9
  '490px', // 490px 10
];

const spaces: string[] = [
  '2px', // 2px 0
  '4px', // 4px 1
  '8px', // 8px 2
  '16px', // 16px 3
  '18px', // 18px 4
  '24px', // 24px 5
  '30px', // 30px 6
  '32px', // 32px 7
  '40px', // 40px 8
  '50px', // 50px 9
  '56px', // 56px 10
  '58px', // 58px 11
  '64px', // 64px 12
  '80px', // 80px 13
  '86px', // 86px 14
  '96px', // 96px 15
  '115px', // 115px 16
  '155px', // 155px 17
  '184px', // 184px 18
];

const borderWidths = ['2px', '4px'];

const borderRadiuses: string[] = ['8px'];

const fontSizes: string[] = [
  '12px', // 12px 0
  '16px', // 16px 1
  '18px', // 18px 2
  '20px', // 20px 3
  '24px', // 24px 4
  '25px', // 25px 5
  '26px', // 26px 6
  '28px', // 28px 7
  '30px', // 30px 8
  '32px', // 32px 9
  '32.91px', // 32.91px 10
  '35px', // 35px 11
  '38px', // 38px 12
  '76px', // 76px 13
  '90.36px', // 90.36px 14
];

const lineHeights: string[] = [
  '18px', // 18px 0
  '24px', // 24px 1
  '27px', // 27px 2
  '36px', // 36px 3
  '39px', // 39px 4
  '41.14px', // 41.14px 5
  '42px', // 42px 6
  '45px', // 45px 7
  '46.77px', // 46.77px 8
  '49.37px', // 49.37px 9
  '57px', // 57px 10
  '114px', // 114px 11
  '135.55px', // 135.55px 12
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

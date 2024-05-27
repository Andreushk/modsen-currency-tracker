export interface IPalette {
  bg: {
    main: string;
    blocks: string;
    input: string;
  };
  text: {
    primary: string;
    secondary: string;
    context: string;
    accent: string;
    links: string;
  };
  borders: string;
  icons: string;
}

export interface IBreakpoints {
  mobileS: '380px';
  mobileM: '450px';
  mobileL: '650px';
  tabletS: '768px';
  tabletM: '885px';
  laptopS: '1000px';
  laptopM: '1100px';
  desktopS: '1200px';
  desktopM: '1300px';
  desktopL: '1400px';
}

export interface IFontWeights {
  light: 300;
  regular: 400;
  medium: 500;
  semiBold: 600;
}

export interface IDurations {
  animations: 250;
  shimmer: 1000;
}

export interface ITheme {
  colors: IPalette;
  breakpoints: IBreakpoints;
  widths: string[];
  heights: string[];
  spaces: string[];
  fontSizes: string[];
  lineHeights: string[];
  borderRadiuses: string[];
  borderWidths: string[];
  zIndexes: string[];
  fontWeights: IFontWeights;
  durations: IDurations;
}

import { createGlobalStyle } from 'styled-components';

import PoppinsLight from '@/assets/fonts/Poppins-Light.ttf';
import PoppinsMedium from '@/assets/fonts/Poppins-Medium.ttf';
import PoppinsRegular from '@/assets/fonts/Poppins-Regular.ttf';
import PoppinsSemiBold from '@/assets/fonts/Poppins-SemiBold.ttf';

const GlobalStyles = createGlobalStyle`
@font-face {
  font-display: swap; 
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 300;
  src: url(${PoppinsLight}) format('truetype');
}

@font-face {
  font-display: swap; 
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  src: url(${PoppinsRegular}) format('truetype'); 
}

@font-face {
  font-display: swap; 
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  src: url(${PoppinsMedium}) format('truetype'); 
}

@font-face {
  font-display: swap; 
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  src: url(${PoppinsSemiBold}) format('truetype');
}

* {  
  box-sizing: border-box;
  outline:0;
  margin: 0;
  padding: 0;
}

body {
  font-family: "Poppins", "Verdana", "Geneva", "Tahoma", sans-serif;
  background-color: ${({ theme }) => theme.colors.bg.main};
  color: ${({ theme }) => theme.colors.text.primary};
}
`;

export default GlobalStyles;

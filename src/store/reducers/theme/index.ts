import { createSlice } from '@reduxjs/toolkit';

import IThemeState from './types';

const initialState: IThemeState = {
  isDarkMode: true,
};

const themeSlice = createSlice({
  name: 'Theme Slice',
  initialState,
  reducers: {
    toggle: (state: IThemeState) => {
      state.isDarkMode = !state.isDarkMode;
    },
  },
});

export const { toggle } = themeSlice.actions;
export default themeSlice.reducer;

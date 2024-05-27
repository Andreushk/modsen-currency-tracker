import { createSlice } from '@reduxjs/toolkit';

interface IThemeState {
  isDarkMode: boolean;
}

const initialState: IThemeState = {
  isDarkMode: true,
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggle: (state: IThemeState) => {
      state.isDarkMode = !state.isDarkMode;
    },
  },
});

export const { toggle } = themeSlice.actions;

export default themeSlice.reducer;

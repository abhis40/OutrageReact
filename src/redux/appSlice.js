// src/redux/appSlice.js
import { createSlice } from '@reduxjs/toolkit';

const appSlice = createSlice({
  name: 'app',
  initialState: {
    buttonClicked: false, // Tracks button click state
  },
  reducers: {
    toggleButtonClick: (state) => {
      state.buttonClicked = !state.buttonClicked; // Toggles the button clicked state
    },
  },
});

export const { toggleButtonClick } = appSlice.actions;
export default appSlice.reducer;

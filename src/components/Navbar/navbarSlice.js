import { createSlice } from '@reduxjs/toolkit';

// reducer
export const navbarSlice = createSlice({
  name: 'navbar',
  initialState: {
    isOpen: false,
  },
  reducers: {
    openNavbar: (state) => {
      state.isOpen = true;
    },
    closeNavbar: (state) => {
      state.isOpen = false;
    },
  },
});

// selectors
export const selectIsNavbarOpen = (state) => state.navbar.isOpen;

// actions
export const {
  openNavbar,
  closeNavbar,
} = navbarSlice.actions;

export default navbarSlice.reducer;

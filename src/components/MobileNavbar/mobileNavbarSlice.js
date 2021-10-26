import { createSlice } from '@reduxjs/toolkit';

// reducer
export const mobileNavbarSlice = createSlice({
  name: 'mobileNavbar',
  initialState: {
    isOpen: false,
  },
  reducers: {
    openMobileNavbar: (state) => {
      state.isOpen = true;
    },
    closeMobileNavbar: (state) => {
      state.isOpen = false;
    },
  },
});

// selectors
export const selectIsMobileNavbarOpen = (state) => state.mobileNavbar.isOpen;

// actions
export const {
  openMobileNavbar,
  closeMobileNavbar,
} = mobileNavbarSlice.actions;

export default mobileNavbarSlice.reducer;

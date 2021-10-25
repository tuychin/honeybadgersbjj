import { createSlice } from '@reduxjs/toolkit';

// reducer
export const contactModalSlice = createSlice({
  name: 'contactModal',
  initialState: {
    isOpen: false,
  },
  reducers: {
    openContactModal: (state) => {
      state.isOpen = true;
    },
    closeContactModal: (state) => {
      state.isOpen = false;
    },
  },
});

// selectors
export const selectIsContactModalOpen = (state) => state.contactModal.isOpen;

// actions
export const {
  openContactModal,
  closeContactModal,
} = contactModalSlice.actions;

export default contactModalSlice.reducer;

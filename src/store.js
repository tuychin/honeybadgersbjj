import { configureStore } from '@reduxjs/toolkit';
import contactModalSlice from './components/ContactModal/contactModalSlice';
import mobileNavbarSlice from './components/MobileNavbar/mobileNavbarSlice';

const reducer = {
  contactModal: contactModalSlice,
  mobileNavbar: mobileNavbarSlice,
};

const store = configureStore({ reducer });

export default store;

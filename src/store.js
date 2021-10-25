import { configureStore } from '@reduxjs/toolkit';
import contactModalSlice from './components/ContactModal/contactModalSlice';
import navbarSlice from './components/Navbar/navbarSlice';

const reducer = {
  contactModal: contactModalSlice,
  navbar: navbarSlice,
};

const store = configureStore({ reducer });

export default store;

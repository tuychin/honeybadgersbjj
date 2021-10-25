import { configureStore } from '@reduxjs/toolkit';
import contactModalSlice from './components/ContactModal/contactModalSlice';

const reducer = {
  contactModal: contactModalSlice,
};

const store = configureStore({ reducer });

export default store;

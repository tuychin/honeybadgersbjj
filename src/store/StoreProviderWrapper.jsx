import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { createStore } from './index';

const StoreProviderWrapper = ({ children }) => {
  const store = createStore();
  return <Provider store={store}>{children}</Provider>;
};

StoreProviderWrapper.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
  ]).isRequired,
};

export default StoreProviderWrapper;

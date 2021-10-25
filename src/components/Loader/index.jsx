import React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import CircularProgress from '@mui/material/CircularProgress';

const Spinner = styled(CircularProgress)(() => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
}));

const Loader = ({ isActive = true }) => isActive && <Spinner />;

Loader.propTypes = {
  isActive: PropTypes.bool,
};

export default Loader;

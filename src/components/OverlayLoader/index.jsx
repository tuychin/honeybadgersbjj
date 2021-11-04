import React from 'react';
import PropTypes from 'prop-types';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

const OverlayLoader = ({ isOpen }) => (
  <Backdrop
    sx={{
      backgroundColor: (theme) => theme.palette.background.default,
      zIndex: (theme) => theme.zIndex.drawer + 1,
      overflow: 'hidden',
    }}
    open={isOpen}
  >
    <CircularProgress color="primary" />
  </Backdrop>
);

OverlayLoader.propTypes = {
  isOpen: PropTypes.bool,
};

export default OverlayLoader;

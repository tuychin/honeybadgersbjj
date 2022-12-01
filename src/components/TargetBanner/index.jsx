import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import { openContactModal } from '../ContactModal/contactModalSlice';

const BannerWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  paddingTop: theme.spacing(12),
  paddingBottom: theme.spacing(12),
  backgroundColor: theme.palette.background.default,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  [theme.breakpoints.between('xs', 'md')]: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
}));

const BannerInner = styled(Container)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  [theme.breakpoints.between('xs', 'md')]: {
    flexDirection: 'column',
  },
}));

const Banner = ({ text, buttonText, bgImage }) => {
  const dispatch = useDispatch();

  const handleContactModalOpen = () => {
    dispatch(openContactModal());
  };

  return (
    <BannerWrapper sx={{ backgroundImage: `url(${bgImage})` }}>
      <BannerInner>
        <Typography
          sx={{ mr: 3, mb: { xs: 4, md: 0 } }}
          variant="h4"
          component="span"
          color="secondary"
        >
          {text}
        </Typography>
        <Button
          sx={{ flexShrink: 0, alignSelf: { xs: 'flex-start', md: 'center' } }}
          size="large"
          variant="contained"
          color="primary"
          onClick={handleContactModalOpen}
        >
          {buttonText}
        </Button>
      </BannerInner>
    </BannerWrapper>
  );
};

Banner.propTypes = {
  text: PropTypes.string.isRequired,
  buttonText: PropTypes.string,
  bgImage: PropTypes.string.isRequired,
};

export default Banner;

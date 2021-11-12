import React from 'react';
import { useDispatch } from 'react-redux';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { openContactModal } from '../ContactModal/contactModalSlice';

import InnerLink from '../InnerLink';
import { PAGES } from '../../const';

const DesktopNavbar = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  [theme.breakpoints.between('xs', 'sm')]: {
    display: 'none',
  },
}));

const Navbar = () => {
  const dispatch = useDispatch();

  const handleContactModalOpen = () => {
    dispatch(openContactModal());
  };

  return (
    <DesktopNavbar>
      {PAGES.map(({ name, href }) => (
        <InnerLink
          sx={{ mr: 3 }}
          to={href}
          color="white"
          underline="hover"
          activeStyle={{ textDecoration: 'underline' }}
          key={name}
        >
          <Typography variant="button" component="span">
            {name}
          </Typography>
        </InnerLink>
      ))}
      <Button
        size="large"
        variant="text"
        color="primary"
        onClick={handleContactModalOpen}
      >
        <Typography variant="button" component="span">
          Записаться
        </Typography>
      </Button>
    </DesktopNavbar>
  );
};

export default Navbar;

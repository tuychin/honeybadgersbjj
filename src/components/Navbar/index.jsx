import React from 'react';
import { useDispatch } from 'react-redux';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { openContactModal } from '../ContactModal/contactModalSlice';

import InnerLink from '../InnerLink';
import { PAGES } from '../../const';

const DesktopNavbar = styled('div')(() => ({
  display: 'flex',
  alignItems: 'center',
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
          activeStyle={{ textDecoration: 'underline' }}
          to={href}
          color="white"
          underline="hover"
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

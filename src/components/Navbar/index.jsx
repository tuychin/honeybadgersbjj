import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { styled } from '@mui/material/styles';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { openContactModal } from '../ContactModal/contactModalSlice';

const DesktopNavbar = styled('div')(() => ({
  display: 'flex',
  alignItems: 'center',
}));

const Navbar = ({ pages }) => {
  const dispatch = useDispatch();

  const handleContactModalOpen = () => {
    dispatch(openContactModal());
  };

  return (
    <DesktopNavbar>
      {pages.map(({ name, href }) => (
        <Link
          sx={{ marginRight: '20px' }}
          href={href}
          color="inherit"
          underline="hover"
          key={name}
        >
          <Typography variant="button" component="span">
            {name}
          </Typography>
        </Link>
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

Navbar.propTypes = {
  pages: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    href: PropTypes.string,
  })),
};

export default Navbar;

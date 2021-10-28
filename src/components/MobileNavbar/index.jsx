import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { styled } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Link from '@mui/material/Link';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Button from '@mui/material/Button';
import {
  selectIsMobileNavbarOpen,
  closeMobileNavbar,
} from './mobileNavbarSlice';
import { openContactModal } from '../ContactModal/contactModalSlice';

const DRAWER_WIDTH = 240;

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

const CloseOverlay = styled('div')(() => ({
  position: 'absolute',
  top: 0,
  left: 0,
  minWidth: '100vw',
  minHeight: '100vh',
  zIndex: 1100,
}));

const MobileNavbar = ({ pages }) => {
  const dispatch = useDispatch();
  const isOpen = useSelector(selectIsMobileNavbarOpen);

  const closeOverlayRef = useRef(null);
  const closeButtonRef = useRef(null);
  const closeIconRef = useRef(null);

  const handleClose = (evt, closeElements) => {
    if (closeElements.includes(evt.currentTarget)) {
      dispatch(closeMobileNavbar());
    }
  };

  const handleContactModalOpen = () => {
    dispatch(openContactModal());
  };

  return (
    <>
      {isOpen && (
        <CloseOverlay
          ref={closeOverlayRef}
          onClick={(evt) => {
            handleClose(evt, [closeOverlayRef.current]);
          }}
        />
      )}
      <Drawer
        sx={{
          width: DRAWER_WIDTH,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: DRAWER_WIDTH,
            marginLeft: isOpen ? '100%' : 0,
          },
        }}
        variant="persistent"
        anchor="right"
        open={isOpen}
      >
        <DrawerHeader>
          <IconButton
            ref={closeButtonRef}
            onClick={(evt) => {
              handleClose(evt, [closeButtonRef.current, closeIconRef.current]);
            }}
          >
            <CloseIcon ref={closeIconRef} />
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {pages.map(({ name, href }) => (
            <Link
              href={href}
              color="inherit"
              underline="none"
              key={name}
            >
              <ListItem button>
                <ListItemText primary={name} />
              </ListItem>
            </Link>
          ))}
        </List>
        <Button
          sx={{
            mx: 2,
          }}
          size="large"
          variant="outlined"
          color="primary"
          onClick={handleContactModalOpen}
        >
          Записаться
        </Button>
      </Drawer>
    </>
  );
};

MobileNavbar.propTypes = {
  pages: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    href: PropTypes.string,
  })),
};

export default MobileNavbar;

import React, { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { styled } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import {
  selectIsNavbarOpen,
  closeNavbar,
} from './navbarSlice';

const drawerWidth = 240;

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

const Navbar = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector(selectIsNavbarOpen);

  const closeOverlayRef = useRef(null);
  const closeButtonRef = useRef(null);
  const closeIconRef = useRef(null);

  const handleClose = (evt, closeElements) => {
    if (closeElements.includes(evt.currentTarget)) {
      dispatch(closeNavbar());
    }
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
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
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
          {['Главная', 'Новости', 'О нас'].map((text) => (
            <ListItem button key={text}>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default Navbar;

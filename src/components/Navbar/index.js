import React, {useRef} from 'react';
import PropTypes from 'prop-types';
import {styled} from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

const drawerWidth = 240;

const DrawerHeader = styled('div')(({theme}) => ({
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

const Navbar = ({
  handleClose,
  isOpen,
}) => {
  const closeOverlayRef = useRef(null);
  const closeButtonRef = useRef(null);
  const closeIconRef = useRef(null);

  return (
    <>
      {isOpen && <CloseOverlay
        ref={closeOverlayRef}
        onClick={(evt) => {
          handleClose(evt, [
            closeOverlayRef.current,
          ]);
        }}
      />}
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
              handleClose(evt, [
                closeButtonRef.current,
                closeIconRef.current,
              ]);
            }}
          >
            <ChevronRightIcon ref={closeIconRef} />
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {['Главная', 'Преимущества', 'О нас', 'Контакты'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
}

Navbar.propTypes = {
  handleClose: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
};

export default Navbar;

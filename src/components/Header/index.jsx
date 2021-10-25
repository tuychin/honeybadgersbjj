import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { styled } from '@mui/material/styles';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import {
  selectIsNavbarOpen,
  openNavbar,
} from '../Navbar/navbarSlice';

import Navbar from '../Navbar';
import logo from '../../images/logo.png';

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'isNavbarOpen',
})(({ theme, isNavbarOpen }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(isNavbarOpen && {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  }),
}));

const Logo = styled('img')(() => ({
  maxWidth: 60,
  marginRight: 20,
}));

const Header = () => {
  const dispatch = useDispatch();
  const isNavbarOpen = useSelector(selectIsNavbarOpen);

  const handleOpenNavbar = () => {
    dispatch(openNavbar(true));
  };

  return (
    <AppBar position="fixed" open={isNavbarOpen}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Logo src={logo} alt="Honey Badgers BJJ Logo" />
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="end"
          onClick={handleOpenNavbar}
          sx={{ ...(isNavbarOpen && { display: 'none' }) }}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>
      <Navbar />
    </AppBar>
  );
};

export default Header;

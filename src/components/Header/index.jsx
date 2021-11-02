import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useTheme, styled } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Link from '@mui/material/Link';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import {
  selectIsMobileNavbarOpen,
  openMobileNavbar,
} from '../MobileNavbar/mobileNavbarSlice';

import MobileNavbar from '../MobileNavbar';
import Navbar from '../Navbar';
import logo from '../../images/logo.png';

const DRAWER_WIDTH = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'isMobileNavbarOpen',
})(({ theme, isMobileNavbarOpen }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(isMobileNavbarOpen && {
    width: `calc(100% - ${DRAWER_WIDTH}px)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: DRAWER_WIDTH,
  }),
}));

const Logo = styled('img')(() => ({
  maxWidth: 60,
}));

const Header = () => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.down('sm'));
  const isMobileNavbarOpen = useSelector(selectIsMobileNavbarOpen);

  const handleOpenMobileNavbar = () => {
    dispatch(openMobileNavbar(true));
  };

  return (
    <AppBar position="fixed" open={isMobileNavbarOpen}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Link
          sx={{ display: 'flex', alignItems: 'center' }}
          href="/"
        >
          <Logo src={logo} alt="Honey Badgers BJJ Logo" />
        </Link>
        {isTablet ? (
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleOpenMobileNavbar}
            sx={{ ...(isMobileNavbarOpen && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
        ) : (
          <Navbar />
        )}
      </Toolbar>
      {isTablet && <MobileNavbar />}
    </AppBar>
  );
};

export default Header;

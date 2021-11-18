import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { useTheme, styled } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import {
  selectIsMobileNavbarOpen,
  openMobileNavbar,
} from '../MobileNavbar/mobileNavbarSlice';

import InnerLink from '../InnerLink';
import DesktopNavbar from '../DesktopNavbar';
import MobileNavbar from '../MobileNavbar';

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

const Logo = styled('img')(({ theme }) => ({
  maxWidth: '60px',
  [theme.breakpoints.between('xs', 'sm')]: {
    maxWidth: '45px',
  },
}));

const Header = ({ isFixed, logo }) => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.down('sm'));
  const isMobileNavbarOpen = useSelector(selectIsMobileNavbarOpen);

  const handleOpenMobileNavbar = () => {
    dispatch(openMobileNavbar(true));
  };

  return (
    <AppBar
      color="secondary"
      position={isFixed ? 'fixed' : 'static'}
      open={isMobileNavbarOpen}
    >
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <InnerLink
          sx={{ display: 'flex', alignItems: 'center' }}
          to="/"
        >
          <Logo src={`${logo}?nf_resize=fit&w=60&h=60`} alt="Honey Badgers BJJ Logo" />
        </InnerLink>
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
          <DesktopNavbar />
        )}
      </Toolbar>
      {isTablet && <MobileNavbar />}
    </AppBar>
  );
};

Header.propTypes = {
  isFixed: PropTypes.bool,
  logo: PropTypes.string,
};

export default Header;

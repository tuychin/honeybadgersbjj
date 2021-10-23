import * as React from 'react';
import {styled} from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import Navbar from '../Navbar';
// import logo from '../../images/logo.png';

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'isNavbarOpen',
})(({theme, isNavbarOpen}) => ({
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

/*
 * const Logo = styled('img')(() => ({
 *   maxWidth: 60,
 *   marginRight: 20,
 * }));
 */

const Header = () => {
  const [isNavbarOpen, setIsNavbarOpen] = React.useState(false);

  const handleOpenNavbar = () => {
    setIsNavbarOpen(true);
  };

  const handleCloseNavbar = (evt, closeElements) => {
    if (closeElements.includes(evt.target)) {
      setIsNavbarOpen(false);
    }
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar position="fixed" open={isNavbarOpen}>
        <Toolbar>
          {/** <Logo src={logo} alt="Honey Badgers BJJ Logo"/> **/}
          <Typography variant="h6" noWrap sx={{ flexGrow: 1 }} component="div">
            HONEY BADGERS
          </Typography>
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
      </AppBar>
      <Navbar isOpen={isNavbarOpen} handleClose={handleCloseNavbar} />
    </Box>
  );
}

export default Header;

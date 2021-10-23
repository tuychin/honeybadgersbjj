import React from 'react';
import PropTypes from 'prop-types';
import {styled} from '@mui/material/styles';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import Link from '@mui/material/Link';

const Transition = React.forwardRef((props, ref) => {
  return <Slide direction="up" ref={ref} {...props} />;
});

Transition.displayName = 'Transition';

const ContentWrapper = styled(Container)(({theme}) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '40px 0px',
  [theme.breakpoints.between('xs', 'md')]: {
    flexDirection: 'column',
    padding: '20px',
  },
}));

const ContactForm = ({isOpen, handleClose}) => {
  return (
    <Dialog
      fullScreen
      open={isOpen}
      onClose={handleClose}
      TransitionComponent={Transition}
    >
      <AppBar sx={{position: 'relative'}}>
        <Toolbar>
          <Typography sx={{ml: 2, flex: 1}} variant="h5" component="div">
            Как записаться?
          </Typography>
          <IconButton
            edge="start"
            color="inherit"
            onClick={handleClose}
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <ContentWrapper>
        <Box sx={{width: '100%'}}>
          <Box sx={{marginBottom: '20px'}}>
            <Typography variant="h6" component="div">
              По телефону
            </Typography>
            <Link href="tel:+79256355455">
              +7 (925) 635 54 55
            </Link>
          </Box>
          <Divider />
          <Box sx={{margin: '20px 0px'}}>
            <Typography variant="h6" component="div">
              Через Telegram
            </Typography>
            <Link href="https://t.me/tuychin_r" target="_blank" rel="noopener">
              @tuychin_r
            </Link>
          </Box>
          <Divider />
          <Box sx={{marginTop: '20px'}}>
            <Typography variant="h6" component="div">
              Через Instagram Direct
            </Typography>
            <Link href="https://www.instagram.com/tuychin.r" target="_blank" rel="noopener">
              tuychin.r
            </Link>
          </Box>
        </Box>
        <Box sx={{width: '100%'}}>
          
        </Box>
      </ContentWrapper>
    </Dialog>
  );
}

ContactForm.propTypes = {
  handleClose: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
};

export default ContactForm;
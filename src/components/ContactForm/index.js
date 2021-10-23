import React from 'react';
import PropTypes from 'prop-types';
import YandexMap from '../YandexMap';
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

const MAP_COORDINATES = [55.708303, 37.652822];

const Transition = React.forwardRef((props, ref) => {
  return <Slide direction="up" ref={ref} {...props} />;
});

Transition.displayName = 'Transition';

const ContentWrapper = styled(Container)(({theme}) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'start',
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
        <Box sx={{width: '100%', marginRight: {xs: '0px', md: '40px'}}}>
          <Box sx={{marginBottom: '20px'}}>
            <Typography variant="subtitle1" component="div">
              По телефону:
            </Typography>
            <Link href="tel:+79256355455">
              +7 (925) 635 54 55
            </Link>
          </Box>
          <Divider />
          <Box sx={{margin: '20px 0px'}}>
            <Typography variant="subtitle1" component="div">
              Через Telegram:
            </Typography>
            <Link href="https://t.me/tuychin_r" target="_blank" rel="noopener">
              @tuychin_r
            </Link>
          </Box>
          <Divider />
          <Box sx={{marginTop: '20px'}}>
            <Typography variant="subtitle1" component="div">
              Через Instagram Direct:
            </Typography>
            <Link href="https://www.instagram.com/tuychin.r" target="_blank" rel="noopener">
              tuychin.r
            </Link>
          </Box>
        </Box>
        <Box sx={{width: '100%'}}>
          <Box sx={{marginBottom: '20px'}}>
            <Typography variant="subtitle1" component="div">
              Расписание:
            </Typography>
            <Typography>
              ПН, СР, ПТ - с 20:00 до 22:00
            </Typography>
            <Typography>
              СБ - с 10:00 до 12:00 (день борьбы)
            </Typography>
          </Box>
          <Divider />
          <Box sx={{margin: '20px 0px'}}>
            <Typography variant="subtitle1" component="div">
              Адрес:
            </Typography>
            <Typography>
              Улица Ленинская Слобода, 19
            </Typography>
          </Box>
          <Divider />
          <YandexMap coordinates={MAP_COORDINATES} />
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

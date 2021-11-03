import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { styled } from '@mui/material/styles';
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
import {
  selectIsContactModalOpen,
  closeContactModal,
} from './contactModalSlice';

import {
  Location,
  TelNumber,
  Telegram,
  Instagram,
} from '../../const';
import YandexMap from '../YandexMap';
import ErrorBoundary from '../ErrorBoundary';

const Transition = React.forwardRef((props, ref) => <Slide direction="up" ref={ref} {...props} />);

Transition.displayName = 'Transition';

const ContentWrapper = styled(Container)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'start',
  padding: '40px 0px',
  [theme.breakpoints.between('xs', 'md')]: {
    flexDirection: 'column',
    padding: '20px',
  },
}));

const ContactModal = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector(selectIsContactModalOpen);

  const handleClose = () => {
    dispatch(closeContactModal());
  };

  return (
    <Dialog
      fullScreen
      open={isOpen}
      onClose={handleClose}
      TransitionComponent={Transition}
    >
      <AppBar sx={{ position: 'relative' }}>
        <Toolbar>
          <Typography sx={{ ml: 2, flex: 1 }} variant="h5" component="div">
            Как записаться?
          </Typography>
          <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
            <CloseIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <ContentWrapper>
        <Box
          sx={{
            width: '100%',
            marginRight: { xs: '0px', md: '40px' },
            marginBottom: { xs: '20px', md: '0px' },
          }}
        >
          <Box sx={{ marginBottom: '20px' }}>
            <Typography variant="subtitle1" component="div">
              По телефону:
            </Typography>
            <Link href={TelNumber.HREF}>
              {TelNumber.LABEL}
            </Link>
          </Box>
          <Divider />

          <Box sx={{ margin: '20px 0px' }}>
            <Typography variant="subtitle1" component="div">
              Через Telegram:
            </Typography>
            <Link href={Telegram.HREF} target="_blank" rel="noopener noreferrer nofollow">
              {Telegram.LABEL}
            </Link>
          </Box>
          <Divider />

          <Box sx={{ margin: '20px 0px' }}>
            <Typography variant="subtitle1" component="div">
              Через Instagram Direct:
            </Typography>
            <Link href={Instagram.HREF} target="_blank" rel="noopener noreferrer nofollow">
              {Instagram.LABEL}
            </Link>
          </Box>
          <Divider sx={{ display: { xs: 'block', md: 'none' } }} />
        </Box>

        <Box sx={{ width: '100%' }}>
          <Box sx={{ marginBottom: '20px' }}>
            <Typography variant="subtitle1" component="div">
              Расписание:
            </Typography>
            <Typography>
              ПН, СР, ПТ - с 20:00 до 22:00
            </Typography>
          </Box>
          <Divider />

          <Box sx={{ margin: '20px 0px' }}>
            <Typography variant="subtitle1" component="div">
              Абонемент:
            </Typography>
            <Typography>6.000₽/месяц</Typography>
          </Box>
          <Divider />

          <Box sx={{ margin: '20px 0px' }}>
            <Typography variant="subtitle1" component="div">
              Адрес:
            </Typography>
            <Typography>{Location.ADDRESS}</Typography>
          </Box>
          <ErrorBoundary>
            <YandexMap
              coordinates={Location.COORDINATES}
              description={`Honey badgers BJJ. ${Location.ADDRESS}`}
            />
          </ErrorBoundary>
        </Box>
      </ContentWrapper>
    </Dialog>
  );
};

export default ContactModal;

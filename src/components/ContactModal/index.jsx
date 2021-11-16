import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import parsePhoneNumber from 'libphonenumber-js';
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

const ContactModal = ({
  socials,
  telNumber,
  plan,
  price,
  address,
  coordinates,
}) => {
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
      PaperProps={{
        sx: {
          backgroundColor: 'background.default',
        },
      }}
    >
      <AppBar sx={{ position: 'relative' }} color="secondary">
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
            <Link href={`tel:${telNumber}`}>
              {parsePhoneNumber(telNumber).formatNational()}
            </Link>
          </Box>
          <Divider />

          {socials.map(({ login, href, name }, idx) => (
            <>
              <Box sx={{ margin: '20px 0px' }}>
                <Typography variant="subtitle1" component="div">
                  {`Через ${name}:`}
                </Typography>
                <Link href={href} target="_blank" rel="noopener nofollow">
                  {login}
                </Link>
              </Box>
              {(idx !== socials.length - 1) && <Divider />}
            </>
          ))}
          <Divider sx={{ display: { xs: 'block', md: 'none' } }} />
        </Box>

        <Box sx={{ width: '100%' }}>
          <Box sx={{ marginBottom: '20px' }}>
            <Typography variant="subtitle1" component="div">
              Расписание:
            </Typography>
            <Typography>
              {plan}
            </Typography>
          </Box>
          <Divider />

          <Box sx={{ margin: '20px 0px' }}>
            <Typography variant="subtitle1" component="div">
              Абонемент:
            </Typography>
            <Typography>{price}</Typography>
          </Box>
          <Divider />

          <Box sx={{ margin: '20px 0px' }}>
            <Typography variant="subtitle1" component="div">
              Адрес:
            </Typography>
            <Typography>{address}</Typography>
          </Box>
          <ErrorBoundary>
            <YandexMap
              coordinates={coordinates}
              description={address}
            />
          </ErrorBoundary>
        </Box>
      </ContentWrapper>
    </Dialog>
  );
};

ContactModal.propTypes = {
  socials: PropTypes.arrayOf(PropTypes.shape({
    login: PropTypes.string,
    href: PropTypes.string,
    name: PropTypes.string,
  })),
  telNumber: PropTypes.string,
  plan: PropTypes.string,
  price: PropTypes.string,
  address: PropTypes.string,
  coordinates: PropTypes.arrayOf(PropTypes.string),
};

export default ContactModal;

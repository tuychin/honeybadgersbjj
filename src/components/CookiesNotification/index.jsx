import React, { useState, useEffect, forwardRef } from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import Link from '@mui/material/Link';

const Alert = forwardRef((props, ref) => (
  <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
));

Alert.displayName = 'Alert';

const CookiesNotification = () => {
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    const isNotificationWasShown = localStorage.getItem('is_cookies_notification_was_shown');

    if (!isNotificationWasShown) {
      setOpen(true);
    }
  }, []);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
    localStorage.setItem('is_cookies_notification_was_shown', 1);
  };

  return (
    <Snackbar open={isOpen} onClose={handleClose}>
      <Alert onClose={handleClose} severity="info" sx={{ width: '100%' }}>
        Этот сайт использует куки, потому что без них ничего не работает.
        <br />
        <Link
          href="https://ru.wikipedia.org/wiki/Cookie"
          target="_blank"
          rel="noopener noreferrer nofollow"
        >
          Подробнее
        </Link>
      </Alert>
    </Snackbar>
  );
};

export default CookiesNotification;

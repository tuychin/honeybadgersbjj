import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { Provider } from 'react-redux';
import {
  styled,
  ThemeProvider,
} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import primaryDark from '../themes/primary-dark';
import store from '../store';

import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactModal from '../components/ContactModal';
import CookiesNotification from '../components/CookiesNotification';
import OverlayLoader from '../components/OverlayLoader';

const theme = primaryDark;

const StyledWrapper = styled('div')(() => ({
  display: 'grid',
  gridTemplateRows: 'auto 1fr auto',
  position: 'relative',
  minHeight: '100vh',
  color: theme.palette.text.primary,
  backgroundColor: theme.palette.background.default,
}));

const AppWraper = ({ children }) => {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const delay = 1000;
    const timerId = setTimeout(() => {
      setLoading(false);
    }, delay);

    return () => {
      clearTimeout(timerId);
    };
  }, []);

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Helmet
          title="Honey badgers BJJ team"
          meta={[
            { name: 'description', content: 'Тренировки по BJJ в Москве' },
          ]}
          link={[
            { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
            { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: true },
            { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,500;0,700;1,300;1,500;1,700&family=Oswald:wght@300;500;700&display=swap' },
            { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' },
          ]}
        />
        <StyledWrapper>
          {isLoading ? <OverlayLoader /> : (
            <>
              {children}
              <CookiesNotification />
            </>
          )}
        </StyledWrapper>
      </ThemeProvider>
    </Provider>
  );
};

AppWraper.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
  ]).isRequired,
};

export const wrapPages = ({ element }) => (
  <AppWraper>
    <Header isFixed />
    {element}
    <ContactModal />
    <Footer />
  </AppWraper>
);

export const wrapPagesDeep = ({ element }) => (
  <AppWraper>
    <Header />
    {element}
    <ContactModal />
    <Footer />
  </AppWraper>
);

export default {
  wrapPages,
  wrapPagesDeep,
};

/* eslint-disable react/jsx-filename-extension */
import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { styled, ThemeProvider } from '@mui/material/styles';
import anime from 'animejs/lib/anime.es';
import CssBaseline from '@mui/material/CssBaseline';

import Header from './components/Header';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';
import CookiesNotification from './components/CookiesNotification';

import theme from './themes/primary';

const animateContentEmergence = (target) => {
  anime({
    targets: target,
    easing: 'linear',
    opacity: [
      { value: 1, duration: 500, delay: 1000 },
    ],
  });
};

const StyledWrapper = styled('div')(() => ({
  display: 'grid',
  gridTemplateRows: 'auto 1fr auto',
  position: 'relative',
  minHeight: '100vh',
  color: theme.palette.text.primary,
  backgroundColor: theme.palette.background.default,
  opacity: 0,
}));

export const Layout = ({ children }) => {
  const [pathName, setPathName] = useState('');
  const contentRef = useRef(null);

  useEffect(() => {
    animateContentEmergence(contentRef.current);
  }, []);

  useEffect(() => {
    setPathName(window.location.pathname);
  }, [children]);

  return (
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
        script={[
          { src: 'https://identity.netlify.com/v1/netlify-identity-widget.js', type: 'text/javascript' },
          {
            innerHTML: `
            if (window.netlifyIdentity) {
              window.netlifyIdentity.on("init", user => {
                if (!user) {
                  window.netlifyIdentity.on("login", () => {
                    document.location.href = "/admin/";
                  });
                }
              });
            }
          `,
            type: 'text/javascript',
          },
        ]}
      />
      <StyledWrapper ref={contentRef}>
        <Header isFixed={pathName === '/'} />
        <main>{children}</main>
        <Footer />
        <ContactModal />
        <CookiesNotification />
      </StyledWrapper>
    </ThemeProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
  ]).isRequired,
};

export default Layout;

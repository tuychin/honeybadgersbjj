import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { styled } from '@mui/material/styles';

import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactModal from '../components/ContactModal';
import CookiesNotification from '../components/CookiesNotification';
import OverlayLoader from '../components/OverlayLoader';

const StyledWrapper = styled('div')(({ theme }) => ({
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
    <StyledWrapper>
      <Helmet
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
      {isLoading ? <OverlayLoader /> : (
        <>
          {children}
          <CookiesNotification />
        </>
      )}
    </StyledWrapper>
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

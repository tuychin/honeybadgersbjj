import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
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

const AppWrapper = ({ children }) => {
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
      {isLoading ? <OverlayLoader /> : (
        <>
          {children}
          <CookiesNotification />
        </>
      )}
    </StyledWrapper>
  );
};

AppWrapper.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
  ]).isRequired,
};

export const wrapPages = ({ element }) => (
  <AppWrapper>
    <Header isFixed />
    {element}
    <ContactModal />
    <Footer />
  </AppWrapper>
);

export const wrapPagesDeep = ({ element }) => (
  <AppWrapper>
    <Header />
    {element}
    <ContactModal />
    <Footer />
  </AppWrapper>
);

export default {
  wrapPages,
  wrapPagesDeep,
};

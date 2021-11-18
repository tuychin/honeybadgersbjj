/* eslint-disable react/jsx-filename-extension */
import React, { useEffect, useRef } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import { useLocation } from '@reach/router';
import Helmet from 'react-helmet';
import { styled, ThemeProvider } from '@mui/material/styles';
import anime from 'animejs/lib/anime.es';
import CssBaseline from '@mui/material/CssBaseline';

import Header from './components/Header';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';
import CookiesNotification from './components/CookiesNotification';

import useTheme from './hooks/useTheme';
import Seo from './seo';

const useData = () => {
  const data = useStaticQuery(graphql`
    query {
      markdownRemark(frontmatter: {id: {eq: "common-info"}}) {
        frontmatter {
          socials {
            login
            href
            name
          }
          tel_number
          logo
          plan
          price
          location {
            address
            coordinates {
              coordinatesX
              coordinatesY
            }
          }
        }
      }
    }
  `);

  return data.markdownRemark.frontmatter;
};

const animateContentEmergence = (target) => {
  anime({
    targets: target,
    easing: 'linear',
    opacity: [
      { value: 1, duration: 500, delay: 1000 },
    ],
  });
};

const StyledWrapper = styled('div')(({ theme }) => ({
  display: 'grid',
  gridTemplateRows: 'auto 1fr auto',
  position: 'relative',
  minHeight: '100vh',
  color: theme.palette.text.primary,
  backgroundColor: theme.palette.background.default,
  opacity: 0,
}));

export const Layout = ({ children }) => {
  const {
    socials,
    tel_number: telNumber,
    logo,
    plan,
    price,
    location: {
      address,
      coordinates: {
        coordinatesX,
        coordinatesY,
      },
    },
  } = useData();
  const theme = useTheme();
  const { pathname } = useLocation();
  const contentRef = useRef(null);

  useEffect(() => {
    animateContentEmergence(contentRef.current);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Seo />
      <Helmet
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
      <CssBaseline />
      <StyledWrapper ref={contentRef}>
        <Header isFixed={pathname === '/'} logo={logo} />
        <main>{children}</main>
        <Footer
          socials={socials}
          telNumber={telNumber}
        />
        <ContactModal
          socials={socials}
          telNumber={telNumber}
          plan={plan}
          price={price}
          address={address}
          coordinates={[coordinatesX, coordinatesY]}
        />
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

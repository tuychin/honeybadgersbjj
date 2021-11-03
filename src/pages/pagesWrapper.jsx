import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { Provider } from 'react-redux';
import {
  styled,
  createTheme,
  ThemeProvider,
  responsiveFontSizes,
} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import store from '../store';

import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactModal from '../components/ContactModal';

let theme = createTheme({
  palette: {
    mode: 'dark',
    common: {
      black: '#222831',
      white: '#EEEEEE',
    },
    background: {
      default: '#222831',
      paper: '#393E46',
    },
    text: {
      primary: '#EEEEEE',
      secondary: '#222831',
    },
    primary: {
      light: '#FFD56B',
      main: '#FFD56B',
      dark: '#FFD56B',
      contrastText: '#222831',
    },
    secondary: {
      light: '#393E46',
      main: '#393E46',
      dark: '#393E46',
      contrastText: '#EEEEEE',
    },
  },
  typography: {
    fontFamily: 'Montserrat, Roboto, sans-serif',
    fontWeight: 500,
    button: {
      fontFamily: 'Montserrat, Roboto, sans-serif',
      fontWeight: 700,
    },
    subtitle1: {
      fontFamily: 'Montserrat, Roboto, sans-serif',
      fontWeight: 700,
    },
    h1: {
      fontFamily: 'Oswald, Roboto, sans-serif',
      fontWeight: 700,
    },
    h2: {
      fontFamily: 'Oswald, Roboto, sans-serif',
      fontWeight: 700,
    },
    h3: {
      fontFamily: 'Oswald, Roboto, sans-serif',
      fontWeight: 700,
    },
    h4: {
      fontFamily: 'Oswald, Roboto, sans-serif',
      fontWeight: 700,
    },
    h5: {
      fontFamily: 'Oswald, Roboto, sans-serif',
      fontWeight: 700,
    },
    h6: {
      fontFamily: 'Oswald, Roboto, sans-serif',
      fontWeight: 700,
    },
  },
});

theme = responsiveFontSizes(theme);

const StyledWrapper = styled('div')(() => ({
  display: 'grid',
  gridTemplateRows: 'auto 1fr auto',
  position: 'relative',
  minHeight: '100vh',
  color: theme.palette.text.primary,
  backgroundColor: theme.palette.background.default,
}));

const AppWraper = ({ children }) => (
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
        {children}
      </StyledWrapper>
    </ThemeProvider>
  </Provider>
);

AppWraper.propTypes = {
  children: PropTypes.element.isRequired,
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

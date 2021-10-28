import * as React from 'react';
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
  position: 'relative',
  color: theme.palette.text.primary,
  backgroundColor: theme.palette.background.default,
}));

export const wrapPages = ({ element }) => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <StyledWrapper>
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
        <Header />
        {element}
      </StyledWrapper>
    </ThemeProvider>
  </Provider>
);

export default wrapPages;

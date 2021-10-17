import * as React from 'react';
import {Helmet} from 'react-helmet';
import {styled, createTheme, ThemeProvider} from '@mui/material/styles';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';

import Header from '../components/Header';

const theme = createTheme({
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
      light: '#00ADB5',
      main: '#00ADB5',
      dark: '#00ADB5',
      contrastText: '#EEEEEE',
    },
    secondary: {
      light: '#393E46',
      main: '#393E46',
      dark: '#393E46',
      contrastText: '#EEEEEE',
    },
  },
  typography: {
    fontFamily: [
      'Oswald',
      '"Helvetica Neue"',
      'Roboto',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    fontFamily: '"Helvetica Neue", Roboto, sans-serif',
    h1: {
      fontFamily: 'Oswald, Roboto, sans-serif',
    },
    h2: {
      fontFamily: 'Oswald, Roboto, sans-serif',
    },
    h3: {
      fontFamily: 'Oswald, Roboto, sans-serif',
    },
    h4: {
      fontFamily: 'Oswald, Roboto, sans-serif',
    },
    h5: {
      fontFamily: 'Oswald, Roboto, sans-serif',
    },
    h6: {
      fontFamily: 'Oswald, Roboto, sans-serif',
    },
  },
});

const StyledWrapper = styled('div')(({theme}) => ({
  position: 'relative',
  minWidth: '100vh',
  minHeight: '100vh',
  paddingTop: 70,
  color: theme.palette.text.primary,
  backgroundColor: theme.palette.background.default,
}));

export const wrapPages = ({element}) => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <StyledWrapper>
      <Container>
        <Helmet
          title="Honey badgers BJJ team"
          meta={[
            {"name": "description", "content": "Тренировки по BJJ в Москве"}
          ]}
          link={[
            {"rel": "preconnect", "href": "https://fonts.googleapis.com"},
            {"rel": "preconnect", "href": "https://fonts.gstatic.com", "crossorigin": true},
            {"rel": "stylesheet", "href": "https://fonts.googleapis.com/css2?family=Oswald:wght@300;500;700&display=swap"},
            {"rel": "stylesheet", "href": "https://fonts.googleapis.com/icon?family=Material+Icons"}
          ]}
        />
        <Header />
        {element}
      </Container>
    </StyledWrapper>
  </ThemeProvider>
);

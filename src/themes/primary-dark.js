import {
  createTheme,
  responsiveFontSizes,
} from '@mui/material/styles';

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

export default responsiveFontSizes(theme);
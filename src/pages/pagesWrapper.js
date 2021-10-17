import * as React from 'react';
import {Helmet} from 'react-helmet';
import {styled, createTheme, ThemeProvider} from '@mui/material/styles';

import 'normalize.css';

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
});

const StyleWrapper = styled('div')(
  ({theme}) => `
    color: ${theme.palette.text.primary};
    background-color: ${theme.palette.background.default};
  `,
);

export const wrapPages = ({element}) => (
  <ThemeProvider theme={theme}>
    <StyleWrapper>
      <Helmet
        title="Honey badgers BJJ team"
        meta={[
          {"name": "description", "content": "Тренировки по BJJ в Москве"}
        ]}
        link={[
          {"rel": "preconnect", "href": "https://fonts.googleapis.com"},
          {"rel": "preconnect", "href": "https://fonts.gstatic.com", "crossorigin": true},
          {"rel": "stylesheet", "href": "https://fonts.googleapis.com/css2?family=Oswald:wght@300;500;700&family=Roboto:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap"},
          {"rel": "stylesheet", "href": "https://fonts.googleapis.com/icon?family=Material+Icons"}
        ]}
      />
      {element}
    </StyleWrapper>
  </ThemeProvider>
);

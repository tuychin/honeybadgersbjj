/* eslint-disable react/jsx-filename-extension */
const React = require('react');
const { Provider } = require('react-redux');
const { Helmet } = require('react-helmet');
const { ThemeProvider } = require('@mui/material/styles');
const CssBaseline = require('@mui/material/CssBaseline');
const { createStore } = require('./src/store');
const theme = require('./src/themes/primary-dark');

const store = createStore();

exports.wrapRootElement = ({ element }) => (
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
      {element}
    </ThemeProvider>
  </Provider>
);

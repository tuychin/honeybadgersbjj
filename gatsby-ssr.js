/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { Helmet } from 'react-helmet';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import StoreProviderWrapper from './src/store/StoreProviderWrapper';
import theme from './src/themes/primary-dark';

export const wrapRootElement = ({ element }) => (
  <StoreProviderWrapper>
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
  </StoreProviderWrapper>
);

export default wrapRootElement;

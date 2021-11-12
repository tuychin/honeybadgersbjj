/* eslint-disable react/jsx-filename-extension */
import React from 'react';

import StoreProviderWrapper from './src/store/StoreProviderWrapper';
import Layout from './src/layout';

export const wrapPageElement = ({ element, props }) => (
  <Layout path={props.location.path}>
    {element}
  </Layout>
);

export const wrapRootElement = ({ element }) => (
  <StoreProviderWrapper>
    {element}
  </StoreProviderWrapper>
);

export default { wrapPageElement, wrapRootElement };

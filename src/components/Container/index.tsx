import React from 'react';
import './index.scss';
import Helmet from 'react-helmet';

export const Container = ({ children }) => (
  <>
    <Helmet
      htmlAttributes={{
        dir: 'rtl',
      }}
    />
      {children}
  </>
)
import React from 'react';

import { AppFooter } from './AppFooter';
import AppHeader from './AppHeader';

const Layout = ({ children }) => {
  return (
    <>
      <AppHeader />
      {children}
      <AppFooter />
    </>
  )
}

export default Layout
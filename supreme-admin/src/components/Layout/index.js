import React from 'react';
import Header from '../Header';

/**
* @author
* @function Layout
**/

export const Layout = (props) => {
  return(
    <>
        <Header />
        {props.children}
    </>
   )

 }

export default Layout; 